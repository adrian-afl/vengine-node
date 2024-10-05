#pragma once
#include <string>
#include "Enums.h"

class ShaderModuleInterface;

class ShaderFactoryInterface
{
public:
    virtual ShaderModuleInterface * build(VEngineShaderModuleType type, std::string mediakey) = 0;
};
