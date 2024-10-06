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

export const joystickInterface_getButtonsStatus = (instance: JoystickInterfacePointer, index: number): boolean[] => native.joystickInterface_getButtonsStatus(instance, index);
export const joystickInterface_isPresent = (instance: JoystickInterfacePointer, index: number): boolean => native.joystickInterface_isPresent(instance, index);
export const joystickInterface_getAxes = (instance: JoystickInterfacePointer, index: number): number[] => native.joystickInterface_getAxes(instance, index);
export const keyboardInterface_isKeyDown = (instance: KeyboardInterfacePointer, key: number): boolean => native.keyboardInterface_isKeyDown(instance, key);
export const mouseInterface_setCursorMode = (instance: MouseInterfacePointer, mode: number): void => native.mouseInterface_setCursorMode(instance, mode);
export const mouseInterface_isButtonPressed = (instance: MouseInterfacePointer, button: number): boolean => native.mouseInterface_isButtonPressed(instance, button);
export const attachmentInterface_getImage = (instance: AttachmentInterfacePointer): ImageInterfacePointer => native.attachmentInterface_getImage(instance);
export const attachmentInterface_getBlending = (instance: AttachmentInterfacePointer): VEngineAttachmentBlending => native.attachmentInterface_getBlending(instance);
export const attachmentInterface_isCleared = (instance: AttachmentInterfacePointer): boolean => native.attachmentInterface_isCleared(instance);
export const bufferFactoryInterface_build = (instance: BufferFactoryInterfacePointer, type: VEngineBufferType, size: number): GenericBufferInterfacePointer => native.bufferFactoryInterface_build(instance, type, size);
export const computeStageFactoryInterface_build = (instance: ComputeStageFactoryInterfacePointer, shader: ShaderModuleInterfacePointer, layouts: DescriptorSetLayoutInterfacePointer[]): ComputeStageInterfacePointer => native.computeStageFactoryInterface_build(instance, shader, layouts);
export const computeStageInterface_beginRecording = (instance: ComputeStageInterfacePointer): void => native.computeStageInterface_beginRecording(instance);
export const computeStageInterface_endRecording = (instance: ComputeStageInterfacePointer): void => native.computeStageInterface_endRecording(instance);
export const computeStageInterface_dispatch = (instance: ComputeStageInterfacePointer, sets: DescriptorSetInterfacePointer[], groupX: number, groupY: number, groupZ: number): void => native.computeStageInterface_dispatch(instance, sets, groupX, groupY, groupZ);
export const computeStageInterface_submit = (instance: ComputeStageInterfacePointer, waitSemaphores: SemaphoreInterfacePointer[]): void => native.computeStageInterface_submit(instance, waitSemaphores);
export const computeStageInterface_submitNoSemaphores = (instance: ComputeStageInterfacePointer, waitSemaphores: SemaphoreInterfacePointer[]): void => native.computeStageInterface_submitNoSemaphores(instance, waitSemaphores);
export const computeStageInterface_getSignalSemaphore = (instance: ComputeStageInterfacePointer): SemaphoreInterfacePointer => native.computeStageInterface_getSignalSemaphore(instance);
export const descriptorSetInterface_bindImageViewSampler = (instance: DescriptorSetInterfacePointer, binding: number, img: ImageInterfacePointer): void => native.descriptorSetInterface_bindImageViewSampler(instance, binding, img);
export const descriptorSetInterface_bindImageStorage = (instance: DescriptorSetInterfacePointer, binding: number, img: ImageInterfacePointer): void => native.descriptorSetInterface_bindImageStorage(instance, binding, img);
export const descriptorSetInterface_bindBuffer = (instance: DescriptorSetInterfacePointer, binding: number, buffer: GenericBufferInterfacePointer): void => native.descriptorSetInterface_bindBuffer(instance, binding, buffer);
export const descriptorSetLayoutFactoryInterface_build = (instance: DescriptorSetLayoutFactoryInterfacePointer): DescriptorSetLayoutInterfacePointer => native.descriptorSetLayoutFactoryInterface_build(instance);
export const descriptorSetLayoutInterface_addField = (instance: DescriptorSetLayoutInterfacePointer, fieldType: VEngineDescriptorSetFieldType, fieldAccesibility: VEngineDescriptorSetFieldStage): void => native.descriptorSetLayoutInterface_addField(instance, fieldType, fieldAccesibility);
export const descriptorSetLayoutInterface_generateDescriptorSet = (instance: DescriptorSetLayoutInterfacePointer): DescriptorSetInterfacePointer => native.descriptorSetLayoutInterface_generateDescriptorSet(instance);
export const genericBufferInterface_unmap = (instance: GenericBufferInterfacePointer): void => native.genericBufferInterface_unmap(instance);
export const genericBufferInterface_getSize = (instance: GenericBufferInterfacePointer): number => native.genericBufferInterface_getSize(instance);
export const genericBufferInterface_getType = (instance: GenericBufferInterfacePointer): VEngineBufferType => native.genericBufferInterface_getType(instance);
export const imageFactoryInterface_build = (instance: ImageFactoryInterfacePointer, width: number, height: number, depth: number, format: VEngineImageFormat, usage: VEngineImageUsage, aspect: VEngineImageAspect, layout: VEngineImageLayout): ImageInterfacePointer => native.imageFactoryInterface_build(instance, width, height, depth, format, usage, aspect, layout);
export const imageFactoryInterface_buildMipmapped = (instance: ImageFactoryInterfacePointer, width: number, height: number, depth: number, format: VEngineImageFormat, usage: VEngineImageUsage, aspect: VEngineImageAspect, layout: VEngineImageLayout): ImageInterfacePointer => native.imageFactoryInterface_buildMipmapped(instance, width, height, depth, format, usage, aspect, layout);
export const imageFactoryInterface_loadFromFile = (instance: ImageFactoryInterfacePointer, path: string): ImageInterfacePointer => native.imageFactoryInterface_loadFromFile(instance, path);
export const imageFactoryInterface_createFromExistingData = (instance: ImageFactoryInterfacePointer, width: number, height: number, channelCount: number, data: ArrayBuffer): ImageInterfacePointer => native.imageFactoryInterface_createFromExistingData(instance, width, height, channelCount, data);
export const imageFactoryInterface_resolveIsDepthBuffer = (instance: ImageFactoryInterfacePointer, format: VEngineImageFormat): boolean => native.imageFactoryInterface_resolveIsDepthBuffer(instance, format);
export const imageInterface_getAttachment = (instance: ImageInterfacePointer, blending: VEngineAttachmentBlending, clear: boolean, clearColor: number[], forPresent: boolean): AttachmentInterfacePointer => native.imageInterface_getAttachment(instance, blending, clear, clearColor, forPresent);
export const imageInterface_isDepthBuffer = (instance: ImageInterfacePointer): boolean => native.imageInterface_isDepthBuffer(instance);
export const imageInterface_regenerateMipmaps = (instance: ImageInterfacePointer): void => native.imageInterface_regenerateMipmaps(instance);
export const object3dInfoFactoryInterface_loadFromFile = (instance: Object3dInfoFactoryInterfacePointer, path: string): Object3dInfoInterfacePointer => native.object3dInfoFactoryInterface_loadFromFile(instance, path);
export const object3dInfoFactoryInterface_loadFromArray = (instance: Object3dInfoFactoryInterfacePointer, rawData: number[]): Object3dInfoInterfacePointer => native.object3dInfoFactoryInterface_loadFromArray(instance, rawData);
export const object3dInfoFactoryInterface_getFullScreenQuad = (instance: Object3dInfoFactoryInterfacePointer): Object3dInfoInterfacePointer => native.object3dInfoFactoryInterface_getFullScreenQuad(instance);
export const renderStageFactoryInterface_build = (instance: RenderStageFactoryInterfacePointer, width: number, height: number, shaders: ShaderModuleInterfacePointer[], layouts: DescriptorSetLayoutInterfacePointer[], outputImages: AttachmentInterfacePointer[], cullMode: VEngineCullMode): RenderStageInterfacePointer => native.renderStageFactoryInterface_build(instance, width, height, shaders, layouts, outputImages, cullMode);
export const renderStageInterface_beginDrawing = (instance: RenderStageInterfacePointer): void => native.renderStageInterface_beginDrawing(instance);
export const renderStageInterface_endDrawing = (instance: RenderStageInterfacePointer): void => native.renderStageInterface_endDrawing(instance);
export const renderStageInterface_setSets = (instance: RenderStageInterfacePointer, sets: DescriptorSetInterfacePointer[]): void => native.renderStageInterface_setSets(instance, sets);
export const renderStageInterface_setSet = (instance: RenderStageInterfacePointer, index: number, set: DescriptorSetInterfacePointer): void => native.renderStageInterface_setSet(instance, index, set);
export const renderStageInterface_drawMesh = (instance: RenderStageInterfacePointer, info: Object3dInfoInterfacePointer, instances: number): void => native.renderStageInterface_drawMesh(instance, info, instances);
export const renderStageInterface_submit = (instance: RenderStageInterfacePointer, waitSemaphores: SemaphoreInterfacePointer[]): void => native.renderStageInterface_submit(instance, waitSemaphores);
export const renderStageInterface_submitNoSemaphores = (instance: RenderStageInterfacePointer, waitSemaphores: SemaphoreInterfacePointer[]): void => native.renderStageInterface_submitNoSemaphores(instance, waitSemaphores);
export const renderStageInterface_copy = (instance: RenderStageInterfacePointer): RenderStageInterfacePointer => native.renderStageInterface_copy(instance);
export const renderStageInterface_copyWithNewOutput = (instance: RenderStageInterfacePointer, outputImages: AttachmentInterfacePointer[]): RenderStageInterfacePointer => native.renderStageInterface_copyWithNewOutput(instance, outputImages);
export const renderStageInterface_getSignalSemaphore = (instance: RenderStageInterfacePointer): SemaphoreInterfacePointer => native.renderStageInterface_getSignalSemaphore(instance);
export const semaphoreFactoryInterface_build = (instance: SemaphoreFactoryInterfacePointer): SemaphoreInterfacePointer => native.semaphoreFactoryInterface_build(instance);
export const shaderFactoryInterface_build = (instance: ShaderFactoryInterfacePointer, type: VEngineShaderModuleType, path: string): ShaderModuleInterfacePointer => native.shaderFactoryInterface_build(instance, type, path);
export const shaderModuleInterface_getType = (instance: ShaderModuleInterfacePointer): VEngineShaderModuleType => native.shaderModuleInterface_getType(instance);
export const swapChainOutputFactoryInterface_build = (instance: SwapChainOutputFactoryInterfacePointer, stage: RenderStageInterfacePointer): SwapChainOutputInterfacePointer => native.swapChainOutputFactoryInterface_build(instance, stage);
export const swapChainOutputInterface_beginDrawing = (instance: SwapChainOutputInterfacePointer): void => native.swapChainOutputInterface_beginDrawing(instance);
export const swapChainOutputInterface_endDrawing = (instance: SwapChainOutputInterfacePointer): void => native.swapChainOutputInterface_endDrawing(instance);
export const swapChainOutputInterface_drawMesh = (instance: SwapChainOutputInterfacePointer, info: Object3dInfoInterfacePointer, instances: number): void => native.swapChainOutputInterface_drawMesh(instance, info, instances);
export const swapChainOutputInterface_submit = (instance: SwapChainOutputInterfacePointer, waitSemaphores: SemaphoreInterfacePointer[]): void => native.swapChainOutputInterface_submit(instance, waitSemaphores);
export const swapChainOutputInterface_getSignalSemaphores = (instance: SwapChainOutputInterfacePointer): SemaphoreInterfacePointer[] => native.swapChainOutputInterface_getSignalSemaphores(instance);
export const toolkitInterface_shouldCloseWindow = (instance: ToolkitInterfacePointer): boolean => native.toolkitInterface_shouldCloseWindow(instance);
export const toolkitInterface_poolEvents = (instance: ToolkitInterfacePointer): void => native.toolkitInterface_poolEvents(instance);
export const toolkitInterface_getExecutionTime = (instance: ToolkitInterfacePointer): number => native.toolkitInterface_getExecutionTime(instance);
export const toolkitInterface_getTotalAllocatedMemory = (instance: ToolkitInterfacePointer): number => native.toolkitInterface_getTotalAllocatedMemory(instance);
export const toolkitInterface_waitQueueIdle = (instance: ToolkitInterfacePointer): void => native.toolkitInterface_waitQueueIdle(instance);
export const toolkitInterface_waitDeviceIdle = (instance: ToolkitInterfacePointer): void => native.toolkitInterface_waitDeviceIdle(instance);
export const toolkitInterface_getObject3dInfoFactory = (instance: ToolkitInterfacePointer): Object3dInfoFactoryInterfacePointer => native.toolkitInterface_getObject3dInfoFactory(instance);
export const toolkitInterface_getShaderFactory = (instance: ToolkitInterfacePointer): ShaderFactoryInterfacePointer => native.toolkitInterface_getShaderFactory(instance);
export const toolkitInterface_getDescriptorSetLayoutFactory = (instance: ToolkitInterfacePointer): DescriptorSetLayoutFactoryInterfacePointer => native.toolkitInterface_getDescriptorSetLayoutFactory(instance);
export const toolkitInterface_getRenderStageFactory = (instance: ToolkitInterfacePointer): RenderStageFactoryInterfacePointer => native.toolkitInterface_getRenderStageFactory(instance);
export const toolkitInterface_getComputeStageFactory = (instance: ToolkitInterfacePointer): ComputeStageFactoryInterfacePointer => native.toolkitInterface_getComputeStageFactory(instance);
export const toolkitInterface_getBufferFactory = (instance: ToolkitInterfacePointer): BufferFactoryInterfacePointer => native.toolkitInterface_getBufferFactory(instance);
export const toolkitInterface_getImageFactory = (instance: ToolkitInterfacePointer): ImageFactoryInterfacePointer => native.toolkitInterface_getImageFactory(instance);
export const toolkitInterface_getSwapChainOutputFactory = (instance: ToolkitInterfacePointer): SwapChainOutputFactoryInterfacePointer => native.toolkitInterface_getSwapChainOutputFactory(instance);
export const toolkitInterface_getSemaphoreFactory = (instance: ToolkitInterfacePointer): SemaphoreFactoryInterfacePointer => native.toolkitInterface_getSemaphoreFactory(instance);
export const toolkitInterface_getKeyboard = (instance: ToolkitInterfacePointer): KeyboardInterfacePointer => native.toolkitInterface_getKeyboard(instance);
export const toolkitInterface_getMouse = (instance: ToolkitInterfacePointer): MouseInterfacePointer => native.toolkitInterface_getMouse(instance);
export const toolkitInterface_getJoystick = (instance: ToolkitInterfacePointer): JoystickInterfacePointer => native.toolkitInterface_getJoystick(instance);
export const toolkitInterface_getMedia = (instance: ToolkitInterfacePointer): MediaInterfacePointer => native.toolkitInterface_getMedia(instance);
export const genericBufferInterface_map = (instance: GenericBufferInterfacePointer, offset: number, size: number): ArrayBuffer => native.genericBufferInterface_map(instance, offset, size);
export const toolkitInterface_new_window = (width: number, height: number, validationLayers: boolean, windowName: string): ToolkitInterfacePointer => native.toolkitInterface_new_window(width, height, validationLayers, windowName);
export const toolkitInterface_new_headless = (validationLayers: boolean): ToolkitInterfacePointer => native.toolkitInterface_new_headless(validationLayers);

