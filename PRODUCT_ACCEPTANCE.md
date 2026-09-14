# Product Acceptance

The product is not considered functional until the primary user journey passes through the real browser UI.

## Primary acceptance case

Input:

- participants: `8`
- average hourly cost: `75`
- duration in minutes: `45`

Expected visible result:

- total meeting cost: `$450.00`
- cost per minute: `$10.00`
- cost per participant: `$56.25`

## Additional deterministic cases

### Case A

Input: `1 participant`, `$60/hour`, `30 minutes`

Expected:

- total: `$30.00`
- per minute: `$1.00`
- per participant: `$30.00`

### Case B

Input: `2 participants`, `$37.50/hour`, `90 minutes`

Expected:

- total: `$112.50`
- per minute: `$1.25`
- per participant: `$56.25`

## Invalid-input behavior

At minimum, the UI must handle these without silent failure, `NaN`, `Infinity`, or an apparently dead Calculate action:

- participants missing;
- participants `0` or negative;
- hourly cost missing or negative;
- duration missing;
- duration `0` or negative.

The user should receive visible, actionable validation feedback and remain able to correct the input.

## Black-box evidence requirement

Acceptance must exercise the real product surface and verify the user-visible values after the primary action. Page existence, HTTP 200, component render, unit-level formula tests, or internal state are not sufficient by themselves.

Preferred evidence order:

1. browser-level automated acceptance against a production-like local preview;
2. the same acceptance against a deployed preview when deployment is available without a genuine owner-only gate;
3. fresh CI evidence tied to the PR/release candidate SHA.

## Failure means remediation, not a gate

If this document's acceptance fails, fix the product or its test harness. Do not turn the failure into a Human Gate and do not ask the owner to choose the next task when the remediation path is evident.
