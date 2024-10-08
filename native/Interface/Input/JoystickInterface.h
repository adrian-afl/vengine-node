#pragma once
#include <vector>

class JoystickInterface
{
public:
    virtual std::vector<bool> getButtonsStatus(int index) = 0;
    virtual bool isPresent(int index) = 0;
    virtual std::vector<float> getAxes(int index) = 0;
};
