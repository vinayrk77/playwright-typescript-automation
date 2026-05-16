import {test, expect, chromium} from "playwright/test";

test("Verify and handel tabs", async() => {

const browser = await chromium.launch(); //launch browser
const context = await browser.newContext();

const parentpage = await context.newPage();
await parentpage.goto("https://testautomationpractice.blogspot.com/");


//context.waitForEvent('page');
//parentpage.getByRole('button', { name: 'New Tab' }).click(); // opens new tab 
// Above statements needs to run paralley.

const [childpage] = await Promise.all([context.waitForEvent('page'), parentpage.getByRole('button', { name: 'New Tab' }).click()]);

//switch between pages and get title

const pages = context.pages(); //returns an array
console.log("Number of pages created:", pages.length);

console.log("Title of parent page:", await pages[0].title());
console.log("Title of child page:", await pages[1].title());



});