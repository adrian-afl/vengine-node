#pragma once
#include <vector>

class Object3dInfoInterface
{
public:
    virtual std::vector<float> & getVBO() = 0;
};
