# Stack Ownership

This clean-room project intentionally composes responsibilities instead of inventing a new end-to-end framework.

## Planning and specification

Use GitHub Spec Kit when it is available in the execution environment.

Spec Kit owns durable:

- specification;
- implementation planning;
- task decomposition;
- process composition.

Do not create a parallel APH planning state machine.

If Spec Kit is unavailable, continue with Issue #1 plus the repository product documents. Record the missing tool as environment evidence, not as a Human Gate.

## Implementation discipline

Use installed Superpowers skills when available for concerns such as:

- test-driven development;
- systematic debugging;
- implementation execution;
- code review;
- verification before completion.

Do not vendor or rewrite the Superpowers skill library into this repository.

If Superpowers is unavailable, use equivalent repository-native engineering discipline and continue.

## Product governance

APH owns:

- Vertical Slice First;
- User Value Gate;
- black-box Product Acceptance priority;
- Human Gate semantics;
- blocked-work rerouting;
- three-cycle anti-waste behavior;
- autonomy evidence.

## Runtime and delivery

The coding-agent runtime executes work. GitHub owns issue-backed delivery, pull requests, CI, merge evidence, and release/deployment evidence.

The experiment is successful only if these layers compose without requiring the owner to act as the routine scheduler.
