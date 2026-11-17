# Implementation Roadmap — UCAO-UUCo Refonte (Evidence-Based)

## Status: RESEARCH COMPLETE — IMPLEMENTATION PENDING

**Research phase complete** (2026-11-17): 9 of 10 reference sites captured via REA with verified DOM/screenshot/accessibility evidence. Current UCAO site audited via REA capture. All docs rewritten with evidence status tags (VERIFIED / INFERRED / NOT OBSERVED).

**Implementation NOT STARTED** — the existing `dist/` output is the pre-research baseline. The refonte will rebuild from scratch using the verified patterns.

---

## Phase 0: Research & Documentation ✅ COMPLETE

| Task | Status | Evidence |
|------|--------|----------|
| REA capture: 9 reference homepages | ✅ | `evidence/<ref>-home.evidence.json` |
| REA capture: current UCAO site | ✅ | `evidence/ucao-current-home.evidence.json` |
| Extract all artifacts | ✅ | `evidence/<ref>/` folders with DOM, a11y, screenshots |
| Rewrite REFERENCE-RESEARCH.md | ✅ | Verified sections only; Cornell/Oxford retracted |
| Rewrite CURRENT-SITE-AUDIT.md | ✅ | Based on REA capture of local build |
| Create REFERENCE-COMPARISON.md | ✅ | DOM-verified matrix only |
| Create DESIGN-SYSTEM.md | ✅ | Tokens, components, breakpoints, motion rules |
| Create VISUAL-QA.md | ✅ | REA-based QA protocol |
| Update DESIGN-BRIEF.md | ✅ | Direction A selected with evidence citations |

---

## Phase 1: Foundation & Design System Implementation

| # | Task | Priority | Dependencies | Validation |
|---|------|----------|--------------|------------|
| 1.1 | Implement CSS tokens in `src/styles/main.css` `:root` per DESIGN-SYSTEM.md | P0 | DESIGN-SYSTEM.md | All `--color-*`, `--size-*`, `--space-*`, `--read-width` defined; no hardcoded values |
| 1.2 | Implement base components: button (4 variants), card, news-card, skip-link, consent banner | P0 | 1.1 | Components render correctly at 375/768/1280/1440 |
| 1.3 | Implement layout primitives: container, card-grid (auto-fit), hero grid, section divider | P0 | 1.1 | No horizontal overflow at any breakpoint |
| 1.4 | Implement navigation: header with logo, primary nav (7 items), mega-menu under Formations, mobile hamburger, language switcher slot, emergency alert slot | P0 | 1.2 | Keyboard accessible; skip-link first focusable |
| 1.5 | Implement footer: brand block, quick links (deduplicated), legal links, social, email/phone consistency | P0 | 1.2 | No duplicate nav blocks; email = `info@ucao-uuco.org` |
| 1.6 | Implement reduced-motion media query + focus-visible outline (`--color-primary`) | P0 | 1.1 | `prefers-reduced-motion: reduce` disables all transitions |
| 1.7 | Add JSON Schema validation for `formations.json`, `actualites.json`, `site.json` | P1 | 1.1 | `npm run validate` passes on current content |

---

## Phase 2: Homepage — Editorial Experience (Direction A)

