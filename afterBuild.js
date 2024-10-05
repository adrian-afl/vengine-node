const fs = require('fs');
const path = require('path');

fs.mkdirSync(path.join(__dirname, "bin"), { recursive: true });
if(process.platform === "win32") {
    fs.copyFileSync(path.join(__dirname, "lib/win/x64/GLFW/glfw3.dll"), path.join(__dirname, "bin/glfw3.dll"));
    // fs.copyFileSync(path.join(__dirname, "build/Release/addon-win32.exp"), path.join(__dirname, "bin/addon-win32.exp"));
    // fs.copyFileSync(path.join(__dirname, "build/Release/addon-win32.lib"), path.join(__dirname, "bin/addon-win32.lib"));
    fs.copyFileSync(path.join(__dirname, "build/Release/addon-win32.node"), path.join(__dirname, "bin/addon-win32.node"));
} else if(process.platform === "linux") {
    fs.copyFileSync(path.join(__dirname, "build/Release/addon-linux.node"), path.join(__dirname, "bin/addon-linux.node"));
}
