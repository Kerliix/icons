import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const iconsDir = path.resolve(__dirname, "../icons/icons");
const distDir  = path.resolve(__dirname, "dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const svgFiles = fs.readdirSync(iconsDir).filter(f => f.endsWith(".svg"));
const componentNames = [];

for (const file of svgFiles) {
  const svgContent = fs.readFileSync(path.join(iconsDir, file), "utf-8");
  const baseName = path.basename(file, ".svg");

  // Follow README naming convention: component names must end with "Icon"
  const componentName = baseName.endsWith("Icon") ? baseName : `${baseName}Icon`;

  // Derive viewBox from explicit attribute or width/height
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const widthMatch   = svgContent.match(/width="([^"]+)"/);
  const heightMatch  = svgContent.match(/height="([^"]+)"/);
  const viewBox = viewBoxMatch
    ? viewBoxMatch[1]
    : widthMatch && heightMatch
      ? `0 0 ${widthMatch[1]} ${heightMatch[1]}`
      : "0 0 24 24";

  // Extract inner SVG markup (strips outer <svg> so we control it via props)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>\s*$/i);
  const innerContent = innerMatch ? innerMatch[1].trim() : "";

  // Escape for embedding in a JS template literal
  const escaped = innerContent
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");

  const componentCode = `import React from 'react';

const _inner = \`${escaped}\`;

export function ${componentName}({ size = 24, color = 'currentColor', className, style, ...props }) {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '${viewBox}',
    fill: color,
    className,
    style,
    dangerouslySetInnerHTML: { __html: _inner },
    ...props,
  });
}

${componentName}.displayName = '${componentName}';
`;

  fs.writeFileSync(path.join(distDir, `${componentName}.js`), componentCode);
  componentNames.push(componentName);
  console.log(`  ✓ ${componentName}`);
}

// Barrel index that re-exports all icons
const indexCode =
  componentNames.map(n => `export { ${n} } from './${n}.js';`).join("\n") + "\n";
fs.writeFileSync(path.join(distDir, "index.js"), indexCode);

console.log(`\nBuild complete — ${componentNames.length} React icon components generated.`);
