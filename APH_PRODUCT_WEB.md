# APH Product-Web Starter Contract

Use this repository as a clean-room test of a Bootstrap-like default for autonomous product delivery.

## Primary principle

**Prove one real user-facing vertical slice before broadening the system.**

The required sequence is:

`entry -> input/action -> core behavior -> visible result -> understandable next state`

## Proof ladder

Advance only after the earlier rung is demonstrated:

`functionality -> user value -> correctness/domain validation -> safety/privacy/reliability -> release/recovery -> autonomy proof`

Later-rung success never compensates for a missing earlier rung.

## User Value Gate

Ask:

> Can a real user enter through the actual product surface, complete the primary journey, and receive the intended outcome without hidden setup or owner guidance?

A page render, HTTP 200, passing unit test, or internal calculation is not enough.

## Vertical Slice First

Until Product Acceptance passes, default to work that changes one of:

- primary-journey functionality;
- user-visible value;
- the concrete blocker preventing the journey;
- black-box Product Acceptance coverage.

Avoid premature framework expansion, orchestration, broad datasets, release ceremony, or autonomy-proof work.

## Blocked-work routing

```text
selected work
  -> blocked?
     -> dependency block: resolve the prerequisite
     -> Product Acceptance failure: remediate the product
     -> genuine Human Gate: park that stream and continue meaningful unblocked work
     -> every meaningful stream Human-gated: request the smallest owner action
```

A Human Gate blocks only the affected workstream.

## Owner is not the scheduler

Do not ask the owner to select the next task when the goal, issue state, dependencies, failed acceptance, or current repository state already determine it.

Routine re-prompts such as `should I continue?` or `what should I do next?` are autonomy defects unless a genuine Human Gate applies.

## Anti-waste rule

After three substantial implementation cycles with no Product Acceptance improvement and no material reduction of the concrete blocker:

1. stop the current approach;
2. identify the failing assumption;
3. change implementation strategy, test strategy, or task decomposition;
4. resume autonomously unless a genuine Human Gate applies.

Do not create more ADRs, fixtures, reviews, or documentation merely to stay active.

## Delivery rule

Material changes use issue-backed delivery:

`Issue -> change -> test/review -> PR -> CI -> merge -> close when Definition of Done is actually satisfied`

For this repository, Issue #1 remains open until the product itself satisfies its Definition of Done.
