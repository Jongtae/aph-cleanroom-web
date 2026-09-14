# Clean-Room Operating Contract

This repository tests whether an autonomous coding agent can ship real user value without routine owner steering.

## Source of truth

1. GitHub Issue #1 defines the active product objective and Definition of Done.
2. `PRODUCT_GOAL.md` defines intended user value and scope.
3. `PRODUCT_ACCEPTANCE.md` defines black-box acceptance and the calculation oracle.
4. `APH_PRODUCT_WEB.md` defines product-governance defaults.

Do not treat planning artifacts, test counts, CI success, or file creation as substitutes for the user-facing outcome.

## Responsibility boundaries

- **Spec Kit, when available:** durable specification, planning, and task decomposition.
- **Superpowers, when available:** TDD, systematic debugging, implementation discipline, review, and verification-before-completion.
- **APH:** Vertical Slice First, User Value Gate, Human Gate semantics, blocked-work rerouting, anti-waste, and autonomy evidence.
- **GitHub:** issue-backed delivery, PR, CI, merge, and release evidence.

Do not duplicate a responsibility already owned by another layer. If Spec Kit or Superpowers is unavailable in the runtime, continue with the minimum repository-native fallback; tool absence is not itself a Human Gate.

## Execution contract

Material repository work follows:

`Issue -> branch/change -> test/review -> PR -> CI -> merge -> close only when Definition of Done is satisfied`

Issue #1 is already the active work item. Do not create process-only issues merely to stay busy.

Do not stop at planning. Continue into implementation and black-box Product Acceptance.

When selected work is blocked:

```text
dependency block -> resolve the prerequisite
Product Acceptance failure -> remediate the product
genuine Human Gate -> park only that workstream and continue another meaningful one
all meaningful work blocked by genuine Human Gates -> request the smallest owner action
```

Do not ask the owner `what should I do next?`, `should I continue?`, or `please approve the plan` when repository state and the goal determine the next action.

## Human Gates

Reserve Human Gates for materially identity-bound, legally meaningful, financially material, irreversible, security/privacy-critical, or technically owner-only actions.

Routine implementation choices, dependency resolution, failing tests, failing Product Acceptance, reversible architecture choices, and next-task selection are not Human Gates.

## Vertical Slice First

Until the primary journey passes black-box Product Acceptance, prioritize only work that changes:

- primary-journey functionality;
- the user-visible result;
- a concrete blocker to that journey;
- black-box Product Acceptance coverage.

Do not front-load broad infrastructure, release ceremony, autonomous-team proof, large datasets, or governance artifacts that do not remove the current blocker.

After three substantial implementation cycles with no Product Acceptance improvement and no material blocker reduction, change strategy instead of adding more process artifacts.

## Communication

Keep progress updates concise and in English. Report material findings, blockers, phase transitions, review findings, and evidence only. Final owner-facing run summaries may be in Korean.

## Stop rule

Stop only when:

- Issue #1 Definition of Done is satisfied; or
- all meaningful remaining work is blocked by genuine Human Gates; or
- no meaningful work remains and an owner decision is itself required.
