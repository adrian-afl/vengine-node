#pragma once
#include "../Interface/Renderer/SwapChainOutputFactoryInterface.h"

class SwapChainOutputInterface;
class SemaphoreFactoryInterface;
class RenderStageInterface;
namespace VEngine
{
    namespace Renderer
    {
        namespace Internal
        {
            class VulkanDevice;
        }

        class VulkanSwapChainOutputFactory : public SwapChainOutputFactoryInterface
        {
        public:
            VulkanSwapChainOutputFactory(Internal::VulkanDevice* device, SemaphoreFactoryInterface* semaphoreFactory);
            ~VulkanSwapChainOutputFactory();

            virtual SwapChainOutputInterface* build(RenderStageInterface* stage) override; // todo in future allow compute shader to draw to swapchain
        private:
            Internal::VulkanDevice * device;
            SemaphoreFactoryInterface* semaphoreFactory;
        };

    }
}
