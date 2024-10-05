/* eslint-disable no-console */
import * as fs from "fs";
import * as path from "path";

import { CodeGenFile, CodeGenPlugin } from "./generate";

interface ExportedFunction {
  name: string;
  declaration: string;
  callArgs: string;
}

function camelize(str: string): string {
  return str[0].toLowerCase() + str.slice(1)
}

const tsTypeMap = {
  'int': "number",
  'uint64_t': "number",
  'uint32_t': "number",
  'size_t': "number",
  'float': "number",
  'double': "number",
  'void*': "ArrayBuffer",
  'void': "void",
  // 'void**': "ArrayBuffer", // TRICKY actually it shouldnt be allowed, the "map" should return a array buffer, not take it
  'std::string': "string",
  'bool': "boolean",
  'ClearColorFloatsArray': "number[]"
};

const convertersNodeToNativeSingular = {
  'float': "asFloat",
  'int': "asInt32",
  'uint64_t': "asUint64",
  'uint32_t': "asUint32",
  'size_t': "asUint32",
  'void*': "asVoidBufferPointer",
  'std::string': "asString",
  'bool': "asBool",
  'ClearColorFloatsArray': 'asClearColor4Float'
};

const convertersNativeToNodeSingular = {
  'bool': "newBoolean",
  'double': "newNumber",
  'float': "newNumber",
  'uint64_t': "newNumber",
  'size_t': "newNumber"
};


const enumNames = [
  'VEngineShaderModuleType', 'VEngineCullMode', 'VEngineAttachmentBlending', 'VEngineBufferType',
  'VEngineImageUsage', 'VEngineImageAspect', 'VEngineImageLayout', 'VEngineDescriptorSetFieldType',
  'VEngineDescriptorSetFieldStage', 'VEngineImageFormat'
]

function getEnumSingularConverter(enumName: string){
  return `(${enumName})asInt32`
}

function getEnumArrayConverter(enumName: string){
  return `(std::vector<${enumName}>)asVectorOfInt32`
}

const convertersNodeToNativeArray = {
  'float': "asVectorOfFloat",
  'bool': "asVectorOfBool",
};

export class NAPIAutoGenerateBindingPlugin implements CodeGenPlugin {
  public name = "NAPIAutoGenerateBinding";
  public scanDirs = ["native/Interface"];

  private nativePath = path.resolve("native/NodeAPI");
  private nodePath = path.resolve("node");

  private createdDefinitions: string[] = [];

  public supportsFile(path: string): boolean {
    return !path.includes("/.vs/") && !path.includes("\\.vs\\")
      && (path.endsWith(".cpp")  || path.endsWith(".h"))
  }

  private types: string[] = [];

