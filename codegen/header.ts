/* eslint-disable */
import * as fs from "fs";
import * as path from "path";
const pluginOverride = process.env.VENGINE_NATIVE_PLUGIN_OVERRIDE ?? "";
const usePluginOverride = pluginOverride.length > 0;
if(usePluginOverride && !fs.existsSync(pluginOverride)) {
  throw new Error("Native plugin override set, but does not exist");
}
const possiblePaths = [
  "./bin/addon-" + process.platform + ".node",
  "../bin/addon-" + process.platform + ".node",
  "../../bin/addon-" + process.platform + ".node"
]
const addonPath = possiblePaths.find((x) => fs.existsSync(path.join(__dirname, x))) ?? (process.platform + ".node");
const native = require(usePluginOverride ? pluginOverride : addonPath);

if(!native){
  throw new Error("Failed loading native plugin");
}

const uniqueSymbol_VEngine_MediaInterfaceSymbol = Symbol();
export type MediaInterface = bigint & { [uniqueSymbol_VEngine_MediaInterfaceSymbol]: typeof uniqueSymbol_VEngine_MediaInterfaceSymbol };

const uniqueSymbol_VEngine_JoystickInterfaceSymbol = Symbol();
export type JoystickInterface = bigint & { [uniqueSymbol_VEngine_JoystickInterfaceSymbol]: typeof uniqueSymbol_VEngine_JoystickInterfaceSymbol };

const uniqueSymbol_VEngine_KeyboardInterfaceSymbol = Symbol();
export type KeyboardInterface = bigint & { [uniqueSymbol_VEngine_KeyboardInterfaceSymbol]: typeof uniqueSymbol_VEngine_KeyboardInterfaceSymbol };

const uniqueSymbol_VEngine_MouseInterfaceSymbol = Symbol();
export type MouseInterface = bigint & { [uniqueSymbol_VEngine_MouseInterfaceSymbol]: typeof uniqueSymbol_VEngine_MouseInterfaceSymbol };

const uniqueSymbol_VEngine_Object3dInfoInterfaceSymbol = Symbol();
export type Object3dInfoInterface = bigint & { [uniqueSymbol_VEngine_Object3dInfoInterfaceSymbol]: typeof uniqueSymbol_VEngine_Object3dInfoInterfaceSymbol };

const uniqueSymbol_VEngine_ComputeStageInterfaceSymbol = Symbol();
export type ComputeStageInterface = bigint & { [uniqueSymbol_VEngine_ComputeStageInterfaceSymbol]: typeof uniqueSymbol_VEngine_ComputeStageInterfaceSymbol };

const uniqueSymbol_VEngine_DescriptorSetInterfaceSymbol = Symbol();
export type DescriptorSetInterface = bigint & { [uniqueSymbol_VEngine_DescriptorSetInterfaceSymbol]: typeof uniqueSymbol_VEngine_DescriptorSetInterfaceSymbol };

const uniqueSymbol_VEngine_DescriptorSetLayoutInterfaceSymbol = Symbol();
export type DescriptorSetLayoutInterface = bigint & { [uniqueSymbol_VEngine_DescriptorSetLayoutInterfaceSymbol]: typeof uniqueSymbol_VEngine_DescriptorSetLayoutInterfaceSymbol };

const uniqueSymbol_VEngine_GenericBufferInterfaceSymbol = Symbol();
export type GenericBufferInterface = bigint & { [uniqueSymbol_VEngine_GenericBufferInterfaceSymbol]: typeof uniqueSymbol_VEngine_GenericBufferInterfaceSymbol };

const uniqueSymbol_VEngine_ImageInterfaceSymbol = Symbol();
export type ImageInterface = bigint & { [uniqueSymbol_VEngine_ImageInterfaceSymbol]: typeof uniqueSymbol_VEngine_ImageInterfaceSymbol };

const uniqueSymbol_VEngine_RenderStageInterfaceSymbol = Symbol();
export type RenderStageInterface = bigint & { [uniqueSymbol_VEngine_RenderStageInterfaceSymbol]: typeof uniqueSymbol_VEngine_RenderStageInterfaceSymbol };

const uniqueSymbol_VEngine_ShaderModuleInterfaceSymbol = Symbol();
export type ShaderModuleInterface = bigint & { [uniqueSymbol_VEngine_ShaderModuleInterfaceSymbol]: typeof uniqueSymbol_VEngine_ShaderModuleInterfaceSymbol };

const uniqueSymbol_VEngine_ToolkitInterfaceSymbol = Symbol();
export type ToolkitInterface = bigint & { [uniqueSymbol_VEngine_ToolkitInterfaceSymbol]: typeof uniqueSymbol_VEngine_ToolkitInterfaceSymbol };

const uniqueSymbol_VEngine_SwapChainOutputInterfaceSymbol = Symbol();
export type SwapChainOutputInterface = bigint & { [uniqueSymbol_VEngine_SwapChainOutputInterfaceSymbol]: typeof uniqueSymbol_VEngine_SwapChainOutputInterfaceSymbol };

const uniqueSymbol_VEngine_AttachmentInterfaceSymbol = Symbol();
export type AttachmentInterface = bigint & { [uniqueSymbol_VEngine_AttachmentInterfaceSymbol]: typeof uniqueSymbol_VEngine_AttachmentInterfaceSymbol };

const uniqueSymbol_VEngine_SemaphoreInterfaceSymbol = Symbol();
export type SemaphoreInterface = bigint & { [uniqueSymbol_VEngine_SemaphoreInterfaceSymbol]: typeof uniqueSymbol_VEngine_SemaphoreInterfaceSymbol };

const uniqueSymbol_VEngine_Object3dInfoFactoryInterfaceSymbol = Symbol();
export type Object3dInfoFactoryInterface = bigint & { [uniqueSymbol_VEngine_Object3dInfoFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_Object3dInfoFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_ShaderFactoryInterfaceSymbol = Symbol();
export type ShaderFactoryInterface = bigint & { [uniqueSymbol_VEngine_ShaderFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_ShaderFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_DescriptorSetLayoutFactoryInterfaceSymbol = Symbol();
export type DescriptorSetLayoutFactoryInterface = bigint & { [uniqueSymbol_VEngine_DescriptorSetLayoutFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_DescriptorSetLayoutFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_RenderStageFactoryInterfaceSymbol = Symbol();
export type RenderStageFactoryInterface = bigint & { [uniqueSymbol_VEngine_RenderStageFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_RenderStageFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_ComputeStageFactoryInterfaceSymbol = Symbol();
export type ComputeStageFactoryInterface = bigint & { [uniqueSymbol_VEngine_ComputeStageFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_ComputeStageFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_BufferFactoryInterfaceSymbol = Symbol();
export type BufferFactoryInterface = bigint & { [uniqueSymbol_VEngine_BufferFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_BufferFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_ImageFactoryInterfaceSymbol = Symbol();
export type ImageFactoryInterface = bigint & { [uniqueSymbol_VEngine_ImageFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_ImageFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_SwapChainOutputFactoryInterfaceSymbol = Symbol();
export type SwapChainOutputFactoryInterface = bigint & { [uniqueSymbol_VEngine_SwapChainOutputFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_SwapChainOutputFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_SemaphoreFactoryInterfaceSymbol = Symbol();
export type SemaphoreFactoryInterface = bigint & { [uniqueSymbol_VEngine_SemaphoreFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_SemaphoreFactoryInterfaceSymbol };

