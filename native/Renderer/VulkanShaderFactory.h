#pragma once
#include "../Interface/Renderer/Enums.h"
#include "../Interface/Renderer/ShaderFactoryInterface.h"

namespace VEngine
{
    namespace FileSystem
    {
        class MediaInterface;
    }

    namespace Renderer
    {
        namespace Internal
        {
            class VulkanDevice;
        }

        class ShaderModuleInterface;

        class VulkanShaderFactory : public ShaderFactoryInterface
        {
        public:
            VulkanShaderFactory(Internal::VulkanDevice* device);
            ~VulkanShaderFactory();

            virtual ShaderModuleInterface* build(VEngineShaderModuleType type, std::string path) override;
        private:
            Internal::VulkanDevice * device;
            FileSystem::MediaInterface* media;
        };

    }
}