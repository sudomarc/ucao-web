# Contributing to UCAO-UUCo

These rules apply to every contributor. The repository owner, `@sudomarc`, is the sole required reviewer and retains final merge authority.

## Required workflow

1. Pick an existing GitHub issue before starting work. If no issue exists, create one first and agree on its scope.
2. Create a focused branch from the latest `main`, using `feat/<issue-number>-short-description`, `fix/<issue-number>-short-description`, or `docs/<issue-number>-short-description`.
3. Keep the change limited to the issue. Do not bundle unrelated cleanup or features.
4. Make and verify the change locally. Follow the repository instructions in `AGENTS.md`.
5. Open a pull request targeting `main`. Direct pushes to `main` by contributors are not allowed.
6. Complete every section of the pull request template. Link the issue using a GitHub closing keyword, for example `Closes #7`.
7. Request review from `@sudomarc`. **Only `@sudomarc` can provide the approval required to merge.** No approval from another collaborator or team substitutes for this review.
8. If `@sudomarc` requests changes, address them and request another review. Approval must apply to the latest PR revision; new commits may dismiss stale approvals depending on repository settings.
9. The development collaborator must not merge their own PR. `@sudomarc` alone decides when to merge and may push directly or bypass the review gate as repository administrator when desired.

## Pull request rules

- Every code, content, configuration, documentation, or workflow change must arrive through a pull request.
- Every pull request must reference at least one existing issue and explain how the change resolves it.
- Prefer one issue per pull request. If a PR resolves multiple issues, list each with its own closing keyword.
- Keep PRs small enough to review. Split unrelated work into separate PRs.
- The PR author must never approve their own pull request.
- A PR authored by `@luciengbamou1-cmd` cannot be merged until `@sudomarc` has submitted an `APPROVE` review on the current revision.
- Do not merge a PR with failing checks, unresolved review comments, missing evidence, or an unlinked issue unless `@sudomarc` explicitly overrides the requirement.
- If a task is abandoned or its scope changes, update the issue before continuing.

## Collaboration roles

- `@sudomarc` — repository owner, sole required approver, and final merge authority.
- `@luciengbamou1-cmd` — development collaborator; may work on branches and open PRs, but cannot approve or merge their own PRs.

## Verification expected in every PR

Report the commands actually run and their results. At minimum, follow the applicable checks in `AGENTS.md`, including JSON validation and `npm run build` when the change affects the site. Include manual checks and limitations honestly. Never claim a test passed if it was not run.

## Content and security

- Follow the source hierarchy and editorial rules in `AGENTS.md`.
- Never invent institutional facts, fees, programme availability, accreditation, staff details, or events.
- Never commit secrets, credentials, private applicant documents, or personal data.
- Do not add dependencies or external services without explaining the need and obtaining approval where required.
- Keep generated output and local build artifacts out of commits unless a task explicitly requires them.

## GitHub enforcement (required administrator configuration)

Documentation alone cannot prevent a merge. The `main` branch must be protected by an active repository ruleset / branch protection rule with:
- Require a pull request before merging.
- Require at least one approval.
- Require review from code owners; `.github/CODEOWNERS` assigns the entire repository only to `@sudomarc`.
- Dismiss stale approvals when new commits are pushed (recommended).
- Require approval of the most recent reviewable push where available.
- Block force pushes and branch deletion.
- Do not grant `@luciengbamou1-cmd` a bypass permission.
- Preserve repository-administrator bypass for `@sudomarc`, so the owner can merge or push directly when they choose.

Until this rule is active on GitHub, the sole-reviewer policy is documented but not technically enforced.
