#pragma once
#include <vector>
#include <string>

class Object3dInfoInterface;

class Object3dInfoFactoryInterface
{
public:
    virtual Object3dInfoInterface* loadFromFile(std::string path) = 0;
    virtual Object3dInfoInterface* loadFromArray(std::vector<float> rawData) = 0;
    virtual Object3dInfoInterface* getFullScreenQuad() = 0;
};
