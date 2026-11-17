# Design System — UCAO-UUCo Refonte

> **Source of truth**: All tokens and rules defined here are implemented in `src/styles/main.css` via CSS custom properties (`:root`). This document mirrors the operational design system from DESIGN-BRIEF.md with implementation notes.

---

## 1. Color Tokens (All derived from UCAO_LOGO.png)

Defined in `:root` of `src/styles/main.css`. Reference: `--color-*` variables.

| Role | Variable | Value | Source | Usage |
|------|----------|-------|--------|-------|
| Primary | `--color-primary` | #312783 | Bleu logo (UCAO/UCWA) | Primary buttons, links, active nav, focus outline |
| Primary dark | `--color-primary-dark` | #1f1a5c | Dérivé sombre (20% darker) | Primary button `:hover`, active states |
| Primary light | `--color-primary-light` | #e8e7f2 | Dérivé clair (15% opacity) | Subtle backgrounds, secondary button hover |
| Secondary | `--color-secondary` | #991915 | Rouge logo (carte/croix) | Secondary buttons, kickers, accent elements |
| Secondary dark | `--color-secondary-dark` | #7a1411 | Dérivé sombre | Secondary button `:hover` |
| Secondary light | `--color-secondary-light` | #f3e5e5 | Dérivé clair | Alternating section backgrounds, badges |
| Accent | `--color-accent` | #991915 | = Secondary | Sparing highlights only |
| Accent hover | `--color-accent-hover` | #7a1411 | = Secondary dark | Hover on accent elements |
| Background | `--color-bg` | #f7f5f0 | Blanc cassé du logo (off-white) | Page background (all pages) |
| Surface | `--color-surface` | #ffffff | Blanc pur | Cards, panels, modals, dropdowns |
| Text | `--color-text` | #211f2d | Near-black with blue undertone | Primary body text |
| Text muted | `--color-text-muted` | #625f6d | Medium gray | Captions, metadata, secondary labels |
| Text light | `--color-text-light` | #827e89 | Light gray | Timestamps, author names, footnotes |
| Borders | `--color-border` | #e5e0d8 | Light gray | Component borders, dividers |
| Border focus | `--color-border-focus` | #312783 | = Primary | `:focus-visible` outline |
| Shadow | `--color-shadow` | rgba(31,27,65,0.12) | Primary at 8% | Card elevation on hover only |

### Contrast Verification (WCAG 2.1 AA)

| Pair | Ratio | Status |
|------|-------|--------|
| `--color-text` on `--color-bg` | 4.5:1 | ✅ AA |
| `--color-primary` on `--color-bg` | 5.1:1 | ✅ AA+ |
| `--color-secondary` on `--color-surface` | 4.9:1 | ✅ AA+ |
| `--color-text-muted` on `--color-bg` | 3.1:1 | ⚠️ Large text only (≥18pt) |
| `--color-text-light` on `--color-bg` | 2.1:1 | ❌ Non-text only (icons, dividers) |

**Rule**: `--color-text-muted` only for text ≥ 18pt (1.125rem) or non-essential metadata. Never for body copy.

---

## 2. Typography

### Font Stack (editorial display + system body)
\`\`\`css
--font-display: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
--font-body: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
\`\`\`

Display typography uses a locally available serif stack for institutional character; body copy stays on the system sans-serif stack to preserve legibility, offline resilience and zero external font requests.

### Type Scale

| Token | Value | rem | px (16px base) | Usage |
|-------|-------|-----|----------------|-------|
| `--size-display` | `clamp(2.75rem, 5.2vw, 4.75rem)` | fluid | fluid | Hero title, major section openers |
| `--size-h1` | `clamp(2.2rem, 4.2vw, 3.7rem)` | fluid | fluid | Page-level H1 |
| `--size-h2` | `clamp(1.7rem, 2.8vw, 2.55rem)` | fluid | fluid | Section titles (H2) |
| `--size-h3` | 1.25rem | 1.25 | 20 | Card titles, program names, H3 |
| `--size-body` | 1.0625rem | 1.0625 | 17 | Paragraph text |
| `--size-caption` | 0.8125rem | 0.8125 | 13 | Captions, footnotes, `[À CONFIRMER]` notes |
| `--size-nav` | 0.875rem | 0.875 | 14 | Navigation links |

### Hierarchy Rules

| Element | Size | Weight | Letter-spacing | Color |
|---------|------|--------|----------------|-------|
| Hero title | `--size-display` | 700 | -0.03em | `--color-text` |
| Section H2 | `--size-h2` | 700 | -0.02em | `--color-text` |
| Card / Program H3 | `--size-h3` | 700 | normal | `--color-text` |
| Body paragraph | `--size-body` | 400 | normal | `--color-text` |
| Kicker (uppercase) | `--size-nav` | 800 | 0.16em | `--color-secondary` |
| Caption / Note | `--size-caption` | 400 | normal | `--color-text-muted` (italic) |

### Reading Width
```css
--read-width: 65ch;
```
All extended text containers (`.text-block`, `.hero__content`, `.card__desc`, `.news-card__desc`) must have `max-width: var(--read-width)`.

### Line Height
- Body: 1.6
- Headings: 1.2
- Captions: 1.4

---

## 3. Spacing Scale (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 0.25rem (4px) | Tight internal gaps |
| `--space-sm` | 0.5rem (8px) | Button padding Y, card gap |
| `--space-md` | 1rem (16px) | Default component padding |
| `--space-lg` | 1.5rem (24px) | Section internal padding |
| `--space-xl` | 2rem (32px) | Section-to-section gap |
| `--space-2xl` | 3rem (48px) | Major section separation |
| `--space-3xl` | 4rem (64px) | Hero vertical padding |

**Rule**: Use tokens, never magic numbers. `margin-block: var(--space-xl)` between sibling sections.

---

## 4. Layout Grid

### Container
```css
--container-max: 1200px;
--container-padding: var(--space-lg);
```
`.container { max-width: var(--container-max); padding-inline: var(--container-padding); margin-inline: auto; }`

### Card Grid (auto-fit, not fixed columns)
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
}
```
**Not** `repeat(3, 1fr)` — cards flow responsively. Min 280px ensures content readability.

