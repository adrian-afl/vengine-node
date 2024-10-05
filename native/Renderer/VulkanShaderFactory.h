#pragma once
#include "../Interface/Renderer/Enums.h"
#include "../Interface/Renderer/ShaderFactoryInterface.h"

class MediaInterface;
class ShaderModuleInterface;

namespace VEngine
{
    namespace Renderer
    {
        namespace Internal
        {
            class VulkanDevice;
        }


        class VulkanShaderFactory : public ShaderFactoryInterface
        {
        public:
            VulkanShaderFactory(Internal::VulkanDevice* device);
            ~VulkanShaderFactory();

            virtual ShaderModuleInterface* build(VEngineShaderModuleType type, std::string path) override;
        private:
            Internal::VulkanDevice * device;
            MediaInterface* media;
        };

    }
}
