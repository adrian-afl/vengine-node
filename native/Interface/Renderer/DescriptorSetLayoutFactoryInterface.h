#pragma once

class DescriptorSetLayoutInterface;

class DescriptorSetLayoutFactoryInterface
{
public:
    virtual DescriptorSetLayoutInterface* build() = 0;
};
