/* eslint-disable no-console */
import { scan } from "fast-scan-dir-recursive";
import * as fs from "fs";

import path = require("path");

interface ExportedFunction {
  name: string;
  declaration: string;
  callArgs: string;
}

async function main(): Promise<void> {
  const nativePath = path.resolve(path.join(__dirname, "..", "native"));
  const nodePath = path.resolve(path.join(__dirname, "..", "node"));

  const nativeFiles = (await scan(nativePath)).filter((x) => !x.includes("/.vs/") && !x.includes("\\.vs\\"));

  const exportedFunctions: ExportedFunction[] = [];

  for (const nativeFile of nativeFiles) {
    console.log(`Processing ${nativeFile}`);
    const contentsLines = fs
      .readFileSync(nativeFile)
      .toString("utf-8")
      .split("\n");

    const exportLines = contentsLines.filter((x) =>
      x.includes("@ExportFunction")
    );
    for (const exportLine of exportLines) {
      const refined = exportLine.replace(/^\/\/.*?@ExportFunction/, "").trim();
      // refined in format: updateDynamicsWorld = (time: number, subSteps: number): void
      const nameDeclarationArr = refined.split("=").map((x) => x.trim());
      const name = nameDeclarationArr[0];
      const declaration = nameDeclarationArr[1];
      const callArgsPart = [...(declaration.match(/\((.*?)\)/) ?? [])][1] + ",";
      const callArgs = [...callArgsPart.matchAll(/(.*?):.*?,/g)].map((x) =>
        x[1].trim()
      );
      exportedFunctions.push({
        name,
        declaration,
        callArgs: callArgs.join(", "),
      });
    }
  }

  const nodeLines: string[] = [
    fs.readFileSync(path.join(__dirname, "header.ts")).toString("utf-8"),
  ];
  const nativeLines: string[] = [];

  for (const func of exportedFunctions) {
    nativeLines.push(
      `exports["${func.name}"] = Napi::Function::New(env, ${func.name}, "${func.name}");`
    );
    nodeLines.push(
      `export const ${func.name} = ${func.declaration} => native.${func.name}(${func.callArgs});`
    );
  }

  fs.writeFileSync(
    path.join(nativePath, "nativeExports.h"),
    nativeLines.join("\n")
  );
  fs.writeFileSync(path.join(nodePath, "native.ts"), nodeLines.join("\n"));
}
void main();
