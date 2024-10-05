#include "../../commonHeaders.h"
#include "VulkanInternalImage.h" 
#include "VulkanDevice.h" 
#include "VulkanMemoryManager.h" 
#include "VulkanMemoryChunk.h" 
#include "../VulkanGenericBuffer.h" 

#define STB_IMAGE_IMPLEMENTATION
#include "stb_image.h"
namespace VEngine
{
    namespace Renderer
    {
        namespace Internal
        {
            VulkanInternalImage::VulkanInternalImage(VulkanDevice * device, uint32_t iwidth, uint32_t iheight, uint32_t idepth, VkFormat iformat, VkImageTiling itiling,
                VkImageUsageFlags iusage, VkMemoryPropertyFlags iproperties, VkImageAspectFlags iaspectFlags,
                VkImageLayout iinitialLayout, bool mipmapped)
                : device(device),
                width(iwidth),
                height(iheight),
                depth(idepth),
                format(iformat),
                tiling(itiling),
                usage(iusage | VK_IMAGE_USAGE_TRANSFER_SRC_BIT | VK_IMAGE_USAGE_TRANSFER_DST_BIT),
                properties(iproperties),
                aspectFlags(iaspectFlags),
                initialLayout(iinitialLayout)
            {
                if (mipmapped) {
                    mipLevels = static_cast<uint32_t>(std::floor(std::log2(std::max(width, height)))) + 1;
                }
                currentLayout = initialLayout;
                initalize();
                if (mipmapped) {
                    regenerateMipmaps();
                }
            }


            VulkanInternalImage::~VulkanInternalImage()
            {
                if (samplerCreated) {
                    vkDestroySampler(device->getDevice(), sampler, nullptr);
                }
                vkDestroyImageView(device->getDevice(), imageView, nullptr);
                vkDestroyImageView(device->getDevice(), firstMipmapImageView, nullptr);
                vkDestroyImage(device->getDevice(), image, nullptr);
                imageMemory.free();
                // vkFreeMemory(device->getDevice(), imageMemory, nullptr);
            }

            void VulkanInternalImage::initalize()
            {
                VkImageCreateInfo imageInfo = {};
                imageInfo.sType = VK_STRUCTURE_TYPE_IMAGE_CREATE_INFO;
                if (depth == 1) {
                    imageInfo.imageType = VK_IMAGE_TYPE_2D;
                }
                else {
                    imageInfo.imageType = VK_IMAGE_TYPE_3D;
                }
                imageInfo.extent.width = width;
                imageInfo.extent.height = height;
                imageInfo.extent.depth = depth;
                imageInfo.mipLevels = mipLevels;
                imageInfo.arrayLayers = 1;
                imageInfo.format = format;
                imageInfo.tiling = tiling;
                imageInfo.initialLayout = initialLayout;
                imageInfo.usage = usage;
                imageInfo.samples = VK_SAMPLE_COUNT_1_BIT;
                imageInfo.sharingMode = VK_SHARING_MODE_EXCLUSIVE;

                if (vkCreateImage(device->getDevice(), &imageInfo, nullptr, &image) != VK_SUCCESS) {
                    throw std::runtime_error("failed to create image!");
                }

                VkMemoryRequirements memRequirements;
                vkGetImageMemoryRequirements(device->getDevice(), image, &memRequirements);

                imageMemory = device->getMemoryManager()->bindImageMemory(device->findMemoryType(memRequirements.memoryTypeBits, properties), image, memRequirements.size);

                VkImageViewCreateInfo viewInfo = {};
                viewInfo.sType = VK_STRUCTURE_TYPE_IMAGE_VIEW_CREATE_INFO;
                viewInfo.image = image;

                if (depth == 1) {
                    viewInfo.viewType = VK_IMAGE_VIEW_TYPE_2D;
                }
                else {
                    viewInfo.viewType = VK_IMAGE_VIEW_TYPE_3D;
                }
                viewInfo.format = format;
                viewInfo.subresourceRange.aspectMask = aspectFlags;
                viewInfo.subresourceRange.baseMipLevel = 0;
                viewInfo.subresourceRange.levelCount = mipLevels;
                viewInfo.subresourceRange.baseArrayLayer = 0;
                viewInfo.subresourceRange.layerCount = 1;

                if (vkCreateImageView(device->getDevice(), &viewInfo, nullptr, &imageView) != VK_SUCCESS) {
                    throw std::runtime_error("failed to create texture image view!");
                }

                viewInfo = {};
                viewInfo.sType = VK_STRUCTURE_TYPE_IMAGE_VIEW_CREATE_INFO;
                viewInfo.image = image;

                if (depth == 1) {
                    viewInfo.viewType = VK_IMAGE_VIEW_TYPE_2D;
                }
                else {
                    viewInfo.viewType = VK_IMAGE_VIEW_TYPE_3D;
                }
                viewInfo.format = format;
                viewInfo.subresourceRange.aspectMask = aspectFlags;
                viewInfo.subresourceRange.baseMipLevel = 0;
                viewInfo.subresourceRange.levelCount = 1;
                viewInfo.subresourceRange.baseArrayLayer = 0;
                viewInfo.subresourceRange.layerCount = 1;

                if (vkCreateImageView(device->getDevice(), &viewInfo, nullptr, &firstMipmapImageView) != VK_SUCCESS) {
                    throw std::runtime_error("failed to create texture image view!");
                }
                samplerCreated = false;
            }

