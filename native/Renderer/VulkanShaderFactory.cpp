#include "../commonHeaders.h"
#include "VulkanShaderFactory.h"
#include "VulkanShaderModule.h"
#include "../Interface/FileSystem/MediaInterface.h"

namespace VEngine
{
    namespace Renderer
    {
        using namespace VEngine::Renderer::Internal;
        using namespace VEngine::FileSystem;

        VulkanShaderFactory::VulkanShaderFactory(VulkanDevice* device)
            : device(device)
        {
        }

        VulkanShaderFactory::~VulkanShaderFactory()
        {
        }

        ShaderModuleInterface * VulkanShaderFactory::build(VEngineShaderModuleType type, std::string path)
        {
            return new VulkanShaderModule(device, type, path);
        }

    }
}
