// @ExportFunction genericBufferInterface_map = (instance: GenericBufferInterface, offset: number, size: number): ArrayBuffer
Napi::Value genericBufferInterface_map(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;

    auto instance = (GenericBufferInterface*)castBigIntToVoidPointer(info[arg++]);

    auto param_offset = asUint64(info[arg++]);
    auto param_size = asUint64(info[arg++]);

    void* data = (void*)malloc(sizeof(uint64_t));

    instance->map(param_offset, param_size, &data);

    auto buffer = Napi::ArrayBuffer::New(env, data, param_size);

    return buffer;
};
