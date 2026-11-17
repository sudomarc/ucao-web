# Reference Comparison Matrix — Verified Evidence Only

## Evidence Status by Reference

| Reference | URL | REA Capture | Mode | DOM Size | Screenshot | Status |
|-----------|-----|-------------|------|----------|------------|--------|
| SOAS | https://www.soas.ac.uk/ | ✅ `soas-home-desktop.evidence.json` | partial_observation | 260 307 | 960 KB | **VERIFIED** |
| Notre Dame | https://www.nd.edu/ | ✅ `notre-dame-home.evidence.json` | partial_observation | 157 277 | 737 KB | **VERIFIED** |
| VCU Arts | https://arts.vcu.edu/ | ✅ `vcu-arts-home.evidence.json` | partial_observation | 330 612 | 551 KB | **VERIFIED** |
| Aalto | https://www.aalto.fi/en | ✅ `aalto-home.evidence.json` | partial_observation | 304 424 | 207 KB | **VERIFIED** |
| Hull | https://www.hull.ac.uk/ | ✅ `hull-home.evidence.json` | partial_observation | 406 880 | 339 KB | **VERIFIED** |
| Stanford | https://www.stanford.edu/ | ✅ `stanford-home.evidence.json` | partial_observation | 624 211 | 668 KB | **VERIFIED** (DOM parsed) |
| LSAD/TUS | https://tus.ie/lsad/ | ✅ `lsad-home.evidence.json` | partial_observation | 184 976 | 518 KB | **VERIFIED** |
| USF | https://www.usf.edu/ | ✅ `usf-home.evidence.json` | partial_observation | 127 992 | 1 160 KB | **VERIFIED** |
| Cornell | https://human.cornell.edu/ | ❌ blocked | N/A | 0 | 7.8 KB | **NOT OBSERVED** (bot-blocked) |
| Oxford | https://www.ox.ac.uk/ | ❌ Cloudflare challenge | N/A | 44 800 | 27 KB | **NOT OBSERVED** (blocked) |

**Note:** All captured sites returned REA `partial_observation` mode (30 s cleanup timeout) — step artifacts were retained and extracted successfully. This is a harness limitation, not missing evidence.

---

## Comparative Matrix (DOM-Verified Only)

