# Meeting Cost Calculator

A static browser product for calculating the direct labor cost of a meeting.

## Run locally

```sh
npm install
npm run dev
```

Open the URL printed by Vite, enter participants, average hourly cost, and duration, then select Calculate.

## Product acceptance

```sh
npm run test:acceptance
```

The browser acceptance test exercises the real UI and verifies the Issue #1 oracle:

- 8 participants
- $75/hour
- 45 minutes
- $450.00 total, $10.00 per minute, $56.25 per participant
