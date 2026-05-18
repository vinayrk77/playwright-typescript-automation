import{test, expect, Locator} from "@playwright/test";

/*
test("verify hard ans soft assertions", async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");

await expect(page).toHaveTitle('Demo Web Shop');
await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

const logo = page.getByAltText('Tricentis Demo Web Shop');
await expect(logo).toBeVisible();
*/
test("verify hard ans soft assertions", async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");

await expect.soft(page).toHaveTitle('Demo Web Shop2');
await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

const logo = page.getByAltText('Tricentis Demo Web Shop');
await expect.soft(logo).toBeVisible();


});