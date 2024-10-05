#pragma once
#include "../Interface/FileSystem/MediaInterface.h"

namespace VEngine
{
    namespace FileSystem
    {
        class Media : public MediaInterface
        {
        public:
            Media();
            ~Media();
            virtual std::string readString(std::string key) override;
            virtual int readBinary(std::string key, unsigned char** out_bytes) override;
        };
    }
}