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

## Collaboration and pull requests
- All changes must be submitted through a pull request targeting `main`. Never commit or push directly to `main`.
- Every PR must reference an existing GitHub issue and include a closing keyword in its body, such as `Closes #123`. A PR without an issue link is incomplete.
- Keep one focused issue per PR where practical. List every resolved issue with a closing keyword when more than one is necessary.
- Use a dedicated branch named `feat/<issue-number>-short-description`, `fix/<issue-number>-short-description`, or `docs/<issue-number>-short-description`.
- Complete the repository PR template at `.github/pull_request_template.md`.
- Request review from the other project collaborator. The PR author must not approve their own PR. Address review feedback before merging.
- Do not merge with failing checks, unresolved review comments, missing verification evidence, or missing issue linkage.
- Follow `CONTRIBUTING.md` for the full collaboration workflow.
- GitHub branch protection / repository rulesets must enforce pull requests and required checks where repository administration permits. Written instructions and templates alone do not technically block direct pushes.
