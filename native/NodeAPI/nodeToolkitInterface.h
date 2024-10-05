#include "../VEngineNative.h"

// @ExportFunction toolkitInterface_new_window = (width: number, height: number, validationLayers: boolean, windowName: string): ToolkitInterface
Napi::Value toolkitInterface_new_window(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    auto width = asUint32(info[arg++]);
    auto height = asUint32(info[arg++]);
    auto validationLayers = asBool(info[arg++]);
    auto windowName = asString(info[arg++]);

    auto vulkan = new VEngine::Renderer::VulkanToolkit(width, height, validationLayers, windowName);

    return newPointer(vulkan);
};

// @ExportFunction toolkitInterface_new_headless = (validationLayers: boolean): ToolkitInterface
Napi::Value toolkitInterface_new_headless(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    auto validationLayers = asBool(info[arg++]);

    auto vulkan = new VEngine::Renderer::VulkanToolkit(validationLayers);

    return newPointer(vulkan);
};

// @ExportFunction toolkitInterface_shouldCloseWindow = (toolkit: ToolkitInterface): boolean
Napi::Value toolkitInterface_shouldCloseWindow(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    auto toolkit = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);

    return newBoolean(toolkit->shouldCloseWindow());
};

// @ExportFunction toolkitInterface_poolEvents = (toolkit: ToolkitInterface): void
Napi::Value toolkitInterface_poolEvents(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    auto toolkit = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);

    toolkit->poolEvents();

    return env.Undefined();
};

// @ExportFunction toolkitInterface_getExecutionTime = (toolkit: ToolkitInterface): number
Napi::Value toolkitInterface_getExecutionTime(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    auto toolkit = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);

    return newNumber(toolkit->getExecutionTime());
};

// @ExportFunction toolkitInterface_getTotalAllocatedMemory = (toolkit: ToolkitInterface): number
Napi::Value toolkitInterface_getTotalAllocatedMemory(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    auto toolkit = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);

    return newNumber(toolkit->getTotalAllocatedMemory());
};

// @ExportFunction toolkitInterface_waitQueueIdle = (toolkit: ToolkitInterface): number
Napi::Value toolkitInterface_waitQueueIdle(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    auto toolkit = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);

    toolkit->waitQueueIdle();

    return env.Undefined();
};

// @ExportFunction toolkitInterface_waitDeviceIdle = (toolkit: ToolkitInterface): number
Napi::Value toolkitInterface_waitDeviceIdle(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    auto toolkit = (ToolkitInterface*)castBigIntToVoidPointer(info[arg++]);

    toolkit->waitDeviceIdle();

    return env.Undefined();
};
