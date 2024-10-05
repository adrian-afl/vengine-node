import * as assert from "node:assert/strict";
import { describe, it } from "node:test";
import {joystickInterface_isPresent, toolkitInterface_getJoystick, toolkitInterface_new_window} from "../node/native";


describe("vulkan toolkit", () => {
  it("should create a window", () => {
    const vulkan = toolkitInterface_new_window(640, 480, false, "Test");
    assert.equal(typeof vulkan, "bigint");
    const joystick = toolkitInterface_getJoystick(vulkan);
    assert.equal(typeof joystick, "bigint");
    const isPresent = joystickInterface_isPresent(joystick, 0);
    assert.equal(isPresent, false);
  });
});
