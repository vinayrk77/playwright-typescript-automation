import {test, expect, Locator} from "@playwright/test";

test("Verify the sorted dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropdownoption:Locator = page.locator('#animals>option');
    //const dropdownoption:Locator = page.locator('#colors>option');

    
    //console.log(await dropdownoption.allTextContents());

    const optiontext:string[] = (await dropdownoption.allTextContents()).map(text=>text.trim());

    const originallist:string[] = [...optiontext];
    const sortedlist: string[] = [...optiontext].sort();

    console.log("Original list:", originallist);
    console.log("sorted list:", sortedlist);

    expect(originallist).toEqual(sortedlist);
   






});