#pragma once
#include "../Interface/Renderer/Object3dInfoInterface.h"

namespace VEngine
{
    namespace Renderer
    {
        namespace Internal
        {
            class VulkanDevice;
            class VulkanVertexBuffer;
        }

        class Object3dInfo : public Object3dInfoInterface
        {
        public:
            Object3dInfo(Internal::VulkanDevice * device, std::vector<float> &vbo);
            ~Object3dInfo();

            Internal::VulkanVertexBuffer* getVertexBuffer();

        private:
            Internal::VulkanVertexBuffer * vertexBuffer;
        };

    }
}
