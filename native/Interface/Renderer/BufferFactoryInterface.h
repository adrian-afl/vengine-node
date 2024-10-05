#pragma once
#include "Enums.h"

class GenericBufferInterface;

class BufferFactoryInterface
{
public:
    virtual GenericBufferInterface * build(VEngineBufferType type, uint64_t size) = 0;
};
