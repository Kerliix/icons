import fs from "fs";
import path from "path";

const srcDir = path.resolve("packages/icons-react/src");
const distDir = path.resolve("packages/icons-react/dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

files.forEach(file => {
  const content = fs.readFileSync(path.join(srcDir, file), "utf-8");
  fs.writeFileSync(path.join(distDir, file), content);
});

console.log("Build complete: React icons ready.");

