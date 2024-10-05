import * as assert from "node:assert/strict";
import {describe, it} from "node:test";
import {
  bufferFactoryInterface_build,
  computeStageFactoryInterface_build,
  computeStageInterface_beginRecording,
  computeStageInterface_dispatch,
  computeStageInterface_endRecording, computeStageInterface_submitNoSemaphores,
  descriptorSetInterface_bindBuffer,
  descriptorSetLayoutFactoryInterface_build,
  descriptorSetLayoutInterface_addField,
  descriptorSetLayoutInterface_generateDescriptorSet,
  genericBufferInterface_map,
  genericBufferInterface_unmap,
  joystickInterface_isPresent,
  shaderFactoryInterface_build,
  toolkitInterface_getBufferFactory,
  toolkitInterface_getComputeStageFactory,
  toolkitInterface_getDescriptorSetLayoutFactory,
  toolkitInterface_getJoystick,
  toolkitInterface_getShaderFactory,
  toolkitInterface_new_headless,
  toolkitInterface_new_window, toolkitInterface_waitQueueIdle,
  VEngineBufferType,
  VEngineDescriptorSetFieldStage,
  VEngineDescriptorSetFieldType,
  VEngineShaderModuleType
} from "../node/native";


describe("vulkan toolkit", () => {
  it("should create a window", () => {
    const vulkan = toolkitInterface_new_window(640, 480, false, "Test");
    assert.equal(typeof vulkan, "bigint");
    const joystick = toolkitInterface_getJoystick(vulkan);
    assert.equal(typeof joystick, "bigint");
    const isPresent = joystickInterface_isPresent(joystick, 0);
    assert.equal(isPresent, false);
  });
  
  it("computes stuff", () => {
    const toolkit = toolkitInterface_new_headless(true);

    const shaderFactory = toolkitInterface_getShaderFactory(toolkit);
    const descriptorSetLayoutFactory = toolkitInterface_getDescriptorSetLayoutFactory(toolkit);
    const computeStageFactory = toolkitInterface_getComputeStageFactory(toolkit);
    const bufferFactory = toolkitInterface_getBufferFactory(toolkit);

    const shader = shaderFactoryInterface_build(shaderFactory, VEngineShaderModuleType.Compute, "shaders/compiled/example-compute.comp.spv");

    // Build the layout of data that will be available in the shader runtime
    const layout = descriptorSetLayoutFactoryInterface_build(descriptorSetLayoutFactory);
    descriptorSetLayoutInterface_addField(layout, VEngineDescriptorSetFieldType.FieldTypeStorageBuffer, VEngineDescriptorSetFieldStage.FieldStageCompute)

    const stage = computeStageFactoryInterface_build(computeStageFactory, shader, [layout]);

    const buffer = bufferFactoryInterface_build(bufferFactory, VEngineBufferType.BufferTypeStorage, 4 * 20);

    const set = descriptorSetLayoutInterface_generateDescriptorSet(layout);
    descriptorSetInterface_bindBuffer(set, 0, buffer);

    const ptr = new Float32Array(genericBufferInterface_map(buffer, 0, 4 * 4));
    ptr.set([1, 2, 3, 4], 0);
    genericBufferInterface_unmap(buffer);

    computeStageInterface_beginRecording(stage);
    computeStageInterface_dispatch(stage, [set], 1, 1, 1);
    computeStageInterface_endRecording(stage);
    computeStageInterface_submitNoSemaphores(stage, []);

    toolkitInterface_waitQueueIdle(toolkit);

    const ptr2 = new Float32Array(genericBufferInterface_map(buffer, 0, 4 * 4));
    assert.equal(ptr2[0], 20);
    assert.equal(ptr2[1], 40);
    assert.equal(ptr2[2], 60);
    assert.equal(ptr2[3], 80);
    genericBufferInterface_unmap(buffer);
  })
});
