import { expect, test } from '@playwright/test';

async function calculate(page, { participants, hourlyCost, duration }) {
  await page.getByLabel('Participants').fill(String(participants));
  await page.getByLabel('Average hourly cost').fill(String(hourlyCost));
  await page.getByLabel('Duration in minutes').fill(String(duration));
  await page.getByRole('button', { name: 'Calculate' }).click();
}

test('primary browser journey shows the acceptance oracle values', async ({ page }) => {
  await page.goto('/');

  await calculate(page, {
    participants: 8,
    hourlyCost: 75,
    duration: 45
  });

  await expect(page.getByText('Total meeting cost').locator('..')).toContainText('$450.00');
  await expect(page.getByText('Cost per minute').locator('..')).toContainText('$10.00');
  await expect(page.getByText('Cost per participant').locator('..')).toContainText('$56.25');
  await expect(page.getByText('8 participants for 45 minutes at $75.00 per hour.')).toBeVisible();
});

test('additional deterministic cases calculate through the real UI', async ({ page }) => {
  await page.goto('/');

  await calculate(page, {
    participants: 1,
    hourlyCost: 60,
    duration: 30
  });

  await expect(page.getByText('Total meeting cost').locator('..')).toContainText('$30.00');
  await expect(page.getByText('Cost per minute').locator('..')).toContainText('$1.00');
  await expect(page.getByText('Cost per participant').locator('..')).toContainText('$30.00');

  await calculate(page, {
    participants: 2,
    hourlyCost: 37.5,
    duration: 90
  });

  await expect(page.getByText('Total meeting cost').locator('..')).toContainText('$112.50');
  await expect(page.getByText('Cost per minute').locator('..')).toContainText('$1.25');
  await expect(page.getByText('Cost per participant').locator('..')).toContainText('$56.25');
});

test('invalid inputs show actionable feedback instead of broken output', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Calculate' }).click();

  await expect(page.getByRole('alert')).toContainText('Enter at least 1 participant.');
  await expect(page.getByRole('alert')).toContainText('Enter an average hourly cost of $0 or more.');
  await expect(page.getByRole('alert')).toContainText('Enter a duration greater than 0 minutes.');
  await expect(page.getByText(/NaN|Infinity/)).toHaveCount(0);

  await calculate(page, {
    participants: 0,
    hourlyCost: -1,
    duration: 0
  });

  await expect(page.getByRole('alert')).toContainText('Enter at least 1 participant.');
  await expect(page.getByRole('alert')).toContainText('Enter an average hourly cost of $0 or more.');
  await expect(page.getByRole('alert')).toContainText('Enter a duration greater than 0 minutes.');

  await calculate(page, {
    participants: 3,
    hourlyCost: 90,
    duration: 20
  });

  await expect(page.getByRole('alert')).toHaveCount(0);
  await expect(page.getByText('Total meeting cost').locator('..')).toContainText('$90.00');
});
