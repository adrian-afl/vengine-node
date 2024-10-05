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


export const joystickInterface_getButtonsStatus = (index: number): boolean[] => native.joystickInterface_getButtonsStatus(index);
export const joystickInterface_isPresent = (index: number): boolean => native.joystickInterface_isPresent(index);
export const joystickInterface_getAxes = (index: number): number[] => native.joystickInterface_getAxes(index);
export const keyboardInterface_isKeyDown = (key: number): boolean => native.keyboardInterface_isKeyDown(key);
export const mouseInterface_setCursorMode = (mode: number): void => native.mouseInterface_setCursorMode(mode);
export const mouseInterface_isButtonPressed = (button: number): boolean => native.mouseInterface_isButtonPressed(button);
export const attachmentInterface_getImage = (): ImageInterface => native.attachmentInterface_getImage();
export const attachmentInterface_getBlending = (): VEngineAttachmentBlending => native.attachmentInterface_getBlending();
export const attachmentInterface_isCleared = (): boolean => native.attachmentInterface_isCleared();
export const bufferFactoryInterface_build = (type: VEngineBufferType, size: number): GenericBufferInterface => native.bufferFactoryInterface_build(type, size);
export const computeStageFactoryInterface_build = (shader: ShaderModuleInterface, layouts: DescriptorSetLayoutInterface[]): ComputeStageInterface => native.computeStageFactoryInterface_build(shader, layouts);
export const computeStageInterface_beginRecording = (): void => native.computeStageInterface_beginRecording();
export const computeStageInterface_endRecording = (): void => native.computeStageInterface_endRecording();
export const computeStageInterface_dispatch = (sets: DescriptorSetInterface[], groupX: number, groupY: number, groupZ: number): void => native.computeStageInterface_dispatch(sets, groupX, groupY, groupZ);
export const computeStageInterface_submit = (waitSemaphores: SemaphoreInterface[]): void => native.computeStageInterface_submit(waitSemaphores);
export const computeStageInterface_submitNoSemaphores = (waitSemaphores: SemaphoreInterface[]): void => native.computeStageInterface_submitNoSemaphores(waitSemaphores);
export const computeStageInterface_getSignalSemaphore = (): SemaphoreInterface => native.computeStageInterface_getSignalSemaphore();
export const descriptorSetInterface_bindImageViewSampler = (binding: number, img: ImageInterface): void => native.descriptorSetInterface_bindImageViewSampler(binding, img);
export const descriptorSetInterface_bindImageStorage = (binding: number, img: ImageInterface): void => native.descriptorSetInterface_bindImageStorage(binding, img);
export const descriptorSetInterface_bindBuffer = (binding: number, buffer: GenericBufferInterface): void => native.descriptorSetInterface_bindBuffer(binding, buffer);
export const descriptorSetLayoutFactoryInterface_build = (): DescriptorSetLayoutInterface => native.descriptorSetLayoutFactoryInterface_build();
export const descriptorSetLayoutInterface_addField = (fieldType: VEngineDescriptorSetFieldType, fieldAccesibility: VEngineDescriptorSetFieldStage): void => native.descriptorSetLayoutInterface_addField(fieldType, fieldAccesibility);
export const descriptorSetLayoutInterface_generateDescriptorSet = (): DescriptorSetInterface => native.descriptorSetLayoutInterface_generateDescriptorSet();
export const genericBufferInterface_map = (offset: number, size: number, data: ArrayBuffer): void => native.genericBufferInterface_map(offset, size, data);
export const genericBufferInterface_unmap = (): void => native.genericBufferInterface_unmap();
export const genericBufferInterface_getSize = (): number => native.genericBufferInterface_getSize();
export const genericBufferInterface_getType = (): VEngineBufferType => native.genericBufferInterface_getType();
export const imageFactoryInterface_build = (width: number, height: number, depth: number, format: VEngineImageFormat, usage: VEngineImageUsage, aspect: VEngineImageAspect, layout: VEngineImageLayout): ImageInterface => native.imageFactoryInterface_build(width, height, depth, format, usage, aspect, layout);
export const imageFactoryInterface_buildMipmapped = (width: number, height: number, depth: number, format: VEngineImageFormat, usage: VEngineImageUsage, aspect: VEngineImageAspect, layout: VEngineImageLayout): ImageInterface => native.imageFactoryInterface_buildMipmapped(width, height, depth, format, usage, aspect, layout);
export const imageFactoryInterface_loadFromFile = (path: string): ImageInterface => native.imageFactoryInterface_loadFromFile(path);
export const imageFactoryInterface_createFromExistingData = (width: number, height: number, channelCount: number, data: void): ImageInterface => native.imageFactoryInterface_createFromExistingData(width, height, channelCount, data);
export const imageFactoryInterface_resolveIsDepthBuffer = (format: VEngineImageFormat): boolean => native.imageFactoryInterface_resolveIsDepthBuffer(format);
export const imageInterface_getAttachment = (blending: VEngineAttachmentBlending, clear: boolean, clearColor: number[], forPresent: boolean): AttachmentInterface => native.imageInterface_getAttachment(blending, clear, clearColor, forPresent);
export const imageInterface_isDepthBuffer = (): boolean => native.imageInterface_isDepthBuffer();
export const imageInterface_regenerateMipmaps = (): void => native.imageInterface_regenerateMipmaps();
export const object3dInfoFactoryInterface_loadFromFile = (path: string): Object3dInfoInterface => native.object3dInfoFactoryInterface_loadFromFile(path);
export const object3dInfoFactoryInterface_loadFromArray = (rawData: number[]): Object3dInfoInterface => native.object3dInfoFactoryInterface_loadFromArray(rawData);
export const object3dInfoFactoryInterface_getFullScreenQuad = (): Object3dInfoInterface => native.object3dInfoFactoryInterface_getFullScreenQuad();
export const renderStageFactoryInterface_build = (width: number, height: number, shaders: ShaderModuleInterface[], layouts: DescriptorSetLayoutInterface[], outputImages: AttachmentInterface[], cullMode: VEngineCullMode): RenderStageInterface => native.renderStageFactoryInterface_build(width, height, shaders, layouts, outputImages, cullMode);
export const renderStageInterface_beginDrawing = (): void => native.renderStageInterface_beginDrawing();
export const renderStageInterface_endDrawing = (): void => native.renderStageInterface_endDrawing();
export const renderStageInterface_setSets = (sets: DescriptorSetInterface[]): void => native.renderStageInterface_setSets(sets);
export const renderStageInterface_setSet = (index: number, set: DescriptorSetInterface): void => native.renderStageInterface_setSet(index, set);
export const renderStageInterface_drawMesh = (info: Object3dInfoInterface, instances: number): void => native.renderStageInterface_drawMesh(info, instances);
export const renderStageInterface_submit = (waitSemaphores: SemaphoreInterface[]): void => native.renderStageInterface_submit(waitSemaphores);
export const renderStageInterface_submitNoSemaphores = (waitSemaphores: SemaphoreInterface[]): void => native.renderStageInterface_submitNoSemaphores(waitSemaphores);
export const renderStageInterface_copy = (): RenderStageInterface => native.renderStageInterface_copy();
export const renderStageInterface_copyWithNewOutput = (outputImages: AttachmentInterface[]): RenderStageInterface => native.renderStageInterface_copyWithNewOutput(outputImages);
export const renderStageInterface_getSignalSemaphore = (): SemaphoreInterface => native.renderStageInterface_getSignalSemaphore();
export const semaphoreFactoryInterface_build = (): SemaphoreInterface => native.semaphoreFactoryInterface_build();
export const shaderFactoryInterface_build = (type: VEngineShaderModuleType, path: string): ShaderModuleInterface => native.shaderFactoryInterface_build(type, path);
export const shaderModuleInterface_getType = (): VEngineShaderModuleType => native.shaderModuleInterface_getType();
export const swapChainOutputFactoryInterface_build = (stage: RenderStageInterface): SwapChainOutputInterface => native.swapChainOutputFactoryInterface_build(stage);
export const swapChainOutputInterface_beginDrawing = (): void => native.swapChainOutputInterface_beginDrawing();
export const swapChainOutputInterface_endDrawing = (): void => native.swapChainOutputInterface_endDrawing();
export const swapChainOutputInterface_drawMesh = (info: Object3dInfoInterface, instances: number): void => native.swapChainOutputInterface_drawMesh(info, instances);
export const swapChainOutputInterface_submit = (waitSemaphores: SemaphoreInterface[]): void => native.swapChainOutputInterface_submit(waitSemaphores);
export const swapChainOutputInterface_getSignalSemaphores = (): SemaphoreInterface[] => native.swapChainOutputInterface_getSignalSemaphores();
export const toolkitInterface_shouldCloseWindow = (): boolean => native.toolkitInterface_shouldCloseWindow();
export const toolkitInterface_poolEvents = (): void => native.toolkitInterface_poolEvents();
export const toolkitInterface_getExecutionTime = (): number => native.toolkitInterface_getExecutionTime();
export const toolkitInterface_getTotalAllocatedMemory = (): number => native.toolkitInterface_getTotalAllocatedMemory();
export const toolkitInterface_waitQueueIdle = (): void => native.toolkitInterface_waitQueueIdle();
export const toolkitInterface_waitDeviceIdle = (): void => native.toolkitInterface_waitDeviceIdle();
export const toolkitInterface_getObject3dInfoFactory = (): Object3dInfoFactoryInterface => native.toolkitInterface_getObject3dInfoFactory();
export const toolkitInterface_getShaderFactory = (): ShaderFactoryInterface => native.toolkitInterface_getShaderFactory();
export const toolkitInterface_getDescriptorSetLayoutFactory = (): DescriptorSetLayoutFactoryInterface => native.toolkitInterface_getDescriptorSetLayoutFactory();
export const toolkitInterface_getRenderStageFactory = (): RenderStageFactoryInterface => native.toolkitInterface_getRenderStageFactory();
export const toolkitInterface_getComputeStageFactory = (): ComputeStageFactoryInterface => native.toolkitInterface_getComputeStageFactory();
export const toolkitInterface_getBufferFactory = (): BufferFactoryInterface => native.toolkitInterface_getBufferFactory();
export const toolkitInterface_getImageFactory = (): ImageFactoryInterface => native.toolkitInterface_getImageFactory();
export const toolkitInterface_getSwapChainOutputFactory = (): SwapChainOutputFactoryInterface => native.toolkitInterface_getSwapChainOutputFactory();
export const toolkitInterface_getSemaphoreFactory = (): SemaphoreFactoryInterface => native.toolkitInterface_getSemaphoreFactory();
export const toolkitInterface_getKeyboard = (): KeyboardInterface => native.toolkitInterface_getKeyboard();
export const toolkitInterface_getMouse = (): MouseInterface => native.toolkitInterface_getMouse();
export const toolkitInterface_getJoystick = (): JoystickInterface => native.toolkitInterface_getJoystick();
export const toolkitInterface_getMedia = (): MediaInterface => native.toolkitInterface_getMedia();
export const toolkitInterface_new_window = (width: number, height: number, validationLayers: boolean, windowName: string): ToolkitInterface => native.toolkitInterface_new_window(width, height, validationLayers, windowName);
export const toolkitInterface_new_headless = (validationLayers: boolean): ToolkitInterface => native.toolkitInterface_new_headless(validationLayers);