export class MediaInterface {
  public constructor(public readonly pointer: MediaInterfacePointer) {

  }
  

}        
      

export class JoystickInterface {
  public constructor(public readonly pointer: JoystickInterfacePointer) {
        this.getButtonsStatus = joystickInterface_getButtonsStatus.bind(null, this.pointer);
        this.isPresent = joystickInterface_isPresent.bind(null, this.pointer);
        this.getAxes = joystickInterface_getAxes.bind(null, this.pointer);
  }
  
    public getButtonsStatus : BindFirstParam<typeof joystickInterface_getButtonsStatus>
    public isPresent : BindFirstParam<typeof joystickInterface_isPresent>
    public getAxes : BindFirstParam<typeof joystickInterface_getAxes>
}        
      

export class KeyboardInterface {
  public constructor(public readonly pointer: KeyboardInterfacePointer) {
        this.isKeyDown = keyboardInterface_isKeyDown.bind(null, this.pointer);
  }
  
    public isKeyDown : BindFirstParam<typeof keyboardInterface_isKeyDown>
}        
      

export class MouseInterface {
  public constructor(public readonly pointer: MouseInterfacePointer) {
        this.setCursorMode = mouseInterface_setCursorMode.bind(null, this.pointer);
        this.isButtonPressed = mouseInterface_isButtonPressed.bind(null, this.pointer);
  }
  
