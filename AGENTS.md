# Repository guidance

## Purpose
This repository contains the public information website for the Université Catholique de l'Afrique de l'Ouest – Unité Universitaire de Conakry (UCAO-UUCo).

## Source hierarchy
1. Current official UCAO-UUCo pages and documents for institutional wording, published programmes, admissions documents, contact details and dated events.
2. Current Guinean government / MESRS / ANAQ documents for habilitation, accreditation and regulatory claims.
3. Recognised institutional directories for cross-checking, never as a substitute for current government authorisation.
4. Third-party directories and social reposts are leads only; do not present their claims as confirmed facts.

Record source URLs, retrieval dates, contradictions and unresolved questions in editorial-tracking.md.

## Editorial rules
- Never invent programmes, specialisations, durations, fees, admissions conditions, staff names, facilities, partnerships, statistics, events or testimonials.
- Distinguish the UCAO network (founded in 2000 according to the institution) from the Conakry unit (created in 2008 according to the institution).
- When the official source itself is inconsistent, publish the actual listed items and explain the discrepancy once; do not silently force a count.
- Treat programme availability and authorisations as academic-year-specific. Do not imply that a programme is open for the current intake unless the university confirms it.
- Never republish expired fee schedules or bank-account details. Require a current written confirmation before displaying payment instructions.
- Do not claim State recognition, CAMES membership or programme accreditation as independently verified without current primary evidence from MESRS/ANAQ or CAMES.
- Use the institution's published contact details, but disclose conflicts rather than hiding them.
- Keep genuinely unknown legal and administrative details clearly identified for the university; do not fill them with guesses.
- Do not display fake cookie-consent controls, language links to missing pages, non-existent media, or simulated form-delivery success.
- The contact form must clearly state whether it is connected to a real receiving service.

## Implementation
- Source content lives in src/content/; generated HTML lives in dist/.
- Keep pages statically renderable and usable without JavaScript.
- Escape all editorial content before rendering HTML.
- Preserve accessibility: semantic headings, labels, keyboard support, visible focus and prefers-reduced-motion.
- Do not add dependencies unless they solve a demonstrated need.

## Verification
Before proposing a change:
1. Parse every changed JSON file.
2. Run npm run build.
3. Check internal links, referenced local assets and generated routes.
4. Parse changed JavaScript and inspect the final diff.
5. Report what was actually verified and what remains unverified.

Do not merge into main or deploy to production without explicit user authorization.