            VulkanInternalImage::VulkanInternalImage(VulkanDevice * device, VkFormat format, VkImage image, VkImageView imageView)
                : device(device), format(format), image(image), imageView(imageView), firstMipmapImageView(imageView)
            {
                samplerCreated = false;
            }

            VulkanInternalImage::VulkanInternalImage(VulkanDevice * device,  std::string path)
                : device(device)
            {
                auto imgdata = readFileImageData(path);
                auto format = VK_FORMAT_R8G8B8A8_UNORM;
                imgdata.channelCount = 4;
                //  if (imgdata.channelCount == 3) format = VK_FORMAT_R8G8B8A8_UNORM;
                //if (imgdata.channelCount == 2) format = VK_FORMAT_R8G8_UNORM;
                //   if (imgdata.channelCount == 1) format = VK_FORMAT_R8_UNORM;
                createTexture(imgdata, format);
            }

            VulkanInternalImage::VulkanInternalImage(VulkanDevice * device, uint32_t width, uint32_t height, uint32_t channelCount, void * data)
                : device(device)
            {
                auto imgdata = ImageData();
                imgdata.width = width;
                imgdata.height = height;
                imgdata.channelCount = channelCount;
                imgdata.data = data;
                auto format = VK_FORMAT_R8G8B8A8_UNORM;
                if (imgdata.channelCount == 2) format = VK_FORMAT_R8G8_UNORM;
                if (imgdata.channelCount == 1) format = VK_FORMAT_R8_UNORM;
                createTexture(imgdata, format);
            }

            VkSampler VulkanInternalImage::getSampler()
            {
                if (samplerCreated) {
                    return sampler;
                }

                // sampler = new VkSampler();
                VkSamplerCreateInfo samplerInfo = {};
                samplerInfo.sType = VK_STRUCTURE_TYPE_SAMPLER_CREATE_INFO;
                samplerInfo.magFilter = VK_FILTER_LINEAR;
                samplerInfo.minFilter = VK_FILTER_LINEAR;
                samplerInfo.addressModeU = VK_SAMPLER_ADDRESS_MODE_REPEAT;
                samplerInfo.addressModeV = VK_SAMPLER_ADDRESS_MODE_REPEAT;
                samplerInfo.addressModeW = VK_SAMPLER_ADDRESS_MODE_REPEAT;
                samplerInfo.anisotropyEnable = VK_TRUE;
                samplerInfo.maxAnisotropy = 16;
                samplerInfo.borderColor = VK_BORDER_COLOR_INT_OPAQUE_BLACK;
                samplerInfo.unnormalizedCoordinates = VK_FALSE;
                samplerInfo.compareEnable = VK_FALSE;
                samplerInfo.compareOp = VK_COMPARE_OP_ALWAYS;
                samplerInfo.mipmapMode = VK_SAMPLER_MIPMAP_MODE_LINEAR;
                samplerInfo.minLod = 0;
                samplerInfo.maxLod = static_cast<float>(mipLevels);
                samplerInfo.mipLodBias = 0;

                if (vkCreateSampler(device->getDevice(), &samplerInfo, nullptr, &sampler) != VK_SUCCESS) {
                    throw std::runtime_error("failed to create texture sampler!");
                }
                samplerCreated = true;
                return sampler;
            }