    public setCursorMode : BindFirstParam<typeof mouseInterface_setCursorMode>
    public isButtonPressed : BindFirstParam<typeof mouseInterface_isButtonPressed>
}        
      

export class AttachmentInterface {
  public constructor(public readonly pointer: AttachmentInterfacePointer) {
        this.getImage = () => new ImageInterface(attachmentInterface_getImage(this.pointer));
        this.getBlending = attachmentInterface_getBlending.bind(null, this.pointer);
        this.isCleared = attachmentInterface_isCleared.bind(null, this.pointer);
  }
  
    public getImage: ChangeReturnType<BindFirstParam<typeof attachmentInterface_getImage>, ImageInterface>;
    public getBlending : BindFirstParam<typeof attachmentInterface_getBlending>
    public isCleared : BindFirstParam<typeof attachmentInterface_isCleared>
}        
      

export class BufferFactoryInterface {
  public constructor(public readonly pointer: BufferFactoryInterfacePointer) {
        this.build = (...args: Parameters<typeof this.build>) => new GenericBufferInterface(bufferFactoryInterface_build(this.pointer, ...args));
  }
  
    public build: ChangeReturnType<BindFirstParam<typeof bufferFactoryInterface_build>, GenericBufferInterface>;
}        
      

export class ComputeStageFactoryInterface {
  public constructor(public readonly pointer: ComputeStageFactoryInterfacePointer) {
        this.build = (...args: Parameters<typeof this.build>) => new ComputeStageInterface(computeStageFactoryInterface_build(this.pointer, ...args));
  }
  