| # | Task | Priority | Dependencies | Validation |
|---|------|----------|--------------|------------|
| 2.1 | Hero: authentic campus photo (select from `src/assets/images/campus-*.jpg`), descriptive alt + credit, H1 "Unité Universitaire de Conakry", kicker "Université Catholique de l'Afrique de l'Ouest" (`--color-secondary`), lead paragraph, dual CTAs (Primary: `/formations/`, Secondary: `/admissions/`) | P0 | 1.4 | REA capture matches design; no Wikimedia hero |
| 2.2 | University intro section: kicker "À propos de l'UCAO", H2 title, lead 2-3 sentences, small logo illustration | P0 | 2.1 | Content from `site.json` (no `[À CONFIRMER]`) |
| 2.3 | Mission/Values section: quote with verified citation, 4 values with unique visual expression (not identical cards) | P0 | 2.1 | No `[À CONFIRMER]` visible |
| 2.4 | Stats section: 3-4 stat cards with **verified numbers only** (source cited inline), replace all `[À CONFIRMER]` | P0 | 2.1 + admin confirmation | Each stat has source: "X étudiants (rapport 2025)" |
| 2.5 | Program discovery: **SOAS pattern** — searchbox with filter by level (Licence/Master) + **VCU Arts pattern** — program cards with degree suffix in title ("Gestion Commerciale — Licence") | P0 | 1.2, 1.4 | Search works client-side; cards show suffix |
| 2.6 | Admissions CTA section: clear step summary (1-2-3), Primary button to `/admissions/` | P0 | 2.1 | No financial info unless confirmed |
| 2.7 | News & Events: mixed section (H2 "Actualités & Événements"), Hull pattern conversational H2 headlines, time + category, "Voir toutes" CTA | P0 | 2.1 | No `[À CONFIRMER]` badges |
| 2.8 | Student life / Campus: split section with authentic photo + text, "En savoir plus" → `/vie-universitaire/` | P0 | 2.1 | Photo from campus library |
| 2.9 | Emergency alert slot (hidden by default) — USF pattern: banner at very top of header, dismissible | P1 | 1.4 | Slot exists; content injected via JS if `[À CONFIRMER]` active |

---

## Phase 3: Interior Pages

| # | Task | Priority | Dependencies | Validation |
|---|------|----------|--------------|------------|
| 3.1 | `/universite/` — History, mission, governance, network vs. Conakry distinction, values | P0 | 2.2 | Clear separation UCAO network / UUCo unit |
| 3.2 | `/formations/` — Full catalog by level (Licence/Master) with filter, degree-suffix cards, searchbox | P0 | 2.5 | Filter updates URL `?niveau=`; no identical-card grid |
| 3.3 | `/admissions/` — Step-by-step procedure, conditions, documents, financial info only if confirmed | P0 | 2.6 | Placeholder `[À CONFIRMER]` only in admin view |
| 3.4 | `/vie-universitaire/` — Campus photos (multiple), student services cluster (LSAD pattern), activities | P1 | 2.8 | 5+ authentic photos used |
| 3.5 | `/actualites/` — Paginated list, categories (Événement/Colloque/Vie étudiante), date sorting | P1 | 2.7 | No future-dated items |
| 3.6 | `/contact/` — Coordinates (verified), map embed (if confirmed), honest form (no fake success) | P0 | 1.5 | Form submits to documented endpoint or shows "backend non configuré" |
| 3.7 | `/faq/` — 10+ verified Q&A, accordion pattern | P1 | 1.2 | No invented questions |
| 3.8 | `/mentions-legales/`, `/politique-confidentialite/` — GDPR-compliant, no tracking undisclosed | P0 | 1.5 | Consent banner links here |

---

## Phase 4: Content & Editorial Accuracy

| # | Task | Priority | Dependencies | Validation |
|---|------|----------|--------------|------------|
| 4.1 | **Resolve email discrepancy**: confirm `info@ucao-uuco.org` vs `info@ucao.uuco.org` with administration; update all `mailto:` and footer | P0 | editorial-tracking.md | Single email everywhere |
| 4.2 | **Verify all stats** with administration: 7 countries, 2000 founding, student counts, program counts | P0 | 2.4 | Each stat has source citation |
| 4.3 | **Confirm formations catalog** (specialties, degree levels, durations) with administration | P0 | 3.2 | `formations.json` complete |
| 4.4 | **Confirm news/events** — replace 3 placeholder items with real 2024-2025 items | P0 | 2.7 | Dates ≤ today; categories accurate |
| 4.5 | **Confirm student services list** for `/vie-universitaire/` (housing, health, counseling, sports, unions) | P1 | 3.4 | Matches LSAD cluster pattern |
| 4.6 | **Confirm UUCo position in UCAO network** for sub-site nav pattern (LSAD/TUS) | P1 | 3.1 | Nav reflects network structure `[À CONFIRMER]` |
| 4.7 | **Verify all phone numbers** and address (Coléah, route de Niger) | P0 | 1.5 | Footer + contact page match |
| 4.8 | Remove all `[À CONFIRMER]` from user-facing JSON; keep only in `editorial-tracking.md` | P0 | 4.1-4.7 | `grep -r "À CONFIRMER" src/content/pages/` returns 0 |

---

## Phase 5: Asset Pipeline & Performance