            VkImageView VulkanInternalImage::getImageView()
            {
                return imageView;
            }

            VkImageView VulkanInternalImage::getFirstMipmapImageView()
            {
                return firstMipmapImageView;
            }

            VkFormat VulkanInternalImage::getFormat()
            {
                return format;
            }

            void VulkanInternalImage::regenerateMipmaps()
            {
                auto old = currentLayout;
                transitionImageLayout(image, format, old, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL);
                generateMipmaps(image, static_cast<uint32_t>(width), static_cast<uint32_t>(height), mipLevels);
               // transitionImageLayout(image, format, currentLayout, old);
            }

            ImageData VulkanInternalImage::readFileImageData(std::string path)
            {
                ImageData d = ImageData();
                d.data = stbi_load(path.c_str(), &d.width, &d.height, &d.channelCount, STBI_rgb_alpha);
                return d;
            }

            void VulkanInternalImage::createTexture(const ImageData &img, VkFormat iformat)
            {
                mipLevels = static_cast<uint32_t>(std::floor(std::log2(std::max(img.width, img.height)))) + 1;
                VulkanGenericBuffer* stagingBuffer = new VulkanGenericBuffer(device, VEngineBufferType::BufferTypeTransferSource, img.width * img.height * img.channelCount);
                void* mappoint;
                stagingBuffer->map(0, img.width * img.height * img.channelCount, &mappoint);
                memcpy(mappoint, img.data, static_cast<size_t>(img.width * img.height * img.channelCount));
                stagingBuffer->unmap();
                stbi_image_free(img.data);

                width = img.width;
                height = img.height;
                depth = 1;
                format = iformat;
                tiling = VK_IMAGE_TILING_OPTIMAL;
                usage = VK_IMAGE_USAGE_SAMPLED_BIT | VK_IMAGE_USAGE_TRANSFER_SRC_BIT | VK_IMAGE_USAGE_TRANSFER_DST_BIT;
                properties = VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT;
                aspectFlags = VK_IMAGE_ASPECT_COLOR_BIT;
                initialLayout = VK_IMAGE_LAYOUT_UNDEFINED;
                initalize();

                transitionImageLayout(image, format, VK_IMAGE_LAYOUT_UNDEFINED, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL);
                copyBufferToImage(stagingBuffer->getBuffer(), image, static_cast<uint32_t>(img.width), static_cast<uint32_t>(img.height));
                //transitionImageLayout(image, format, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL);
                currentLayout = VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;

                delete stagingBuffer;

                generateMipmaps(image, static_cast<uint32_t>(img.width), static_cast<uint32_t>(img.height), mipLevels);
            }

