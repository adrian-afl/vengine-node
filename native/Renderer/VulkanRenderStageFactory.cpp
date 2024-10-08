#include "../commonHeaders.h"
#include "VulkanRenderStageFactory.h"
#include "VulkanRenderStage.h"

namespace VEngine
{
    namespace Renderer
    {
        using namespace VEngine::Renderer::Internal;

        VulkanRenderStageFactory::VulkanRenderStageFactory(VulkanDevice* device, SemaphoreFactoryInterface* semaphoreFactory)
            : device(device), semaphoreFactory(semaphoreFactory)
        {
        }

        VulkanRenderStageFactory::~VulkanRenderStageFactory()
        {
        }

        RenderStageInterface * VulkanRenderStageFactory::build(int width, int height, std::vector<ShaderModuleInterface*> shaders,
            std::vector<DescriptorSetLayoutInterface*> layouts, std::vector<AttachmentInterface*> outputImages, VEngineCullMode cullMode)
        {
            return new VulkanRenderStage(device, semaphoreFactory, width, height, shaders, layouts, outputImages, cullMode);
        }
    }
}
