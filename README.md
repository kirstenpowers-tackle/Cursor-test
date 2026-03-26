# Tackle.io Customer Login Screen

Two-version login screen prototype built strictly on Tackle.io design tokens and components.

**Design source:** [Tackle Design Library (Figma)](https://www.figma.com/design/b88tCh5B2ujs1KYoJQsvOB/%E2%9A%9B%EF%B8%8F-Tackle-Design-Library?node-id=0-1&t=xpOhyCK3Lrz357je-1)

---

## Versions

| Version | Layout | Description |
|---------|--------|-------------|
| **V1 — Centered Card** | `ContentLayout` (full-viewport) + Tackle Card | Clean, focused authentication card centered on a neutral background with a subtle brand gradient. Best for embedded contexts or minimal-chrome experiences. |
| **V2 — Split Panel** | `LeftPanelLayout` + `ContentLayout` | Two-column split: a dark Tackle-navy brand storytelling panel on the left (elevation-500L) and a white form panel on the right (elevation-500R). Best for full-page, high-impact login flows. |

---

## Design Token Compliance

All styles are mapped exclusively to Tackle design tokens:

- **Color** (`🌈 Color`): `--color-neutral-*`, `--color-brand-primary-*`, `--color-brand-teal-*`, `--color-semantic-*`
- **Elevation** (`🌈 Elevation`): `--elevation-100` through `--elevation-500R/L`
- **Typography** (`🌈 Typography`): `TextOpenSans` — font family, size scale, weight, and line-height tokens
- **Layout & Grid** (`🌈 Layout & Grid`): `ContentLayout`, `LeftPanelLayout` grid patterns; 12-column reference spacing
- **Iconography** (`🌈 Iconography`): SVG icon set aligned to Symbols / Actions / Warning & Information categories

## Components Used

`TackleLogo` · `Button` (primary, secondary, ghost) · `TextField` · `PasswordField` · `Checkbox` · `Alert` · `GlobalHeaderLayout` (version switcher nav strip)

---

## Development

```bash
cd tackle-login
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
```

The app renders a **version switcher tab bar** at the top so both designs can be previewed and compared interactively.

---

## Quality Gate

- [x] Figma library URL referenced as source of truth
- [x] Only Tackle tokens used (Color, Elevation, Iconography, Layout & Grid, Typography)
- [x] Only approved components/patterns used
- [x] Composition aligns to `Page -` composite examples (form rhythm, action placement, header structure)
- [x] No ad-hoc styles, one-off shadows, or custom spacing scales
- [x] Interaction patterns align with component intent (TextField, Button, Checkbox, Alert semantics)