            void VulkanInternalImage::generateMipmaps(VkImage image, int32_t texWidth, int32_t texHeight, uint32_t mipLevels) {

                VkCommandBuffer commandBuffer = beginSingleTimeCommands();

                VkImageMemoryBarrier barrier = {};
                barrier.sType = VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;
                barrier.image = image;
                barrier.srcQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;
                barrier.dstQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;
                barrier.subresourceRange.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
                barrier.subresourceRange.baseArrayLayer = 0;
                barrier.subresourceRange.layerCount = 1;
                barrier.subresourceRange.levelCount = 1;

                int32_t mipWidth = texWidth;
                int32_t mipHeight = texHeight;

                for (uint32_t i = 1; i < mipLevels; i++) {
                    barrier.subresourceRange.baseMipLevel = i - 1;
                    barrier.oldLayout = VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;
                    barrier.newLayout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;
                    barrier.srcAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
                    barrier.dstAccessMask = VK_ACCESS_TRANSFER_READ_BIT;

                    vkCmdPipelineBarrier(commandBuffer,
                        VK_PIPELINE_STAGE_TRANSFER_BIT, VK_PIPELINE_STAGE_TRANSFER_BIT, 0,
                        0, nullptr,
                        0, nullptr,
                        1, &barrier);

                    VkImageBlit blit = {};
                    blit.srcOffsets[0] = { 0, 0, 0 };
                    blit.srcOffsets[1] = { mipWidth, mipHeight, 1 };
                    blit.srcSubresource.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
                    blit.srcSubresource.mipLevel = i - 1;
                    blit.srcSubresource.baseArrayLayer = 0;
                    blit.srcSubresource.layerCount = 1;
                    blit.dstOffsets[0] = { 0, 0, 0 };
                    blit.dstOffsets[1] = { mipWidth > 1 ? mipWidth / 2 : 1, mipHeight > 1 ? mipHeight / 2 : 1, 1 };
                    blit.dstSubresource.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
                    blit.dstSubresource.mipLevel = i;
                    blit.dstSubresource.baseArrayLayer = 0;
                    blit.dstSubresource.layerCount = 1;

                    vkCmdBlitImage(commandBuffer,
                        image, VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL,
                        image, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,
                        1, &blit,
                        VK_FILTER_LINEAR);

                    barrier.oldLayout = VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;
                    barrier.newLayout = VK_IMAGE_LAYOUT_GENERAL;
                    barrier.srcAccessMask = VK_ACCESS_TRANSFER_READ_BIT;
                    barrier.dstAccessMask = VK_ACCESS_SHADER_READ_BIT;

                    vkCmdPipelineBarrier(commandBuffer,
                        VK_PIPELINE_STAGE_TRANSFER_BIT, VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT, 0,
                        0, nullptr,
                        0, nullptr,
                        1, &barrier);

                    if (mipWidth > 1) mipWidth /= 2;
                    if (mipHeight > 1) mipHeight /= 2;
                }

                barrier.subresourceRange.baseMipLevel = mipLevels - 1;
                barrier.oldLayout = VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;
                barrier.newLayout = VK_IMAGE_LAYOUT_GENERAL; // was shader read only optimal
                barrier.srcAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
                barrier.dstAccessMask = VK_ACCESS_SHADER_READ_BIT;
                currentLayout = VK_IMAGE_LAYOUT_GENERAL;

                vkCmdPipelineBarrier(commandBuffer,
                    VK_PIPELINE_STAGE_TRANSFER_BIT, VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT, 0,
                    0, nullptr,
                    0, nullptr,
                    1, &barrier);

                endSingleTimeCommands(commandBuffer);
            }

            VkCommandBuffer VulkanInternalImage::beginSingleTimeCommands() {
                VkCommandBufferAllocateInfo allocInfo = {};
                allocInfo.sType = VK_STRUCTURE_TYPE_COMMAND_BUFFER_ALLOCATE_INFO;
                allocInfo.level = VK_COMMAND_BUFFER_LEVEL_PRIMARY;
                allocInfo.commandPool = device->getCommandPool();
                allocInfo.commandBufferCount = 1;

                VkCommandBuffer commandBuffer;
                vkAllocateCommandBuffers(device->getDevice(), &allocInfo, &commandBuffer);

                VkCommandBufferBeginInfo beginInfo = {};
                beginInfo.sType = VK_STRUCTURE_TYPE_COMMAND_BUFFER_BEGIN_INFO;
                beginInfo.flags = VK_COMMAND_BUFFER_USAGE_ONE_TIME_SUBMIT_BIT;

                vkBeginCommandBuffer(commandBuffer, &beginInfo);

                return commandBuffer;
            }

            void VulkanInternalImage::endSingleTimeCommands(VkCommandBuffer commandBuffer) {
                vkEndCommandBuffer(commandBuffer);

                VkSubmitInfo submitInfo = {};
                submitInfo.sType = VK_STRUCTURE_TYPE_SUBMIT_INFO;
                submitInfo.commandBufferCount = 1;
                submitInfo.pCommandBuffers = &commandBuffer;

                vkQueueSubmit(device->getMainQueue(), 1, &submitInfo, VK_NULL_HANDLE);
                vkQueueWaitIdle(device->getMainQueue());

                vkFreeCommandBuffers(device->getDevice(), device->getCommandPool(), 1, &commandBuffer);
            }

