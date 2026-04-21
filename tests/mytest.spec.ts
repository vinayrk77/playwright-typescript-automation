import{test,expect} from "@playwright/test";

test("Verify Page Title",async ({page})=>{
    await page.goto("https://www.google.com/?zx=1776690240333");

    let title:string=await page.title();
    console.log("Title",title);


    await expect(page).toHaveTitle("Google");
})