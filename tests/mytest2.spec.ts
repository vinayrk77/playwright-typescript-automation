import { test, expect } from '@playwright/test';

test('Verify Page Url', async ({ page }) => {
  await page.goto('https://www.google.com/');

  const url = page.url();
  console.log('URL:', url);

  await expect(page).toHaveURL(/google/i);
});