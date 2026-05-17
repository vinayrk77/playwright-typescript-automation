import {expect, test, chromium} from "@playwright/test";

test("verify auth popup", async()=>{

const browser = await chromium.launch();
const context = await browser.newContext({httpCredentials:{username:'admin', password:'admin'}});
const page = await context.newPage();
await page.goto("https://the-internet.herokuapp.com/basic_auth");
await page.waitForLoadState();
await expect (page.getByText(/Congratulations!/)).toBeVisible();



});