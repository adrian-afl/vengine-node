import * as assert from "node:assert/strict";
import { describe, it } from "node:test";
import {createVulkanToolkitWindow} from "../node/native";


describe("vulkan toolkit", () => {
  it("should create a window", () => {
    const vulkan = createVulkanToolkitWindow(640, 480, false, "Test");
    assert.equal(typeof vulkan, "bigint");
  });
});
