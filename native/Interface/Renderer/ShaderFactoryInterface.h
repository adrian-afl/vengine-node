#pragma once
#include <string>
#include "Enums.h"

class ShaderModuleInterface;

class ShaderFactoryInterface
{
public:
    virtual ShaderModuleInterface* build(VEngineShaderModuleType type, std::string path) = 0;
};
