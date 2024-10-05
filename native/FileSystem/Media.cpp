#include "../commonHeaders.h"
#include "Media.h"

namespace VEngine
{
    namespace FileSystem
    {
        using namespace std;

        static int fsize(FILE* fh) {
            int prev = ftell(fh);
            fseek(fh, 0L, SEEK_END);
            int sz = ftell(fh);
            fseek(fh, prev, SEEK_SET);
            return sz;
        }

        char* get_file_contents(const char* path) {
            FILE* fh = fopen(path, "r");
            int size = fsize(fh);
            char* content = (char*)calloc(size + 1, sizeof(char));
            size_t sz = fread(content, sizeof(char), size, fh);
            content = (char*)realloc(content, sizeof(char) * sz + 1);
            content[sz] = 0;
            fclose(fh);
            return content;
        }

        int get_file_contents_binary(unsigned char** out_bytes, const char* path) {
            FILE* fh = fopen(path, "rb");
            int size = fsize(fh);
            unsigned char* content = (unsigned char*)calloc(size, 1);
            size_t sz = fread(content, 1, size, fh);
            fclose(fh);
            *out_bytes = content;
            return size;
        }

        Media::Media()
        {
        }

        Media::~Media()
        {
        }
        
        string Media::readString(string path)
        {
            return string(get_file_contents(path.c_str()));
        }

        int Media::readBinary(string path, unsigned char** out_bytes)
        {
            return get_file_contents_binary(out_bytes, path.c_str());
        }
    }
}
