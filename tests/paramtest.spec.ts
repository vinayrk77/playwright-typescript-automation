import { test, expect } from "@playwright/test";

const searchItems: string[] = ['laptop', 'gift card', 'smartphone', 'monitor'];

//using for of loop
/*
for(const items of searchItems)
{
test(`search test ${items}`, async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await page.locator('#small-searchterms').first().fill(items);
    await page.getByRole('button',{name:'search'}).click();
    await expect(page.locator('h2 a').nth(0)).toContainText(items,{ignoreCase:true});
});
}
*/

//using for each function
/*
searchItems.forEach((items)=>{
test(`search test ${items}`, async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await page.locator('#small-searchterms').first().fill(items);
    await page.getByRole('button',{name:'search'}).click();
    await expect(page.locator('h2 a').nth(0)).toContainText(items,{ignoreCase:true});
});

});
*/
test.describe("Searching elements", async () => {
    searchItems.forEach((items) => {
        test(`search test ${items}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/");

            await page.locator('#small-searchterms').first().fill(items);
            await page.getByRole('button', { name: 'search' }).click();
            await expect(page.locator('h2 a').nth(0)).toContainText(items, { ignoreCase: true });
        });

    });


});