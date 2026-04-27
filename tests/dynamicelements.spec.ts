import {test, expect, Locator} from "@playwright/test";

test("Verity the dynamic elements using xpath and playwright Locators", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    for (let i =1; i<=5; i++){
        //let button:Locator = page.locator('//button[text() = "STOP" or text()="START"]');
        const button = page.getByRole('button', {name: /START|STOP/});

        await button.click();

        await page.waitForTimeout(2000);
    }

});