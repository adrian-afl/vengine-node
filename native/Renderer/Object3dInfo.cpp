#include "../commonHeaders.h"
#include "Object3dInfo.h"
#include "Internal/VulkanVertexBuffer.h"
namespace VEngine
{
    namespace Renderer
    {
        using namespace VEngine::Renderer::Internal;

        /*
        This class expected interleaved buffer in format
        pos.xyz-uv.xy-normal.xyz-tangent.xyzw
        totals in 12 elements per vertex
        */

        Object3dInfo::Object3dInfo(VulkanDevice * device, std::vector<float> &vboin)
            : vbo(move(vboin))
        {
            vertexBuffer = new VulkanVertexBuffer(device, vbo);
        }

        Object3dInfo::~Object3dInfo()
        {
            safedelete(vertexBuffer);
        }

        VulkanVertexBuffer * Object3dInfo::getVertexBuffer()
        {
            return vertexBuffer;
        }

        std::vector<float>& Object3dInfo::getVBO()
        {
            return vbo;
        }

    }
}
