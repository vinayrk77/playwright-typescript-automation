import {test, expect, chromium} from "@playwright/test";

test("Verify popups", async()=>{

const browser = await chromium.launch();
const context = await browser.newContext();

const page = await context.newPage();
await page.goto("https://testautomationpractice.blogspot.com/");
// Multiple Popus

//page.waitForEvent('popup');
//await page.locator("#PopUp").click();

await Promise.all([page.waitForEvent('popup'), page.locator("#PopUp").click()]);

const allpopupwindow = context.pages(); //Returns array of pages
console.log("number of pages/windows:",allpopupwindow.length);

console.log(allpopupwindow[0].url());
console.log(allpopupwindow[1].url());
//console.log(allpopupwindow[2].url());

for(const pw of allpopupwindow)
{
    await pw.waitForLoadState();
    const title = await pw.title();
    console.log("The titkes are:", title);

    if(title.includes('Selenium'))
    {
        await pw.getByRole('link', { name: 'Read more' }).click();
        await pw.close();
    }
}
await page.waitForTimeout(3000);
});