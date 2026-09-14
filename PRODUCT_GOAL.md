# Product Goal

Ship a small static web product that helps a user understand the direct labor cost of a meeting.

## Primary user journey

`open product -> enter participants + average hourly cost + duration -> Calculate -> understand total cost + cost per minute + cost per participant`

## Calculation contract

For `participants = P`, `average hourly cost = H`, and `duration in minutes = M`:

- `total cost = P * H * (M / 60)`
- `cost per minute = total cost / M`
- `cost per participant = total cost / P`

Display USD currency values to two decimal places.

## Required outcome

For `8 participants`, `$75/hour`, and `45 minutes`, the user must see:

- Total meeting cost: `$450.00`
- Cost per minute: `$10.00`
- Cost per participant: `$56.25`

## Scope

The first vertical slice is intentionally small:

- static browser application;
- no backend;
- no database;
- no authentication;
- no external API;
- no AI call.

The product may use any lightweight front-end implementation that supports reliable black-box browser acceptance. Avoid infrastructure that does not directly help prove the primary journey.

## Product principles

- Valid input must produce an immediate understandable result.
- Invalid input must produce visible, actionable feedback rather than silent failure, `NaN`, or `Infinity`.
- A page that renders without delivering the calculation is not a functional product.
- Unit tests are useful but cannot substitute for browser-level Product Acceptance.
