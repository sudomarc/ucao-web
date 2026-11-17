# Visual QA Protocol — UCAO-UUCo Refonte

## Overview

This document defines the visual quality assurance process for the redesigned UCAO-UUCo website. All QA is based on **REA browser captures** of the locally-built `dist/` output, compared against the design system (DESIGN-BRIEF.md) and reference evidence (REFERENCE-RESEARCH.md).

**Tooling**: REA (`capture-browser-scenario`), headless Chromium 157, viewports 375×667 (mobile), 768×1024 (tablet), 1280×720 (desktop), 1440×900 (wide). Evidence preserved in `docs/reverse-engineering/evidence/ucao-new/`.

---

## QA Checkpoints

### 1. Design System Compliance (per DESIGN-BRIEF.md)

| Token / Rule | Test Method | Pass Criteria |
|--------------|-------------|---------------|
| `--color-primary` = #312783 | Screenshot + pixel sample on primary buttons, links, active nav | Exact hex match |
| `--color-secondary` = #991915 | Screenshot + pixel sample on secondary buttons, kickers, accents | Exact hex match |
| `--read-width` = 65ch | DOM inspection: `max-width` on text containers | Computed width ≤ 65ch |
| `--size-display` = 3.5rem on hero title | DOM: computed `font-size` of `.hero__title` | 56px (3.5rem @ 16px base) |
| `--size-h1` = 2.25rem | DOM: computed `font-size` of page H1 | 36px |
| `--size-h2` = 1.625rem | DOM: computed `font-size` of section H2 | 26px |
| `--size-h3` = 1.25rem | DOM: computed `font-size` of card titles | 20px |
| `--size-body` = 1.0625rem | DOM: computed `font-size` of paragraph text | 17px |
| Line height 1.6 on body | DOM: computed `line-height` | 1.6 |
| Focus outline = `--color-primary` | Keyboard nav + REA accessibility tree | Visible 2px solid #312783 outline |
| Skip-link functional | Keyboard: Tab to first element → Enter | Jumps to `#main`, focus moves |
| Reduced motion respected | `prefers-reduced-motion: reduce` + scroll | No non-essential animations |

### 2. Layout & Responsive Behavior

| Viewport | Breakpoint | Tests |
|----------|------------|-------|
| 375×667 | Mobile | Hamburger menu opens/closes; hero stacks (content above media); cards single column; footer stacks; read-width respected |
| 768×1024 | Tablet | Nav horizontal or condensed; hero side-by-side if designed; cards 2-column; footer 2-3 columns |
| 1280×720 | Desktop | Full nav; hero side-by-side; cards 2-3 column; footer 3-4 columns |
| 1440×900 | Wide | Max-width container centered; no horizontal overflow; hero media scales |

**REA capture command per viewport:**
```bash
node tools/rea-scenario.js ucao-new-<viewport> "http://localhost:8080/" <width> <height>
```

### 3. Component Verification (per DESIGN-BRIEF.md specs)

#### Hero Section
- [ ] Authentic campus photo (not hero-conakry.webp Wikimedia image)
- [ ] Photo has descriptive alt text + credit caption
- [ ] H1 = "Unité Universitaire de Conakry" (or approved title)
- [ ] Kicker = "Université Catholique de l'Afrique de l'Ouest" in uppercase, `--color-secondary`
- [ ] Lead paragraph present, ≤ 65ch width
- [ ] Two CTAs: Primary "Découvrir les formations", Secondary "S'informer sur les admissions"
- [ ] No carousel, no auto-rotation

#### Navigation
- [ ] Primary nav: Accueil | Université | Formations | Admissions | Vie universitaire | Actualités | Contact
- [ ] Mega-menu or dropdown under Formations (Licence / Master) — verified on desktop
- [ ] Mobile: hamburger → full-screen or slide panel with all items
- [ ] Language switcher (FR/EN) if confirmed `[À CONFIRMER]` — top right
- [ ] Emergency alert slot (hidden by default) — top of header `[À CONFIRMER]`
- [ ] Skip-link as first focusable element

