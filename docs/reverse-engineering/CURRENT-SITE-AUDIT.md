# Current Site Audit — UCAO-UUCo Existing Website

## Overview

This audit is based on **verified REA capture** of the locally-built site (http://localhost:8080/ — `npm run build` output served via http-server), not the live domain. REA evidence: `evidence/ucao-current-home.evidence.json`, headless Chromium 157, viewport 1280×720, `complete` mode (cleanup succeeded). Artifacts in `evidence/ucao-current/`: screenshot (341 KB), DOM (15 017 chars), accessibility tree (8.4 KB), summary.

**Stack confirmed**: Static site generator `src/build.js` (926 lines), JSON content in `src/content/`, vanilla CSS (`src/styles/main.css`, 1477 lines) and JS (`src/js/main.js`). Build produces 11 pages.

---

## 1. Architecture Globale

### Routes et Pages Existantes (VERIFIED from nav + build output)

| Route | Slug | Status | Verified in DOM |
|-------|------|--------|-----------------|
| Accueil | / | ✅ | Hero, intro, stats, split, cards, admissions, news, values, quick links |
| Université | /universite/ | ✅ | Linked in nav/footer |
| Formations | /formations/ | ✅ | Linked in nav/footer; filter query `?niveau=licence|master` present |
| Admissions | /admissions/ | ✅ | Linked in nav/footer/hero CTAs |
| Vie universitaire | /vie-universitaire/ | ✅ | Linked in nav/footer |
| Actualités | /actualites/ | ✅ | Linked in nav/footer |
| Contact | /contact/ | ✅ | Linked in footer |
| FAQ | /faq/ | ✅ | Linked in nav/footer |
| Mentions légales | /mentions-legales/ | ✅ | Linked in nav/footer |
| Politique de confidentialité | /politique-confidentialite/ | ✅ | Linked in nav/footer |
| 404 | /404.html | ✅ | Build output (not captured) |

### Points Forts (À Conserver) — VERIFIED

1. **Centralized JSON content** — All page data in `src/content/pages/*.json` + `src/content/formations.json` + `src/content/actualites.json` + `src/content/site.json` + `src/content/nav.json`. Single source of truth.
2. **Official logo used** — `UCAO_LOGO.png` (172×148, 6.6 KB) embedded in header and footer with proper `alt` text. Logo is the visual anchor.
3. **Palette derived from logo** — DESIGN-BRIEF.md documents `#312783` (bleu) and `#991915` (rouge) as primary tokens; these ARE in the CSS (`--color-primary`, `--color-accent`).
4. **Honest form handling** — Contact form explicitly notes no backend identified; no fake success toast.
5. **Skip-link present** — `a.skip-link[href="#main"]` verified in DOM (accessibility tree confirms it).
6. **Focus-visible CSS** — `:focus-visible` rules present in `main.css`.
7. **Proper heading hierarchy** — H1 → H2 → H3 verified throughout (no skipped levels).
8. **Responsive breakpoints** — Media queries at 375px, 640px, 1024px, 1440px in CSS.
9. **Authentic campus photos** — 60+ WhatsApp photos in `src/assets/images/` with descriptive filenames (`campus-*.jpg`, `campus-bureau-*.jpg`, `campus-classe-*.jpg`, etc.) and credits. NOT all used yet.
10. **OG meta tags** — `og:title`, `og:description`, `og:image` (hero-conakry.webp), `og:locale: fr_FR` present.

### Problèmes Identifiés (À Corriger / Supprimer) — VERIFIED from DOM

1. **Hero image is NOT campus photography** — `hero-conakry.webp` is a Wikimedia Commons CC BY-SA 4.0 photo of Conakry city (alt text confirms: "Illustration, non une photo du campus UCAO-UUCo"). Authentic campus photos exist in assets but are unused in hero.

2. **Hero palette disconnect** — The hero section uses the city photo with no visible brand color integration. The logo colors (#312783, #991915) don't appear as overlays, accents, or structural elements in the hero.

3. **Stats section has `[À CONFIRMER]` warnings in content** — Verified in DOM: "Repères institutionnels à confirmer avec l'administration", "7 Pays du réseau UCAO [À CONFIRMER]", "2000 Fondation de l'UCAO [À CONFIRMER]". These are hardcoded in the JSON — visible to users.

4. **Split section uses one campus photo only** — `campus-classe-cahiers.jpg` with alt "Étudiantes en cours à l'UCAO-UUCo, Conakry" — single photo; 59 others unused.

5. **Program cards are generic** — Two cards (Licence / Master) with identical structure, ghost buttons, `[À CONFIRMER]` badge on each. No degree suffixes in titles (cf. VCU Arts pattern: "Graphic Design B.F.A., M.F.A." — UCAO could show "Gestion Commerciale — Licence").

6. **News cards all carry `[À CONFIRMER]`** — Three articles (25-year Jubilee, colloque on cultural diversity, student day) all flagged. Dates are 2025-11 (future-dated from build perspective). Categories: Événement, Colloque, Vie étudiante.

7. **Values section = 4 generic cards** — "Exigence académique", "Formation humaine", "Service à la communauté", "Ouverture et partenariat" — no unique UCAO-specific expression; could apply to any Catholic university.

8. **Footer duplication** — "Liens rapides" and "Informations" blocks overlap (Université, Formations, Admissions appear in both). 10 footer nav items total, 5 duplicated.

9. **Email discrepancy** — Footer shows `mailto:info@ucao-uuco.org` labeled "[À CONFIRMER]". Editorial-tracking.md notes conflict: `info@ucao.uuco.org` vs `info@ucao-uuco.org` — unresolved.

10. **No search functionality** — Despite being standard on reference sites (SOAS, Stanford, ND, USF all have search), current site has none.

11. **No language switcher** — French only; reference sites with multilingual audiences (Aalto: fi/sv/en) have it prominently.

12. **Consent UI absent** — No cookie banner or GDPR notice. Reference sites all have one (SOAS: Civic Computing; Hull/Aalto: Cookiebot; LSAD: 3-button). Required for EU visitors / international compliance.

13. **Emergency/alert slot absent** — USF pattern (emergency banner at very top) not present. Useful for strike notices, exam changes, campus closures `[À CONFIRMER]`.

14. **DOM is extremely light** — 15 KB total. Indicates minimal HTML, likely client-side JS hydration for some components but mostly server-rendered static HTML. Compare: Hull 406 KB, Stanford 624 KB — current site has far less editorial depth.

15. **Image count: 4 total on homepage** — Logo (×2), hero, split section. Compare: Hull 66, Aalto 57, SOAS 25 — current site drastically underuses its authentic photo library.

---

## 2. Content Gaps vs. Reference Patterns

| Pattern (from verified refs) | Current Site | Gap |
|---|---|---|
| Story-led homepage (ND, USF, Hull) | Administrative sections | Lead with student/research stories |
| Degree suffixes in program cards (VCU Arts) | "Licence" / "Master" only | Add "— Licence", "— Master" to titles |
| Course search on homepage (SOAS) | None | Add searchbox with filter by level |
| Stat cards with cited sources (SOAS) | 3 stats, all `[À CONFIRMER]` | Replace with verified facts |
| Multi-campus/unit switcher (LSAD/TUS) | None | If UUCo is one of multiple units `[À CONFIRMER]` |
| Audience "Information for" clusters (Stanford) | None | Étudiants / Enseignants / Partenaires / Alumni |
| Emergency alert banner (USF) | None | Add alert slot |
| Language switcher (Aalto) | None | French / English (if confirmed) |
| Consent banner (all refs) | None | Minimal 2-button banner |

---

## 3. Technical Debt

1. **Build script monolith** — `src/build.js` (926 lines) handles all templating inline. Hard to maintain; consider partial extraction.
2. **CSS tokens vs. usage mismatch** — Some CSS custom properties defined but not used (verify via grep).
3. **JS minimal** — `main.js` only handles mobile menu toggle. No progressive enhancement for forms, no intersection observer for scroll reveal.
4. **No build-time validation** — No schema validation of JSON content (could use JSON Schema for `formations.json`, `actualites.json`).
5. **Asset pipeline manual** — Images copied by hand; no optimization pipeline (WebP/AVIF generation, responsive srcset).

---

## 4. Accessibility Baseline (VERIFIED)

- ✅ Skip-link (`#main`)
- ✅ Heading hierarchy (H1→H2→H3, no gaps)
- ✅ Focus-visible styles
- ✅ Alt text on all images (including descriptive alt on hero photo)
- ✅ Semantic landmarks: header, nav, main, footer
- ❌ No ARIA landmarks beyond native HTML5
- ❌ No cookie consent (legal requirement for EU visitors)
- ❌ No language attribute on page sections (though `lang="fr"` on `<html>`)
- ❌ Form labels need audit (contact page not captured)

---

## 5. Recommendation Priority

| Priority | Action | Rationale |
|----------|--------|-----------|
| P0 | Replace hero image with authentic campus photo + brand color overlay | Hero is the first impression; current is generic city photo |
| P0 | Remove all `[À CONFIRMER]` from user-facing content; replace with verified data or hide sections | Editorial policy violation; damages credibility |
| P0 | Add cookie consent banner (minimal 2-button) | Legal compliance; all refs have it |
| P1 | Implement degree-suffix program cards (VCU Arts pattern) | Direct UX improvement for formation discovery |
| P1 | Add homepage course search (SOAS pattern) | Primary user task: find a program |
| P1 | Use 5+ authentic campus photos across homepage | Current uses 1; 60 available |
| P2 | Add "Information for" audience clusters in nav/footer | Standard on 3+ refs; improves task completion |
| P2 | Implement emergency/alert slot in header template | Low cost, high utility for university |
| P2 | Language switcher (if English confirmed) | Aalto pattern; international audience |
| P3 | Deduplicate footer nav blocks | Clean IA |
| P3 | Resolve email discrepancy (info@ucao.uuco.org vs info@ucao-uuco.org) | Editorial accuracy |
| P4 | Build-time JSON schema validation | Prevent content regressions |
| P4 | Image optimization pipeline (srcset, WebP, AVIF) | Performance |

---

## 6. Assets Inventory (VERIFIED)

| Asset | Status | Notes |
|-------|--------|-------|
| `UCAO_LOGO.png` | ✅ In `src/assets/images/` | 172×148, used in header & footer |
| `hero-conakry.webp` | ✅ In `src/assets/images/` | **Problem**: Wikimedia CC BY-SA city photo, not campus |
| `campus-*.jpg` (60+) | ✅ In `src/assets/images/` | Authentic UCAO campus photos; only 1 used on homepage |
| `favicon.svg` | ✅ Referenced in DOM | Not verified in assets folder |
| WhatsApp photos | ✅ 60+ files | Need cataloging and credit assignment |

---

*Evidence basis: REA capture `evidence/ucao-current-home.evidence.json` (complete mode), DOM (15 017 chars), accessibility tree (8 449 chars), screenshot (341 KB PNG), structural summary. Captured 2026-11-17.*