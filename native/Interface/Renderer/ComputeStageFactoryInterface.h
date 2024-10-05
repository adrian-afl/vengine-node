#pragma once
#include <vector>

class ComputeStageInterface;
class ShaderModuleInterface;
class DescriptorSetLayoutInterface;

class ComputeStageFactoryInterface
{
public:
    virtual ComputeStageInterface* build(ShaderModuleInterface* shader, std::vector<DescriptorSetLayoutInterface*> layouts) = 0;
};
