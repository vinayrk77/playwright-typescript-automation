import {test, expect, Locator} from "@playwright/test"

test("Verify Page locators", async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/");
    await page.getByRole("link", {name:'Register'}).click();
    await page.waitForURL(/register/);
    await expect(page.locator('h1', { hasText: 'Register' })).toBeVisible();
    await page.waitForLoadState('domcontentloaded');
    await page.getByLabel('/first name/i').fill("Mark");
    await page.getByLabel('/last name/i').fill("Bouncer");
    await page.getByLabel('/email/i').fill("bcd@gmail.com");

    await page.getByPlaceholder('Search store').fill("Apple Mac Book Pro");



})