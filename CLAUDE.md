# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is the **Comic Draft marketing website** — a public-facing site for the Comic Draft macOS/iOS app, built with Astro + Starlight and deployed to GitHub Pages.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview the production build locally
npm run astro -- --help  # Astro CLI help
```

## Architecture

**Framework:** Astro 6 with the Starlight documentation/content theme (`@astrojs/starlight`).

**Content:** All pages live in `src/content/docs/` as `.md` or `.mdx` files. Starlight auto-routes them based on filename. The frontmatter `title`, `description`, and `template` fields control how each page renders. The homepage (`index.mdx`) uses `template: splash` for a hero layout; remove that line to show the sidebar instead.

**Config:** `astro.config.mjs` is the single source of truth for site title, sidebar structure, and social links. Sidebar nav items must be manually declared here or use `autogenerate` for a directory.

**Design system:** The ComicDraft design system lives at `~/Desktop/DesignSystem/` — `colors_and_type.css` contains all CSS custom properties (colors, typography scale, spacing, radii, shadows). Fonts used: SF Mono (bundled OTFs in `DesignSystem/fonts/`) and Courier Prime (Google Fonts). The brand accent is `#0A84FF` (iOS system blue).

**Hosting:** GitHub Pages. Branch: `main`. No CI/CD configured yet.

**Key design tokens:**
- Accent: `#0A84FF` / hover `#0070E0`
- Surfaces: app `#F0F2F5`, sidebar `#E8EAED`, editor `#FFFFFF`
- Text: primary `#1C1C1E`, secondary `#6E6E73`, tertiary `#B0B7C3`
- Fonts: `'SF Mono'` for UI chrome, `'Courier Prime'` for script content
