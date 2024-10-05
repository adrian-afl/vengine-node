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


export const joystickInterface_getButtonsStatus = (instance: JoystickInterface, index: number): boolean[] => native.joystickInterface_getButtonsStatus(instance, index);
export const joystickInterface_isPresent = (instance: JoystickInterface, index: number): boolean => native.joystickInterface_isPresent(instance, index);
export const joystickInterface_getAxes = (instance: JoystickInterface, index: number): number[] => native.joystickInterface_getAxes(instance, index);
export const keyboardInterface_isKeyDown = (instance: KeyboardInterface, key: number): boolean => native.keyboardInterface_isKeyDown(instance, key);
export const mouseInterface_setCursorMode = (instance: MouseInterface, mode: number): void => native.mouseInterface_setCursorMode(instance, mode);
export const mouseInterface_isButtonPressed = (instance: MouseInterface, button: number): boolean => native.mouseInterface_isButtonPressed(instance, button);
export const attachmentInterface_getImage = (instance: AttachmentInterface): ImageInterface => native.attachmentInterface_getImage(instance);
export const attachmentInterface_getBlending = (instance: AttachmentInterface): VEngineAttachmentBlending => native.attachmentInterface_getBlending(instance);
export const attachmentInterface_isCleared = (instance: AttachmentInterface): boolean => native.attachmentInterface_isCleared(instance);
export const bufferFactoryInterface_build = (instance: BufferFactoryInterface, type: VEngineBufferType, size: number): GenericBufferInterface => native.bufferFactoryInterface_build(instance, type, size);
export const computeStageFactoryInterface_build = (instance: ComputeStageFactoryInterface, shader: ShaderModuleInterface, layouts: DescriptorSetLayoutInterface[]): ComputeStageInterface => native.computeStageFactoryInterface_build(instance, shader, layouts);
export const computeStageInterface_beginRecording = (instance: ComputeStageInterface): void => native.computeStageInterface_beginRecording(instance);
export const computeStageInterface_endRecording = (instance: ComputeStageInterface): void => native.computeStageInterface_endRecording(instance);
export const computeStageInterface_dispatch = (instance: ComputeStageInterface, sets: DescriptorSetInterface[], groupX: number, groupY: number, groupZ: number): void => native.computeStageInterface_dispatch(instance, sets, groupX, groupY, groupZ);
export const computeStageInterface_submit = (instance: ComputeStageInterface, waitSemaphores: SemaphoreInterface[]): void => native.computeStageInterface_submit(instance, waitSemaphores);
export const computeStageInterface_submitNoSemaphores = (instance: ComputeStageInterface, waitSemaphores: SemaphoreInterface[]): void => native.computeStageInterface_submitNoSemaphores(instance, waitSemaphores);
export const computeStageInterface_getSignalSemaphore = (instance: ComputeStageInterface): SemaphoreInterface => native.computeStageInterface_getSignalSemaphore(instance);
export const descriptorSetInterface_bindImageViewSampler = (instance: DescriptorSetInterface, binding: number, img: ImageInterface): void => native.descriptorSetInterface_bindImageViewSampler(instance, binding, img);
export const descriptorSetInterface_bindImageStorage = (instance: DescriptorSetInterface, binding: number, img: ImageInterface): void => native.descriptorSetInterface_bindImageStorage(instance, binding, img);
export const descriptorSetInterface_bindBuffer = (instance: DescriptorSetInterface, binding: number, buffer: GenericBufferInterface): void => native.descriptorSetInterface_bindBuffer(instance, binding, buffer);
export const descriptorSetLayoutFactoryInterface_build = (instance: DescriptorSetLayoutFactoryInterface): DescriptorSetLayoutInterface => native.descriptorSetLayoutFactoryInterface_build(instance);
export const descriptorSetLayoutInterface_addField = (instance: DescriptorSetLayoutInterface, fieldType: VEngineDescriptorSetFieldType, fieldAccesibility: VEngineDescriptorSetFieldStage): void => native.descriptorSetLayoutInterface_addField(instance, fieldType, fieldAccesibility);
export const descriptorSetLayoutInterface_generateDescriptorSet = (instance: DescriptorSetLayoutInterface): DescriptorSetInterface => native.descriptorSetLayoutInterface_generateDescriptorSet(instance);
export const genericBufferInterface_unmap = (instance: GenericBufferInterface): void => native.genericBufferInterface_unmap(instance);
export const genericBufferInterface_getSize = (instance: GenericBufferInterface): number => native.genericBufferInterface_getSize(instance);
export const genericBufferInterface_getType = (instance: GenericBufferInterface): VEngineBufferType => native.genericBufferInterface_getType(instance);
export const imageFactoryInterface_build = (instance: ImageFactoryInterface, width: number, height: number, depth: number, format: VEngineImageFormat, usage: VEngineImageUsage, aspect: VEngineImageAspect, layout: VEngineImageLayout): ImageInterface => native.imageFactoryInterface_build(instance, width, height, depth, format, usage, aspect, layout);
export const imageFactoryInterface_buildMipmapped = (instance: ImageFactoryInterface, width: number, height: number, depth: number, format: VEngineImageFormat, usage: VEngineImageUsage, aspect: VEngineImageAspect, layout: VEngineImageLayout): ImageInterface => native.imageFactoryInterface_buildMipmapped(instance, width, height, depth, format, usage, aspect, layout);
export const imageFactoryInterface_loadFromFile = (instance: ImageFactoryInterface, path: string): ImageInterface => native.imageFactoryInterface_loadFromFile(instance, path);
export const imageFactoryInterface_createFromExistingData = (instance: ImageFactoryInterface, width: number, height: number, channelCount: number, data: void): ImageInterface => native.imageFactoryInterface_createFromExistingData(instance, width, height, channelCount, data);
export const imageFactoryInterface_resolveIsDepthBuffer = (instance: ImageFactoryInterface, format: VEngineImageFormat): boolean => native.imageFactoryInterface_resolveIsDepthBuffer(instance, format);
export const imageInterface_getAttachment = (instance: ImageInterface, blending: VEngineAttachmentBlending, clear: boolean, clearColor: number[], forPresent: boolean): AttachmentInterface => native.imageInterface_getAttachment(instance, blending, clear, clearColor, forPresent);
export const imageInterface_isDepthBuffer = (instance: ImageInterface): boolean => native.imageInterface_isDepthBuffer(instance);
export const imageInterface_regenerateMipmaps = (instance: ImageInterface): void => native.imageInterface_regenerateMipmaps(instance);
export const object3dInfoFactoryInterface_loadFromFile = (instance: Object3dInfoFactoryInterface, path: string): Object3dInfoInterface => native.object3dInfoFactoryInterface_loadFromFile(instance, path);
export const object3dInfoFactoryInterface_loadFromArray = (instance: Object3dInfoFactoryInterface, rawData: number[]): Object3dInfoInterface => native.object3dInfoFactoryInterface_loadFromArray(instance, rawData);
export const object3dInfoFactoryInterface_getFullScreenQuad = (instance: Object3dInfoFactoryInterface): Object3dInfoInterface => native.object3dInfoFactoryInterface_getFullScreenQuad(instance);
export const renderStageFactoryInterface_build = (instance: RenderStageFactoryInterface, width: number, height: number, shaders: ShaderModuleInterface[], layouts: DescriptorSetLayoutInterface[], outputImages: AttachmentInterface[], cullMode: VEngineCullMode): RenderStageInterface => native.renderStageFactoryInterface_build(instance, width, height, shaders, layouts, outputImages, cullMode);
export const renderStageInterface_beginDrawing = (instance: RenderStageInterface): void => native.renderStageInterface_beginDrawing(instance);
export const renderStageInterface_endDrawing = (instance: RenderStageInterface): void => native.renderStageInterface_endDrawing(instance);
export const renderStageInterface_setSets = (instance: RenderStageInterface, sets: DescriptorSetInterface[]): void => native.renderStageInterface_setSets(instance, sets);
export const renderStageInterface_setSet = (instance: RenderStageInterface, index: number, set: DescriptorSetInterface): void => native.renderStageInterface_setSet(instance, index, set);
export const renderStageInterface_drawMesh = (instance: RenderStageInterface, info: Object3dInfoInterface, instances: number): void => native.renderStageInterface_drawMesh(instance, info, instances);
export const renderStageInterface_submit = (instance: RenderStageInterface, waitSemaphores: SemaphoreInterface[]): void => native.renderStageInterface_submit(instance, waitSemaphores);
export const renderStageInterface_submitNoSemaphores = (instance: RenderStageInterface, waitSemaphores: SemaphoreInterface[]): void => native.renderStageInterface_submitNoSemaphores(instance, waitSemaphores);
export const renderStageInterface_copy = (instance: RenderStageInterface): RenderStageInterface => native.renderStageInterface_copy(instance);
export const renderStageInterface_copyWithNewOutput = (instance: RenderStageInterface, outputImages: AttachmentInterface[]): RenderStageInterface => native.renderStageInterface_copyWithNewOutput(instance, outputImages);
export const renderStageInterface_getSignalSemaphore = (instance: RenderStageInterface): SemaphoreInterface => native.renderStageInterface_getSignalSemaphore(instance);
export const semaphoreFactoryInterface_build = (instance: SemaphoreFactoryInterface): SemaphoreInterface => native.semaphoreFactoryInterface_build(instance);
export const shaderFactoryInterface_build = (instance: ShaderFactoryInterface, type: VEngineShaderModuleType, path: string): ShaderModuleInterface => native.shaderFactoryInterface_build(instance, type, path);
export const shaderModuleInterface_getType = (instance: ShaderModuleInterface): VEngineShaderModuleType => native.shaderModuleInterface_getType(instance);
export const swapChainOutputFactoryInterface_build = (instance: SwapChainOutputFactoryInterface, stage: RenderStageInterface): SwapChainOutputInterface => native.swapChainOutputFactoryInterface_build(instance, stage);
export const swapChainOutputInterface_beginDrawing = (instance: SwapChainOutputInterface): void => native.swapChainOutputInterface_beginDrawing(instance);
export const swapChainOutputInterface_endDrawing = (instance: SwapChainOutputInterface): void => native.swapChainOutputInterface_endDrawing(instance);
export const swapChainOutputInterface_drawMesh = (instance: SwapChainOutputInterface, info: Object3dInfoInterface, instances: number): void => native.swapChainOutputInterface_drawMesh(instance, info, instances);
export const swapChainOutputInterface_submit = (instance: SwapChainOutputInterface, waitSemaphores: SemaphoreInterface[]): void => native.swapChainOutputInterface_submit(instance, waitSemaphores);
export const swapChainOutputInterface_getSignalSemaphores = (instance: SwapChainOutputInterface): SemaphoreInterface[] => native.swapChainOutputInterface_getSignalSemaphores(instance);
export const toolkitInterface_shouldCloseWindow = (instance: ToolkitInterface): boolean => native.toolkitInterface_shouldCloseWindow(instance);
export const toolkitInterface_poolEvents = (instance: ToolkitInterface): void => native.toolkitInterface_poolEvents(instance);
export const toolkitInterface_getExecutionTime = (instance: ToolkitInterface): number => native.toolkitInterface_getExecutionTime(instance);
export const toolkitInterface_getTotalAllocatedMemory = (instance: ToolkitInterface): number => native.toolkitInterface_getTotalAllocatedMemory(instance);
export const toolkitInterface_waitQueueIdle = (instance: ToolkitInterface): void => native.toolkitInterface_waitQueueIdle(instance);
export const toolkitInterface_waitDeviceIdle = (instance: ToolkitInterface): void => native.toolkitInterface_waitDeviceIdle(instance);
export const toolkitInterface_getObject3dInfoFactory = (instance: ToolkitInterface): Object3dInfoFactoryInterface => native.toolkitInterface_getObject3dInfoFactory(instance);
export const toolkitInterface_getShaderFactory = (instance: ToolkitInterface): ShaderFactoryInterface => native.toolkitInterface_getShaderFactory(instance);
export const toolkitInterface_getDescriptorSetLayoutFactory = (instance: ToolkitInterface): DescriptorSetLayoutFactoryInterface => native.toolkitInterface_getDescriptorSetLayoutFactory(instance);
export const toolkitInterface_getRenderStageFactory = (instance: ToolkitInterface): RenderStageFactoryInterface => native.toolkitInterface_getRenderStageFactory(instance);
export const toolkitInterface_getComputeStageFactory = (instance: ToolkitInterface): ComputeStageFactoryInterface => native.toolkitInterface_getComputeStageFactory(instance);
export const toolkitInterface_getBufferFactory = (instance: ToolkitInterface): BufferFactoryInterface => native.toolkitInterface_getBufferFactory(instance);
export const toolkitInterface_getImageFactory = (instance: ToolkitInterface): ImageFactoryInterface => native.toolkitInterface_getImageFactory(instance);
export const toolkitInterface_getSwapChainOutputFactory = (instance: ToolkitInterface): SwapChainOutputFactoryInterface => native.toolkitInterface_getSwapChainOutputFactory(instance);
export const toolkitInterface_getSemaphoreFactory = (instance: ToolkitInterface): SemaphoreFactoryInterface => native.toolkitInterface_getSemaphoreFactory(instance);
export const toolkitInterface_getKeyboard = (instance: ToolkitInterface): KeyboardInterface => native.toolkitInterface_getKeyboard(instance);
export const toolkitInterface_getMouse = (instance: ToolkitInterface): MouseInterface => native.toolkitInterface_getMouse(instance);
export const toolkitInterface_getJoystick = (instance: ToolkitInterface): JoystickInterface => native.toolkitInterface_getJoystick(instance);
export const toolkitInterface_getMedia = (instance: ToolkitInterface): MediaInterface => native.toolkitInterface_getMedia(instance);
export const genericBufferInterface_map = (instance: GenericBufferInterface, offset: number, size: number): ArrayBuffer => native.genericBufferInterface_map(instance, offset, size);
export const toolkitInterface_new_window = (width: number, height: number, validationLayers: boolean, windowName: string): ToolkitInterface => native.toolkitInterface_new_window(width, height, validationLayers, windowName);
export const toolkitInterface_new_headless = (validationLayers: boolean): ToolkitInterface => native.toolkitInterface_new_headless(validationLayers);