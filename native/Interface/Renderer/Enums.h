#pragma once

enum VEngineShaderModuleType {
    Vertex = 1,
    Fragment = 2,
    Compute = 3
};

enum VEngineCullMode {
    CullModeNone = 1,
    CullModeFront = 2,
    CullModeBack = 3
};

enum VEngineAttachmentBlending {
    None = 1,
    Additive = 2,
    Alpha = 3
};

enum VEngineBufferType {
    BufferTypeUniform = 1,
    BufferTypeStorage = 2,
    BufferTypeTransferSource = 3,
    BufferTypeTransferDestination = 4
};

enum VEngineImageUsage {
    ColorAttachment = 1,
    Sampled = 2,
    Storage = 4,
    Depth = 8,
    TransferDestination = 16
};

enum VEngineImageAspect {
    ColorAspect = 1,
    DepthAspect = 2
};

enum VEngineImageLayout {
    Preinitialized = 1,
    Undefined = 2
};

enum VEngineDescriptorSetFieldType {
    FieldTypeSampler = 1,
    FieldTypeUniformBuffer = 2,
    FieldTypeStorageBuffer = 3,
    FieldTypeStorageImage = 4
};

enum VEngineDescriptorSetFieldStage {
    FieldStageAll = 1,
    FieldStageAllGraphics = 2,
    FieldStageCompute = 3,
    FieldStageVertex = 4,
    FieldStageFragment = 5
};

enum VEngineImageFormat {
    R8inorm = 1,
    RG8inorm = 2,
    RGBA8inorm = 3,

    R8unorm = 4,
    RG8unorm = 5,
    RGBA8unorm = 6,

    R16i = 7,
    RG16i = 8,
    RGBA16i = 9,

    R16u = 10,
    RG16u = 11,
    RGBA16u = 12,

    R16f = 13,
    RG16f = 14,
    RGBA16f = 15,

    R32i = 16,
    RG32i = 17,
    RGBA32i = 18,

    R32u = 19,
    RG32u = 20,
    RGBA32u = 21,

    R32f = 22,
    RG32f = 23,
    RGBA32f = 24,

    Depth16u = 25,
    Depth32f = 26,

    RGBA8srgb = 27,
    RGB5unormPack16 = 28,
    RGBA8snorm = 29,
    ABGR8unormPack32 = 30,
    ABGR8snormPack32 = 31,
    ABGR8srgbPack32 = 32,
    ARGB10unormPack32 = 33,
    ABGR10unormPack32 = 34,
    RGBA16unorm = 35,
    RGBA16snorm = 36,
    BGR11ufloatPack32 = 37,
    BGR5unormPack16 = 38,
    BGRA8snorm = 39,
    BGRA8unorm = 40,
    A1RGB5unormPack16 = 41,
    RGBA4unormPack16 = 42,
    BGRA4unormPack16 = 43,
    RGB4A1unormPack16 = 44,
    BGR5A1unormPack16 = 45
};

#define ClearColorFloatsArray std::array<float, 4>