  public handleFile(file: CodeGenFile): void {
    const classLines = file.lines.filter((x) => {
        const trimmed = x.trim();
        return trimmed.startsWith("class ") && !trimmed.endsWith(";");
      }
    );
    const functionLines = file.lines.filter((x) => {
        const trimmed = x.trim();
        return trimmed.startsWith("virtual ") && trimmed.endsWith(" = 0;");
      }
    );
    if(classLines.length === 1){
      const match = classLines[0].match(/class (.*)/)
      if(!match){
        return;
      }
      const className = match[1];
      console.log(`Found class ${className}`);

      for(const functionLine of functionLines){
        if(functionLine.includes("napi-skip")){
          continue;
        }
        const match = functionLine.match(/virtual (.*) = 0;/)
        if(!match){
          throw new Error("Sumtink wronk 1");
        }
        const functionDeclaration = match[1];
        const returnTypeArr = functionDeclaration.split(" ", 1);

        let returnType = returnTypeArr[0];
        const returnTypeIsVector = returnType.includes("std::vector");
        if(returnTypeIsVector){
            const match = returnType.match(/std::vector<(.*)>/);
            if(!match){
              throw new Error("Sumtink wronk 1.1");
            }
          returnType = match[1];
        }
        const returnTypeIsPointer = returnType.endsWith("*");
        if(returnTypeIsPointer){
          returnType = returnType.slice(0, -1)
        }

        if(!this.types.includes(returnType))this.types.push(returnType);
        // cut off the return type
        const declarationMatch = functionDeclaration.substring(returnTypeArr[0].length).trim().match(/(.*?)\((.*)\)/);
        if(!declarationMatch){
          throw new Error("Sumtink wronk 2");
        }
        const functionName = declarationMatch[1];
        const parameters = declarationMatch[2].split(',').map((x) => x.trim()).filter((x) => x.length > 0);
        if(functionName === "getAttachment"){
          console.log({functionName, parameters});
        }
        const parametersParsed = parameters.map((x) => {
          const parts = x.split(" ");
          if(parts.length !== 2){
            console.log({functionName, parameters});
            throw new Error("Sumtink wronk 3");
          }
          const isVector = parts[0].includes("std::vector");
          if(isVector){
            const match = parts[0].match(/std::vector<(.*)>/);
            if(!match){
              throw new Error("Sumtink wronk 4");
            }
            parts[0] = match[1];
          }
          const isPointer = parts[0].endsWith("*");
          if(isPointer){
            parts[0] = parts[0].slice(0, -1)
          }
          return {type: parts[0], name: parts[1], isVector, isPointer};
        })
        // console.log(`Found function declaration ${functionName}`);

        // OK now time to generate the binding

        const exposedFunctionName = `${camelize(className)}_${functionName}`;
        const tsParamsList = parametersParsed.map((param) => {
          const mapped = tsTypeMap[param.type as keyof typeof tsTypeMap] ?? param.type;
          if(param.isVector){
            return `${param.name}: ${mapped}[]`;
          } else {
            return `${param.name}: ${mapped}`;
          }
        });
        tsParamsList.unshift(`instance: ${className}`)

        const classReader = `auto instance = (${className}*)castBigIntToVoidPointer(info[arg++]);`

        const nativeParamsReaders = parametersParsed.map((param) => {
          if(!param.isVector && !param.isPointer) {
            const converter = enumNames.includes(param.type)
              ? getEnumSingularConverter(param.type)
              : convertersNodeToNativeSingular[param.type as keyof typeof convertersNodeToNativeSingular];
            if(!converter){
              console.log(param);
              throw new Error("Sumtink wronk 5.1");
            }
            return `auto param_${param.name} = ${converter}(info[arg++]);`;
          }
          if(!param.isVector && param.isPointer) {
            return `auto param_${param.name} = (${param.type}*)castBigIntToVoidPointer(info[arg++]);`;
          }
          if(param.isVector && !param.isPointer) {
            const converter = enumNames.includes(param.type)
              ? getEnumArrayConverter(param.type)
              : convertersNodeToNativeArray[param.type as keyof typeof convertersNodeToNativeArray];
            if(!converter){
              console.log(param);
              throw new Error("Sumtink wronk 5.3");
            }
            return `auto param_${param.name} = ${converter}(info[arg++]);`;
          }
          if(param.isVector && param.isPointer) {
            return `auto param_${param.name} = asVectorOfPointers<${param.type}>(info[arg++]);`;
          }
        }).join("\n");

        const callString = `${returnType === 'void' ? '' : `auto result = `}instance->${functionName}(${
          parametersParsed.map((x) => "param_" + x.name).join(', ')
        });`

        let nativeReturnString = 'return env.Undefined();'
        let tsReturnType = 'void';
        if(returnType !== 'void'){
          if(!returnTypeIsVector && returnTypeIsPointer){
            nativeReturnString = `return newPointer(result);`
            tsReturnType = returnType;
          }
          if(!returnTypeIsVector && !returnTypeIsPointer){
            if(enumNames.includes(returnType)){
              nativeReturnString = `return newNumber(result);`
              tsReturnType = returnType;
            } else {
              const converter = convertersNativeToNodeSingular[returnType as keyof typeof convertersNativeToNodeSingular];
              if(!converter){
                console.log(returnType);
                throw new Error("Sumtink wronk 5.x");
              }
              const tsType = tsTypeMap[returnType as keyof typeof tsTypeMap]
              if(!tsType){
                console.log(returnType);
                throw new Error("Sumtink wronk 5.x2");
              }
              nativeReturnString = `return ${converter}(result);`
              tsReturnType = tsType;
            }
          }
          if(returnTypeIsVector && returnTypeIsPointer){
            const arrInit = `auto resultArray = Napi::Array::New(env);`
            const items = `for(uint32_t arri = 0; arri < result.size(); arri++){
        resultArray.Set(arri, newPointer(result[arri]));
    }`;

            nativeReturnString = `${arrInit};
    ${items}
    return resultArray;`
            tsReturnType = `${returnType}[]`;
          }
          if(returnTypeIsVector && !returnTypeIsPointer){
            const arrInit = `auto resultArray = Napi::Array::New(env);`
            let converter = ''
            if(enumNames.includes(returnType)){
              converter = 'newNumber';
              tsReturnType = `${returnType}[]`;
            } else {
              converter = convertersNativeToNodeSingular[returnType as keyof typeof convertersNativeToNodeSingular];
              if(!converter){
                console.log(returnType);
                throw new Error("Sumtink wronk 5.x");
              }
            }
            const items = `for(uint32_t arri = 0; arri < result.size(); arri++){
        resultArray.Set(arri, ${converter}(result[arri]));
    }`;

            nativeReturnString = `${arrInit}
    ${items}
    return resultArray;`

            const tsType = tsTypeMap[returnType as keyof typeof tsTypeMap]
            if(!tsType){
              console.log(returnType);
              throw new Error("Sumtink wronk 5.x2");
            }
            tsReturnType = `${tsType}[]`;
          }
        }

        const final = `// @ExportFunction ${exposedFunctionName} = (${tsParamsList.join(', ')}): ${tsReturnType}
Napi::Value ${exposedFunctionName}(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    ${nativeParamsReaders}
    
    ${classReader}
    
    ${callString}

    ${nativeReturnString}
};
        `
        this.createdDefinitions.push(final);

      }
    }
  }

  public finish(): void {
    fs.writeFileSync(
      path.join(this.nativePath, "autogeneratedExports.h"),
      this.createdDefinitions.join("\n\n")
    );
  }
}
