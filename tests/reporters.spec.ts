import {test, expect} from "@playwright/test";

test.beforeEach("launching app", async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
});

test("logo test", async({page})=>{
    await expect (page.getByAltText("Tricentis Demo Web Shop")).toBeVisible();
});

test("Title test", async({page})=>{
    await expect(page).toHaveTitle("Demo Web Shop");
});

test("Search test", async({page})=>{
    await page.locator(".search-box-text").fill('camera');
    await page.getByRole('button', {name: 'Search'}).click();
    await expect(page.locator('h2 a').nth(0)).toContainText('Digital SLR Camera 12.2 Mpixel', {ignoreCase: true});

});