    public build: ChangeReturnType<BindFirstParam<typeof computeStageFactoryInterface_build>, ComputeStageInterface>;
}        
      

export class ComputeStageInterface {
  public constructor(public readonly pointer: ComputeStageInterfacePointer) {
        this.beginRecording = computeStageInterface_beginRecording.bind(null, this.pointer);
        this.endRecording = computeStageInterface_endRecording.bind(null, this.pointer);
        this.dispatch = computeStageInterface_dispatch.bind(null, this.pointer);
        this.submit = computeStageInterface_submit.bind(null, this.pointer);
        this.submitNoSemaphores = computeStageInterface_submitNoSemaphores.bind(null, this.pointer);
        this.getSignalSemaphore = () => new SemaphoreInterface(computeStageInterface_getSignalSemaphore(this.pointer));
  }
  
    public beginRecording : BindFirstParam<typeof computeStageInterface_beginRecording>
    public endRecording : BindFirstParam<typeof computeStageInterface_endRecording>
    public dispatch : BindFirstParam<typeof computeStageInterface_dispatch>
    public submit : BindFirstParam<typeof computeStageInterface_submit>
    public submitNoSemaphores : BindFirstParam<typeof computeStageInterface_submitNoSemaphores>
    public getSignalSemaphore: ChangeReturnType<BindFirstParam<typeof computeStageInterface_getSignalSemaphore>, SemaphoreInterface>;
}        
      

