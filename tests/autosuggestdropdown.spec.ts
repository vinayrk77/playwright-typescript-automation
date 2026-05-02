import {expect, test, Locator} from "@playwright/test";

test("Verify the autosuggest dropdown", async({page})=>{
await page.goto("https://www.flipkart.com/");

await page.locator("input[name='q']:not([readonly])").fill("ear");
await page.waitForTimeout(5000);

//get all suggested options: ctrl+shift+P : emulate focused page

const options:Locator = page.locator("ul>li");
const count = await options.count();
console.log("The number of auto suggested options are:", count);

//printing all the suggested option in the console



await page.waitForTimeout(5000);


});