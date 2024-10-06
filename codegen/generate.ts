/* eslint-disable no-console */
import { scan } from "fast-scan-dir-recursive";
import * as fs from "fs";
import * as path from "path";

import { NAPIExportsPlugin } from "./NAPIExportsPlugin";
import { NAPIAutoGenerateBindingPlugin } from "./NAPIAutoGenerateBindingPlugin";

export interface CodeGenFile {
  fullPath: string;
  contents: string;
  lines: string[];
}

export interface CodeGenPlugin {
  name: string;
  scanDirs: string[];
  supportsFile(path: string): boolean;
  handleFile(file: CodeGenFile): void | Promise<void>;
  finish(): void | Promise<void>;
}

const rootDir = path.resolve(".");

const bindingGenPlugin = new NAPIAutoGenerateBindingPlugin();
const plugins: CodeGenPlugin[] = [
  bindingGenPlugin,
  new NAPIExportsPlugin(bindingGenPlugin)
];

async function main(): Promise<void> {
  for(const plugin of plugins){
    console.log(`Plugin ${plugin.name} - Starting`);
    const srcFiles = [];
    for(const dir of plugin.scanDirs){
      srcFiles.push(...(await scan(path.resolve(dir))).filter(x=>plugin.supportsFile(x)));
    }

    const files: CodeGenFile[] = srcFiles.map((file) => {
      const contents = fs.readFileSync(file).toString("utf-8");
      const lines = contents.replaceAll("\r\n", "\n").split("\n");
      return {
        fullPath: file,
        lines,
        contents,
      };
    });

    for (const file of files) {
      console.log(`Plugin ${plugin.name} - Processing file ${path.relative(rootDir, file.fullPath)}`);
      for (const plugin of plugins) {
        await plugin.handleFile(file);
      }
    }
    await plugin.finish();
  }
}

void main();
