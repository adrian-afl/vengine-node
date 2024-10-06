// @ExportFunction joystickInterface_getButtonsStatus = (instance: JoystickInterfacePointer, index: number): boolean[]
Napi::Value joystickInterface_getButtonsStatus(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (JoystickInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_index = asInt32(info[arg++]);
    
    auto result = instance->getButtonsStatus(param_index);

    auto resultArray = Napi::Array::New(env);
    for(uint32_t arri = 0; arri < result.size(); arri++){
        resultArray.Set(arri, newBoolean(result[arri]));
    }
    return resultArray;
};
        

// @ExportFunction joystickInterface_isPresent = (instance: JoystickInterfacePointer, index: number): boolean
Napi::Value joystickInterface_isPresent(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (JoystickInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_index = asInt32(info[arg++]);
    
    auto result = instance->isPresent(param_index);

    return newBoolean(result);
};
        

// @ExportFunction joystickInterface_getAxes = (instance: JoystickInterfacePointer, index: number): number[]
Napi::Value joystickInterface_getAxes(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (JoystickInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_index = asInt32(info[arg++]);
    
    auto result = instance->getAxes(param_index);

    auto resultArray = Napi::Array::New(env);
    for(uint32_t arri = 0; arri < result.size(); arri++){
        resultArray.Set(arri, newNumber(result[arri]));
    }
    return resultArray;
};
        

// @ExportFunction keyboardInterface_isKeyDown = (instance: KeyboardInterfacePointer, key: number): boolean
Napi::Value keyboardInterface_isKeyDown(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (KeyboardInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_key = asInt32(info[arg++]);
    
    auto result = instance->isKeyDown(param_key);

    return newBoolean(result);
};
        

// @ExportFunction mouseInterface_setCursorMode = (instance: MouseInterfacePointer, mode: number): void
Napi::Value mouseInterface_setCursorMode(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (MouseInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_mode = asInt32(info[arg++]);
    
    instance->setCursorMode(param_mode);

    return env.Undefined();
};
        

// @ExportFunction mouseInterface_isButtonPressed = (instance: MouseInterfacePointer, button: number): boolean
Napi::Value mouseInterface_isButtonPressed(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (MouseInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_button = asInt32(info[arg++]);
    
    auto result = instance->isButtonPressed(param_button);

    return newBoolean(result);
};
        

// @ExportFunction attachmentInterface_getImage = (instance: AttachmentInterfacePointer): ImageInterfacePointer
Napi::Value attachmentInterface_getImage(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (AttachmentInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getImage();

    return newPointer(result);
};
        

// @ExportFunction attachmentInterface_getBlending = (instance: AttachmentInterfacePointer): VEngineAttachmentBlending
Napi::Value attachmentInterface_getBlending(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (AttachmentInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getBlending();

    return newNumber(result);
};
        

// @ExportFunction attachmentInterface_isCleared = (instance: AttachmentInterfacePointer): boolean
Napi::Value attachmentInterface_isCleared(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (AttachmentInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->isCleared();

    return newBoolean(result);
};
        

// @ExportFunction bufferFactoryInterface_build = (instance: BufferFactoryInterfacePointer, type: VEngineBufferType, size: number): GenericBufferInterfacePointer
Napi::Value bufferFactoryInterface_build(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (BufferFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_type = (VEngineBufferType)asInt32(info[arg++]);
auto param_size = asUint64(info[arg++]);
    
    auto result = instance->build(param_type, param_size);

    return newPointer(result);
};
        

// @ExportFunction computeStageFactoryInterface_build = (instance: ComputeStageFactoryInterfacePointer, shader: ShaderModuleInterfacePointer, layouts: DescriptorSetLayoutInterfacePointer[]): ComputeStageInterfacePointer
Napi::Value computeStageFactoryInterface_build(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ComputeStageFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_shader = (ShaderModuleInterface*)castBigIntToVoidPointer(info[arg++]);
auto param_layouts = asVectorOfPointers<DescriptorSetLayoutInterface>(info[arg++]);
    
    auto result = instance->build(param_shader, param_layouts);

    return newPointer(result);
};
        

// @ExportFunction computeStageInterface_beginRecording = (instance: ComputeStageInterfacePointer): void
Napi::Value computeStageInterface_beginRecording(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ComputeStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->beginRecording();

    return env.Undefined();
};
        

// @ExportFunction computeStageInterface_endRecording = (instance: ComputeStageInterfacePointer): void
Napi::Value computeStageInterface_endRecording(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ComputeStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->endRecording();

    return env.Undefined();
};
        

// @ExportFunction computeStageInterface_dispatch = (instance: ComputeStageInterfacePointer, sets: DescriptorSetInterfacePointer[], groupX: number, groupY: number, groupZ: number): void
Napi::Value computeStageInterface_dispatch(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ComputeStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_sets = asVectorOfPointers<DescriptorSetInterface>(info[arg++]);
auto param_groupX = asUint32(info[arg++]);
auto param_groupY = asUint32(info[arg++]);
auto param_groupZ = asUint32(info[arg++]);
    
    instance->dispatch(param_sets, param_groupX, param_groupY, param_groupZ);

    return env.Undefined();
};
        

// @ExportFunction computeStageInterface_submit = (instance: ComputeStageInterfacePointer, waitSemaphores: SemaphoreInterfacePointer[]): void
Napi::Value computeStageInterface_submit(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ComputeStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_waitSemaphores = asVectorOfPointers<SemaphoreInterface>(info[arg++]);
    
    instance->submit(param_waitSemaphores);

    return env.Undefined();
};
        

// @ExportFunction computeStageInterface_submitNoSemaphores = (instance: ComputeStageInterfacePointer, waitSemaphores: SemaphoreInterfacePointer[]): void
Napi::Value computeStageInterface_submitNoSemaphores(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ComputeStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_waitSemaphores = asVectorOfPointers<SemaphoreInterface>(info[arg++]);
    
    instance->submitNoSemaphores(param_waitSemaphores);

    return env.Undefined();
};
        

// @ExportFunction computeStageInterface_getSignalSemaphore = (instance: ComputeStageInterfacePointer): SemaphoreInterfacePointer
Napi::Value computeStageInterface_getSignalSemaphore(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ComputeStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getSignalSemaphore();

    return newPointer(result);
};
        

// @ExportFunction descriptorSetInterface_bindImageViewSampler = (instance: DescriptorSetInterfacePointer, binding: number, img: ImageInterfacePointer): void
Napi::Value descriptorSetInterface_bindImageViewSampler(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (DescriptorSetInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_binding = asUint32(info[arg++]);
auto param_img = (ImageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    instance->bindImageViewSampler(param_binding, param_img);

    return env.Undefined();
};
        

// @ExportFunction descriptorSetInterface_bindImageStorage = (instance: DescriptorSetInterfacePointer, binding: number, img: ImageInterfacePointer): void
Napi::Value descriptorSetInterface_bindImageStorage(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (DescriptorSetInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_binding = asUint32(info[arg++]);
auto param_img = (ImageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    instance->bindImageStorage(param_binding, param_img);

    return env.Undefined();
};
        

// @ExportFunction descriptorSetInterface_bindBuffer = (instance: DescriptorSetInterfacePointer, binding: number, buffer: GenericBufferInterfacePointer): void
Napi::Value descriptorSetInterface_bindBuffer(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (DescriptorSetInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_binding = asUint32(info[arg++]);
auto param_buffer = (GenericBufferInterface*)castBigIntToVoidPointer(info[arg++]);
    
    instance->bindBuffer(param_binding, param_buffer);

    return env.Undefined();
};
        

// @ExportFunction descriptorSetLayoutFactoryInterface_build = (instance: DescriptorSetLayoutFactoryInterfacePointer): DescriptorSetLayoutInterfacePointer
Napi::Value descriptorSetLayoutFactoryInterface_build(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (DescriptorSetLayoutFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->build();

    return newPointer(result);
};
        

// @ExportFunction descriptorSetLayoutInterface_addField = (instance: DescriptorSetLayoutInterfacePointer, fieldType: VEngineDescriptorSetFieldType, fieldAccesibility: VEngineDescriptorSetFieldStage): void
Napi::Value descriptorSetLayoutInterface_addField(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (DescriptorSetLayoutInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_fieldType = (VEngineDescriptorSetFieldType)asInt32(info[arg++]);
auto param_fieldAccesibility = (VEngineDescriptorSetFieldStage)asInt32(info[arg++]);
    
    instance->addField(param_fieldType, param_fieldAccesibility);

    return env.Undefined();
};
        

// @ExportFunction descriptorSetLayoutInterface_generateDescriptorSet = (instance: DescriptorSetLayoutInterfacePointer): DescriptorSetInterfacePointer
Napi::Value descriptorSetLayoutInterface_generateDescriptorSet(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (DescriptorSetLayoutInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->generateDescriptorSet();

    return newPointer(result);
};
        

// @ExportFunction genericBufferInterface_unmap = (instance: GenericBufferInterfacePointer): void
Napi::Value genericBufferInterface_unmap(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (GenericBufferInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->unmap();

    return env.Undefined();
};
        

// @ExportFunction genericBufferInterface_getSize = (instance: GenericBufferInterfacePointer): number
Napi::Value genericBufferInterface_getSize(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (GenericBufferInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getSize();

    return newNumber(result);
};
        

// @ExportFunction genericBufferInterface_getType = (instance: GenericBufferInterfacePointer): VEngineBufferType
Napi::Value genericBufferInterface_getType(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (GenericBufferInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getType();

    return newNumber(result);
};
        

// @ExportFunction imageFactoryInterface_build = (instance: ImageFactoryInterfacePointer, width: number, height: number, depth: number, format: VEngineImageFormat, usage: VEngineImageUsage, aspect: VEngineImageAspect, layout: VEngineImageLayout): ImageInterfacePointer
Napi::Value imageFactoryInterface_build(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ImageFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_width = asUint32(info[arg++]);
auto param_height = asUint32(info[arg++]);
auto param_depth = asUint32(info[arg++]);
auto param_format = (VEngineImageFormat)asInt32(info[arg++]);
auto param_usage = (VEngineImageUsage)asInt32(info[arg++]);
auto param_aspect = (VEngineImageAspect)asInt32(info[arg++]);
auto param_layout = (VEngineImageLayout)asInt32(info[arg++]);
    
    auto result = instance->build(param_width, param_height, param_depth, param_format, param_usage, param_aspect, param_layout);

    return newPointer(result);
};
        

// @ExportFunction imageFactoryInterface_buildMipmapped = (instance: ImageFactoryInterfacePointer, width: number, height: number, depth: number, format: VEngineImageFormat, usage: VEngineImageUsage, aspect: VEngineImageAspect, layout: VEngineImageLayout): ImageInterfacePointer
Napi::Value imageFactoryInterface_buildMipmapped(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ImageFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_width = asUint32(info[arg++]);
auto param_height = asUint32(info[arg++]);
auto param_depth = asUint32(info[arg++]);
auto param_format = (VEngineImageFormat)asInt32(info[arg++]);
auto param_usage = (VEngineImageUsage)asInt32(info[arg++]);
auto param_aspect = (VEngineImageAspect)asInt32(info[arg++]);
auto param_layout = (VEngineImageLayout)asInt32(info[arg++]);
    
    auto result = instance->buildMipmapped(param_width, param_height, param_depth, param_format, param_usage, param_aspect, param_layout);

    return newPointer(result);
};
        

// @ExportFunction imageFactoryInterface_loadFromFile = (instance: ImageFactoryInterfacePointer, path: string): ImageInterfacePointer
Napi::Value imageFactoryInterface_loadFromFile(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ImageFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_path = asString(info[arg++]);
    
    auto result = instance->loadFromFile(param_path);

    return newPointer(result);
};
        

// @ExportFunction imageFactoryInterface_createFromExistingData = (instance: ImageFactoryInterfacePointer, width: number, height: number, channelCount: number, data: ArrayBuffer): ImageInterfacePointer
Napi::Value imageFactoryInterface_createFromExistingData(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ImageFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_width = asUint32(info[arg++]);
auto param_height = asUint32(info[arg++]);
auto param_channelCount = asUint32(info[arg++]);
auto param_data = asVoidBufferPointer(info[arg++]);
    
    auto result = instance->createFromExistingData(param_width, param_height, param_channelCount, param_data);

    return newPointer(result);
};
        

// @ExportFunction imageFactoryInterface_resolveIsDepthBuffer = (instance: ImageFactoryInterfacePointer, format: VEngineImageFormat): boolean
Napi::Value imageFactoryInterface_resolveIsDepthBuffer(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ImageFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_format = (VEngineImageFormat)asInt32(info[arg++]);
    
    auto result = instance->resolveIsDepthBuffer(param_format);

    return newBoolean(result);
};
        

// @ExportFunction imageInterface_getAttachment = (instance: ImageInterfacePointer, blending: VEngineAttachmentBlending, clear: boolean, clearColor: number[], forPresent: boolean): AttachmentInterfacePointer
Napi::Value imageInterface_getAttachment(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ImageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_blending = (VEngineAttachmentBlending)asInt32(info[arg++]);
auto param_clear = asBool(info[arg++]);
auto param_clearColor = asClearColor4Float(info[arg++]);
auto param_forPresent = asBool(info[arg++]);
    
    auto result = instance->getAttachment(param_blending, param_clear, param_clearColor, param_forPresent);

    return newPointer(result);
};
        

// @ExportFunction imageInterface_isDepthBuffer = (instance: ImageInterfacePointer): boolean
Napi::Value imageInterface_isDepthBuffer(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ImageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->isDepthBuffer();

    return newBoolean(result);
};
        

// @ExportFunction imageInterface_regenerateMipmaps = (instance: ImageInterfacePointer): void
Napi::Value imageInterface_regenerateMipmaps(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ImageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->regenerateMipmaps();

    return env.Undefined();
};
        

// @ExportFunction object3dInfoFactoryInterface_loadFromFile = (instance: Object3dInfoFactoryInterfacePointer, path: string): Object3dInfoInterfacePointer
Napi::Value object3dInfoFactoryInterface_loadFromFile(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (Object3dInfoFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_path = asString(info[arg++]);
    
    auto result = instance->loadFromFile(param_path);

    return newPointer(result);
};
        

// @ExportFunction object3dInfoFactoryInterface_loadFromArray = (instance: Object3dInfoFactoryInterfacePointer, rawData: number[]): Object3dInfoInterfacePointer
Napi::Value object3dInfoFactoryInterface_loadFromArray(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (Object3dInfoFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_rawData = asVectorOfFloat(info[arg++]);
    
    auto result = instance->loadFromArray(param_rawData);

    return newPointer(result);
};
        

// @ExportFunction object3dInfoFactoryInterface_getFullScreenQuad = (instance: Object3dInfoFactoryInterfacePointer): Object3dInfoInterfacePointer
Napi::Value object3dInfoFactoryInterface_getFullScreenQuad(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (Object3dInfoFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getFullScreenQuad();

    return newPointer(result);
};
        

// @ExportFunction renderStageFactoryInterface_build = (instance: RenderStageFactoryInterfacePointer, width: number, height: number, shaders: ShaderModuleInterfacePointer[], layouts: DescriptorSetLayoutInterfacePointer[], outputImages: AttachmentInterfacePointer[], cullMode: VEngineCullMode): RenderStageInterfacePointer
Napi::Value renderStageFactoryInterface_build(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_width = asInt32(info[arg++]);
auto param_height = asInt32(info[arg++]);
auto param_shaders = asVectorOfPointers<ShaderModuleInterface>(info[arg++]);
auto param_layouts = asVectorOfPointers<DescriptorSetLayoutInterface>(info[arg++]);
auto param_outputImages = asVectorOfPointers<AttachmentInterface>(info[arg++]);
auto param_cullMode = (VEngineCullMode)asInt32(info[arg++]);
    
    auto result = instance->build(param_width, param_height, param_shaders, param_layouts, param_outputImages, param_cullMode);

    return newPointer(result);
};
        

// @ExportFunction renderStageInterface_beginDrawing = (instance: RenderStageInterfacePointer): void
Napi::Value renderStageInterface_beginDrawing(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->beginDrawing();

    return env.Undefined();
};
        

// @ExportFunction renderStageInterface_endDrawing = (instance: RenderStageInterfacePointer): void
Napi::Value renderStageInterface_endDrawing(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->endDrawing();

    return env.Undefined();
};
        

// @ExportFunction renderStageInterface_setSets = (instance: RenderStageInterfacePointer, sets: DescriptorSetInterfacePointer[]): void
Napi::Value renderStageInterface_setSets(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_sets = asVectorOfPointers<DescriptorSetInterface>(info[arg++]);
    
    instance->setSets(param_sets);

    return env.Undefined();
};
        

// @ExportFunction renderStageInterface_setSet = (instance: RenderStageInterfacePointer, index: number, set: DescriptorSetInterfacePointer): void
Napi::Value renderStageInterface_setSet(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_index = asUint32(info[arg++]);
auto param_set = (DescriptorSetInterface*)castBigIntToVoidPointer(info[arg++]);
    
    instance->setSet(param_index, param_set);

    return env.Undefined();
};
        

// @ExportFunction renderStageInterface_drawMesh = (instance: RenderStageInterfacePointer, info: Object3dInfoInterfacePointer, instances: number): void
Napi::Value renderStageInterface_drawMesh(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_info = (Object3dInfoInterface*)castBigIntToVoidPointer(info[arg++]);
auto param_instances = asUint32(info[arg++]);
    
    instance->drawMesh(param_info, param_instances);

    return env.Undefined();
};
        

// @ExportFunction renderStageInterface_submit = (instance: RenderStageInterfacePointer, waitSemaphores: SemaphoreInterfacePointer[]): void
Napi::Value renderStageInterface_submit(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_waitSemaphores = asVectorOfPointers<SemaphoreInterface>(info[arg++]);
    
    instance->submit(param_waitSemaphores);

    return env.Undefined();
};
        

// @ExportFunction renderStageInterface_submitNoSemaphores = (instance: RenderStageInterfacePointer, waitSemaphores: SemaphoreInterfacePointer[]): void
Napi::Value renderStageInterface_submitNoSemaphores(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_waitSemaphores = asVectorOfPointers<SemaphoreInterface>(info[arg++]);
    
    instance->submitNoSemaphores(param_waitSemaphores);

    return env.Undefined();
};
        

// @ExportFunction renderStageInterface_copy = (instance: RenderStageInterfacePointer): RenderStageInterfacePointer
Napi::Value renderStageInterface_copy(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->copy();

    return newPointer(result);
};
        

// @ExportFunction renderStageInterface_copyWithNewOutput = (instance: RenderStageInterfacePointer, outputImages: AttachmentInterfacePointer[]): RenderStageInterfacePointer
Napi::Value renderStageInterface_copyWithNewOutput(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_outputImages = asVectorOfPointers<AttachmentInterface>(info[arg++]);
    
    auto result = instance->copyWithNewOutput(param_outputImages);

    return newPointer(result);
};
        

// @ExportFunction renderStageInterface_getSignalSemaphore = (instance: RenderStageInterfacePointer): SemaphoreInterfacePointer
Napi::Value renderStageInterface_getSignalSemaphore(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getSignalSemaphore();

    return newPointer(result);
};
        

// @ExportFunction semaphoreFactoryInterface_build = (instance: SemaphoreFactoryInterfacePointer): SemaphoreInterfacePointer
Napi::Value semaphoreFactoryInterface_build(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (SemaphoreFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->build();

    return newPointer(result);
};
        

// @ExportFunction shaderFactoryInterface_build = (instance: ShaderFactoryInterfacePointer, type: VEngineShaderModuleType, path: string): ShaderModuleInterfacePointer
Napi::Value shaderFactoryInterface_build(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ShaderFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_type = (VEngineShaderModuleType)asInt32(info[arg++]);
auto param_path = asString(info[arg++]);
    
    auto result = instance->build(param_type, param_path);

    return newPointer(result);
};
        

// @ExportFunction shaderModuleInterface_getType = (instance: ShaderModuleInterfacePointer): VEngineShaderModuleType
Napi::Value shaderModuleInterface_getType(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ShaderModuleInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getType();

    return newNumber(result);
};
        

// @ExportFunction swapChainOutputFactoryInterface_build = (instance: SwapChainOutputFactoryInterfacePointer, stage: RenderStageInterfacePointer): SwapChainOutputInterfacePointer
Napi::Value swapChainOutputFactoryInterface_build(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (SwapChainOutputFactoryInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_stage = (RenderStageInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto result = instance->build(param_stage);

    return newPointer(result);
};
        

// @ExportFunction swapChainOutputInterface_beginDrawing = (instance: SwapChainOutputInterfacePointer): void
Napi::Value swapChainOutputInterface_beginDrawing(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (SwapChainOutputInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->beginDrawing();

    return env.Undefined();
};
        

// @ExportFunction swapChainOutputInterface_endDrawing = (instance: SwapChainOutputInterfacePointer): void
Napi::Value swapChainOutputInterface_endDrawing(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (SwapChainOutputInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->endDrawing();

    return env.Undefined();
};
        

// @ExportFunction swapChainOutputInterface_drawMesh = (instance: SwapChainOutputInterfacePointer, info: Object3dInfoInterfacePointer, instances: number): void
Napi::Value swapChainOutputInterface_drawMesh(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (SwapChainOutputInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_info = (Object3dInfoInterface*)castBigIntToVoidPointer(info[arg++]);
auto param_instances = asUint32(info[arg++]);
    
    instance->drawMesh(param_info, param_instances);

    return env.Undefined();
};
        

// @ExportFunction swapChainOutputInterface_submit = (instance: SwapChainOutputInterfacePointer, waitSemaphores: SemaphoreInterfacePointer[]): void
Napi::Value swapChainOutputInterface_submit(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (SwapChainOutputInterface*)castBigIntToVoidPointer(info[arg++]);
    
    auto param_waitSemaphores = asVectorOfPointers<SemaphoreInterface>(info[arg++]);
    
    instance->submit(param_waitSemaphores);

    return env.Undefined();
};
        

// @ExportFunction swapChainOutputInterface_getSignalSemaphores = (instance: SwapChainOutputInterfacePointer): SemaphoreInterfacePointer[]
Napi::Value swapChainOutputInterface_getSignalSemaphores(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (SwapChainOutputInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getSignalSemaphores();

    auto resultArray = Napi::Array::New(env);;
    for(uint32_t arri = 0; arri < result.size(); arri++){
        resultArray.Set(arri, newPointer(result[arri]));
    }
    return resultArray;
};
        

// @ExportFunction toolkitInterface_shouldCloseWindow = (instance: ToolkitInterfacePointer): boolean
Napi::Value toolkitInterface_shouldCloseWindow(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->shouldCloseWindow();

    return newBoolean(result);
};
        

// @ExportFunction toolkitInterface_poolEvents = (instance: ToolkitInterfacePointer): void
Napi::Value toolkitInterface_poolEvents(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->poolEvents();

    return env.Undefined();
};
        

// @ExportFunction toolkitInterface_getExecutionTime = (instance: ToolkitInterfacePointer): number
Napi::Value toolkitInterface_getExecutionTime(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getExecutionTime();

    return newNumber(result);
};
        

// @ExportFunction toolkitInterface_getTotalAllocatedMemory = (instance: ToolkitInterfacePointer): number
Napi::Value toolkitInterface_getTotalAllocatedMemory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getTotalAllocatedMemory();

    return newNumber(result);
};
        

// @ExportFunction toolkitInterface_waitQueueIdle = (instance: ToolkitInterfacePointer): void
Napi::Value toolkitInterface_waitQueueIdle(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->waitQueueIdle();

    return env.Undefined();
};
        

// @ExportFunction toolkitInterface_waitDeviceIdle = (instance: ToolkitInterfacePointer): void
Napi::Value toolkitInterface_waitDeviceIdle(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    instance->waitDeviceIdle();

    return env.Undefined();
};
        

// @ExportFunction toolkitInterface_getObject3dInfoFactory = (instance: ToolkitInterfacePointer): Object3dInfoFactoryInterfacePointer
Napi::Value toolkitInterface_getObject3dInfoFactory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getObject3dInfoFactory();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getShaderFactory = (instance: ToolkitInterfacePointer): ShaderFactoryInterfacePointer
Napi::Value toolkitInterface_getShaderFactory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getShaderFactory();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getDescriptorSetLayoutFactory = (instance: ToolkitInterfacePointer): DescriptorSetLayoutFactoryInterfacePointer
Napi::Value toolkitInterface_getDescriptorSetLayoutFactory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getDescriptorSetLayoutFactory();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getRenderStageFactory = (instance: ToolkitInterfacePointer): RenderStageFactoryInterfacePointer
Napi::Value toolkitInterface_getRenderStageFactory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getRenderStageFactory();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getComputeStageFactory = (instance: ToolkitInterfacePointer): ComputeStageFactoryInterfacePointer
Napi::Value toolkitInterface_getComputeStageFactory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getComputeStageFactory();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getBufferFactory = (instance: ToolkitInterfacePointer): BufferFactoryInterfacePointer
Napi::Value toolkitInterface_getBufferFactory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getBufferFactory();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getImageFactory = (instance: ToolkitInterfacePointer): ImageFactoryInterfacePointer
Napi::Value toolkitInterface_getImageFactory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getImageFactory();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getSwapChainOutputFactory = (instance: ToolkitInterfacePointer): SwapChainOutputFactoryInterfacePointer
Napi::Value toolkitInterface_getSwapChainOutputFactory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getSwapChainOutputFactory();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getSemaphoreFactory = (instance: ToolkitInterfacePointer): SemaphoreFactoryInterfacePointer
Napi::Value toolkitInterface_getSemaphoreFactory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getSemaphoreFactory();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getKeyboard = (instance: ToolkitInterfacePointer): KeyboardInterfacePointer
Napi::Value toolkitInterface_getKeyboard(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getKeyboard();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getMouse = (instance: ToolkitInterfacePointer): MouseInterfacePointer
Napi::Value toolkitInterface_getMouse(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getMouse();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getJoystick = (instance: ToolkitInterfacePointer): JoystickInterfacePointer
Napi::Value toolkitInterface_getJoystick(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getJoystick();

    return newPointer(result);
};
        

// @ExportFunction toolkitInterface_getMedia = (instance: ToolkitInterfacePointer): MediaInterfacePointer
Napi::Value toolkitInterface_getMedia(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    
    auto instance = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);
    
    
    
    auto result = instance->getMedia();

    return newPointer(result);
};
        