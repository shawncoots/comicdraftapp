# Comic Draft Marketing Site — Design Spec

**Date:** 2026-05-31  
**Status:** Approved  
**Phase:** 1 — Landing Page + Documentation

---

## Overview

A public marketing website for the Comic Draft macOS/iOS app. Built on Astro 6 + Starlight, deployed to GitHub Pages. Phase 1 delivers a custom landing page and a wired-up documentation section. Future phases will add Contact and other pages.

---

## Architecture

Two rendering contexts share a single design token layer:

| Context | Path | Owner |
|---|---|---|
| Landing page | `/` | Custom Astro page (`src/pages/index.astro`) |
| Documentation | `/docs/*` | Starlight (content in `src/content/docs/`) |

**Shared styling:**
- `src/styles/tokens.css` — ComicDraft design tokens (copied from `~/Desktop/DesignSystem/colors_and_type.css`). Imported globally.
- `src/styles/starlight.css` — Maps Starlight's `--sl-color-*` and `--sl-font-*` variables to ComicDraft tokens. Applied only to docs pages.
- Both files registered via `customCss` in `astro.config.mjs`.

The landing page does **not** use Starlight's shell (no sidebar, no TOC, no Starlight nav). Docs pages use Starlight's shell, styled with ComicDraft tokens.

---

## Landing Page (`src/pages/index.astro`)

A single Astro component with no JS framework. Styled using ComicDraft CSS variables directly.

### Sections (top to bottom)

**Nav**
- Left: site wordmark ("Comic Draft") in SF Mono
- Right: links — "Docs" (`/docs/guides/user-guide`), "Contact" (placeholder `#`)
- Sticky, `surfaceApp` background, 1px bottom border

**Hero**
- Headline: "Write Comics. Not Formatting."
- Tagline: 2–3 sentences summarizing the app's value prop (structured script elements, auto-numbering, clean export)
- CTAs: "Read the Docs" (→ `/docs/guides/user-guide`) + "Download on the App Store" (placeholder `#`)
- Accent blue (`#0A84FF`) for primary CTA, ghost style for secondary

**Features**
- 3 cards in a row
- Card 1: Structured script elements (PAGE, PANEL, CHARACTER, etc. auto-formatted as you type)
- Card 2: Auto-numbering (pages and panels renumber themselves)
- Card 3: Export (PDF, DOCX, FDX — one tap)
- Copy sourced from `Documentation.md`

**Screenshots**
- Two-up layout
- Images: `OutlineTray.png` and `PreviewScreen.png` from `~/Desktop/DesignSystem/assets/`
- Captions below each image
- These are placeholders; user will replace with final screenshots later

**Footer**
- App name + copyright
- Links: Docs, Contact (placeholder)

---

## Documentation

**Source file:** `~/Desktop/Documentation.md` (365 lines, already has Starlight frontmatter)  
**Destination:** `src/content/docs/guides/user-guide.md`

**Sidebar config** (`astro.config.mjs`):
```js
sidebar: [
  {
    label: 'Guides',
    items: [{ label: 'User Guide', slug: 'guides/user-guide' }],
  },
]
```

**Cleanup:** Delete `src/content/docs/guides/example.md`, `src/content/docs/reference/example.md`, and `src/content/docs/index.mdx`.

**Site title** updated to `"Comic Draft"` in `astro.config.mjs`.

---

## Theming

Starlight variable overrides in `starlight.css` (mapped from ComicDraft tokens):

| Starlight variable | ComicDraft value |
|---|---|
| `--sl-color-accent` | `#0A84FF` |
| `--sl-color-accent-high` | `#0070E0` |
| `--sl-color-white` | `#1C1C1E` |
| `--sl-color-gray-1` | `#6E6E73` |
| `--sl-color-bg` | `#F0F2F5` |
| `--sl-color-bg-nav` | `#E8EAED` |
| `--sl-color-bg-sidebar` | `#E8EAED` |
| `--sl-font` | `'SF Mono', 'Courier New', monospace` |

SF Mono font faces declared in `tokens.css`, loaded from `public/fonts/` (copied from DesignSystem).

---

## Files Changed

| Action | File |
|---|---|
| Create | `src/pages/index.astro` |
| Create | `src/styles/tokens.css` |
| Create | `src/styles/starlight.css` |
| Create | `src/content/docs/guides/user-guide.md` |
| Copy | `~/Desktop/DesignSystem/fonts/*` → `public/fonts/` |
| Copy | `~/Desktop/DesignSystem/assets/*.png` → `src/assets/` |
| Modify | `astro.config.mjs` |
| Delete | `src/content/docs/guides/example.md` |
| Delete | `src/content/docs/reference/example.md` |
| Delete | `src/content/docs/index.mdx` |

---

## Out of Scope (Phase 1)

- Contact page
- App Store link (placeholder only)
- Dark mode theming
- Analytics
- GitHub Pages deployment configuration
- Any page beyond landing + user guide
