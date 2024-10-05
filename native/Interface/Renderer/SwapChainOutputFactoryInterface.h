#pragma once
class VulkanDevice;

class SwapChainOutputInterface;
class RenderStageInterface;

class SwapChainOutputFactoryInterface
{
public:
    virtual SwapChainOutputInterface * build(RenderStageInterface* stage) = 0;
};
