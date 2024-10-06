import {GLSLCompiler} from "./GLSLCompiler";
import { parseArgs } from "util";

const options: Record<string, { type: "string" }> = {
  dir: {
    type: "string",
  },
};
// eslint-disable-next-line
// @ts-ignore
const { values } = parseArgs({
  args: process.argv,
  options,
  allowPositionals: true,
});

const run = async (): Promise<void> => {
  if (values.dir && typeof values.dir === "string") {
    await new GLSLCompiler().compile(values.dir);
  } else {
    // eslint-disable-next-line no-console
    console.log("USAGE: tsx compilerShaders.ts --dir myshaders");
  }
};
void run();
