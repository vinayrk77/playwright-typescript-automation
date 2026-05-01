import {test, expect, Locator} from "@playwright/test";

test("verify duplicate options in dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownoption:Locator = page.locator("#colors>option");
    //const dropdownoption:Locator = page.locator("#animals>option");

    const optiontext:string[] = (await dropdownoption.allTextContents()).map(text=>text.trim());

    const myset=new Set<string>();
    const duplicates:string[] = [];

    for(const text of optiontext)
    {
        if(myset.has(text))
        {
            duplicates.push(text);
        }
        else
            {
                myset.add(text);
            }
        }

        console.log("Duplicates options are:====>", duplicates);

        if(duplicates.length>0)
        {
            console.log("Duplicate options Found", duplicates);
        }else
        {
            console.log("No Duplicate options found");
        }

        expect(duplicates.length).toBe(0);




});