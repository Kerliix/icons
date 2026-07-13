/**
 * @kerliix/icons-svelte — build script
 * Generates one .svelte component per SVG (consumers compile with their own bundler),
 * plus a barrel index.js that re-exports all component paths.
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

  // Svelte component — uses {@html} to embed the SVG paths
  fs.writeFileSync(path.join(distDir, `${name}.svelte`), `\
<!-- @kerliix/icons-svelte — generated, do not edit -->
<script>
  export let size  = 24;
  export let color = 'currentColor';
  let className = '';
  export { className as class };
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="${viewBox}"
  fill={color}
  class={className}
  {...$$restProps}
>
  {@html \`${inner.replace(/`/g, '\\`')}\`}
</svg>
`);

  // TypeScript definition for the component
  fs.writeFileSync(path.join(distDir, `${name}.d.ts`), `\
import { SvelteComponentTyped } from 'svelte';
export default class ${name} extends SvelteComponentTyped<{
  size?:  number | string;
  color?: string;
  class?: string;
}> {}
`);

  names.push(name);
  console.log(`  ✓ ${name}`);
}

// Barrel — named re-exports pointing to the .svelte files
const barrelJs = names.map(n =>
  `export { default as ${n} } from './${n}.svelte';`
).join('\n') + '\n';

const barrelDts = names.map(n =>
  `export { default as ${n} } from './${n}.svelte';`
).join('\n') + '\n';

fs.writeFileSync(path.join(distDir, 'index.js'),   barrelJs);
fs.writeFileSync(path.join(distDir, 'index.d.ts'), barrelDts);

console.log(`\n@kerliix/icons-svelte: built ${names.length} components → dist/`);
