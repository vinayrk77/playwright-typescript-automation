import {test, expect, Locator} from "@playwright/test";

test("Test to verify multi select dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#colors").selectOption(['Red', 'Blue', 'Green']); //Using Visible text
    //await page.locator("#colors").selectOption(['red', 'blue', 'white']);
    //await page.locator("#colors").selectOption([{label:'Red'}, {label:'White'}, {label:'Yellow'}]);//by lable
    //await page.locator("#colors").selectOption([{index:2}, {index:5}, {index:6}]); //by idexes


    //check number of options present in dropdown(count)

    const dropdownoptions:Locator = await page.locator('#colors>option');
    await expect (dropdownoptions).toHaveCount(7);

    // check an option present in dropdown

    const optiontext: string[] = (await dropdownoptions.allTextContents()).map(text=>text.trim());
    console.log(optiontext);

    expect(optiontext).toContain('Green');

    //printing options from dropdown

    for(const option of optiontext)
    {
        console.log(option);
    }




    await page.waitForTimeout(5000);




});