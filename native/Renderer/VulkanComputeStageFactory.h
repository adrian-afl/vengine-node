#pragma once
#include "../Interface/Renderer/ComputeStageFactoryInterface.h"

class SemaphoreFactoryInterface;

namespace VEngine
{
    namespace Renderer
    {
        namespace Internal
        {
            class VulkanDevice;
        }

        class VulkanComputeStageFactory : public ComputeStageFactoryInterface
        {
        public:
            VulkanComputeStageFactory(Internal::VulkanDevice* device, SemaphoreFactoryInterface* semaphoreFactory);
            ~VulkanComputeStageFactory();

            virtual ComputeStageInterface* build(ShaderModuleInterface* shader, std::vector<DescriptorSetLayoutInterface*> layouts) override;
        private:
            Internal::VulkanDevice * device;
            SemaphoreFactoryInterface* semaphoreFactory;
        };

    }
}
