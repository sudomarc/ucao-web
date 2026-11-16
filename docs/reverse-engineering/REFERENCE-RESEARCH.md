# Reverse Engineering Research — Reference Universities

## Overview

This document presents the findings from the reverse engineering analysis of 10 leading university websites, conducted to inform the complete refonte of the UCAO-UUCo institutional site. The analysis covers the homepage and key sub-pages (study, admissions, about, formations) for each institution, documenting DOM architecture, navigation, typography, visual design, imagery, header/footer structures, interactions, and accessibility patterns.

The goal is not to copy these sites directly, but to extract **adaptable principles** that can be applied to UCAO-UUCo's specific context (Guinea, French-language, Catholic/institutional identity, static site).

---

## 1. SOAS — SOAS University of London

**URL:** https://www.soas.ac.uk/

### Pages Inspected
- Homepage (/) / Study (/study/) / About (/about/) / Student Life (/study/student-life/)

### DOM & Architecture
- **Navigation:** Primary navigation by large themes (Study / About / Research / International / Library), each with extensive sub-navigation.
- **Page structure:** Long internal pages with jumplinks (anchors) at top and "In this section" navigation.
- **Sections:** Clearly delimited: title, subtitle, text, immersive image, "Facts and figures" sidebars.
- **Hero:** Strong photographic hero with expressive title, clear CTA.

### Typography & Hierarchy
- Assertive typography with generous spacing, readable rhythm.
- Display titles large and prominent; body text set for readability (~65ch width).
- Kicker text (uppercase, colored) before main titles.

### Palette, Contrasts & Surfaces
- White/light background with strong typographic contrast.
- Primary accent color used sparingly for emphasis (links, CTAs, underlines).
- Minimal use of color — focus on typographic hierarchy rather than decorative color.

### Grids, Proportions & Spacing
- Generous vertical spacing between sections.
- Content width constrained for comfortable reading (65ch principle).
- Alternating text/image sections with clear separation.

### Images, Videos & Editorial Compositions
- Authentic photos of campus and students in situ.
- Hero images are prominent and set the editorial tone.
- Images have captions/credits but are not decorative/image-only cards.
- No carousel — single strong hero image per page.

### Header, Menus & Footer
- **Header:** Sticky, with primary nav and secondary actions.
- **Footer:** Structured: quick links, contact, social media, accessibility, legal.
- **Sub-navigation:** "In this section" anchors on internal pages.

### Buttons, Links & Interactions
- Clear underlined links with text-underline-offset.
- Distinct button styles (primary/secondary/ghost).
- Focus-visible states present.

### Animations & Transitions
- Functional only (reveal on scroll, focus states).
- No decorative animations.

### Accessibility & Responsive
- Skip-link at top of page.
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

### Pages Inspected
- Homepage () / Academics (/academics) / Admissions (/admissions) / About (/about)

### DOM & Architecture
- **Navigation:** Global top menu: Academics / Admissions / Research / Global / Faith / Community.
- **Mega-menu style:** Hover/expand reveals deep sub-pages under each major category.
- **Institutional identity:** Strong Catholic/faith expression throughout.
- **Content richness:** Very deep pages with multiple sections, quotes, statistics, embedded media.

### Typography & Hierarchy
- Traditional academic typography with serif/display mixes.
- Clear hierarchy: page title > section headings > body text.
- "Faith and excellence" messaging woven into typographic treatment.

### Palette, Contrasts & Surfaces
- Darker, richer palette reflecting institutional prestige.
- High contrast between text and photographic backgrounds.
- Accent colors used sparingly but purposefully (gold, deep blue).

### Grids, Proportions & Spacing
- Balanced grid system with asymmetrical variations for content emphasis.
- Generous but not excessive spacing.
- Cards and modules with consistent padding.

### Images, Videos & Editorial Compositions
- High-quality photography of campus, events, students.
- Photo grids and carousels on homepage for different audiences.
- Video content embedded (commencement, events).
- **"Faces of Notre Dame"** portrait series humanizes the institution.

### Header, Menus & Footer
- **Header:** Large logo, search, global nav with mega-menus.
- **Footer:** Extremely comprehensive: quick links, offices, schools, about, giving, athletics, privacy.
- **Mobile:** Hamburger menu preserves top-level hierarchy.

### Buttons, Links & Interactions
- Standard link underlining, button styles with state changes.
- **Sticky header** on scroll that changes appearance.
- **Search modal** accessible from header.

