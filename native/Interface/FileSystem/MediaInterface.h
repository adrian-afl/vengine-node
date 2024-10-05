#pragma once
#include <string>

class MediaInterface
{
public:
    virtual std::string readString(std::string key) = 0; // napi-skip
    virtual int readBinary(std::string key, unsigned char** out_bytes) = 0; // napi-skip
};
