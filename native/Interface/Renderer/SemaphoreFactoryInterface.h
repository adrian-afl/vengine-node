#pragma once

class SemaphoreInterface;

class SemaphoreFactoryInterface
{
public:
    virtual SemaphoreInterface* build() = 0;
};
