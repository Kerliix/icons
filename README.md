# Kerliix Icons

Official icon library for the Kerliix ecosystem.

## Packages

- `@kerliix/icons` → Raw SVG icons
- `@kerliix/icons-react` → React components

## Installation

### SVG icons
```bash
npm install @kerliix/icons
```

### React (if using React)
```bash
npm install @kerliix/icons-react
```

## Usage

### Using SVGs directly
```js
import { icons } from "@kerliix/icons";

console.log(icons.k);
```

Or use the files directly:

```
node_modules/@kerliix/icons/icons/k.svg
```

### React usage (example)
```jsx
import { KIcon } from "@kerliix/icons-react";

export default function App() {
  return <KIcon size={24} />;
}
```

## Design Principles

- 24x24 grid
- Consistent stroke width
- Clean, minimal, scalable SVGs
- Designed for UI, apps, and developer tools

## License

Kerliix icons are licensed under the MIT License.

## Trademark Notice

Kerliix icons are MIT licensed. Kerliix logos are trademarks and cannot be modified or misused.

This includes (but is not limited to):
- Kerliix logo
- Kerliix Pay logo
- Brand-specific assets

For brand usage, please follow official guidelines (coming soon).

## Contributing

We welcome contributions!

### Steps:
1. Fork the repo
2. Add your icon (SVG format, 24x24 grid)
3. Ensure consistency with existing icons
4. Open a Pull Request

> Kerliix icons are part of a broader kerliix ecosystem.

## Links

- GitHub: https://github.com/Kerliix/icons
- Website: https://icons.kerliix.com

## Future Plans

- Full React library
- CDN delivery
- Figma kit
- Icon search platform
- Integration with design tools

> Kerliix 2026.