#### Program Cards (VCU Arts pattern)
- [ ] Degree suffix in title: "Gestion Commerciale — Licence"
- [ ] H3 for title, p for description, ghost button for detail link
- [ ] Filter by level (Licence / Master) via query param `?niveau=`
- [ ] No identical-card grid — cards can vary height

#### News/Events Section
- [ ] Mixed news + events (H2 "Actualités & Événements")
- [ ] H3 headlines, time element, category tag
- [ ] No `[À CONFIRMER]` badges on user-facing content
- [ ] "Voir toutes les actualités" CTA

#### Values / Mission Section
- [ ] Not generic cards — unique visual expression per value
- [ ] Mission quote with citation (not `[À CONFIRMER]`)

#### Footer
- [ ] No duplicate nav blocks
- [ ] Brand block: logo + address + phones + verified email
- [ ] Quick links (5-7 items max)
- [ ] Legal links: Mentions légales, Politique confidentialité
- [ ] Social: Facebook (verified URL)

#### Consent Banner
- [ ] Minimal 2-button: "Accepter" / "Refuser" (no vendor matrix)
- [ ] Links to politique-confidentialite
- [ ] Does not block hero content (non-modal, dismissible)

### 4. Content Accuracy (Editorial Policy)

| Check | Method |
|-------|--------|
| No `[À CONFIRMER]` visible to users | Text search in DOM for "À CONFIRMER" |
| Email consistent: info@ucao-uuco.org | `mailto:` links all match |
| Phone numbers match footer | `tel:` links all match |
| Dates in news are past/present, not future | `time` elements ≤ today |
| Stats cited with source | "X étudiants (source: rapport 2025)" |

### 5. Accessibility (WCAG 2.1 AA)

| Criterion | REA Verification |
|-----------|------------------|
| 1.1.1 Non-text content | All `img` have `alt` (accessibility tree) |
| 1.3.1 Info & relationships | Heading hierarchy H1→H2→H3 (DOM) |
| 1.4.3 Contrast (minimum) | Pixel sampling on text/background pairs |
| 2.1.1 Keyboard | Tab order logical (accessibility tree focus order) |
| 2.4.1 Bypass blocks | Skip-link present + functional |
| 2.4.3 Focus order | Focus moves predictably |
| 2.4.7 Focus visible | `:focus-visible` outline on all interactive |
| 3.1.1 Language of page | `<html lang="fr">` |
| 3.2.2 On input | Form submission doesn't auto-navigate unexpectedly |

---

## QA Execution Workflow

1. **Build**: `npm run build` → verify 11 pages in `dist/`
2. **Serve**: `npx http-server dist -p 8080 -c-1`
3. **Capture baseline** (each viewport):
   ```bash
   node tools/rea-scenario.js ucao-new-mobile "http://localhost:8080/" 375 667
   node tools/rea-scenario.js ucao-new-tablet "http://localhost:8080/" 768 1024
   node tools/rea-scenario.js ucao-new-desktop "http://localhost:8080/" 1280 720
   node tools/rea-scenario.js ucao-new-wide "http://localhost:8080/" 1440 900
   ```
4. **Extract artifacts**: `node tools/extract-all.js` for each evidence file
5. **Compare screenshots** side-by-side with design mockups (if any)
6. **Run checklist** above; document failures in `QA-RESULTS.md`
7. **Fix → rebuild → recapture** until all pass

---

## Evidence Preservation

All QA evidence stored under `docs/reverse-engineering/evidence/ucao-new/`:
- `*-screenshot.png` — full-page render
- `*-dom.html` — complete rendered DOM
- `*-accessibility.txt` — accessibility tree
- `*-summary.txt` — structural summary (headings, links, buttons, scripts)
- `*.evidence.json` — raw REA evidence with sha256 artifact hashes

---

## Regression Baseline

Initial capture of **current site** (`ucao-current-home`) serves as "before" baseline. New site captures (`ucao-new-*`) are "after". Visual diff not automated — manual screenshot comparison required.

---

*Protocol established 2026-11-17 based on verified REA evidence from 9 reference sites and current UCAO site.*