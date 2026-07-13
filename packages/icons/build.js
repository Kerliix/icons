/**
 * @kerliix/icons — build script
 * Reads every SVG in icons/ and emits:
 *   dist/index.js   — browser-safe ESM with SVG strings embedded (no fs/Node APIs)
 *   dist/index.d.ts — TypeScript declarations
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir  = path.join(__dirname, 'icons');
const distDir   = path.join(__dirname, 'dist');

fs.mkdirSync(distDir, { recursive: true });

const svgFiles = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg')).sort();

const jsLines  = ['// @kerliix/icons — generated, do not edit\n'];
const dtsLines = ['// @kerliix/icons — TypeScript declarations\n'];

for (const file of svgFiles) {
  const raw  = fs.readFileSync(path.join(iconsDir, file), 'utf-8');
  const name = path.basename(file, '.svg'); // filename IS the export name

  // Escape for JS template literal
  const escaped = raw
    .replace(/\\/g, '\\\\')
    .replace(/`/g,  '\\`')
    .replace(/\$\{/g, '\\${');

  jsLines.push(`/** SVG string for ${name} */\nexport const ${name} = \`${escaped}\`;\n`);
  dtsLines.push(`/** SVG string for ${name} */\nexport declare const ${name}: string;\n`);

  console.log(`  ✓ ${name}`);
}

fs.writeFileSync(path.join(distDir, 'index.js'),   jsLines.join('\n'));
fs.writeFileSync(path.join(distDir, 'index.d.ts'), dtsLines.join('\n'));

console.log(`\n@kerliix/icons: built ${svgFiles.length} icons → dist/`);
