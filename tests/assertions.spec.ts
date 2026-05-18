import{test, expect, Locator} from "@playwright/test";

test("verify assertions", async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");

//Auto retrying assertions retry until passes or waits for timeouts
await expect(page).toHaveURL("https://demowebshop.tricentis.com/");


await expect (page.locator('text=Welcome to our store')).toBeVisible();
await expect(page.getByText('Featured products')).toHaveText('Featured products');

//non retrying assertions
const title = await page.title();
expect(title.includes('Demo Web Shop')).toBeTruthy(); //No auto retry

const welcometext = await page.getByText("Welcome to our store").textContent();
expect(welcometext).toContain("Welcome");

await expect (page.locator('text=Welcome to our store')).not.toBeVisible();
expect(welcometext).not.toContain("Welcome");


});