export class DescriptorSetInterface {
  public constructor(public readonly pointer: DescriptorSetInterfacePointer) {
        this.bindImageViewSampler = descriptorSetInterface_bindImageViewSampler.bind(null, this.pointer);
        this.bindImageStorage = descriptorSetInterface_bindImageStorage.bind(null, this.pointer);
        this.bindBuffer = descriptorSetInterface_bindBuffer.bind(null, this.pointer);
  }
  
    public bindImageViewSampler : BindFirstParam<typeof descriptorSetInterface_bindImageViewSampler>
    public bindImageStorage : BindFirstParam<typeof descriptorSetInterface_bindImageStorage>
    public bindBuffer : BindFirstParam<typeof descriptorSetInterface_bindBuffer>
}        
      

export class DescriptorSetLayoutFactoryInterface {
  public constructor(public readonly pointer: DescriptorSetLayoutFactoryInterfacePointer) {
        this.build = () => new DescriptorSetLayoutInterface(descriptorSetLayoutFactoryInterface_build(this.pointer));
  }
  
    public build: ChangeReturnType<BindFirstParam<typeof descriptorSetLayoutFactoryInterface_build>, DescriptorSetLayoutInterface>;
}        
      

export class DescriptorSetLayoutInterface {
  public constructor(public readonly pointer: DescriptorSetLayoutInterfacePointer) {
        this.addField = descriptorSetLayoutInterface_addField.bind(null, this.pointer);
        this.generateDescriptorSet = () => new DescriptorSetInterface(descriptorSetLayoutInterface_generateDescriptorSet(this.pointer));
  }
  
    public addField : BindFirstParam<typeof descriptorSetLayoutInterface_addField>
    public generateDescriptorSet: ChangeReturnType<BindFirstParam<typeof descriptorSetLayoutInterface_generateDescriptorSet>, DescriptorSetInterface>;
}        
      

export class GenericBufferInterface {
  public constructor(public readonly pointer: GenericBufferInterfacePointer) {
        this.unmap = genericBufferInterface_unmap.bind(null, this.pointer);
        this.getSize = genericBufferInterface_getSize.bind(null, this.pointer);
        this.getType = genericBufferInterface_getType.bind(null, this.pointer);
  }
  
    public unmap : BindFirstParam<typeof genericBufferInterface_unmap>
    public getSize : BindFirstParam<typeof genericBufferInterface_getSize>
    public getType : BindFirstParam<typeof genericBufferInterface_getType>
}        
      