            void VulkanInternalImage::copyBuffer(VkBuffer srcBuffer, VkBuffer dstBuffer, VkDeviceSize size) {
                VkCommandBuffer commandBuffer = beginSingleTimeCommands();

                VkBufferCopy copyRegion = {};
                copyRegion.size = size;
                vkCmdCopyBuffer(commandBuffer, srcBuffer, dstBuffer, 1, &copyRegion);

                endSingleTimeCommands(commandBuffer);
            }

            void VulkanInternalImage::transitionImageLayout(VkImage image, VkFormat format, VkImageLayout oldLayout, VkImageLayout newLayout) {
                VkCommandBuffer commandBuffer = beginSingleTimeCommands();

                VkImageMemoryBarrier barrier = {};
                barrier.sType = VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;
                barrier.oldLayout = oldLayout;
                barrier.newLayout = newLayout;
                barrier.srcQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;
                barrier.dstQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;
                barrier.image = image;
                barrier.subresourceRange.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
                barrier.subresourceRange.baseMipLevel = 0;
                barrier.subresourceRange.levelCount = mipLevels;
                barrier.subresourceRange.baseArrayLayer = 0;
                barrier.subresourceRange.layerCount = 1;


                VkPipelineStageFlags sourceStage;
                VkPipelineStageFlags destinationStage;

                if (oldLayout == VK_IMAGE_LAYOUT_UNDEFINED && newLayout == VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL) {
                    barrier.srcAccessMask = 0;
                    barrier.dstAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;

                    sourceStage = VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT;
                    destinationStage = VK_PIPELINE_STAGE_TRANSFER_BIT;
                }
                else if (oldLayout == VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL && newLayout == VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL) {
                    barrier.srcAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
                    barrier.dstAccessMask = VK_ACCESS_SHADER_READ_BIT;

                    sourceStage = VK_PIPELINE_STAGE_TRANSFER_BIT;
                    destinationStage = VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT;
                }
                else {
                    sourceStage = VK_PIPELINE_STAGE_ALL_COMMANDS_BIT;
                    destinationStage = VK_PIPELINE_STAGE_ALL_COMMANDS_BIT;
                    switch (oldLayout)
                    {
                    case VK_IMAGE_LAYOUT_UNDEFINED:
                        barrier.srcAccessMask = 0;
                        break;

                    case VK_IMAGE_LAYOUT_PREINITIALIZED:
                        barrier.srcAccessMask = VK_ACCESS_HOST_WRITE_BIT;
                        break;

                    case VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL:
                        barrier.srcAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;
                        break;

                    case VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL:
                        barrier.srcAccessMask = VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;
                        break;

                        barrier.srcAccessMask = VK_ACCESS_TRANSFER_READ_BIT;
                        break;

                    case VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL:
                        barrier.srcAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
                        break;

                    case VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL:
                        barrier.srcAccessMask = VK_ACCESS_SHADER_READ_BIT;
                        break;
                    default:
                        break;
                    }
                    switch (newLayout)
                    {
                    case VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL:
                        barrier.dstAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
                        break;

                    case VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL:
                        barrier.dstAccessMask = VK_ACCESS_TRANSFER_READ_BIT;
                        break;

                    case VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL:
                        barrier.dstAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;
                        break;

                    case VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL:
                        barrier.dstAccessMask = barrier.dstAccessMask | VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;
                        break;

                    case VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL:
                        if (barrier.srcAccessMask == 0)
                        {
                            barrier.srcAccessMask = VK_ACCESS_HOST_WRITE_BIT | VK_ACCESS_TRANSFER_WRITE_BIT;
                        }
                        if (oldLayout == VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL) {
                            barrier.srcAccessMask = VK_ACCESS_TRANSFER_READ_BIT;
                        }
                        barrier.dstAccessMask = VK_ACCESS_SHADER_READ_BIT;
                        break;
                    default:
                        break;
                    }
                }

                vkCmdPipelineBarrier(
                    commandBuffer,
                    sourceStage, destinationStage,
                    0,
                    0, nullptr,
                    0, nullptr,
                    1, &barrier
                );
                currentLayout = newLayout;
                endSingleTimeCommands(commandBuffer);
            }


