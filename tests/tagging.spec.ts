import {test, expect} from "@playwright/test";

test("check the title of home page",{tag:'@sanity'}, async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
});

test("check the navigation to store page",{tag:'@regression'}, async({page})=>{
    await page.goto("https://www.google.com/");
    await page.getByText('Store').click();
    await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories");
});

test("check the recommendations",{tag:['@sanity','@regression']}, async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
    await page.getByText('Store').click();
    await expect(page.getByText('Shop popular categories.')).toHaveText("Shop popular categories.");
});