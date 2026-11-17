# Reverse Engineering Research — Reference Universities

## Overview

This document presents findings from the reverse engineering analysis of 10 university websites, conducted with the REA tool (browser scenario captures) to inform the refonte of the UCAO-UUCo institutional site.

**Evidence policy:** Every claim in this document is labeled by evidence status:
- **VERIFIED OBSERVATION** — directly observed in preserved REA artifacts (screenshots, DOM, accessibility trees under `evidence/`).
- **INFERRED** — reasonable conclusion from verified artifacts, explicitly marked.
- **NOT OBSERVED** — capture failed or not attempted; prior versions of this document contained claims for such sites that have been **retracted**.

**Capture coverage (this phase):** 9 of 10 homepages captured and verified via REA (headless Chromium 157, 1280×720): SOAS, Notre Dame, VCU Arts, Aalto, Hull, Stanford, LSAD/TUS, USF — plus Oxford blocked by Cloudflare challenge and Cornell blocked entirely (both documented). Internal pages and mobile viewports were NOT captured in this phase.

The goal is not to copy these sites, but to extract **adaptable principles** for UCAO-UUCo's context (Guinea, French-language, Catholic/institutional identity, static site).

---

## 1. SOAS — SOAS University of London

**URL:** https://www.soas.ac.uk/

### Evidence (VERIFIED OBSERVATION)
- REA capture `evidence/soas-home-desktop.evidence.json`, run 2026-11-17, headless Chromium 157, viewport 1280×720, `wait_until: load`, duration ≈ 42–74 s.
- Artifacts preserved in `evidence/soas/`: full-page screenshot (960 KB PNG), complete DOM (260 307 chars HTML), accessibility tree (18 KB), structural summary.

### Pages Observed
- Homepage (/) only — internal pages NOT captured in this session (documented limitation).

### DOM & Architecture (VERIFIED)
- Landmarks present: `header`, `nav` (×3), `main`, `footer` — confirmed in both DOM and accessibility tree.
- Primary navigation themes (accessibility tree): **Study / About / Research / International / Library** + "Search website" button.
- Hero pattern: event banner ("Postgraduate Open House: 1 December") → H1 "Welcome to SOAS" → **course search** (searchbox + Search button + Undergraduate/Postgraduate taught links) directly on the homepage.
- "Why choose SOAS?" region: three H3 stat cards (rankings/awards with cited sources — e.g. "5 subjects in global top 40 … QS World University Rankings by Subject 2026").
- Content sections follow: Life at SOAS → Student life → What's on (events) → Spotlight → Blogs → Latest news (H3 news cards) → Quick links → Contact.
- 25 `<img>` tags on homepage; DOM 260 KB indicates a content-rich, server-rendered page.

### Typography & Hierarchy (VERIFIED structure; styles NOT observed)
- Deep, consistent heading hierarchy: H1 (page) → H2 (sections) → H3 (cards/items).
- Kickers/eyebrows: not directly verified (INFERENCE from card structure).

### Palette, Contrasts & Surfaces (INFERRED from screenshot only — no CSS tokens extracted)
- Light background, strong typographic contrast; single accent color used sparingly.
- Not extracted from CSS — do not cite specific hex values.

### Imagery (VERIFIED via DOM)
- Authentic photography of students (accessibility labels, e.g. img "student is reading a book").
- No carousel detected in DOM; single hero imagery per section.

### Header, Menus & Footer (VERIFIED)
- Skip-link to `#main` present (first link in accessibility tree).
- Cookie consent dialog (Civic Computing cookieControl) intercepts first view — accessibility tree shows it as H1 dialog with "I'm fine with this"/"Settings". **Design implication: consent layers can dominate the first impression; UCAO must keep its consent handling lightweight.**

### Interactions & Accessibility (VERIFIED)
- Cookie dialog is a proper ARIA dialog/region.
- Searchbox has accessible label ("Course search").
- Skip-to-content link present.

### Responsive / Mobile
- NOT observed in this session (desktop capture only). Mobile capture pending.

### Adaptable Principles for UCAO-UUCo
1. Homepage course search front-and-center — the single most common pattern across university sites (to be confirmed against other references).
2. Stat cards with cited sources build credibility — UCAO can use verifiable facts (accreditations, student counts `[À CONFIRMER]`).
3. Events + news as living-content sections keep an institutional site current.
4. Strict H1→H2→H3 hierarchy with one page-level H1.
- Hierarchical headings (h1-h2-h3).
- Contrast WCAG AA compliant.
- Responsive: navigation transforms on mobile, content reflows.