export class ImageFactoryInterface {
  public constructor(public readonly pointer: ImageFactoryInterfacePointer) {
        this.build = (...args: Parameters<typeof this.build>) => new ImageInterface(imageFactoryInterface_build(this.pointer, ...args));
        this.buildMipmapped = (...args: Parameters<typeof this.buildMipmapped>) => new ImageInterface(imageFactoryInterface_buildMipmapped(this.pointer, ...args));
        this.loadFromFile = (...args: Parameters<typeof this.loadFromFile>) => new ImageInterface(imageFactoryInterface_loadFromFile(this.pointer, ...args));
        this.createFromExistingData = (...args: Parameters<typeof this.createFromExistingData>) => new ImageInterface(imageFactoryInterface_createFromExistingData(this.pointer, ...args));
        this.resolveIsDepthBuffer = imageFactoryInterface_resolveIsDepthBuffer.bind(null, this.pointer);
  }
  
    public build: ChangeReturnType<BindFirstParam<typeof imageFactoryInterface_build>, ImageInterface>;
    public buildMipmapped: ChangeReturnType<BindFirstParam<typeof imageFactoryInterface_buildMipmapped>, ImageInterface>;
    public loadFromFile: ChangeReturnType<BindFirstParam<typeof imageFactoryInterface_loadFromFile>, ImageInterface>;
    public createFromExistingData: ChangeReturnType<BindFirstParam<typeof imageFactoryInterface_createFromExistingData>, ImageInterface>;
    public resolveIsDepthBuffer : BindFirstParam<typeof imageFactoryInterface_resolveIsDepthBuffer>
}        
      

export class ImageInterface {
  public constructor(public readonly pointer: ImageInterfacePointer) {
        this.getAttachment = (...args: Parameters<typeof this.getAttachment>) => new AttachmentInterface(imageInterface_getAttachment(this.pointer, ...args));
        this.isDepthBuffer = imageInterface_isDepthBuffer.bind(null, this.pointer);
        this.regenerateMipmaps = imageInterface_regenerateMipmaps.bind(null, this.pointer);
  }
  
    public getAttachment: ChangeReturnType<BindFirstParam<typeof imageInterface_getAttachment>, AttachmentInterface>;
    public isDepthBuffer : BindFirstParam<typeof imageInterface_isDepthBuffer>
    public regenerateMipmaps : BindFirstParam<typeof imageInterface_regenerateMipmaps>
}        
      

export class Object3dInfoFactoryInterface {
  public constructor(public readonly pointer: Object3dInfoFactoryInterfacePointer) {
        this.loadFromFile = (...args: Parameters<typeof this.loadFromFile>) => new Object3dInfoInterface(object3dInfoFactoryInterface_loadFromFile(this.pointer, ...args));
        this.loadFromArray = (...args: Parameters<typeof this.loadFromArray>) => new Object3dInfoInterface(object3dInfoFactoryInterface_loadFromArray(this.pointer, ...args));
        this.getFullScreenQuad = () => new Object3dInfoInterface(object3dInfoFactoryInterface_getFullScreenQuad(this.pointer));
  }
  
    public loadFromFile: ChangeReturnType<BindFirstParam<typeof object3dInfoFactoryInterface_loadFromFile>, Object3dInfoInterface>;
    public loadFromArray: ChangeReturnType<BindFirstParam<typeof object3dInfoFactoryInterface_loadFromArray>, Object3dInfoInterface>;
    public getFullScreenQuad: ChangeReturnType<BindFirstParam<typeof object3dInfoFactoryInterface_getFullScreenQuad>, Object3dInfoInterface>;
}        
      

export class Object3dInfoInterface {
  public constructor(public readonly pointer: Object3dInfoInterfacePointer) {

  }
  

}        
      

export class RenderStageFactoryInterface {
  public constructor(public readonly pointer: RenderStageFactoryInterfacePointer) {
        this.build = (...args: Parameters<typeof this.build>) => new RenderStageInterface(renderStageFactoryInterface_build(this.pointer, ...args));
  }
  
    public build: ChangeReturnType<BindFirstParam<typeof renderStageFactoryInterface_build>, RenderStageInterface>;
}        
      

