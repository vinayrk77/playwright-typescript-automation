import{test, expect, Locator} from "@playwright/test";

test("Test the single dropdown", async({page})=>{ 
page.goto("https://testautomationpractice.blogspot.com/");
//await page.locator('#country').selectOption('India'); //Visible TExt
//await page.locator('#country').selectOption({value:'uk'});
//await page.locator('#country').selectOption({label:'India'});
//await page.locator('#country').selectOption({index:3});


const dropdownoptions:Locator = page.locator("#country>option");
await expect(dropdownoptions).toHaveCount(10);

const optionstext:string[] = (await dropdownoptions.allTextContents()).map(text=>text.trim());
console.log(optionstext);

expect(optionstext).toContain('Japan');

for(const option of optionstext)
{
    console.log(option);
}



await page.waitForTimeout(5000);
});