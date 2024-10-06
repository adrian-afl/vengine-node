import {describe, it} from "node:test";
import {
  ComputeStageInterface,
  DescriptorSetInterface,
  GenericBufferInterface, genericBufferInterface_map, genericBufferInterface_unmap,
  ImageInterface,
  RenderStageInterface,
  ToolkitInterface,
  toolkitInterface_new_window,
  VEngineAttachmentBlending,
  VEngineBufferType,
  VEngineCullMode,
  VEngineDescriptorSetFieldStage,
  VEngineDescriptorSetFieldType,
  VEngineImageAspect,
  VEngineImageFormat,
  VEngineImageLayout,
  VEngineImageUsage,
  VEngineShaderModuleType
} from "../node/native";


describe("teapot", () => {
  it("should show the teapot example", () => {
    const vulkanPointer = toolkitInterface_new_window(1024, 1024, false, "Test");
    const vulkan = new ToolkitInterface(vulkanPointer);

    function createTeapotStage(vulkan: ToolkitInterface, buffer: GenericBufferInterface, texture: ImageInterface, colorImage: ImageInterface): RenderStageInterface {
      const vertTeapot = vulkan.getShaderFactory().build(VEngineShaderModuleType.Vertex, "shaders/compiled/example-advancedteapot-teapot.vert.spv");
      const fragTeapot = vulkan.getShaderFactory().build(VEngineShaderModuleType.Fragment, "shaders/compiled/example-advancedteapot-teapot.frag.spv");

      const layoutTeapot = vulkan.getDescriptorSetLayoutFactory().build();
      layoutTeapot.addField(VEngineDescriptorSetFieldType.FieldTypeUniformBuffer, VEngineDescriptorSetFieldStage.FieldStageAllGraphics);
      layoutTeapot.addField(VEngineDescriptorSetFieldType.FieldTypeSampler, VEngineDescriptorSetFieldStage.FieldStageFragment);

      const depthImage = vulkan.getImageFactory().build(1024, 1024, 1, VEngineImageFormat.Depth32f, VEngineImageUsage.Depth, VEngineImageAspect.DepthAspect, VEngineImageLayout.Preinitialized);

      const colorAttachment = colorImage.getAttachment(VEngineAttachmentBlending.None, true, [0.1, 0.2, 0.3, 1.0], false).pointer;
      const depthAttachment = depthImage.getAttachment(VEngineAttachmentBlending.None, true, [0.0, 0.0, 0.0, 0.0], false).pointer;

      const stageTeapot = vulkan.getRenderStageFactory().build(1024, 1024, [ vertTeapot.pointer, fragTeapot.pointer ], [layoutTeapot.pointer],
        [
          colorAttachment,
          depthAttachment
        ],
        VEngineCullMode.CullModeNone
    );

      const setTeapot = layoutTeapot.generateDescriptorSet();
      setTeapot.bindBuffer(0, buffer.pointer);
      setTeapot.bindImageViewSampler(1, texture.pointer);

      stageTeapot.setSets([ setTeapot.pointer ]);

      return stageTeapot;
    }

    function createPostprocessStage(vulkan: ToolkitInterface, buffer: GenericBufferInterface, colorImage: ImageInterface): {stage: ComputeStageInterface, set: DescriptorSetInterface} {
      const compPostprocess = vulkan.getShaderFactory().build(VEngineShaderModuleType.Compute, "shaders/compiled/example-advancedteapot-postprocess.comp.spv");

      const layoutPostprocess = vulkan.getDescriptorSetLayoutFactory().build();
      layoutPostprocess.addField(VEngineDescriptorSetFieldType.FieldTypeUniformBuffer, VEngineDescriptorSetFieldStage.FieldStageAll);
      layoutPostprocess.addField(VEngineDescriptorSetFieldType.FieldTypeStorageImage, VEngineDescriptorSetFieldStage.FieldStageCompute);

      const stagePostprocess = vulkan.getComputeStageFactory().build(compPostprocess.pointer, [layoutPostprocess.pointer]);

      const setPostprocess = layoutPostprocess.generateDescriptorSet();
      setPostprocess.bindBuffer(0, buffer.pointer);
      setPostprocess.bindImageStorage(1, colorImage.pointer);

      return { stage: stagePostprocess, set: setPostprocess };
    }

    function createOutputStage(vulkan: ToolkitInterface, buffer: GenericBufferInterface, colorImage: ImageInterface): RenderStageInterface {
      const vertOutput = vulkan.getShaderFactory().build(VEngineShaderModuleType.Vertex, "shaders/compiled/example-advancedteapot-output.vert.spv");
      const fragOutput = vulkan.getShaderFactory().build(VEngineShaderModuleType.Fragment, "shaders/compiled/example-advancedteapot-output.frag.spv");

      const layoutOutput = vulkan.getDescriptorSetLayoutFactory().build();
      layoutOutput.addField(VEngineDescriptorSetFieldType.FieldTypeUniformBuffer, VEngineDescriptorSetFieldStage.FieldStageAll);
      layoutOutput.addField(VEngineDescriptorSetFieldType.FieldTypeSampler, VEngineDescriptorSetFieldStage.FieldStageFragment);

      const stageOutput = vulkan.getRenderStageFactory().build(1024, 1024, [vertOutput.pointer, fragOutput.pointer], [ layoutOutput.pointer ], [], VEngineCullMode.CullModeNone);

      const setOutput = layoutOutput.generateDescriptorSet();
      setOutput.bindBuffer(0, buffer.pointer);
      setOutput.bindImageViewSampler(1, colorImage.pointer);

      stageOutput.setSets([setOutput.pointer]);

      return stageOutput;
    }


    const texture = vulkan.getImageFactory().loadFromFile("media/test.png");

    const buffer = vulkan.getBufferFactory().build(VEngineBufferType.BufferTypeUniform, 4 * 20);

    const colorImage = vulkan.getImageFactory().buildMipmapped(1024, 1024, 1, VEngineImageFormat.RGBA8unorm, VEngineImageUsage.ColorAttachment | VEngineImageUsage.Sampled | VEngineImageUsage.Storage, VEngineImageAspect.ColorAspect, VEngineImageLayout.Preinitialized);

    const stageTeapot = createTeapotStage(vulkan, buffer, texture, colorImage);

    const stagePostprocessCreationResult = createPostprocessStage(vulkan, buffer, colorImage);
    const stagePostprocess = stagePostprocessCreationResult.stage;
    const setPostprocess = stagePostprocessCreationResult.set;

    const stageOutput = createOutputStage(vulkan, buffer, colorImage);

    const output = vulkan.getSwapChainOutputFactory().build(stageOutput.pointer);

    const teapot = vulkan.getObject3dInfoFactory().loadFromFile("media/teapot.raw");
    const fullScreenQuad = vulkan.getObject3dInfoFactory().getFullScreenQuad();

    const ptr = new Float32Array(genericBufferInterface_map(buffer.pointer, 0, 4 * 4));

    const dispatchSets = [setPostprocess.pointer];
    const stagePostprocessSubmitSemaphores = [stageTeapot.getSignalSemaphore().pointer];
    const teapotSubmitSemaphores = output.getSignalSemaphores().map((x) => x.pointer);
    const outputSubmitSemaphores = [stagePostprocess.getSignalSemaphore().pointer];

    while (!vulkan.shouldCloseWindow()) {
      ptr[0] = vulkan.getExecutionTime();

      stageTeapot.beginDrawing();
      stageTeapot.drawMesh(teapot.pointer, 1);
      stageTeapot.endDrawing();
      stageTeapot.submit(teapotSubmitSemaphores);

      stagePostprocess.beginRecording();
      stagePostprocess.dispatch(dispatchSets, 16, 1024, 1);
      stagePostprocess.endRecording();
      stagePostprocess.submit(stagePostprocessSubmitSemaphores);

      colorImage.regenerateMipmaps();

      output.beginDrawing();
      output.drawMesh(fullScreenQuad.pointer, 1);
      output.endDrawing();
      output.submit(outputSubmitSemaphores);

      vulkan.poolEvents();
    }

    genericBufferInterface_unmap(buffer.pointer);
  });

});
