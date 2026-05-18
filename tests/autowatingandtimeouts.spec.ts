import{test, expect, Locator} from "@playwright/test";

test("Verify waits", async({page})=>{

test.setTimeout(15000);
await page.goto("https://demowebshop.tricentis.com/");

//Assertions auto waits works

await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000});
await expect (page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});

//Action auto waits works

await page.locator(".search-box-text").fill('laptop',{force:true});
await page.getByRole('button', { name: 'Search' }).click({force:true});

await page.waitForTimeout(3000);



});