            void VulkanInternalImage::transitionImageLayoutExistingCommandBuffer(VkCommandBuffer buffer, uint32_t mipmap, VkImage image, VkFormat format, VkImageLayout oldLayout, VkImageLayout newLayout
                , VkPipelineStageFlags sourceStage, VkPipelineStageFlags destinationStage) {

                VkImageMemoryBarrier barrier = {};
                barrier.sType = VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;
                barrier.oldLayout = oldLayout;
                barrier.newLayout = newLayout;
                barrier.srcQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;
                barrier.dstQueueFamilyIndex = VK_QUEUE_FAMILY_IGNORED;
                barrier.image = image;
                barrier.subresourceRange.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
                barrier.subresourceRange.baseMipLevel = mipmap;
                barrier.subresourceRange.levelCount = 1;
                barrier.subresourceRange.baseArrayLayer = 0;
                barrier.subresourceRange.layerCount = 1;


                switch (oldLayout)
                {
                case VK_IMAGE_LAYOUT_UNDEFINED:
                    barrier.srcAccessMask = 0;
                    break;

                case VK_IMAGE_LAYOUT_PREINITIALIZED:
                    barrier.srcAccessMask = VK_ACCESS_HOST_WRITE_BIT;
                    break;

                case VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL:
                    barrier.srcAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;
                    break;

                case VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL:
                    barrier.srcAccessMask = VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;
                    break;

                    barrier.srcAccessMask = VK_ACCESS_TRANSFER_READ_BIT;
                    break;

                case VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL:
                    barrier.srcAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
                    break;

                case VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL:
                    barrier.srcAccessMask = VK_ACCESS_SHADER_READ_BIT;
                    break;
                default:
                    break;
                }
                switch (newLayout)
                {
                case VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL:
                    barrier.dstAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
                    break;

                case VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL:
                    barrier.dstAccessMask = VK_ACCESS_TRANSFER_READ_BIT;
                    break;

                case VK_IMAGE_LAYOUT_COLOR_ATTACHMENT_OPTIMAL:
                    barrier.dstAccessMask = VK_ACCESS_COLOR_ATTACHMENT_WRITE_BIT;
                    break;

                case VK_IMAGE_LAYOUT_DEPTH_STENCIL_ATTACHMENT_OPTIMAL:
                    barrier.dstAccessMask = barrier.dstAccessMask | VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;
                    break;

                case VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL:
                    if (barrier.srcAccessMask == 0)
                    {
                        barrier.srcAccessMask = VK_ACCESS_HOST_WRITE_BIT | VK_ACCESS_TRANSFER_WRITE_BIT;
                    }
                    if (oldLayout == VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL) {
                        barrier.srcAccessMask = VK_ACCESS_TRANSFER_READ_BIT;
                    }
                    barrier.dstAccessMask = VK_ACCESS_SHADER_READ_BIT;
                    break;
                default:
                    break;
                }

                currentLayout = newLayout;
                vkCmdPipelineBarrier(
                    buffer,
                    sourceStage, destinationStage,
                    0,
                    0, nullptr,
                    0, nullptr,
                    1, &barrier
                );
            }



            void VulkanInternalImage::copyBufferToImage(VkBuffer buffer, VkImage image, uint32_t width, uint32_t height) {
                VkCommandBuffer commandBuffer = beginSingleTimeCommands();

                VkBufferImageCopy region = {};
                region.bufferOffset = 0;
                region.bufferRowLength = 0;
                region.bufferImageHeight = 0;
                region.imageSubresource.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
                region.imageSubresource.mipLevel = 0;
                region.imageSubresource.baseArrayLayer = 0;
                region.imageSubresource.layerCount = 1;
                region.imageOffset = { 0, 0, 0 };
                region.imageExtent = {
                    width,
                    height,
                    1
                };

                vkCmdCopyBufferToImage(commandBuffer, buffer, image, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, 1, &region);

                endSingleTimeCommands(commandBuffer);
            }

        }
    }
}
