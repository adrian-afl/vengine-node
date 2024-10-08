#pragma once
#include "../Interface/Renderer/Enums.h"
#include "../Interface/Renderer/RenderStageFactoryInterface.h"

class SemaphoreFactoryInterface;
namespace VEngine
{
    namespace Renderer
    {
        namespace Internal
        {
            class VulkanDevice;
        }

        class VulkanRenderStageFactory : public RenderStageFactoryInterface
        {
        public:
            VulkanRenderStageFactory(Internal::VulkanDevice* device, SemaphoreFactoryInterface* semaphoreFactory);
            ~VulkanRenderStageFactory();

            virtual RenderStageInterface* build(int width, int height,
                std::vector<ShaderModuleInterface*> shaders,
                std::vector<DescriptorSetLayoutInterface*> layouts,
                std::vector<AttachmentInterface*> outputImages,
                VEngineCullMode cullMode) override;

        private:
            Internal::VulkanDevice * device;
            SemaphoreFactoryInterface* semaphoreFactory;
        };

    }
}