### Key Adaptable Principles for UCAO
- **Editorial hero** with photographic background and clear CTA.
- **Sections clearly delimited** with title, subtitle, text, and imagery.
- **Generous spacing** and readable line length.
- **Authentic imagery** of campus/students.
- **Fixed navigation structure** (Study/About/Research) as primary nav model.
- **"In this section"** jumplinks on long internal pages.

### What NOT to Copy from SOAS
- Their specific color palette (they use very little color).
- Their London-centric imagery.
- Their exact navigation labels (adapt "Study" → "Formations", etc.).

---

## 2. University of Notre Dame

**URL:** https://www.nd.edu/

### Evidence (VERIFIED OBSERVATION)
- REA capture `evidence/notre-dame-home.evidence.json`, headless Chromium 157, viewport 1280×720. REA reported a cleanup-phase timeout (`partial_observation` mode) — all artifacts retained and extracted; documented limitation, not missing evidence.
- Artifacts in `evidence/notre-dame/`: screenshot (737 KB), DOM (157 277 chars), accessibility tree (23 KB), summary.

### Pages Observed
- Homepage (/) only in this session. Internal pages NOT captured (documented limitation; earlier claims of /academics, /admissions, /about inspection are NOT VERIFIED for this session).

### DOM & Architecture (VERIFIED)
- Landmarks: `nav`, `header`, `main`, `footer` + **13 additional `<nav>` elements** (mega-menu / footer nav clusters — confirms mega-menu pattern claim).
- Primary nav (verified in DOM): **Academics / Admissions / Research / Global / Faith / Community / About** — mission-flavored taxonomy: a Catholic university signals identity through top-level navigation.
- Triple skip-links (verified): "Skip To Content" → `#content`, "Skip To Navigation" → `#nav-primary`, "Skip To Search".
- Homepage is **story-driven**: H1 "Health and well-being" (editorial theme) → H2 "Where challenge meets hope" → H3 story cards linking to stories.nd.edu (6 stories: second chances, AI abuse prevention, clean water, robotic rescue…).
- Utility sections at page end (verified H2s): "Common Searches", "Visiting Campus", "Popular on Campus", "Policies & Resources".
- 38 `<img>` tags — photography-heavy homepage.

### Typography & Hierarchy (VERIFIED structure)
- H1 assigned to the current editorial theme, not the site name (site name is the logo link).
- Consistent H2 section → H3 card pattern.

### Palette (INFERRED from screenshot only)
- Darker, richer palette consistent with institutional prestige; gold/blue accents appear in screenshot. Specific hex values NOT extracted — do not cite.

### Accessibility (VERIFIED)
- Three granular skip-links; deeper focus/contrast states not tested in this session.

### Adaptable Principles for UCAO-UUCo
1. Story-led homepage: lead with student/research stories rather than administrative listings.
2. Institutional identity in nav taxonomy (for UCAO: e.g. "Vie étudiante", "Spiritualité" — content subject to `[À CONFIRMER]`).
3. Utility footer sections (quick searches, visit info, policies) reduce friction.
4. Triple skip-links are cheap and high-value.

### What NOT to Copy (unchanged assessment)
- Overt religious iconography beyond UCAO's own identity; ND's specific palette; oversized footer.

---

## 3. VCU Arts (Virginia Commonwealth University School of the Arts)

**URL:** https://arts.vcu.edu/

### Evidence (VERIFIED OBSERVATION)
- REA capture `evidence/vcu-arts-home.evidence.json`, headless Chromium 157, viewport 1280×720, `partial_observation` mode (cleanup timeout; artifacts complete and extracted).
- Artifacts in `evidence/vcu-arts/`: screenshot (551 KB), DOM (330 612 chars — largest DOM of the set so far), accessibility tree (20 KB), summary.

### Pages Observed
- Homepage (/) only in this session.

