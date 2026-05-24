# Improvements & Known Issues

QA audit run on 2026-05-24. Issues listed by priority.

---

## HIGH

### 1. Hero hardcodes `dark-*` classes — light mode visual inconsistency
**File:** `src/components/home/Hero.jsx`

The terminal window, social link buttons, and bio box use bare `bg-dark-surface`, `border-dark-border`, `text-dark-muted` without `dark:` prefix. These render dark in both themes. In light mode the bio box and social buttons stay dark while the rest of the page is light.

**Fix:** Add light-mode counterparts:
- `bg-dark-surface/70 border-dark-border` → `bg-light-surface/70 dark:bg-dark-surface/70 border-light-border dark:border-dark-border`
- Stat bubble labels: `text-dark-muted` → `text-light-muted dark:text-dark-muted`
- Social link buttons: same pattern

---

### 2. Mobile hero creates massive blank space
**File:** `src/components/home/Hero.jsx` (line ~201)

The orbiting stats container is `h-80` (320px). On mobile the 2-col grid stacks, so stats sit below the terminal. Combined with `min-h-screen` and 3-second animation delays on CTA/bio, the hero takes 2+ viewport heights before any section content appears.

**Fix:** Hide orbiting stats on mobile, replace with a simple static grid:
```jsx
{/* Desktop only */}
<div className="hidden lg:block relative h-96">
  {/* existing orbit code */}
</div>

{/* Mobile only */}
<div className="lg:hidden grid grid-cols-4 gap-3 text-center">
  {[
    { value: '450+', label: 'DSA' },
    { value: '8.52', label: 'CGPA' },
    { value: '20+', label: 'Contests' },
    { value: '6 Mo', label: 'Internship' },
  ].map(s => (
    <div key={s.label} className="p-3 bg-accent-primary/10 rounded-lg">
      <div className="font-bold text-accent-primary">{s.value}</div>
      <div className="text-xs text-light-muted dark:text-dark-muted">{s.label}</div>
    </div>
  ))}
</div>
```

---

### 3. `ProjectCard` missing `forwardRef` — exit animations broken
**File:** `src/components/home/ProjectCard.jsx`

`ProjectCard` is a plain function component used inside `AnimatePresence`. framer-motion's `PopChild` needs to pass a ref to measure the element for exit animations. Without `forwardRef`, the ref is silently dropped and scale-out animations on project filter changes don't run. Also fires a React console error on every render.

**Fix:**
```jsx
import { forwardRef } from 'react';

export const ProjectCard = forwardRef(({ project }, ref) => {
  return (
    <motion.div ref={ref} layout ...>
      {/* unchanged */}
    </motion.div>
  );
});
```

---

## MEDIUM

### 4. Light mode cards have near-zero contrast
**File:** `tailwind.config.js`

`light-bg` is `#ffffff` and `light-surface` is `#f8fafc` — nearly identical. Cards, section backgrounds, and the experience timeline dot all blend into the page.

**Fix:** Darken `light-surface`:
```js
light: {
  surface: '#f1f5f9',  // was #f8fafc
```

---

### 5. Header brand uses hardcoded `text-dark-muted`
**File:** `src/components/common/Header.jsx` (lines 58, 60)

The `@` and `:~$` glyphs use `text-dark-muted` unconditionally — wrong in light mode.

**Fix:** `text-dark-muted` → `text-light-muted dark:text-dark-muted`

---

### 6. React Router v6 future-flag console warnings
**File:** `src/App.jsx`

Two warnings on every page load about `v7_startTransition` and `v7_relativeSplatPath`.

**Fix:**
```jsx
<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
```

---

## LOW

### 7. Experience card tech tag animation redundancy
**File:** `src/components/home/Experience.jsx` (lines 144–156)

Individual tech tags use `whileInView` with `once: true`. On smaller viewports where the section is partially visible at load, tags can flash in inconsistently. The staggered delay adds visual noise without much payoff — the parent already animates the whole card in.

---

### 8. Personal phone number publicly visible
**File:** `src/data/personalInfo.js`

`phone: '9148126429'` renders as a `tel:` link in the Contact section. Consider removing if this is a personal mobile number.

---

### 9. Bundle size warning
The production JS bundle is **5MB / 1.9MB gzipped** — flagged by Vite. Mostly framer-motion. Not a blocker but worth addressing before the site gets real traffic.

**Fix:** Code-split with dynamic imports or configure `build.rollupOptions.output.manualChunks` in `vite.config.js`.
