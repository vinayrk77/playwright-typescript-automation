import {test, expect, Locator} from "@playwright/test"

test("Verify xpath Locators in playwright", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    // Login page validation
    await expect(page.locator('#user-name')).toBeVisible();

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Inventory page validation
    await expect(page.getByText('Products')).toBeVisible();

    const products = page.locator("//div[@data-test='inventory-item-name']");
    await expect(products).toHaveCount(6);
});