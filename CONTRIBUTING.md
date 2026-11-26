# Contributing to UCAO-UUCo

Thank you for contributing. This repository contains the public UCAO-UUCo website. These rules apply to every contributor, including repository maintainers.

## Required workflow

1. Pick an existing GitHub issue before starting work. If no issue exists, create one first and agree on its scope.
2. Create a focused branch from the latest `main`, using `feat/<issue-number>-short-description`, `fix/<issue-number>-short-description`, or `docs/<issue-number>-short-description`.
3. Keep the change limited to the issue. Do not bundle unrelated cleanup or features.
4. Make and verify the change locally. Follow the repository instructions in `AGENTS.md`.
5. Open a pull request targeting `main`. **Direct pushes to `main` are not an accepted contribution workflow.**
6. Complete every section of the pull request template. Link the issue using a GitHub closing keyword, for example `Closes #7`. A plain mention is not enough to close the issue automatically.
7. Request review from the other project collaborator. Address review feedback and update the PR.
8. Merge only after review and required checks have passed. Do not deploy or change production configuration without explicit authorization.

## Pull request rules

- Every code, content, configuration, documentation, or workflow change must arrive through a pull request.
- Every pull request must reference at least one existing issue and explain how the change resolves it.
- Prefer one issue per pull request. If a PR resolves multiple issues, list each with its own closing keyword.
- Keep PRs small enough to review. Split unrelated work into separate PRs.
- Do not self-approve your own pull request.
- Do not merge a PR with failing checks, unresolved review comments, missing evidence, or an unlinked issue.
- If a task is abandoned or its scope changes, update the issue before continuing.

## Collaboration

Current project collaborators:
- `@sudomarc` — project maintainer and institutional/content coordination.
- `@luciengbamou1-cmd` — development collaborator.

The PR author should request review from the other collaborator. For a change authored by the maintainer, the development collaborator reviews it; for a change authored by the development collaborator, the maintainer reviews it.

## Verification expected in every PR

Report the commands actually run and their results. At minimum, follow the applicable checks in `AGENTS.md`, including JSON validation and `npm run build` when the change affects the site. Include manual checks and limitations honestly. Never claim a test passed if it was not run.

## Content and security

- Follow the source hierarchy and editorial rules in `AGENTS.md`.
- Never invent institutional facts, fees, programme availability, accreditation, staff details, or events.
- Never commit secrets, credentials, private applicant documents, or personal data.
- Do not add dependencies or external services without explaining the need and obtaining approval where required.
- Keep generated output and local build artifacts out of commits unless a task explicitly requires them.
