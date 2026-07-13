/**
 * @kerliix/icons-vue — build script
 * Generates one Vue 3 component (.js + .d.ts) per SVG, plus a barrel index.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir  = path.join(__dirname, '../icons/icons');
const distDir   = path.join(__dirname, 'dist');

fs.mkdirSync(distDir, { recursive: true });

const svgFiles = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg')).sort();
const names    = [];

for (const file of svgFiles) {
  const raw  = fs.readFileSync(path.join(iconsDir, file), 'utf-8');
  const name = path.basename(file, '.svg');

  const vbMatch = raw.match(/viewBox="([^"]+)"/);
  const wMatch  = raw.match(/\bwidth="([^"]+)"/);
  const hMatch  = raw.match(/\bheight="([^"]+)"/);
  const viewBox = vbMatch ? vbMatch[1]
    : wMatch && hMatch    ? `0 0 ${wMatch[1]} ${hMatch[1]}`
    : '0 0 24 24';

  const inner = (raw.match(/<svg[^>]*>([\s\S]*?)<\/svg>\s*$/i) || [])[1]?.trim() ?? '';
  const esc   = inner.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

  fs.writeFileSync(path.join(distDir, `${name}.js`), `\
// @kerliix/icons-vue — generated, do not edit
import { h, defineComponent } from 'vue';

const _inner = \`${esc}\`;

export const ${name} = defineComponent({
  name: '${name}',
  props: {
    size:  { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
  },
  setup(props, { attrs }) {
    return () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width:    props.size,
      height:   props.size,
      viewBox:  '${viewBox}',
      fill:     props.color,
      innerHTML: _inner,
      ...attrs,
    });
  },
});
`);

  fs.writeFileSync(path.join(distDir, `${name}.d.ts`), `\
import { DefineComponent } from 'vue';
export declare const ${name}: DefineComponent<{
  size?:  number | string;
  color?: string;
}>;
`);

  names.push(name);
  console.log(`  ✓ ${name}`);
}

fs.writeFileSync(path.join(distDir, 'index.js'),
  names.map(n => `export { ${n} } from './${n}.js';`).join('\n') + '\n'
);
fs.writeFileSync(path.join(distDir, 'index.d.ts'),
  names.map(n => `export { ${n} } from './${n}.js';`).join('\n') + '\n'
);

console.log(`\n@kerliix/icons-vue: built ${names.length} components → dist/`);