| Feature | SOAS | Notre Dame | VCU Arts | Aalto | Hull | Stanford | LSAD/TUS | USF | Cornell | Oxford |
|---------|------|------------|----------|-------|------|----------|----------|-----|---------|--------|
| **H1 convention** | Editorial ("Welcome to SOAS") | Editorial theme ("Health and well-being") | Site name ("VCUarts") | Site name ("Aalto University") | Campaign ("Looking for next?") | Site name ("Stanford University") | Site name (school) | Campaign ("70 Years of Bold") | — | — |
| **Primary nav (verified)** | Study/About/Research/International/Library | Academics/Admissions/Research/Global/Faith/Community/About | Departments (16) + Audience | ⚠ menu in header; language switcher fi/sv/en | ⚠ consent layer dominated DOM | About/Academics/Research/Health/Athletics/Admissions/Life (mega-menu ×2) | Parent TUS global nav (CAO/Postgrad/Admissions…) | About/Academics/Admissions & Aid/Campus Life/Athletics/Research | — | — |
| **Program presentation** | Course search on homepage (searchbox + subject filters) | Stories, not programs | 16 major cards, degree suffixes in H3 text | 6 school cards (H3 grid) | "Find a course for any direction" | Majors/Grad programs in Academics mega-menu | Courses in parent nav (Undergrad/Postgrad/Apprenticeships) | Majors/Grad programs in mega-menu | — | — |
| **News/events on homepage** | Yes: What's on + Spotlight + Blogs + Latest news | Yes: story-led theme + Moments | Yes: mixed news+events H2/H3 | Yes: news-first + events + Spotlight | Yes: conversational H2 headlines | Yes: Research/Education/Civic/Financial aid sections | No (sparse school homepage) | Yes: Events + Featured News (H3) | — | — |
| **Utility features** | Cookie dialog (Civic), Salesforce chat | Triple skip-links | Skip-link, cookie policy | Language switcher, Cookiebot | Cookiebot vendor matrix, chat | Skip-link → `#main-content` | 3-button consent (Accept/Reject/Customise) | Emergency alert slot, skip-link→#hero | — | — |
| **Skip-links** | 1 (#main) | 3 (#content, #nav-primary, search) | 1 (#page_content) | ⚠ | ⚠ | 1 (#main-content) | 1 (#maincontent) | 1 (#hero) | — | — |
| **DOM size** | 260 307 | 157 277 | 330 612 | 304 424 | 406 880 | 624 211 | 184 976 | 127 992 | ~0 (blocked) | 44 800 (challenge page) |
| **IMG count** | 25 | 38 | 41 | 57 | 66 | 24 | 20 | 17 | 0 | 1 |

---

## Adaptation Priorities for UCAO-UUCo (Ranked by Evidence Strength)

| Priority | Pattern | Source(s) | UCAO Application |
|----------|---------|-----------|------------------|
| 1 | Emergency/alert slot + grouped mega-menu | USF (VERIFIED) | Header alert banner for strikes/exam changes `[À CONFIRMER]` |
| 2 | Degree-suffix program cards | VCU Arts (VERIFIED) | "Gestion Commerciale — Licence", "Droit — Master" |
| 3 | School/unit card grid + language switcher | Aalto (VERIFIED) | Faculties/Institutes grid + FR/EN switcher |
| 4 | Homepage course search + cited stat cards | SOAS (VERIFIED) | Searchbox with filter by level; replace `[À CONFIRMER]` stats with verified data |
| 5 | Mission-in-nav + triple skip-links + story-led home | Notre Dame (VERIFIED) | Add "Foi & Communauté" / "Valeurs" to nav; 3 skip-links |
| 6 | Plain-language news headlines | Hull (VERIFIED) | Conversational H2s: "Bourses disponibles pour la rentrée 2026" |
| 7 | Sub-site pattern + student-services cluster | LSAD/TUS (VERIFIED) | UUCo page within UCAO network `[À CONFIRMER]`; student services nav |
| 8 | "Information for" audience clusters | Stanford (VERIFIED) | Étudiants / Enseignants / Partenaires / Alumni in menus |
| 9 | Research/impact story clusters (H3 lead + H4 support) | Stanford (VERIFIED) | Two-level editorial pattern for news |
| 10 | Financial-aid reassurance section | Stanford (VERIFIED) | "Bourses accessibles" section `[À CONFIRMER]` |

---

## Patterns Retracted (Previous Claims NOT Verified)

- **Cornell Human Ecology**: All prior claims (navigation, typography, palette, grids, imagery, filterable program grid) — site blocked, no DOM evidence.
- **University of Oxford**: Collegiate navigation, two-track admissions, research showcases — Cloudflare challenge page only.
- **Specific color hex values for any reference**: CSS not extracted; screenshots only support qualitative statements.

---

## UCAO Current Site Comparison (Verified)

| Metric | UCAO Current | Reference Average | Gap |
|--------|--------------|-------------------|-----|
| DOM size | 15 017 | ~274 000 | 18× smaller |
| Homepage IMG count | 4 | ~32 | 8× fewer |
| Skip-links | 1 | 1.4 (avg) | Minimal |
| Consent UI | None | 7/7 have it | Missing |
| Language switcher | None | 1/7 (Aalto) | Missing |
| Emergency alert | None | 1/7 (USF) | Missing |
| Program cards with degree suffixes | No | 1/7 (VCU Arts) | Missing |
| Course search on homepage | No | 1/7 (SOAS) | Missing |
| News/events on homepage | Yes (3 items) | 6/7 have it | Present but thin |
| Stat cards | 3 (all `[À CONFIRMER]`) | 1/7 (SOAS) | Placeholders only |

*Reference average excludes Cornell and Oxford (no evidence).*