#pragma once
#include "../Interface/Renderer/ToolkitInterface.h"

class KeyboardInterface;
class MouseInterface;
class JoystickInterface;
class Object3dInfoFactoryInterface;
class ShaderFactoryInterface;
class DescriptorSetLayoutFactoryInterface;
class RenderStageFactoryInterface;
class ComputeStageFactoryInterface;
class BufferFactoryInterface;
class ImageFactoryInterface;
class SwapChainOutputFactoryInterface;

class MediaInterface;

namespace VEngine
{
    namespace Renderer
    {
        namespace Internal
        {
            class VulkanDevice;
        }

        class VulkanToolkit : public ToolkitInterface
        {
        public:
            VulkanToolkit(int width, int height, bool enableValidation, std::string windowName);
            VulkanToolkit(bool enableValidation);
            ~VulkanToolkit();
            virtual bool shouldCloseWindow() override;
            virtual void poolEvents() override;
            virtual double getExecutionTime() override;
            virtual size_t getTotalAllocatedMemory() override;
            virtual void waitQueueIdle() override;
            virtual void waitDeviceIdle() override;

            virtual Object3dInfoFactoryInterface* getObject3dInfoFactory() override;
            virtual ShaderFactoryInterface* getShaderFactory() override;
            virtual DescriptorSetLayoutFactoryInterface* getDescriptorSetLayoutFactory() override;
            virtual RenderStageFactoryInterface* getRenderStageFactory() override;
            virtual ComputeStageFactoryInterface* getComputeStageFactory() override;
            virtual BufferFactoryInterface* getBufferFactory() override;
            virtual ImageFactoryInterface* getImageFactory() override;
            virtual SwapChainOutputFactoryInterface* getSwapChainOutputFactory() override;
            virtual SemaphoreFactoryInterface* getSemaphoreFactory() override;
            virtual KeyboardInterface* getKeyboard() override;
            virtual MouseInterface* getMouse() override;
            virtual JoystickInterface* getJoystick() override;
            virtual MediaInterface* getMedia() override;

        private:
            Internal::VulkanDevice * device;
            MediaInterface* media;
            int windowWidth;
            int windowHeight;

            SemaphoreFactoryInterface* vulkanSemaphoreFactory;
            Object3dInfoFactoryInterface* object3dInfoFactory;
            ShaderFactoryInterface* vulkanShaderFactory;
            DescriptorSetLayoutFactoryInterface* vulkanDescriptorSetLayoutFactory;
            RenderStageFactoryInterface* vulkanRenderStageFactory;
            ComputeStageFactoryInterface* vulkanComputeStageFactory;
            BufferFactoryInterface* vulkanBufferFactory;
            ImageFactoryInterface* vulkanImageFactory;
            SwapChainOutputFactoryInterface* vulkanSwapChainOutputFactory;
            KeyboardInterface* keyboard;
            MouseInterface* mouse;
            JoystickInterface* joystick;
        };

    }
}