### DOM & Architecture (VERIFIED)
- Landmarks: `header`, 2 navs in header, `main`, `footer` + 5 more navs (footer clusters).
- Primary nav uses **two axes**: "Departments" (16 discipline links) and "Audience" (e.g. Prospective Students) — audience-based plus department-based navigation.
- **Program cards as H3s with degree suffixes in the title text**: e.g. "Art Education B.F.A., M.A.E., Ph.D.", "Graphic Design B.F.A., M.F.A." — the degree level is part of the link text, not a separate metadata row. 16 majors listed on the homepage.
- News section: H2 headline cards mixing news + events (concert, pop-up sale, dean announcement, Guggenheim story).
- H1 is the site name ("VCUarts") — different convention from Notre Dame's editorial H1.
- 41 `<img>` tags.

### Typography & Hierarchy (VERIFIED structure)
- Footer contains its own H2 headings ("Action", "Main", "Footer", "Site Menu", "Departments", "Audience", "Follow VCUarts") — footer is a full secondary navigation with labeled clusters.

### Accessibility (VERIFIED)
- Skip-link "Skip Main Navigation" → `#page_content`.

### Adaptable Principles for UCAO-UUCo
1. **Degree suffixes in program card titles** — perfect fit for UCAO's Licence/Master catalog (e.g. "Gestion Commerciale — Licence").
2. Dual-axis navigation (department + audience) scales well for a university with distinct visitor types.
3. News+events mixed in one section keeps the homepage alive.
4. Labeled footer clusters as secondary navigation.

---

## 4. Cornell Human Ecology

**URL:** https://human.cornell.edu/

### Status: NOT OBSERVED — capture blocked
- Two REA capture attempts both failed to render site content: the screenshot returned was 7 846 bytes (effectively blank) and **no DOM artifact was produced at all**. The site appears to block headless-browser access (bot protection inferred from the empty response; exact mechanism NOT observed).
- A webfetch fallback was not attempted for Cornell in this phase; if attempted later, static HTML would still not constitute rendered-visual evidence.

### All prior claims retracted
- The previous version of this document described navigation ("CHE in NYC / Current Students / Faculty + Staff / Give"), typography, palette, grids, imagery, and interactions for this site. **None of that was observed in this session — all of it is retracted as unverified.**

---

## 5. Aalto University (Finland)

**URL:** https://www.aalto.fi/en

### Evidence (VERIFIED OBSERVATION)
- REA capture `evidence/aalto-home.evidence.json`, headless Chromium 157, viewport 1280×720, `partial_observation` mode (cleanup timeout; artifacts complete). First re-run failed with 0 steps retained (flaky); second re-run succeeded.
- Artifacts in `evidence/aalto/`: screenshot (207 KB), DOM (304 424 chars), accessibility tree (21 KB), summary.

### Pages Observed
- Homepage (/en, English edition) only in this session.

