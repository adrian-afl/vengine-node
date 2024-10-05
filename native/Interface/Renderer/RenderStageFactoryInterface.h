#pragma once
#include <vector>
#include "Enums.h"

class RenderStageInterface;
class ShaderModuleInterface;
class DescriptorSetLayoutInterface;
class AttachmentInterface;

class RenderStageFactoryInterface
{
public:
    virtual RenderStageInterface* build(int width, int height, std::vector<ShaderModuleInterface*> shaders, std::vector<DescriptorSetLayoutInterface*> layouts, std::vector<AttachmentInterface*> outputImages, VEngineCullMode cullMode) = 0;
};