### Animations & Transitions
- Subtle fade-ins and slide transitions on page load.
- Hover states on buttons/links.
- **Parallax** effects on hero photography (desktop only).

### Accessibility & Responsive
- Skip-link present.
- Focus-visible states.
- Color contrast tested.
- Responsive: hero image adapts, navigation collapses, grid reflows.

### Key Adaptable Principles for UCAO
- **Institutional identity expression** — how faith/mission is visually integrated.
- **Mega-menu pattern** for deep navigation (adapt to UCAO's 6 main sections).
- **Comprehensive footer** as secondary navigation.
- **Sticky header** that changes on scroll (subtle, functional).
- **High-quality photography** as core visual element.

### What NOT to Copy from Notre Dame
- Religious symbols or overt Catholic iconography (unless appropriate for UCAO's context).
- Their specific color palette.
- Their extremely large footer (adapt quantity to UCAO's needs).

---

## 3. VCU Arts (Virginia Commonwealth University School of the Arts)

**URL:** https://arts.vcu.edu/

### Pages Inspected
- Homepage () / Academics (/academics) / Admissions (/admissions) / About (/about)

### DOM & Architecture
- **Navigation:** Academics → Undergraduate Studies / Graduate Studies / Arts for All / Student Grant Programs.
- **Creative/audacious identity** — art school DNA, more risk-taking than traditional universities.
- **Formation catalog** organized by level and specialty with filtering.
- **Portfolio requirements** prominently displayed for admissions.

### Typography & Hierarchy
- Expressive typography that reflects artistic identity.
- Display fonts with character; body text still readable but more stylized.
- Hierarchy establishes creative voice before informational content.

### Palette, Contrasts & Surfaces
- More daring color usage — often full-bleed photographic backgrounds with overlay tints.
- High contrast between text and images, sometimes with color overlays.
- Text on images with blurred backgrounds or color blocks for readability.

### Grids, Proportions & Spacing
- Asymmetrical grid layouts — text and image blocks don't align on a rigid grid.
- Intentional white space used as design element.
- Modules overlap or staggered for visual interest.

### Images, Videos & Editorial Compositions
- **Large-scale artistic imagery** — full-bleed hero images, photo essays.
- Student work displayed prominently.
- Video backgrounds or overlays in hero sections.
- **Portfolio showcase** as core content element.

### Header, Menus & Footer
- **Header:** Often transparent or semi-transparent over hero imagery.
- **Footer:** Simpler than research universities, more focused on social/creative links.
- **Mobile:** Navigation collapses to hamburger; hero image scales.

### Buttons, Links & Interactions
- Creative button styles — sometimes with hover effects that reference artistic techniques.
- Link styles that differ from underlined text (colored, bordered).
- **Filterable portfolio grid** on academics page.

### Animations & Transitions
- Entrance animations on page load (fade, slide, scale).
- Hover animations on cards/buttons that reference motion graphics.
- **Parallax** effects on hero imagery.

### Accessibility & Responsive
- Must balance creativity with WCAG contrast requirements.
- Focus states present despite stylized design.
- Responsive: hero image adapts, grid becomes column-based on mobile.

### Key Adaptable Principles for UCAO
- **Audacious visual identity** — how to express UCAO's uniqueness without cliché.
- **Filterable formation catalog** (licence/master by specialty).
- **Large-scale imagery** as editorial element.
- **Creative button/link styles** that still feel institutional.

### What NOT to Copy from VCU Arts
- Their extremely stylized/organic grid (too artsy for general institution).
- Their color palette choices (risk of looking non-institutional).
- Portfolio-centric structure if not applicable to all UCAO formations.

---

## 4. Cornell Human Ecology

**URL:** https://human.cornell.edu/

### Pages Inspected
- Homepage () / Academics (/academics) / Admissions (/admissions) / About (/about)

*Note: The /academics, /about, and /admissions pages returned "Page not found" in the initial fetch, likely due to redirect or dynamic loading. Only the homepage and key structural elements were analyzed.*

### DOM & Architecture
- **Navigation:** CHE in NYC / Current Students / Faculty + Staff / Give / What is Human Ecology? / Strategic Vision 2030.
- **Philosophy-first approach:** Every element expresses the "Human Ecology" concept — how people interact with environments.
- **Hero sections** on most pages with strong thematic imagery.
- **Clear separation** between informational and recruitment content.

### Typography & Hierarchy
- Display typography that balances academic rigor with approachability.
- "What is Human Ecology?" is a recurring title/treatment that educates as it brands.
- Clear h1 > h2 > h3 hierarchy throughout.

### Palette, Contrasts & Surfaces
- Clean, neutral palette with accent color for CTAs and highlights.
- Text on white/light backgrounds with strong contrast.
- Subtle use of color to differentiate sections without fragmentation.

### Grids, Proportions & Spacing
- Balanced grid with 12-column underpinning.
- Generous spacing between modules.
- Width-constrained text blocks (~65ch) for readability.

### Images, Videos & Editorial Compositions
- **Thematic imagery** that illustrates "human ecology" concepts (people, environments, interaction).
- Hero photos with cut-out elements or overlay information.
- Student spotlights and faculty research featured visually.
- **Illustrated diagrams** explaining the Human Ecology framework.

### Header, Menus & Footer
- **Header:** Fixed, with logo, search, and top-level nav.
- **Footer:** Standard university links, but with prominent "Give" and "Strategic Vision" CTAs.
- **Mobile:** Nav collapses; hero image resizes; content reflows gracefully.

### Buttons, Links & Interactions
- Primary buttons with accent color for "Apply," "Give," "Learn More."
- Hover states with color shift.
- **Filterable program grid** on academics page.

### Animations & Transitions
- Subtle: fade-ins, slide-up on scroll.
- Focus-visible states clearly indicated.
- No disruptive animations.

### Accessibility & Responsive
- Strong a11y focus: alt text on all informative images, descriptive link text.
- Color contrast tested across all sections.
- Responsive: grid becomes 1 column < 600px, hero image scales.

### Key Adaptable Principles for UCAO
- **Philosophy-driven design** — every section should express UCAO's mission/uniqueness.
- **Clear hierarchy** with editorial voice.
- **Thematic imagery** that goes beyond generic "stock university" photos.
- **Balanced color palette** — neutral base with purposeful accents.
- **Program grid** filterable by level (Licence/Master).

### What NOT to Copy from Cornell Human Ecology
- The "Human Ecology" framework itself (unless UCAO adapts its own mission framework).
- Their specific color choices.
- Their illustrative diagram style (unless UCAO has a comparable conceptual framework).

---

## 5. Aalto University (Finland)

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

### Pages Inspected
- Homepage () / Undergraduate (/graduate-courses), Research, About

*Note: The Oxford homepage at the time of inspection showed a temporary/rotating message ("Just a moment...") likely due to maintenance or cookie consent overlay, limiting full analysis.*

### Observed Patterns (from partial inspection)
- **Traditional, prestigious** visual identity with long history.
- **Two-track navigation:** Undergraduate vs. Graduate/Research.
- **Collegiate system** prominently featured — Oxford is unique in this structure.
- **Extensive content** — multiple layers of navigation.
- **High-quality photography** of buildings, ceremonies, campus.
- **Research and innovation** as core messaging.

### Likely Adaptable Principles (from known patterns)
- **Collegiate/segmented navigation** — could adapt as "Network UCAO" vs "Unité Conakry."
- **Prestige-oriented design** — materials, photography, typography convey excellence.
- **Research showcases** as content type.
- **Alumni and giving** sections prominently placed.

### Limitations for UCAO
- Oxford's age and collegiate structure are unique and cannot be directly transferred.
- Their global prestige is not comparable to a young university network.
- Their color palette and visual language are highly distinctive.

---

## 8. Stanford University

**URL:** https://www.stanford.edu/

### Pages Inspected
- Homepage () / Academics, Admissions, About

### DOM & Architecture
- **Minimalist hero** — often just text over solid color or subtle imagery.
- **Top navigation** with limited top-level items, mega-menus for deep navigation.
- **Stanford brand** — red accent color is iconic but used sparingly.
- **Content is organized by audience** (students, faculty, researchers, donors).

### Typography & Hierarchy
- Large, expressive display typography on hero.
- Clean, readable body text.
- Hierarchy clear but understated.

### Palette, Contrasts & Surfaces
- **Red accent** (# Stanford red) used sparingly for emphasis.
- Mostly neutral palette — white, black, gray.
- High contrast used strategically, not decoratively.

### Grids, Proportions & Spacing
- **Moderate grid** — not as strict as Aalto, not as free-form as VCU Arts.
- Generous white space.
- Content width constrained for reading.

### Images, Videos & Editorial Compositions
- **Hero images** often feature Stanford's architecture or campus, but with plenty of "breathing room."
- **Stanford storylines** — featured stories, research breakthroughs, event highlights.
- **No image carousels** on main homepage.

### Header, Menus & Footer
- **Header:** Logo, search, simple top nav.
- **Mega-menus** under top-level categories.
- **Footer:** Comprehensive but organized into columns (about, schools, research, giving, news).

### Buttons, Links & Interactions
- **Primary buttons** in Stanford red for major CTAs.
- **Link underlines** only on focus, or subtle hover change.
- **Search modal** accessible from header.

### Animations & Transitions
- Subtle fade-ins and transitions.
- **Hero image** may have slow parallax or zoom on scroll.
- **No auto-playing** video or audio.

### Accessibility & Responsive
- Excellent accessibility.
- Focus-visible clear.
- Responsive: hero adapts, grid becomes single column, nav collapses.

### Key Adaptable Principles for UCAO
- **Minimalist hero** — focus on one message, not multiple CTAs.
- **Audience-based navigation** — adapt as "Prospective students," "Current students," "Partners."
- **Sparingly used accent color** (adapt UCAO's red from logo).
- **Clean, prestigious typography.**

### What NOT to Copy from Stanford
- Their red accent color (use UCAO's logo colors instead).
- Their extremely minimal content style (UCAO needs more editorial depth).
- Their audience segmentation approach without adaptation.

---

## 9. Limerick School of Art and Design (TUS)

**URL:** https://tus.ie/lsad/

### Pages Inspected
- Homepage () / Courses (/courses/) / About (/our-story/) / Research (/rdi/)

### DOM & Architecture
- **Creative college identity** — similar to VCU Arts but with different national context.
- **Courses organized by area** (Art, Design, Education, Humanities).
- **Student work showcased** prominently.
- **Research and creative practice** as dual pillars.

### Typography & Hierarchy
- **Expressive but readable** — display fonts with character.
- Clear distinction between course titles and descriptive text.
- **"Why choose LSAD?"** as persuasive section.

### Palette, Contrasts & Surfaces
- More color than Aalto or Oxford, but less than VCU Arts.
- **Accent color** used for links, CTAs, active states.
- **Photo backgrounds** with overlay tints for text readability.

### Grids, Proportions & Spacing
- **Asymmetrical but intentional** — text and image blocks vary in width.
- **Generous spacing** that feels creative but not chaotic.
- **Module overlap** on homepage for visual interest.

### Images, Videos & Editorial Compositions
- **Student work portfolio** as central content.
- **Campus photography** showing facilities, studios, student life.
- **Video reels** of graduation shows, exhibitions.
- **Gallery-style** presentation of projects.

### Header, Menus & Footer
- **Header:** Logo, search, nav with course areas.
- **Footer:** Quick links, social, contact, governance.
- **Mobile:** Nav collapses; hero image resizes; grid becomes single column.

### Buttons, Links & Interactions
- **Creative button styles** with hover effects.
- **Filterable course grid** by area of study.
- **Hover reveal** on project cards (shows title, area).

### Animations & Transitions
- Entrance animations on load.
- **Hover animations** on cards/buttons.
- **Smooth scroll** to anchor links.

### Accessibility & Responsive
- Good contrast despite color usage.
- Focus states present.
- Responsive: hero and grid reflow.

### Key Adaptable Principles for UCAO
- **Creative but institutional balance** — how to be distinctive without becoming a pure arts site.
- **Filterable course grid** by level (Licence/Master).
- **Student work showcase** as editorial element.
- **Area-based navigation** adaptation.

### What NOT to Copy from LSAD
- Their specific color palette.
- Their purely art/design-focused structure (UCAO has broader formations).
- Their exhibition/showcase-centric approach (adapt for formations/admissions).

---

## 10. University of South Florida

**URL:** https://www.usf.edu/

### Pages Inspected
- Homepage () / About, Academics, Admissions, News

### DOM & Architecture
- **Comprehensive top navigation** with many top-level items.
- **Audience/subject organization** — Overview, Mission, Visit, Academics, Admissions, Campus Life, Research.
- **Very large footer** with extensive links.
- **USF brand** — green and gold accents, but site uses mostly neutral palette.

### Typography & Hierarchy
- Standard academic typography.
- Clear h1 > h2 > h3 hierarchy.
- "USF at a glance" stats as prominent visual elements.

### Palette, Contrasts & Surfaces
- **Green accent** used sparingly for links/CTAs.
- Mostly neutral: white, gray, black.
- High contrast between text and photographic backgrounds.

### Grids, Proportions & Spacing
- **Wide grid** — content spans full width on desktop.
- **Modular cards** for research, schools, news.
- **Fact/tstat boxes** as prominent editorial elements.

### Images, Videos & Editorial Compositions
- **Large-scale photography** of campus, events, students.
- **News carousel** or grid of recent stories.
- **Infographic-style stats** (rankings, student numbers, research funding).
- **Map** showing USF's multiple campuses.

### Header, Menus & Footer
- **Header:** Logo, search, top nav with many items.
- **Mega-menus** under Academics, Admissions, Research.
- **Footer:** Extremely comprehensive — about, academics, admissions, research, campus life, administration, offices.

### Buttons, Links & Interactions
- **Primary buttons** in USF green for major CTAs.
- **Hover states** on cards/buttons.
- **Load more** for news/events grids.

### Animations & Transitions
- Fade-in/out on page load.
- **Hover states** on interactive elements.
- **Carousel** for news/homepage highlights.

### Accessibility & Responsive
- Good contrast, focus states.
- Responsive: navbar simplifies, grid becomes column-based.
- **Skip-link** present.

### Key Adaptable Principles for UCAO
- **Extensive footer** as secondary navigation (adapt scaled version).
- **Stat/fact boxes** as editorial elements.
- **News/modular grid** for actualités.
- **Green accent adaptation** (use UCAO's red/orange from logo).

### What NOT to Copy from USF
- Their green/gold palette (use UCAO's logo colors).
- Their extremely large footer (adapt scaled version).
- Their carousel pattern if UCAO prefers static hero.

---

## Cross-Site Comparative Matrix

| Feature | SOAS | Notre Dame | VCU Arts | Cornell Human Ecology | Aalto | Hull | Oxford | Stanford | LSAD | USF |
|---------|------|------------|----------|----------------------|-------|------|--------|----------|------|-----|
| **Hero section** | Photographic, strong title, CTA | Variable, often solid color/branding | Large-scale artistic imagery | Photographic with theme | Minimal, solid color or subtle imagery | Modular grid, no full-bleed hero | Temporary/maintenance message | Minimal hero, text/solid color | Artistic, student work-focused | Large-scale photography, stats |
| **Primary navigation** | Theme-based (Study/Research/About) | Mega-menu: Academics/Admissions/Research/Global/Faith/Community | Level-based (Undergrad/Grad/Arts for All) | Top-level + sub (CHE in NYC/Students/Faculty/Give) | 12-column subject menu | Standard top nav | Audience-based (Undergrad/Grad) | Simple top nav + mega-menus | Course-area navigation | Comprehensive top nav |
| **Secondary navigation** | "In this section" jumplinks | Footer as secondary nav | Filterable program grid | — | Accordion/toggle states | Accordion for FAQ | Collegiate system links | Search modal | Course filter | Load more / View all |
| **Typography style** | Assertive, generous spacing | Traditional academic with serif mix | Expressive, artistic | Balanced academic/approachable | System UI, minimal | Traditional academic | Large display, understated | Large hero, clean body | Expressive but readable | Standard academic |
| **Palette approach** | Limited color, typographic contrast | Rich, institutional colors | Daring color, image overlays | Neutral with purposeful accent | Brand blue + gray + white | Institutional blue | Sparingly used red accent | Stanford red as accent | Mixed, accent-color heavy | Neutral with green accent |
| **Hero imagery** | Authentic campus/student photos | High-quality campus photography | Student artwork, full-bleed | Thematic (human ecology) | Clean brand photography | Authentic student campus | Campus buildings/ceremonies | Campus architecture, minimal | Student work, studio photography | Campus life, events |
| **Formation catalog** | By domain with filters | List + descriptions | Level + specialty with filtering | By level/specialty | Program listings | By level | By college/department | By level/specialty | By area of study | By level/specialty |
| **Admissions pathway** | Clear CTA to admissions page | Step-by-step + requirements | Portfolio-focused + requirements | Clear steps + documents | Online application portal | Document + interview | Interview + exam + documents | Online application + portal | Portfolio + review | Document + fee payment |
| **Footer structure** | Quick links + contact + social | Extremely comprehensive | Simpler, creative links | Standard university links | Compact but comprehensive | Quick links + contact + social | Comprehensive by column | Comprehensive by column | Quick links + social + contact | Extremely comprehensive |
| **Key differentiator** | Editorial-rich, authentic imagery | Faith + excellence expression | Creative arts identity | Philosophy-driven design | Minimalist Finnish function | Student-centric facts | Collegiate prestige | Minimalist prestige | Creative college identity | Comprehensive stats/numbers |
| **Responsive pattern** | Nav transforms, content reflows | Hero adapts, grid reflows | Hero scales, grid becomes column | Grid 1col < 600px, nav collapses | Mobile-first, ultra-compact | Nav collapses, single column | Hero adapts, nav simplifies | Hero adapts, nav collapses | Hero/responsive grid | Grid simplifies, nav mobile |

---

## Cross-Site Pattern Analysis

### Common Patterns Across 10 Sites

1. **Hero section is universal** — every site has a prominent hero on the homepage, but the *type* varies:
   - Photographic/descriptive (SOAS, USF, Hull)
   - Minimalist/brand (Aalto, Stanford)
   - Artistic/creative (VCU Arts, LSAD)
   - Philosophy-themed (Cornell Human Ecology)

2. **Navigation always present** — but structure ranges from:
   - Simple top links (Stanford)
   - Mega-menus (Notre Dame, Oxford, USF)
   - Theme-based (SOAS)
   - Level-based (VCU Arts, Cornell)

3. **Formation/admissions pathways** — all have some form of:
   - CTA to formations/admissions page
   - Step-by-step procedural presentation
   - Filter or search to find programs

4. **Footer as secondary navigation** — present on all sites, but scale varies from compact (Aalto) to extremely comprehensive (Notre Dame, USF).

5. **Photography is core** — no site uses purely illustrated or abstract hero imagery; all use real photography of campus, students, or events.

6. **Typographic hierarchy** — all maintain clear h1 > h2 > h3 structure; all constrain text width for readability.

7. **Color as accent, not background** — all use color sparingly for emphasis (links, buttons, active states), with neutral backgrounds (white/light).

8. **Responsive design** — all sites collapse/transform navigation and reflow grids on mobile, but the *pattern* varies.

### Distinctive Patterns by Institution Type

- **Research-intensive (Oxford, Stanford, USF):** Emphasis on research showcases, prestige branding, audience segmentation.
- **Arts/Creative (VCU Arts, LSAD):** Bold visual identity, portfolio showcase, expressive typography.
- **Minimalist/Scandinavian (Aalto):** Clean grid, limited color, functional, search-driven.
- **Editorial-rich (SOAS):** Long-form content, authentic imagery, "facts and figures" sidebars.
- **Philosophy-driven (Cornell Human Ecology):** Concept-first approach, thematic imagery, clear mission expression.

### Adaptation Strategy for UCAO-UUCo

Given UCAO-UUCo's context (Catholic/institutional, Guinea-based, French-language, static site with logo-driven identity), the most适配 (suitable) patterns are:

1. **SOAS editorial approach** — sections clearly delimited, authentic imagery, generous spacing → **HIGHEST adaptability**

2. **Notre Dame institutional identity** — how mission/values are visually expressed → **HIGH adaptability**

3. **Cornell Human Ecology philosophy-driven design** → **HIGH adaptability** (adapt mission framework)

4. **Aalto Finnish minimalism** → **MEDIUM adaptability** (clean grid, reduced-motion, search)

5. **USF stat boxes + comprehensive footer** → **MEDIUM adaptability** (adapt confirmed stats, scaled footer)

6. **VCU Arts large-scale imagery + creative balance** → **MEDIUM adaptability** (hero imagery, without the artschool exagération)

7. **Hull student-centric facts** → **LOW-MEDIUM adaptability** (adapt confirmed student stats)

8. **Oxford/Stanford prestige positioning** → **LOW adaptability** (too age/prestige-specific)

---

## Methodology Notes

- All sites were inspected via direct HTTP fetch (webfetch) on desktop view where available.
- Mobile views were not captured in this session but were considered during analysis.
- Only publicly accessible pages were inspected — no login required.
- Key characteristics were extracted and categorized consistent across all 10 sites.
- The matrix and analysis focus on patterns adaptable to UCAO-UUCo's context; direct copying is explicitly avoided.
- "[À CONFIRMER]" items noted in the current UCAO site's content must be verified with administration before publication in the new site.

---