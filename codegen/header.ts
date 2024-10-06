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

export enum VEngineShaderModuleType {
  Vertex = 1,
  Fragment = 2,
  Compute = 3
}

export enum VEngineCullMode {
  CullModeNone = 1,
  CullModeFront = 2,
  CullModeBack = 3
}

export enum VEngineAttachmentBlending {
  None = 1,
  Additive = 2,
  Alpha = 3
}

export enum VEngineBufferType {
  BufferTypeUniform = 1,
  BufferTypeStorage = 2,
  BufferTypeTransferSource = 3,
  BufferTypeTransferDestination = 4
}

export enum VEngineImageUsage {
  ColorAttachment = 1,
  Sampled = 2,
  Storage = 4,
  Depth = 8,
  TransferDestination = 16
}

export enum VEngineImageAspect {
  ColorAspect = 1,
  DepthAspect = 2
}

export enum VEngineImageLayout {
  Preinitialized = 1,
  Undefined = 2
}

export enum VEngineDescriptorSetFieldType {
  FieldTypeSampler = 1,
  FieldTypeUniformBuffer = 2,
  FieldTypeStorageBuffer = 3,
  FieldTypeStorageImage = 4
}

export enum VEngineDescriptorSetFieldStage {
  FieldStageAll = 1,
  FieldStageAllGraphics = 2,
  FieldStageCompute = 3,
  FieldStageVertex = 4,
  FieldStageFragment = 5
}

export enum VEngineImageFormat {
  R8inorm = 1,
  RG8inorm = 2,
  RGBA8inorm = 3,

  R8unorm = 4,
  RG8unorm = 5,
  RGBA8unorm = 6,

  R16i = 7,
  RG16i = 8,
  RGBA16i = 9,

  R16u = 10,
  RG16u = 11,
  RGBA16u = 12,

  R16f = 13,
  RG16f = 14,
  RGBA16f = 15,

  R32i = 16,
  RG32i = 17,
  RGBA32i = 18,

  R32u = 19,
  RG32u = 20,
  RGBA32u = 21,

  R32f = 22,
  RG32f = 23,
  RGBA32f = 24,

  Depth16u = 25,
  Depth32f = 26,

  RGBA8srgb = 27,
  RGB5unormPack16 = 28,
  RGBA8snorm = 29,
  ABGR8unormPack32 = 30,
  ABGR8snormPack32 = 31,
  ABGR8srgbPack32 = 32,
  ARGB10unormPack32 = 33,
  ABGR10unormPack32 = 34,
  RGBA16unorm = 35,
  RGBA16snorm = 36,
  BGR11ufloatPack32 = 37,
  BGR5unormPack16 = 38,
  BGRA8snorm = 39,
  BGRA8unorm = 40,
  A1RGB5unormPack16 = 41,
  RGBA4unormPack16 = 42,
  BGRA4unormPack16 = 43,
  RGB4A1unormPack16 = 44,
  BGR5A1unormPack16 = 45
}

const uniqueSymbol_VEngine_MediaInterfaceSymbol = Symbol();
export type MediaInterfacePointer = bigint & { [uniqueSymbol_VEngine_MediaInterfaceSymbol]: typeof uniqueSymbol_VEngine_MediaInterfaceSymbol };

const uniqueSymbol_VEngine_JoystickInterfaceSymbol = Symbol();
export type JoystickInterfacePointer = bigint & { [uniqueSymbol_VEngine_JoystickInterfaceSymbol]: typeof uniqueSymbol_VEngine_JoystickInterfaceSymbol };

const uniqueSymbol_VEngine_KeyboardInterfaceSymbol = Symbol();
export type KeyboardInterfacePointer = bigint & { [uniqueSymbol_VEngine_KeyboardInterfaceSymbol]: typeof uniqueSymbol_VEngine_KeyboardInterfaceSymbol };

const uniqueSymbol_VEngine_MouseInterfaceSymbol = Symbol();
export type MouseInterfacePointer = bigint & { [uniqueSymbol_VEngine_MouseInterfaceSymbol]: typeof uniqueSymbol_VEngine_MouseInterfaceSymbol };

const uniqueSymbol_VEngine_Object3dInfoInterfaceSymbol = Symbol();
export type Object3dInfoInterfacePointer = bigint & { [uniqueSymbol_VEngine_Object3dInfoInterfaceSymbol]: typeof uniqueSymbol_VEngine_Object3dInfoInterfaceSymbol };

const uniqueSymbol_VEngine_ComputeStageInterfaceSymbol = Symbol();
export type ComputeStageInterfacePointer = bigint & { [uniqueSymbol_VEngine_ComputeStageInterfaceSymbol]: typeof uniqueSymbol_VEngine_ComputeStageInterfaceSymbol };

const uniqueSymbol_VEngine_DescriptorSetInterfaceSymbol = Symbol();
export type DescriptorSetInterfacePointer = bigint & { [uniqueSymbol_VEngine_DescriptorSetInterfaceSymbol]: typeof uniqueSymbol_VEngine_DescriptorSetInterfaceSymbol };

