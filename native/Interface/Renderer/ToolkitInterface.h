#pragma once
#include <cstdio>

class Object3dInfoFactoryInterface;
class ShaderFactoryInterface;
class DescriptorSetLayoutFactoryInterface;
class RenderStageFactoryInterface;
class ComputeStageFactoryInterface;
class BufferFactoryInterface;
class ImageFactoryInterface;
class SwapChainOutputFactoryInterface;
class SemaphoreFactoryInterface;
class KeyboardInterface;
class MouseInterface;
class JoystickInterface;
class MediaInterface;

class ToolkitInterface
{
public:
    virtual bool shouldCloseWindow() = 0;
    virtual void poolEvents() = 0;
    virtual double getExecutionTime() = 0;
    virtual size_t getTotalAllocatedMemory() = 0;
    virtual void waitQueueIdle() = 0;
    virtual void waitDeviceIdle() = 0;

    virtual Object3dInfoFactoryInterface* getObject3dInfoFactory() = 0;
    virtual ShaderFactoryInterface* getShaderFactory() = 0;
    virtual DescriptorSetLayoutFactoryInterface* getDescriptorSetLayoutFactory() = 0;
    virtual RenderStageFactoryInterface* getRenderStageFactory() = 0;
    virtual ComputeStageFactoryInterface* getComputeStageFactory() = 0;
    virtual BufferFactoryInterface* getBufferFactory() = 0;
    virtual ImageFactoryInterface* getImageFactory() = 0;
    virtual SwapChainOutputFactoryInterface* getSwapChainOutputFactory() = 0;
    virtual SemaphoreFactoryInterface* getSemaphoreFactory() = 0;
    virtual KeyboardInterface* getKeyboard() = 0;
    virtual MouseInterface* getMouse() = 0;
    virtual JoystickInterface* getJoystick() = 0;
    virtual MediaInterface* getMedia() = 0;
};
