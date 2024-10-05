#pragma once
#include "../Interface/Renderer/Object3dInfoFactoryInterface.h"

class MediaInterface;
namespace VEngine
{
    namespace Renderer
    {
        namespace Internal
        {
            class VulkanDevice;
        }

        class Object3dInfo;

        class Object3dInfoFactory : public Object3dInfoFactoryInterface
        {
        public:
            Object3dInfoFactory(Internal::VulkanDevice* device, MediaInterface* media);
            ~Object3dInfoFactory();

            virtual Object3dInfoInterface* build(std::string path) override;
            virtual Object3dInfoInterface* build(std::vector<float> rawData) override;
            virtual Object3dInfoInterface* getFullScreenQuad() override;
        private:
            Internal::VulkanDevice* device;
            MediaInterface* media;
            Object3dInfoInterface* fullScreenQuad;
        };

    }
}
