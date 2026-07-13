# Contributing to Kerliix Icons

Thank you for your interest in contributing to Kerliix Icons! This document outlines the process and guidelines for contributing to this project.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Icon Design Guidelines](#icon-design-guidelines)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Naming Conventions](#naming-conventions)
- [Commit Messages](#commit-messages)
- [Reporting Issues](#reporting-issues)

---

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](./CODE_OF_CONDUCT.md). Please read it before contributing.

---

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/icons.git
   cd icons
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Create a branch** for your contribution:
   ```bash
   git checkout -b feat/my-icon-name
   ```

---

## How to Contribute

### Adding a New Icon

1. Create your icon as an SVG file
2. Place it in the correct directory under `packages/icons/icons/`
3. Follow the [Icon Design Guidelines](#icon-design-guidelines) and [Naming Conventions](#naming-conventions)
4. Run the build to generate the React component:
   ```bash
   npm run build
   ```
5. Verify the generated component in `packages/icons-react/dist/`

### Improving an Existing Icon

1. Locate the SVG in `packages/icons/icons/`
2. Make your improvements while maintaining the existing design language
3. Rebuild and verify

### Reporting Bugs or Requesting Icons

Open an issue at [https://github.com/Kerliix/icons/issues](https://github.com/Kerliix/icons/issues).

---

## Icon Design Guidelines

All Kerliix icons must follow these design standards:

| Property       | Requirement                        |
|----------------|------------------------------------|
| Grid           | 24 × 24 pixel base grid            |
| Format         | SVG only                           |
| Stroke weight  | Consistent throughout the set      |
| Style          | Clean, minimal geometry            |
| Optimization   | Remove unnecessary metadata        |
| Accessibility  | Meaningful shapes at small sizes   |

### SVG Requirements

- Use a clean, well-structured SVG with no unnecessary attributes
- Remove editor metadata (Illustrator/Figma export artifacts)
- Ensure the icon renders clearly at 16px, 24px, and 32px
- Do **not** hardcode `fill` or `stroke` colors — the React component controls color via props

### Brand Icons

Kerliix brand assets (logo, wordmark, product marks) are protected trademarks. Modifications to brand SVGs are **not accepted** through open contributions. See the [Trademark Notice](./README.md) for details.

---

## Submitting a Pull Request

1. Ensure your branch is up to date with `main`:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
2. Run the build and confirm no errors:
   ```bash
   npm run build
   ```
3. Push your branch and open a Pull Request against `main`
4. Fill in the PR template with:
   - What icon(s) you added or changed
   - Screenshots or previews if possible
   - Any relevant context

All contributions are reviewed before being merged.

---

## Naming Conventions

Icons follow a consistent `PascalCase` naming pattern ending with `Icon`:

| SVG File           | React Component     |
|--------------------|---------------------|
| `search.svg`       | `SearchIcon`        |
| `settings.svg`     | `SettingsIcon`      |
| `KerliixPay.svg`   | `KerliixPayIcon`    |
| `KerliixIcon.svg`  | `KerliixIcon`       |

- UI icons: `{Name}Icon` (e.g. `UserIcon`, `LockIcon`)
- Brand icons: `Kerliix{Product}Icon` (e.g. `KerliixPayIcon`, `KerliixOAuthIcon`)
- Avoid abbreviations — prefer `NotificationsIcon` over `NotifIcon`

---

## Commit Messages

Use clear, conventional commit messages:

```
feat: add SearchIcon SVG
fix: correct viewBox on LockIcon
chore: rebuild dist after icon update
docs: update contributing guidelines
```

Format: `type: short description`

Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`

---

## Reporting Issues

Found a bug or want to request a new icon?

- Open an issue: [https://github.com/Kerliix/icons/issues](https://github.com/Kerliix/icons/issues)
- For security issues, email **mahmoodkaliika810@gmail.com** directly

---

Thank you for helping make Kerliix Icons better!

© Kerliix 2026
