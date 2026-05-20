import {test, expect, chromium} from "@playwright/test";

test("test1", async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
});

test.skip("test2", async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
});

test("test3", async({page, browserName})=>{
    test.skip(browserName==='chromium', 'this is skipped if browser is chromium');
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
});

test.fail("test4", async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
});

test.fixme("test5", async({page})=>{
    await page.goto("https://www.google.com/"); 
});

test("test6", async({page})=>{
    test.slow();
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
});