| # | Task | Priority | Dependencies | Validation |
|---|------|----------|--------------|------------|
| 5.1 | Select 15-20 best campus photos from 60+ WhatsApp images; optimize to WebP (q=80) + JPEG fallback; generate responsive srcset (400w, 800w, 1200w) | P0 | 2.1, 2.8, 3.4 | All homepage photos authentic; no Wikimedia |
| 5.2 | Hero image: WebP + JPEG, eager loading, 1200×630, credit in DOM | P0 | 5.1 | LCP < 2.5s on 3G |
| 5.3 | Favicon: generate from `UCAO_LOGO.png` (32×32, 192×192, 512×512, maskable) | P1 | 1.1 | Lighthouse PWA score ≥ 90 |
| 5.4 | Build-time image optimization script (sharp) + JSON manifest | P1 | 5.1 | `npm run optimize-images` works |
| 5.5 | CSS/JS minification in build (Terser, cssnano) | P1 | 1.1 | Total JS < 20 KB gzipped |
| 5.6 | Sitemap.xml + robots.txt generation in build | P1 | 3.6 | Valid XML; `/sitemap.xml` accessible |

---

## Phase 6: Browser QA & Launch

| # | Task | Priority | Dependencies | Validation |
|---|------|----------|--------------|------------|
| 6.1 | REA capture `ucao-new-*` at 375/768/1280/1440 for homepage + 3 interior pages | P0 | 2.1, 3.1-3.8 | All captures in `evidence/ucao-new/` |
| 6.2 | Run VISUAL-QA.md checklist against captures | P0 | 6.1 | 0 critical failures |
| 6.3 | Lighthouse CI: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 90 | P0 | 5.5 | CI passes |
| 6.4 | Link check: `npm run check-links` — 0 broken internal links | P0 | All pages | 0 broken |
| 6.5 | HTML validation: `npm run validate-html` — 0 errors | P1 | All pages | Valid |
| 6.6 | Cross-browser smoke test: Chrome, Firefox, Safari (mobile + desktop) | P1 | 6.2 | No layout breakage |
| 6.7 | Deploy to staging; stakeholder review with `editorial-tracking.md` | P0 | 4.1-4.8 | Sign-off |

---

## Phase 7: Post-Launch (Iteration)

| # | Task | Timeline |
|---|------|----------|
| 7.1 | Analytics (privacy-first: Plausible or Matomo, no GA) | Week 1 |
| 7.2 | Search console + sitemap monitoring | Week 1 |
| 7.3 | Content updates from admin (formations, actualités) via JSON | Ongoing |
| 7.4 | Mobile usability audit (real device testing) | Month 1 |
| 7.5 | Phase 2: internal pages (departments, research, alumni) if confirmed | Quarter 2 |

---

## Risk Register (from Evidence)

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Admin cannot confirm stats/programs in time | High | High | Launch with "Données en cours de confirmation" banner on affected sections; hide stat cards |
| Email discrepancy unresolved | Medium | Medium | Use `info@ucao-uuco.org` (current build) + footnote "À confirmer" in admin only |
| Campus photos insufficient quality | Low | High | 60+ sources; select best 15; if needed, schedule photo shoot |
| REA capture flakiness (cleanup timeout) | Medium | Low | Retry once; artifacts retained in `partial_observation` |
| Cornell/Oxford patterns needed but unavailable | Low | Low | Not critical — 9 verified refs cover all needed patterns |

---

## Definition of Done (Launch Criteria)

1. ✅ All Phase 1-4 tasks complete
2. ✅ VISUAL-QA.md checklist: 0 critical, ≤ 2 minor (documented)
3. ✅ Lighthouse: Perf ≥ 90, A11y ≥ 95, BP ≥ 90, SEO ≥ 90
4. ✅ 0 broken links; 0 HTML errors
5. ✅ No `[À CONFIRMER]` in production HTML
6. ✅ Email/phone/address consistent across all pages
7. ✅ Consent banner functional; links to privacy policy
8. ✅ Emergency alert slot present (empty by default)
9. ✅ Skip-link, focus-visible, reduced-motion all working
10. ✅ Stakeholder sign-off on `editorial-tracking.md`

---

*Roadmap version 1.0 — based on verified REA evidence from 9 reference sites and current UCAO site audit. Created 2026-11-17.*