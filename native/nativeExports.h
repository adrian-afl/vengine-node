exports["toolkitInterface_new_window"] = Napi::Function::New(env, toolkitInterface_new_window, "toolkitInterface_new_window");
exports["toolkitInterface_new_headless"] = Napi::Function::New(env, toolkitInterface_new_headless, "toolkitInterface_new_headless");
exports["toolkitInterface_shouldCloseWindow"] = Napi::Function::New(env, toolkitInterface_shouldCloseWindow, "toolkitInterface_shouldCloseWindow");
exports["toolkitInterface_poolEvents"] = Napi::Function::New(env, toolkitInterface_poolEvents, "toolkitInterface_poolEvents");
exports["toolkitInterface_getExecutionTime"] = Napi::Function::New(env, toolkitInterface_getExecutionTime, "toolkitInterface_getExecutionTime");
exports["toolkitInterface_getTotalAllocatedMemory"] = Napi::Function::New(env, toolkitInterface_getTotalAllocatedMemory, "toolkitInterface_getTotalAllocatedMemory");
exports["toolkitInterface_waitQueueIdle"] = Napi::Function::New(env, toolkitInterface_waitQueueIdle, "toolkitInterface_waitQueueIdle");
exports["toolkitInterface_waitDeviceIdle"] = Napi::Function::New(env, toolkitInterface_waitDeviceIdle, "toolkitInterface_waitDeviceIdle");