const uniqueSymbol_VEngine_DescriptorSetLayoutInterfaceSymbol = Symbol();
export type DescriptorSetLayoutInterfacePointer = bigint & { [uniqueSymbol_VEngine_DescriptorSetLayoutInterfaceSymbol]: typeof uniqueSymbol_VEngine_DescriptorSetLayoutInterfaceSymbol };

const uniqueSymbol_VEngine_GenericBufferInterfaceSymbol = Symbol();
export type GenericBufferInterfacePointer = bigint & { [uniqueSymbol_VEngine_GenericBufferInterfaceSymbol]: typeof uniqueSymbol_VEngine_GenericBufferInterfaceSymbol };

const uniqueSymbol_VEngine_ImageInterfaceSymbol = Symbol();
export type ImageInterfacePointer = bigint & { [uniqueSymbol_VEngine_ImageInterfaceSymbol]: typeof uniqueSymbol_VEngine_ImageInterfaceSymbol };

const uniqueSymbol_VEngine_RenderStageInterfaceSymbol = Symbol();
export type RenderStageInterfacePointer = bigint & { [uniqueSymbol_VEngine_RenderStageInterfaceSymbol]: typeof uniqueSymbol_VEngine_RenderStageInterfaceSymbol };

const uniqueSymbol_VEngine_ShaderModuleInterfaceSymbol = Symbol();
export type ShaderModuleInterfacePointer = bigint & { [uniqueSymbol_VEngine_ShaderModuleInterfaceSymbol]: typeof uniqueSymbol_VEngine_ShaderModuleInterfaceSymbol };

const uniqueSymbol_VEngine_ToolkitInterfaceSymbol = Symbol();
export type ToolkitInterfacePointer = bigint & { [uniqueSymbol_VEngine_ToolkitInterfaceSymbol]: typeof uniqueSymbol_VEngine_ToolkitInterfaceSymbol };

const uniqueSymbol_VEngine_SwapChainOutputInterfaceSymbol = Symbol();
export type SwapChainOutputInterfacePointer = bigint & { [uniqueSymbol_VEngine_SwapChainOutputInterfaceSymbol]: typeof uniqueSymbol_VEngine_SwapChainOutputInterfaceSymbol };

const uniqueSymbol_VEngine_AttachmentInterfaceSymbol = Symbol();
export type AttachmentInterfacePointer = bigint & { [uniqueSymbol_VEngine_AttachmentInterfaceSymbol]: typeof uniqueSymbol_VEngine_AttachmentInterfaceSymbol };

const uniqueSymbol_VEngine_SemaphoreInterfaceSymbol = Symbol();
export type SemaphoreInterfacePointer = bigint & { [uniqueSymbol_VEngine_SemaphoreInterfaceSymbol]: typeof uniqueSymbol_VEngine_SemaphoreInterfaceSymbol };

const uniqueSymbol_VEngine_Object3dInfoFactoryInterfaceSymbol = Symbol();
export type Object3dInfoFactoryInterfacePointer = bigint & { [uniqueSymbol_VEngine_Object3dInfoFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_Object3dInfoFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_ShaderFactoryInterfaceSymbol = Symbol();
export type ShaderFactoryInterfacePointer = bigint & { [uniqueSymbol_VEngine_ShaderFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_ShaderFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_DescriptorSetLayoutFactoryInterfaceSymbol = Symbol();
export type DescriptorSetLayoutFactoryInterfacePointer = bigint & { [uniqueSymbol_VEngine_DescriptorSetLayoutFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_DescriptorSetLayoutFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_RenderStageFactoryInterfaceSymbol = Symbol();
export type RenderStageFactoryInterfacePointer = bigint & { [uniqueSymbol_VEngine_RenderStageFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_RenderStageFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_ComputeStageFactoryInterfaceSymbol = Symbol();
export type ComputeStageFactoryInterfacePointer = bigint & { [uniqueSymbol_VEngine_ComputeStageFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_ComputeStageFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_BufferFactoryInterfaceSymbol = Symbol();
export type BufferFactoryInterfacePointer = bigint & { [uniqueSymbol_VEngine_BufferFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_BufferFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_ImageFactoryInterfaceSymbol = Symbol();
export type ImageFactoryInterfacePointer = bigint & { [uniqueSymbol_VEngine_ImageFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_ImageFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_SwapChainOutputFactoryInterfaceSymbol = Symbol();
export type SwapChainOutputFactoryInterfacePointer = bigint & { [uniqueSymbol_VEngine_SwapChainOutputFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_SwapChainOutputFactoryInterfaceSymbol };

const uniqueSymbol_VEngine_SemaphoreFactoryInterfaceSymbol = Symbol();
export type SemaphoreFactoryInterfacePointer = bigint & { [uniqueSymbol_VEngine_SemaphoreFactoryInterfaceSymbol]: typeof uniqueSymbol_VEngine_SemaphoreFactoryInterfaceSymbol };

type BindFirstParam<F> = F extends (first: any, ...rest: infer R) => infer ReturnType
  ? (...args: R) => ReturnType
  : never;

type ChangeReturnType<F, NewReturnType> = F extends (...args: infer R) => any
  ? (...args: R) => NewReturnType
  : never;
