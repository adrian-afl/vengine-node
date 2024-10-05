#pragma once 
#include <cstdint>
#include "Enums.h"

class GenericBufferInterface
{
public:
    virtual void map(uint64_t offset, uint64_t size, void** data) = 0; //skip-napi
    virtual void unmap() = 0;
    virtual uint64_t getSize() = 0;
    virtual VEngineBufferType getType() = 0;
};
