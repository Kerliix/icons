# Changelog

All notable changes to Kerliix Icons are documented here.

This project follows [Semantic Versioning](https://semver.org/) and the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.

---

## [1.0.0] — 2026-07-13

First public release of the Kerliix Icons library.

### Packages

| Package | Description |
|---|---|
| `@kerliix/icons` | Browser-safe SVG string exports (no Node.js `fs` dependency) |
| `@kerliix/icons-react` | React components with `size`, `color`, `className`, `style`, and all SVG props |
| `@kerliix/icons-vue` | Vue 3 components with `size`, `color`, and attribute pass-through |
| `@kerliix/icons-svelte` | Svelte components with `size`, `color`, `class`, and `$restProps` |
| `@kerliix/icons-webcomponents` | Framework-agnostic Custom Elements, works in any HTML or JS project |
| `kerliix-icons` (PyPI) | Python — typed SVG strings, `get_icon()`, `list_icons()`; works in Django, FastAPI, Jinja2, and any template engine |

### Icons

#### Brand
- `KerliixIcon` — Kerliix lettermark (487 × 487)
- `KerliixIcons` — Kerliix Icons product mark (527 × 527)
- `KerliixPayIcon` — Kerliix Pay brand icon (561 × 562)

### TypeScript
- Full `.d.ts` declarations shipped with every package
- All packages export a typed barrel `index.d.ts`

### Framework Usage

**React**
```jsx
import { KerliixIcon } from '@kerliix/icons-react';
<KerliixIcon size={32} color="#000" />
```

**Vue 3**
```vue
<script setup>
import { KerliixIcon } from '@kerliix/icons-vue';
</script>
<template>
  <KerliixIcon :size="32" color="#000" />
</template>
```

**Svelte**
```svelte
<script>
  import { KerliixIcon } from '@kerliix/icons-svelte';
</script>
<KerliixIcon size={32} color="#000" />
```

**Web Components (any framework or plain HTML)**
```html
<script type="module">
  import '@kerliix/icons-webcomponents';
</script>
<kerliix-icon size="32" color="#000"></kerliix-icon>
```

**Raw SVG string**
```js
import { KerliixIcon } from '@kerliix/icons';
document.getElementById('logo').innerHTML = KerliixIcon;
```

---

## [Unreleased]

_Future changes will be listed here before each release._

---

[1.0.0]: https://github.com/Kerliix/icons/releases/tag/v1.0.0