export class RenderStageInterface {
  public constructor(public readonly pointer: RenderStageInterfacePointer) {
        this.beginDrawing = renderStageInterface_beginDrawing.bind(null, this.pointer);
        this.endDrawing = renderStageInterface_endDrawing.bind(null, this.pointer);
        this.setSets = renderStageInterface_setSets.bind(null, this.pointer);
        this.setSet = renderStageInterface_setSet.bind(null, this.pointer);
        this.drawMesh = renderStageInterface_drawMesh.bind(null, this.pointer);
        this.submit = renderStageInterface_submit.bind(null, this.pointer);
        this.submitNoSemaphores = renderStageInterface_submitNoSemaphores.bind(null, this.pointer);
        this.copy = () => new RenderStageInterface(renderStageInterface_copy(this.pointer));
        this.copyWithNewOutput = (...args: Parameters<typeof this.copyWithNewOutput>) => new RenderStageInterface(renderStageInterface_copyWithNewOutput(this.pointer, ...args));
        this.getSignalSemaphore = () => new SemaphoreInterface(renderStageInterface_getSignalSemaphore(this.pointer));
  }
  
    public beginDrawing : BindFirstParam<typeof renderStageInterface_beginDrawing>
    public endDrawing : BindFirstParam<typeof renderStageInterface_endDrawing>
    public setSets : BindFirstParam<typeof renderStageInterface_setSets>
    public setSet : BindFirstParam<typeof renderStageInterface_setSet>
    public drawMesh : BindFirstParam<typeof renderStageInterface_drawMesh>
    public submit : BindFirstParam<typeof renderStageInterface_submit>
    public submitNoSemaphores : BindFirstParam<typeof renderStageInterface_submitNoSemaphores>
    public copy: ChangeReturnType<BindFirstParam<typeof renderStageInterface_copy>, RenderStageInterface>;
    public copyWithNewOutput: ChangeReturnType<BindFirstParam<typeof renderStageInterface_copyWithNewOutput>, RenderStageInterface>;
    public getSignalSemaphore: ChangeReturnType<BindFirstParam<typeof renderStageInterface_getSignalSemaphore>, SemaphoreInterface>;
}        
      

export class SemaphoreFactoryInterface {
  public constructor(public readonly pointer: SemaphoreFactoryInterfacePointer) {
        this.build = () => new SemaphoreInterface(semaphoreFactoryInterface_build(this.pointer));
  }
  
    public build: ChangeReturnType<BindFirstParam<typeof semaphoreFactoryInterface_build>, SemaphoreInterface>;
}        
      

export class SemaphoreInterface {
  public constructor(public readonly pointer: SemaphoreInterfacePointer) {

  }
  

}        
      

export class ShaderFactoryInterface {
  public constructor(public readonly pointer: ShaderFactoryInterfacePointer) {
        this.build = (...args: Parameters<typeof this.build>) => new ShaderModuleInterface(shaderFactoryInterface_build(this.pointer, ...args));
  }
  
    public build: ChangeReturnType<BindFirstParam<typeof shaderFactoryInterface_build>, ShaderModuleInterface>;
}        
      

export class ShaderModuleInterface {
  public constructor(public readonly pointer: ShaderModuleInterfacePointer) {
        this.getType = shaderModuleInterface_getType.bind(null, this.pointer);
  }
  
    public getType : BindFirstParam<typeof shaderModuleInterface_getType>
}        
      

export class SwapChainOutputFactoryInterface {
  public constructor(public readonly pointer: SwapChainOutputFactoryInterfacePointer) {
        this.build = (...args: Parameters<typeof this.build>) => new SwapChainOutputInterface(swapChainOutputFactoryInterface_build(this.pointer, ...args));
  }
  
    public build: ChangeReturnType<BindFirstParam<typeof swapChainOutputFactoryInterface_build>, SwapChainOutputInterface>;
}        
      

export class SwapChainOutputInterface {
  public constructor(public readonly pointer: SwapChainOutputInterfacePointer) {
        this.beginDrawing = swapChainOutputInterface_beginDrawing.bind(null, this.pointer);
        this.endDrawing = swapChainOutputInterface_endDrawing.bind(null, this.pointer);
        this.drawMesh = swapChainOutputInterface_drawMesh.bind(null, this.pointer);
        this.submit = swapChainOutputInterface_submit.bind(null, this.pointer);
        this.getSignalSemaphores = () => (swapChainOutputInterface_getSignalSemaphores(this.pointer)).map(x => new SemaphoreInterface(x));
  }
  
    public beginDrawing : BindFirstParam<typeof swapChainOutputInterface_beginDrawing>
    public endDrawing : BindFirstParam<typeof swapChainOutputInterface_endDrawing>
    public drawMesh : BindFirstParam<typeof swapChainOutputInterface_drawMesh>
    public submit : BindFirstParam<typeof swapChainOutputInterface_submit>
    public getSignalSemaphores: ChangeReturnType<BindFirstParam<typeof swapChainOutputInterface_getSignalSemaphores>, SemaphoreInterface[]>;
}        
      

