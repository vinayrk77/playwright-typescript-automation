import {test,expect,Locator} from "@playwright/test"

test("Verify Playwright Locators",async ({page})=>{

    await page.goto("https://practice.expandtesting.com/");

    const logo:Locator=page.getByAltText("Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.")
    await expect (logo).toBeVisible();

    //const text:Locator=page.getByText("Listen to your notes")
    //await expect (text).toBeVisible()

    await expect (page.getByText("Do you enjoy")).toBeVisible()


})
