import { test, expect } from '@playwright/test';

test('Verify Page Title', async ({ page }) => {
  await page.goto('https://www.google.com/');

  const title = await page.title();
  console.log('Title:', title);

  await expect(page).toHaveTitle(/Google/);
});