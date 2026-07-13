Kerliix Icons

Official icon library for the Kerliix ecosystem.

Kerliix Icons provides a unified collection of clean, scalable icons designed for Kerliix products, applications, developer tools, and user interfaces.

---

Packages

Kerliix Icons is distributed as separate packages:

"@kerliix/icons"

Core SVG icon assets.

Use this package when you need raw SVG files, custom rendering, or integration with non-React applications.

npm install @kerliix/icons

---

"@kerliix/icons-react"

Official React component library built on top of Kerliix SVG icons.

Provides React-friendly components with support for:

- "size"
- "color"
- "className"
- SVG properties
- Custom styling

npm install @kerliix/icons-react

---

Usage

SVG Icons

Import SVG assets directly:

import { KerliixIcon, KerliixPayIcon } from "@kerliix/icons";

console.log(KerliixIcon);

Or access the raw files:

node_modules/@kerliix/icons/icons/kerliix.svg

You can also use them directly in HTML:

<img src="/icons/kerliix.svg" alt="Kerliix">

---

React Usage

Import icons from:

@kerliix/icons-react

Example:

import { KerliixIcon } from "@kerliix/icons-react";

export default function App() {
  return (
    <KerliixIcon
      size={24}
      color="currentColor"
    />
  );
}

All icons support standard SVG properties:

<KerliixIcon
  size={32}
  className="my-icon"
  strokeWidth={1.5}
/>

---

Available Icons

Kerliix Icons includes:

Brand

- Kerliix
- Kerliix Pay
- Kerliix OAuth
- Kerliix UAPI

Products

- Accounts
- Payments
- Developer Tools
- Cloud Services

UI

- Search
- Settings
- User
- Notifications
- Navigation

Security

- Shield
- Lock
- Key
- Verification

More icons are added continuously.

---

Design Principles

All Kerliix icons follow a consistent design system:

- 24×24 pixel grid
- Clean and minimal geometry
- Consistent stroke weight
- Scalable SVG format
- Optimized for digital interfaces
- Designed for accessibility and clarity

Kerliix Icons are built for:

- Web applications
- Mobile applications
- Developer platforms
- Dashboards
- Design systems

---

Icon Naming Convention

Icons follow a predictable naming structure.

Examples:

KerliixIcon
KerliixPayIcon
KerliixOAuthIcon
UserIcon
SearchIcon
SettingsIcon

Brand assets use the Kerliix prefix to avoid naming conflicts.

---

License

Kerliix Icons are licensed under the:

MIT License

You are free to:

- Use icons in personal projects
- Use icons in commercial projects
- Modify UI icons
- Redistribute the library

---

Trademark Notice

The MIT license applies to the icon library and SVG assets.

However, Kerliix brand assets remain protected trademarks.

Restricted assets include:

- Kerliix logo
- Kerliix wordmark
- Kerliix Pay logo
- Product-specific logos
- Official brand marks

These assets may not be:

- Modified
- Rebranded
- Used to imply official partnership or endorsement
- Used as part of another brand identity

Official brand usage guidelines will be provided separately.

---

Contributing

Contributions are welcome.

Before submitting an icon:

1. Fork the repository
2. Create your icon in SVG format
3. Follow the 24×24 grid system
4. Maintain existing design consistency
5. Submit a Pull Request

Example:

icons/
 └── security/
      └── shield.svg

All contributions are reviewed before being included.

---

Repository

GitHub:

https://github.com/Kerliix/icons

Website:

https://icons.kerliix.com

---

Roadmap

Future improvements include:

React Ecosystem

- Complete React component library
- TypeScript support
- Component documentation
- Playground

Developer Tools

- CDN delivery
- Icon search platform
- API access
- Package integrations

Design Tools

- Figma component library
- Design tokens
- Plugin integrations

Ecosystem Integration

Native integration across:

- Kerliix Accounts
- Kerliix Pay
- Kerliix OAuth
- Kerliix Developer Platform
- Future Kerliix products

---

About Kerliix

Kerliix Icons are part of the broader Kerliix ecosystem, providing a unified visual language across Kerliix products and services.

© Kerliix 2026
