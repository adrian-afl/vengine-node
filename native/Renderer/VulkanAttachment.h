#pragma once
#include "../Interface/Renderer/Enums.h"
#include "../Interface/Renderer/AttachmentInterface.h"

namespace VEngine
{
    namespace Renderer
    {
        class VulkanAttachment : public AttachmentInterface
        {
        public:
            VulkanAttachment(ImageInterface* iimage, VkFormat format, VkSampleCountFlagBits samples, VkAttachmentLoadOp loadop, VkAttachmentStoreOp storeop,
                VkAttachmentLoadOp stencilloadop, VkAttachmentStoreOp stencilstoreop, VkImageLayout initialLayout, VkImageLayout finalLayout,
                VEngineAttachmentBlending blending, ClearColorFloatsArray clearColor, bool clear);
            ~VulkanAttachment();
            virtual ImageInterface* getImage() override;
            virtual VEngineAttachmentBlending getBlending() override;
            virtual bool isCleared() override;
            VkAttachmentDescription getDescription();
            ClearColorFloatsArray getClearColor();
            VkAttachmentReference getReference(uint32_t attachment, VkImageLayout layout);
        private:
            ImageInterface * image;
            VkAttachmentDescription description;
            VEngineAttachmentBlending blending;
            ClearColorFloatsArray clearColor;
            bool clear = true;
        };

    }
}
