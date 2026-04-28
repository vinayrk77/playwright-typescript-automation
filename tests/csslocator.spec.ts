import{test, expect, Locator} from "@playwright/test"

test("Verify css Locators", async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
const searchbox:Locator =page.locator("input#small-searchterms");
await expect(searchbox).toBeVisible();
await searchbox.fill("Laptop");
await page.locator("input.search-box-button").click();

await page.locator("input.button-2[value='Add to cart']").click();

await page.waitForTimeout(5000);


});