#pragma once 
#include "Enums.h"

class AttachmentInterface;

class ImageInterface
{
public:
    virtual AttachmentInterface* getAttachment(VEngineAttachmentBlending blending, bool clear, VEngineClearColorValue clearColor, bool forPresent) = 0;
    virtual bool isDepthBuffer() = 0;
    virtual void regenerateMipmaps() = 0;
};
