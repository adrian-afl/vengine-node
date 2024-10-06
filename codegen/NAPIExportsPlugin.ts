/* eslint-disable no-console */
import * as fs from "fs";
import * as path from "path";

import { CodeGenFile, CodeGenPlugin } from "./generate";
import {NAPIAutoGenerateBindingPlugin} from "./NAPIAutoGenerateBindingPlugin";

interface ExportedFunction {
  name: string;
  declaration: string;
  callArgs: string;
}

export class NAPIExportsPlugin implements CodeGenPlugin {

  public constructor(private readonly bindingGenPlugin:NAPIAutoGenerateBindingPlugin) {

  }


  public name = "NAPIExports";
  public scanDirs = ["native/NodeAPI"];

  private nativePath = path.resolve("native");
  private nodePath = path.resolve("node");

  private exportedFunctions: ExportedFunction[] = [];

  public supportsFile(path: string): boolean {
    return !path.includes("/.vs/") && !path.includes("\\.vs\\")
      && (path.endsWith(".cpp")  || path.endsWith(".h"))
  }

  public handleFile(file: CodeGenFile): void {
    const exportLines = file.lines.filter((x) =>
      x.includes("@ExportFunction")
    );
    for (const exportLine of exportLines) {
      console.log(`Found export: ${exportLine}`);
      const refined = exportLine.replace(/^\/\/.*?@ExportFunction/, "").trim();
      // refined in format: updateDynamicsWorld = (time: number, subSteps: number): void
      const nameDeclarationArr = refined.split("=").map((x) => x.trim());
      const name = nameDeclarationArr[0];
      const declaration = nameDeclarationArr[1];
      const callArgsPart = [...(declaration.match(/\((.*?)\)/) ?? [])][1] + ",";
      const callArgs = [...callArgsPart.matchAll(/(.*?):.*?,/g)].map((x) =>
        x[1].trim()
      );
      this.exportedFunctions.push({
        name,
        declaration,
        callArgs: callArgs.join(", "),
      });
    }
  }

  public finish(): void {

    const nodeLines: string[] = [
      fs.readFileSync(path.join(__dirname, "header.ts")).toString("utf-8"),
    ];
    const nativeLines: string[] = [];

    for (const func of this.exportedFunctions) {
      nativeLines.push(
        `exports["${func.name}"] = Napi::Function::New(env, ${func.name}, "${func.name}");`
      );
      nodeLines.push(
        `export const ${func.name} = ${func.declaration} => native.${func.name}(${func.callArgs});`
      );
    }

    fs.writeFileSync(
      path.join(this.nativePath, "nativeExports.h"),
      nativeLines.join("\n")
    );

    nodeLines.push(this.bindingGenPlugin.generateTSClasses());

    fs.writeFileSync(path.join(this.nodePath, "native.ts"), nodeLines.join("\n"));
  }
}
