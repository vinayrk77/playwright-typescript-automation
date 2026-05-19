import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('cricket bat');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  /*await page.getByRole('link', { name: 'cricket bat wooden in Cricket' }).click();
  await expect(page.locator('#container')).toContainText('XTROKE Scoop Design Popular with Red Tennis Ball and Co...');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'XTROKE Scoop Design Popular with Red Tennis Ball and Cover Poplar Willow' }).click();
  const page1 = await page1Promise;
  await page1.locator('._1psv1zeb9._1psv1ze0._1psv1zeku > div > div > div:nth-child(2)').first().click();
  await page1.getByRole('link', { name: 'Cart 1 Cart' }).click();
  await expect(page1.locator('.css-g5y9jx > div > img').first()).toBeVisible();
  */
});