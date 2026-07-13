/**
 * @kerliix/icons-webcomponents — build script
 * Generates one Custom Element per SVG and a self-registering bundle index.
 * Works in any framework or plain HTML via <script type="module">.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir  = path.join(__dirname, '../icons/icons');
const distDir   = path.join(__dirname, 'dist');

fs.mkdirSync(distDir, { recursive: true });

/** PascalCase → kebab-case  e.g. KerliixPayIcon → kerliix-pay-icon */
function toKebab(str) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

const svgFiles = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg')).sort();
const entries  = [];

for (const file of svgFiles) {
  const raw  = fs.readFileSync(path.join(iconsDir, file), 'utf-8');
  const name = path.basename(file, '.svg');
  const tag  = toKebab(name);  // e.g. kerliix-icon

  const vbMatch = raw.match(/viewBox="([^"]+)"/);
  const wMatch  = raw.match(/\bwidth="([^"]+)"/);
  const hMatch  = raw.match(/\bheight="([^"]+)"/);
  const viewBox = vbMatch ? vbMatch[1]
    : wMatch && hMatch    ? `0 0 ${wMatch[1]} ${hMatch[1]}`
    : '0 0 24 24';

  const inner = (raw.match(/<svg[^>]*>([\s\S]*?)<\/svg>\s*$/i) || [])[1]?.trim() ?? '';
  const esc   = inner.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

  fs.writeFileSync(path.join(distDir, `${name}.js`), `\
// @kerliix/icons-webcomponents — generated, do not edit
const _inner = \`${esc}\`;
const _viewBox = '${viewBox}';

export class ${name}Element extends HTMLElement {
  static observedAttributes = ['size', 'color'];

  connectedCallback()                   { this.#render(); }
  attributeChangedCallback()            { this.#render(); }

  #render() {
    const size  = this.getAttribute('size')  || '24';
    const color = this.getAttribute('color') || 'currentColor';
    this.innerHTML =
      \`<svg xmlns="http://www.w3.org/2000/svg" width="\${size}" height="\${size}" viewBox="\${_viewBox}" fill="\${color}">\${_inner}</svg>\`;
  }
}

if (!customElements.get('${tag}')) {
  customElements.define('${tag}', ${name}Element);
}
`);

  fs.writeFileSync(path.join(distDir, `${name}.d.ts`), `\
export declare class ${name}Element extends HTMLElement {
  connectedCallback(): void;
  attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
`);

  entries.push({ name, tag });
  console.log(`  ✓ <${tag}> → ${name}Element`);
}

// Barrel — import all files so a single import registers every element
fs.writeFileSync(path.join(distDir, 'index.js'),
  entries.map(e => `export { ${e.name}Element } from './${e.name}.js';`).join('\n') + '\n'
);
fs.writeFileSync(path.join(distDir, 'index.d.ts'),
  entries.map(e => `export { ${e.name}Element } from './${e.name}.js';`).join('\n') + '\n'
);

console.log(`\n@kerliix/icons-webcomponents: built ${entries.length} custom elements → dist/`);