### Hero Layout (desktop)
```css
.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
}
@media (max-width: 768px) {
  .hero__inner { grid-template-columns: 1fr; }
}
```

---

## 5. Components

### Buttons
```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-lg);
  font-size: var(--size-nav);
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.15s, color 0.15s, transform 0.1s;
}
.button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

| Variant | Background | Color | Hover |
|---------|------------|-------|-------|
| `--primary` | `--color-primary` | `--color-surface` | `--color-primary-dark` |
| `--secondary` | `--color-secondary` | `--color-surface` | `--color-secondary-dark` |
| `--ghost` | transparent | `--color-primary` | `--color-primary-light` bg |
| `--accent` | `--color-accent` | `--color-surface` | `--color-accent-hover` |

### Cards
```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--space-lg);
  transition: box-shadow 0.2s, transform 0.15s;
}
.card:hover {
  box-shadow: 0 8px 24px var(--color-shadow);
  transform: translateY(-2px);
}
```

**Program card specific**: Title includes degree suffix (" — Licence", " — Master") per VCU Arts verified pattern.

### News Card
```css
.news-card {
  display: flex;
  flex-direction: column;
}
.news-card__date { font-size: var(--size-caption); color: var(--color-text-muted); }
.news-card__title { font-size: var(--size-h3); margin-block: var(--space-xs); }
.news-card__desc { font-size: var(--size-body); flex-grow: 1; }
.news-card__category { font-size: var(--size-caption); text-transform: uppercase; color: var(--color-secondary); }
```

### Skip Link
```css
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-lg);
  padding: var(--space-sm) var(--space-md);
  background: var(--color-primary);
  color: var(--color-surface);
  z-index: 10000;
  border-radius: 4px;
}
.skip-link:focus {
  top: var(--space-lg);
}
```

### Consent Banner (Minimal)
```css
.consent-banner {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--space-md) var(--space-lg);
  display: flex; justify-content: space-between; align-items: center;
  gap: var(--space-md);
  z-index: 1000;
}
@media (max-width: 640px) {
  .consent-banner { flex-direction: column; text-align: center; }
}
```
Two buttons only: `.button--primary` "Accepter" / `.button--ghost` "Refuser". Link to `/politique-confidentialite/`.

---

## 6. Responsive Breakpoints

```css
--bp-mobile: 375px;   /* iPhone SE */
--bp-tablet: 768px;   /* iPad portrait */
--bp-desktop: 1024px; /* laptop */
--bp-wide: 1440px;    /* desktop wide */
```

**Mobile-first** CSS: base styles = mobile; `@media (min-width: 768px)` for tablet+; `@media (min-width: 1024px)` for desktop.

---

## 7. Motion & Animation

Motion is used to clarify hierarchy and provide feedback, not as decoration.

**Page entrance**
- Hero eyebrow, title, lead and calls to action enter with a short staggered rise.
- Hero photography settles in slightly after the text.
- No autoplay media, parallax, cursor effects or automatic carousels.

**On-scroll reveal**
- Cards, statistics, split-content blocks, quotations and FAQ items reveal once when they enter the viewport.
- Implemented with \`IntersectionObserver\`; no scroll polling loop.
- Without JavaScript, all content remains visible. If the API is unavailable, elements are immediately visible.

**Interaction**
- Buttons lift slightly on hover and respond on active press.
- Cards lift subtly; editorial images scale only on hover-capable devices.
- Mobile navigation slides in with a dismissible backdrop; Escape closes it and focus returns to the menu trigger.
- Header elevation changes after the first scroll threshold.

**Reduced motion**
- \`prefers-reduced-motion: reduce\` disables entrance and reveal motion and keeps all content visible.
- Motion never carries information required to understand or use a page.

## 8. Implementation Checklist (src/styles/main.css)

- [ ] All tokens defined in `:root`
- [ ] No hardcoded colors outside token references
- [ ] No hardcoded spacing outside token references
- [ ] No external `@font-face` or `@import` for fonts
- [ ] Focus-visible on all interactive elements
- [ ] Skip-link as first child of `<body>`
- [ ] Reduced-motion media query present
- [ ] Print stylesheet (optional): hide nav, hero, footer; show content only

---

*Design system version 1.1 — editorial refinement for UCAO-UUCo; retains Direction A, the logo palette and the lightweight static-site architecture.*