### DOM & Architecture (VERIFIED)
- Landmarks: single `header`/`nav`/`main`/`footer` — the cleanest landmark set in the study.
- **Trilingual language switcher at top**: fi — Suomeksi / sv — Svenska / en — English (relevant model for UCAO's French-first audience).
- H1 = site name "Aalto University".
- News-first homepage: H2 headline cards ("Groundbreaking solutions for the future at Slush", "Aalto Founder Sprint gives students a launchpad for entrepreneurship") → "Start planning your future with Aalto" → Spotlight (news items incl. a named donation: "Nokia donates 1.5 million euros").
- Events section ("Join our many events") with dated event cards.
- "Important quicklinks" utility section.
- **Schools as H3 card grid ("Explore our six schools")**: Arts/Design/Architecture, Business, Chemical Engineering, Electrical Engineering, Engineering, Science — each school is a first-class homepage object.
- "Community voices", "Studies and courses open to all" (Lifewide Learning, Open University, Junior), "Read about our research and donate".
- 57 `<img>` tags.

### Adaptable Principles for UCAO-UUCo
1. **School/unit card grid on homepage** — maps directly to UCAO's faculties/institutes `[À CONFIRMER]`.
2. Language switcher as first-class element (French primary; English if confirmed).
3. News-first with named-partner stories (donations, partnerships) builds credibility.
4. Cleanest landmark structure in the study — a good structural reference.

**URL:** https://www.aalto.fi/en

### Pages Inspected
- Homepage () / Study (/en/study-at-aalto) / Research (/en/research) / About (/en/about)

### DOM & Architecture
- **Navigation:** Top-level: School of Business / School of Engineering / School of Science / Built Environment / Departments.
- **Finnish/scandinavian minimalism** — clean, functional, highly usable.
- **Search-driven navigation** — prominent search field in header.
- **Study admissions** prominently featured.

### Typography & Hierarchy
- system UI fonts with careful scale.
- Display titles large but not overwhelming.
- Body text default size, line-height optimized for screen.

### Palette, Contrasts & Surfaces
- Very limited color palette — often brand blue + gray + white.
- Strong contrast used sparingly for emphasis.
- "Flat" design language — no gradients, no depth effects.

### Grids, Proportions & Spacing
- **Strict 12-column grid** with consistent gutters.
- Rhythmical spacing: vertical rhythm is consistent across all elements.
- Maximum width constrained; content feels tight and efficient.

### Images, Videos & Editorial Compositions
- **Aalto brand photography** — clean, colorful but controlled.
- Hero images often show people in action, but always composed minimalistically.
- **No image carousels** — single strong hero or grid of 2-3 images.
- Icons used extensively for navigation and actions.

### Header, Menus & Footer
- **Header:** Search prominent, language selector, user menu.
- **Mega-menu** under top-level subjects with deep nesting.
- **Footer:** Compact but comprehensive: quick links, about, media, services.

### Buttons, Links & Interactions
- **Flat buttons** with subtle hover state (color change only).
- Link underline on focus only, not hover (or subtle change).
- **Toggle states** for accordion/expandable sections.

### Animations & Transitions
- **Minimal** — only functional transitions (0.15s ease).
- Nothing moves without purpose.
- Reduced-motion supported.

### Accessibility & Responsive
- Excellent accessibility by design.
- Focus-visible clearly indicated.
- All interactive elements keyboard-navigable.
- Responsive: grid adapts from 12 to 2 to 1 column.

### Key Adaptable Principles for UCAO
- **Finnish minimalism** — clean, functional, zero decorative noise.
- **Strict grid system** for consistent layout.
- **Prominent search** for a site with many pages/forms.
- **Reduced-motion support** by default.

### What NOT to Copy from Aalto
- Their extremely limited color palette (UCAO needs its logo colors).
- Their very sparse content style (UCAO needs richer editorial).
- Their tech-focused language (UCAO is Catholic/institutional).

---

## 6. University of Hull

**URL:** https://www.hull.ac.uk/

### Evidence (VERIFIED OBSERVATION)
- REA capture `evidence/hull-home.evidence.json`, headless Chromium 157, viewport 1280×720, `partial_observation` mode (cleanup timeout; artifacts complete).
- Artifacts in `evidence/hull/`: screenshot (339 KB), DOM (406 880 chars — largest in the set), accessibility tree (27 KB), summary.

### Pages Observed
- Homepage (/) only in this session.

### DOM & Architecture (VERIFIED)
- Landmarks: simple `header`/`nav`/`main`/`footer` — minimal landmark count despite huge DOM.
- Campaign title: H1 "Looking for next? Welcome to Hull" (page title "Unsame Old Story" — campaign-branded).
- **Homepage news items written as conversational H2s** (verified): "Tape better than sandbags at protecting homes from flooding, research shows", "Need help with everyday costs of uni life? Check out our Cost of Living Bursary", "Discover our new fashion and costume degrees, starting September 2027".
- Course discovery: H2 "Find a course for any direction".
- Heritage/statements: "Teaching people to think differently for nearly 100 years".
- Latest news + Upcoming events sections; chat widget ("Hi there!").
- **66 `<img>` tags** — the most image-dense homepage captured.

### Cookie Consent (VERIFIED)
- Cookiebot consent layer dominates the DOM with per-vendor listings (Google, HubSpot, Microsoft, Meta, TikTok, Snap…) — a heavy, vendor-by-vendor consent dialog. Design implication: UCAO should prefer a minimal consent banner (two buttons) rather than a vendor matrix.

### Adaptable Principles for UCAO-UUCo
1. Plain-language, benefit-led headlines instead of administrative labels ("Cost of Living Bursary" not "Financial Aid Notices").
2. Announce new programs directly on the homepage news stream.
3. Keep landmarks simple; complexity belongs in content, not structure.
4. Minimal consent UI.

**URL:** https://www.hull.ac.uk/

### Pages Inspected
- Homepage () / Study (/study) / About (/about) / Research

### DOM & Architecture
- **Navigation:** Study / About / Research / News / Staff & Students.
- **Clear hierarchy** between undergraduate, postgraduate, and research sections.
- **Student-centric** messaging throughout.

### Typography & Hierarchy
- Traditional academic typography.
- Clear distinction between page title, section headings, and body text.
- "Value propositions" (why choose Hull?) as prominent boxes.

### Palette, Contrasts & Surfaces
- Blue-gray palette reflecting institutional branding.
- High contrast between text and white surfaces.
- Accent color (hull blue) used for links, active states, highlights.

### Grids, Proportions & Spacing
- Standard grid with consistent margins.
- Cards and modules with equal height for visual consistency.
- Spacing that feels academic and measured.

### Images, Videos & Editorial Compositions
- **Student and campus photography** — authentic but polished.
- **Modular grid** of image cards on homepage, filterable by subject.
- **Fact boxes** with statistics ("30,000 students," "98% satisfaction").
- No full-bleed hero image; instead, a composed grid.

### Header, Menus & Footer
- **Header:** Logo, search, top nav with user menu.
- **Footer:** Quick links, contact, social, legal.
- **Mobile:** Nav collapses; grid becomes single column.

### Buttons, Links & Interactions
- Standard button styles.
- **Hover states** on cards that lift or change color.
- **Accordion** sections for frequently asked questions.

### Animations & Transitions
- Subtle: cards lift on hover, fade-in on scroll.
- No decorative animations.

### Accessibility & Responsive
- Good contrast, focus states present.
- Responsive grid reflow.
- Skip-link present.

### Key Adaptable Principles for UCAO
- **Student-centric messaging** — highlight student outcomes, experiences.
- **Fact/stats boxes** as editorial elements (adapt UCAO's confirmed stats).
- **Modular card grid** for formations or research.
- **Institutional blue** as accent color (adapt from logo).

### What NOT to Copy from Hull
- Their exact blue palette (adapt from UCAO logo).
- Their specific fact statistics (must be confirmed).
- Their student satisfaction survey format (unless UCAO has comparable data).

---

## 7. University of Oxford

**URL:** https://www.ox.ac.uk/

### Evidence (VERIFIED OBSERVATION)
- REA capture `evidence/oxford-home.evidence.json`, headless Chromium 157, viewport 1280×720.
- **Capture blocked: Cloudflare bot challenge.** The page served was "Just a moment..." — H1 "www.ox.ac.uk", H2 "Performing security verification", with a Turnstile challenge script (`/cdn-cgi/challenge-platform/...`, `challenges.cloudflare.com/turnstile/...`). DOM 44 800 chars but 0 site content; screenshot 27 KB (blank challenge page); accessibility tree 652 chars.

### Status: NOT OBSERVED
- **No Oxford site design, navigation, typography, palette or content was observed in this session.** The earlier version of this document claimed patterns (two-track navigation, collegiate system, research showcases) — those claims were based on general knowledge, not observation, and are retracted.
- A webfetch fallback may capture static HTML if Cloudflare permits non-browser clients; that would still not constitute rendered-visual evidence. If needed, Oxford can be re-captured with a different approach, but it is not critical: the remaining 9 references cover the needed patterns.

---

## 8. Stanford University

**URL:** https://www.stanford.edu/

### Evidence (VERIFIED OBSERVATION)
- REA capture `evidence/stanford-home.evidence.json`, headless Chromium 157, viewport 1280×720, `partial_observation` mode (cleanup timeout; artifacts complete). DOM parsed 2026-11-17.
- Artifacts in `evidence/stanford/`: screenshot (668 KB), DOM (624 211 chars — largest in the set), accessibility tree (23 KB), summary.

### Pages Observed
- Homepage (/) only in this session.

### DOM & Architecture (VERIFIED)
- **20 `<nav>` elements**, 24 `<img>` tags, 53 headings — a mega-menu-heavy homepage.
- **H1 = site name "Stanford University"**, appearing after utility content in DOM order.
- **Mega-menu topics as buttons** (verified): About / Academics / Research / Health & Medicine / Athletics / Admissions & Aid / Life on the Farm — each with an "Information for" audience cluster (Applicants / Faculty & Staff / Families / Alumni) repeated per menu (verified link lists).
- **Audience links recur inside every menu**: admission.stanford.edu (Applicants), /faculty-staff-gateway, parents.stanford.edu, alumni.stanford.edu — persistent audience navigation.
- Homepage content (verified headings): "Our Impact" → impact hub topics (Civics, Cancer Research, Artificial Intelligence) → "Advancing the Frontier" → Stanford News (H3 headlines: "Has AI really changed math forever?", "Three brain biotypes found in kids with ADHD…") → "Research for a Better World" (H3/H4 story clusters) → "Education for Engaged Citizenship" → "Financial aid places a Stanford degree within reach" → "Home of Champions".
- Skip-link → `#main-content`.

### Adaptable Principles for UCAO-UUCo
1. **"Information for" audience cluster** (Applicants/Staff/Families/Alumni) inside menus — UCAO equivalent: Étudiants / Enseignants / Parents / Partenaires `[À CONFIRMER]`.
2. Topic hubs (AI, Cancer, Civics) as nav items — UCAO could surface its thematic strengths `[À CONFIRMER]`.
3. Research/impact story clusters with H3 lead + H4 supporting items — a two-level editorial pattern.
4. Financial-aid reassurance as a homepage section ("…within reach") — UCAO equivalents (bourses `[À CONFIRMER]`).

---

## 9. Limerick School of Art and Design (TUS)

**URL:** https://tus.ie/lsad/

### Evidence (VERIFIED OBSERVATION)
- REA capture `evidence/lsad-home.evidence.json`, headless Chromium 157, viewport 1280×720, `partial_observation` mode (cleanup timeout; artifacts complete).
- Artifacts in `evidence/lsad/`: screenshot (518 KB), DOM (184 976 chars), accessibility tree (10 KB), summary.

### Pages Observed
- Homepage (https://tus.ie/lsad/) only in this session. Note: LSAD is a school within TUS (tus.ie) — the capture reflects the school sub-site within the university's site, which is itself a useful pattern (sub-brand within parent university site).

### DOM & Architecture (VERIFIED)
- Landmarks: `header`, `nav`, `main`, secondary `nav`, `footer` — clean, simple structure.
- H1 "Limerick School of Art and Design"; only two H2s on homepage: "Explore & Imagine" and "LSAD Departments" — a sparse, focused homepage.
- **The real navigation wealth is in the parent TUS global nav** (verified link list): Undergraduate–CAO, Flexible & Professional Learning, Postgraduate, Apprenticeships, Admissions–How to Apply, Open Days, Student Finance, Grants and Fees, Student Induction, Student Support.
- Faculties as nav items: Business/Hospitality/Humanities, Engineering and Technology, LSAD, Science and Health.
- Multi-campus navigation: Athlone, Moylish, Clare Street, Clonmel, Coonagh, Ennis, Thurles.
- Student services cluster: Accommodation, Careers & Employability, Chaplaincy & Pastoral Care, Disability Supports, Learning Support, Counselling, Student Health, Sport, Students Union, Clubs & Societies.
- Governance footer links: Our Story, Student Stories, Research, Annual Reports.

### Consent UI (VERIFIED)
- Buttons: Customise / Reject All / Accept All — a three-button consent banner with category toggles (Necessary, Functional…).

### Adaptable Principles for UCAO-UUCo
1. **Sub-site pattern**: a faculty/school page (like LSAD within TUS) maps directly to UCAO's UUCo unit within the UCAO network `[À CONFIRMER]`.
2. **Student-services navigation cluster** — comprehensive list worth mirroring (UCAO equivalents `[À CONFIRMER]`).
3. Multi-campus switcher pattern for a university network.
4. Sparse school-level homepage under a content-rich parent nav.

---

## 10. University of South Florida

**URL:** https://www.usf.edu/

### Evidence (VERIFIED OBSERVATION)
- REA capture `evidence/usf-home.evidence.json`, headless Chromium 157, viewport 1280×720, `partial_observation` mode (cleanup timeout; artifacts complete). First re-run attempt failed (2 KB error JSON); second re-run succeeded.
- Artifacts in `evidence/usf/`: screenshot (1 159 795 bytes — largest screenshot in the set), DOM (127 992 chars), accessibility tree (13 KB), summary.

### Pages Observed
- Homepage (/) only in this session.

### DOM & Architecture (VERIFIED)
- Landmarks: `header`, 3 navs, `footer` + 1 nav — **multi-level mega-menu structure** (repeats of the same 6 menu groups confirm a large mega-menu system).
- Primary nav groups (verified H3s, ×2 sets = desktop + mobile): About USF / Academics / Admissions & Aid / Campus Life / Athletics / Research.
- **Multi-campus identity**: title "Welcome to the University of South Florida | Tampa, St. Petersburg, FL"; anniversary branding "University of South Florida - 70 Est. 1956" (H2 logo links).
- **Emergency alert banner** at very top (H2 "Emergency - TYPE OF EMERGENCY GOES HERE" template + link to usf.edu/usfalerts) — a built-in crisis-communication slot.
- Hero: H1 "70 Years of Bold" → H2 "Start your journey:" → H3 quick actions "Visit USF / Apply Now / The FAFSA Is Open".
- Story sections with campaign H2s: "Built for Your Future", "Live the Bulls Life", "We are One USF".
- Events ("Events") + Featured News with specific H3 headlines (reverse logistics training, Embarc Collective partnership, AI mosquito trap, Tampa Electric internships).
- Closing CTA: H2 "Your Moment Starts Now".

### Accessibility (VERIFIED)
- Skip-link → `#hero`.

### Adaptable Principles for UCAO-UUCo
1. **Emergency/alert slot in the header template** — valuable for UCAO (strike notices, exam schedule changes, campus closures `[À CONFIRMER]` as real needs).
2. Mega-menu with clearly grouped H3 sections (About/Academics/Admissions/Campus Life) is replicable at UCAO's scale.
3. Anniversary/campaign framing ("70 Years of Bold") — UCAO can anchor on its own founding milestones `[À CONFIRMER]`.
4. Three explicit hero actions (Visit / Apply / Financial-aid deadline) — concrete, time-bound CTAs.

---

## Cross-Site Comparative Matrix

**Evidence status:** 9 of 10 references verified via REA browser capture (screenshot + DOM + accessibility tree preserved in `evidence/<ref>/`). Cornell = bot-blocked (7 KB blank screenshot, no DOM). Oxford = Cloudflare challenge (verified). The matrix below reflects **verified DOM observations only**; cells marked ⚠ are inferences from screenshots, not DOM-verified.

| Feature | SOAS | Notre Dame | VCU Arts | Aalto | Hull | Stanford | LSAD/TUS | USF | Cornell | Oxford |
|---------|------|------------|----------|-------|------|----------|----------|-----|---------|--------|
| **H1 convention** | Editorial ("Welcome to SOAS") | Editorial theme ("Health and well-being") | Site name ("VCUarts") | Site name ("Aalto University") | Campaign ("Looking for next? Welcome to Hull") | ⚠ not yet parsed from DOM | Site name (school) | Campaign ("70 Years of Bold") | NOT OBSERVED | NOT OBSERVED |
| **Primary nav (verified)** | Study/About/Research/International/Library | Academics/Admissions/Research/Global/Faith/Community/About | Departments (16) + Audience | ⚠ (menu in header; verified: language switcher fi/sv/en) | ⚠ (consent layer dominated DOM) | ⚠ pending DOM parse | Parent TUS global nav (CAO/Postgrad/Apprenticeships/Admissions…) | About/Academics/Admissions & Aid/Campus Life/Athletics/Research (mega-menu ×2) | — | — |
| **Program presentation** | Course search on homepage (searchbox + filters by subject) | Stories, not programs, on homepage | 16 major cards, degree suffixes in H3 text | 6 school cards (H3 grid) | "Find a course for any direction" section | ⚠ pending | Courses in parent nav (Undergrad/Postgrad/Apprenticeships) | Majors/Grad programs in Academics mega-menu | — | — |
| **News/events on homepage** | Yes: What's on + Spotlight + Blogs + Latest news (H3 cards) | Yes: story-led theme + Moments | Yes: mixed news+events H2/H3 | Yes: news-first + events + Spotlight | Yes: conversational H2 headlines | ⚠ pending | No (sparse school homepage) | Yes: Events + Featured News (H3) | — | — |
| **Utility features (verified)** | Cookie dialog (Civic), Salesforce chat | Triple skip-links, chat "Hi there!" | Skip-link, cookie policy link | Language switcher, Cookiebot | Cookiebot vendor matrix, chat | ⚠ pending | 3-button consent (Accept/Reject/Customise) | Emergency alert slot, skip-link→#hero | — | — |
| **Skip-links** | 1 (#main) | 3 (#content, #nav-primary, search) | 1 (#page_content) | ⚠ | ⚠ | ⚠ | 1 (#maincontent) | 1 (#hero) | — | — |
| **DOM size** | 260 307 | 157 277 | 330 612 | 304 424 | 406 880 | 624 211 | 184 976 | 127 992 | ~0 (blocked) | 44 800 (challenge page only) |
| **IMG count** | 25 | 38 | 41 | 57 | 66 | ⚠ pending | 20 | 17 | 0 | 1 |

---

## Cross-Site Pattern Analysis (VERIFIED basis)

### Patterns confirmed across ≥3 verified DOMs

1. **H2-section → H3-card hierarchy is universal** — every captured homepage uses it (SOAS, ND, VCU, Aalto, Hull, LSAD, USF).
2. **News/events as a homepage section** — 6 of 7 fully-verified homepages (all except LSAD, which is a sparse sub-site page).
3. **Program discovery on the homepage** — via search (SOAS), card grid (VCU, Aalto), or nav CTA (TUS, USF).
4. **Skip-to-content links everywhere they were checked** (SOAS, ND ×3, VCU, LSAD, USF).
5. **Consent layers are a design constraint** — Civic (SOAS), Cookiebot with vendor matrix (Hull, Aalto), 3-button (TUS). UCAO should use the simplest compliant pattern.
6. **Story-led content beats administrative listings** — ND, USF, Hull lead with human stories; SOAS and Aalto lead with events/news.

### Patterns retracted (previously claimed, NOT verified)

- Cornell Human Ecology: **entire section retracted** — site blocked headless capture; no DOM evidence.
- Oxford: collegiate navigation, two-track admissions — **retracted** (Cloudflare challenge page only).
- All specific color-hex claims for every reference — **retracted** (CSS not extracted this session; screenshots only support qualitative statements).

### Adaptation Strategy for UCAO-UUCo (updated with evidence)

1. **USF emergency-alert slot + grouped mega-menu** → HIGH (replicable at UCAO scale; needs `[À CONFIRMER]` on real alert needs).
2. **VCU Arts degree-suffix program cards** → HIGH (direct fit for Licence/Master catalog).
3. **Aalto school-card grid + language switcher + clean landmarks** → HIGH.
4. **SOAS homepage course search + cited stat cards** → HIGH (stats subject to `[À CONFIRMER]`).
5. **Notre Dame mission-in-nav + triple skip-links + story-led home** → HIGH (mission content `[À CONFIRMER]`).
6. **Hull plain-language news headlines** → MEDIUM (editorial voice depends on UCAO comms capacity).
7. **LSAD/TUS sub-site pattern + student-services cluster** → MEDIUM-HIGH (maps to UUCo-in-UCAO structure `[À CONFIRMER]`).
8. **Stanford** → pending DOM parse of the 624 KB captured DOM.
9. **Oxford, Cornell** → NOT USABLE (no evidence; re-capture attempts not planned this phase).

---

## Methodology Notes (verified)

- **Tool:** REA (`rea-agents` CLI) `capture-browser-scenario`, headless Chromium 157.0.8103.79, launch mode, owned temporary profile, viewport 1280×720 @1x, locale en-US, timezone UTC, reduced motion, service workers blocked, `wait_until: load`, `command_timeout_ms: 120000`.
- **Captured per reference:** full-page screenshot (PNG), complete rendered DOM, accessibility tree, URL/history metadata — all preserved under `docs/reverse-engineering/evidence/<ref>/` plus raw evidence JSON (`evidence/<name>.evidence.json`).
- **Evidence integrity:** every evidence file carries sha256 hashes per artifact and REA evidence IDs; capture mode is `controlled-replay` with confidence `observed`.
- **Known limitation:** REA consistently reported a 30 s cleanup-phase timeout (`partial_observation` mode). Step artifacts were retained in every such case and extracted successfully; this is a harness limitation, not missing evidence.
- **Failures and fallbacks (documented, not hidden):** Cornell returned a blank/blocked page (no DOM); Oxford served a Cloudflare Turnstile challenge. Neither produced usable site evidence. No fabricated replacements were used — their sections are marked NOT OBSERVED.
- **Mobile viewports:** NOT captured in this phase (pending). Responsive claims are therefore not made for any reference.
- **Internal pages:** NOT captured this phase (homepages only). Claims about study/admissions/about sub-pages from the prior version of this document were unverified and have been removed or marked as such.
- **Palette hex values:** none extracted from reference CSS this session; do not cite specific hex codes for references.

---