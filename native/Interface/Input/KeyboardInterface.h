#pragma once
#include <functional>

class KeyboardInterface
{
public:
    virtual void setOnKeyPressHandler(std::function<void(int)> onKeyPress) = 0; // napi-skip
    virtual void setOnKeyReleaseHandler(std::function<void(int)> onKeyRelease) = 0; // napi-skip
    virtual void setOnKeyRepeatHandler(std::function<void(int)> onKeyRepeat) = 0; // napi-skip
    virtual void setOnCharHandler(std::function<void(unsigned int)> onChar) = 0; // napi-skip
    virtual bool isKeyDown(int key) = 0;
};