export class ToolkitInterface {
  public constructor(public readonly pointer: ToolkitInterfacePointer) {
        this.shouldCloseWindow = toolkitInterface_shouldCloseWindow.bind(null, this.pointer);
        this.poolEvents = toolkitInterface_poolEvents.bind(null, this.pointer);
        this.getExecutionTime = toolkitInterface_getExecutionTime.bind(null, this.pointer);
        this.getTotalAllocatedMemory = toolkitInterface_getTotalAllocatedMemory.bind(null, this.pointer);
        this.waitQueueIdle = toolkitInterface_waitQueueIdle.bind(null, this.pointer);
        this.waitDeviceIdle = toolkitInterface_waitDeviceIdle.bind(null, this.pointer);
        this.getObject3dInfoFactory = () => new Object3dInfoFactoryInterface(toolkitInterface_getObject3dInfoFactory(this.pointer));
        this.getShaderFactory = () => new ShaderFactoryInterface(toolkitInterface_getShaderFactory(this.pointer));
        this.getDescriptorSetLayoutFactory = () => new DescriptorSetLayoutFactoryInterface(toolkitInterface_getDescriptorSetLayoutFactory(this.pointer));
        this.getRenderStageFactory = () => new RenderStageFactoryInterface(toolkitInterface_getRenderStageFactory(this.pointer));
        this.getComputeStageFactory = () => new ComputeStageFactoryInterface(toolkitInterface_getComputeStageFactory(this.pointer));
        this.getBufferFactory = () => new BufferFactoryInterface(toolkitInterface_getBufferFactory(this.pointer));
        this.getImageFactory = () => new ImageFactoryInterface(toolkitInterface_getImageFactory(this.pointer));
        this.getSwapChainOutputFactory = () => new SwapChainOutputFactoryInterface(toolkitInterface_getSwapChainOutputFactory(this.pointer));
        this.getSemaphoreFactory = () => new SemaphoreFactoryInterface(toolkitInterface_getSemaphoreFactory(this.pointer));
        this.getKeyboard = () => new KeyboardInterface(toolkitInterface_getKeyboard(this.pointer));
        this.getMouse = () => new MouseInterface(toolkitInterface_getMouse(this.pointer));
        this.getJoystick = () => new JoystickInterface(toolkitInterface_getJoystick(this.pointer));
        this.getMedia = () => new MediaInterface(toolkitInterface_getMedia(this.pointer));
  }
  
    public shouldCloseWindow : BindFirstParam<typeof toolkitInterface_shouldCloseWindow>
    public poolEvents : BindFirstParam<typeof toolkitInterface_poolEvents>
    public getExecutionTime : BindFirstParam<typeof toolkitInterface_getExecutionTime>
    public getTotalAllocatedMemory : BindFirstParam<typeof toolkitInterface_getTotalAllocatedMemory>
    public waitQueueIdle : BindFirstParam<typeof toolkitInterface_waitQueueIdle>
    public waitDeviceIdle : BindFirstParam<typeof toolkitInterface_waitDeviceIdle>
    public getObject3dInfoFactory: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getObject3dInfoFactory>, Object3dInfoFactoryInterface>;
    public getShaderFactory: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getShaderFactory>, ShaderFactoryInterface>;
    public getDescriptorSetLayoutFactory: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getDescriptorSetLayoutFactory>, DescriptorSetLayoutFactoryInterface>;
    public getRenderStageFactory: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getRenderStageFactory>, RenderStageFactoryInterface>;
    public getComputeStageFactory: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getComputeStageFactory>, ComputeStageFactoryInterface>;
    public getBufferFactory: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getBufferFactory>, BufferFactoryInterface>;
    public getImageFactory: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getImageFactory>, ImageFactoryInterface>;
    public getSwapChainOutputFactory: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getSwapChainOutputFactory>, SwapChainOutputFactoryInterface>;
    public getSemaphoreFactory: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getSemaphoreFactory>, SemaphoreFactoryInterface>;
    public getKeyboard: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getKeyboard>, KeyboardInterface>;
    public getMouse: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getMouse>, MouseInterface>;
    public getJoystick: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getJoystick>, JoystickInterface>;
    public getMedia: ChangeReturnType<BindFirstParam<typeof toolkitInterface_getMedia>, MediaInterface>;
}        
      