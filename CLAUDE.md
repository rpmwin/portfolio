# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite)
npm run build     # production build
npm run preview   # preview production build locally
```

No test runner or linter configured.

## Architecture

**Stack:** React 18 + Vite + Tailwind CSS v3 + framer-motion + React Router v6

**Routing:** Two routes only — `/` (Home) and `/projects/:projectId` (ProjectPage). Both render within the persistent Header/Footer shell in `App.jsx`.

**Content layer:** All site content lives in `src/data/` as plain JS exports (`personalInfo`, `projects`, `experience`, `skills`, `achievements`). To add/update content, edit only these files. `projects.js` also exports helpers (`getProjectById`, `getProjectCategories`, `getProjectTags`) used by filtering components.

**Theme:** `ThemeContext` toggles a `dark` class on `<html>` (Tailwind `darkMode: 'class'`). Persisted in `localStorage`. Default is dark. Use `dark:` variants for all theme-sensitive styles. Custom semantic color tokens (`dark-bg`, `dark-surface`, `light-bg`, etc.) and `accent-*` are defined in `tailwind.config.js` — use these over arbitrary values.

**Animations:** Shared framer-motion variants live in `src/utils/animations.js`. Reuse these (`sectionVariants`/`itemVariants` for staggered lists, `cardHoverVariants` for cards, `fadeInUp` for generic entrance) before creating new ones.

**Contact form:** Uses `emailjs-com` — credentials are referenced as env vars or hardcoded in the Contact component. Check before changing.
