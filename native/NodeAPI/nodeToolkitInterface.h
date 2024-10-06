#include "../VEngineNative.h"

// @ExportFunction toolkitInterface_new_window = (width: number, height: number, validationLayers: boolean, windowName: string): ToolkitInterfacePointer
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

// @ExportFunction toolkitInterface_new_headless = (validationLayers: boolean): ToolkitInterfacePointer
Napi::Value toolkitInterface_new_headless(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    int arg = 0;
    auto validationLayers = asBool(info[arg++]);

    auto vulkan = new VEngine::Renderer::VulkanToolkit(validationLayers);

    return newPointer(vulkan);
};
