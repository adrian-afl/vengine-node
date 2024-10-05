#pragma once
#include "Enums.h"


class ShaderModuleInterface
{
public:
    virtual VEngineShaderModuleType getType() = 0;
};
