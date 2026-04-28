import {test, expect, Locator} from "@playwright/test";

test("Test Input acr=tions", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const textbox: Locator= page.locator('#name');
await expect (textbox).toBeVisible();
await expect (textbox).toBeEnabled();

const maxlength: String | null = await textbox.getAttribute("maxlength");
expect (maxlength).toBe('15');

await textbox.fill("Jhon Cena");

//console.log("text contain of first name: ", await textbox.textContent());// returns empty
const enteredvalue: String = await textbox.inputValue()
console.log("Input value of first name: ", enteredvalue);
expect (enteredvalue).toBe("Jhon Cena");

await page.waitForTimeout(3000);
});

//Radio Button Actions

test("Test the Radio Button Actions", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const maleRadio:Locator = page.locator("#male");

await expect (maleRadio).toBeVisible();
await expect (maleRadio).toBeEnabled();
expect (await maleRadio.isChecked()).toBe(false);

await maleRadio.check();
expect(await maleRadio.isChecked()).toBe(true);
await expect (maleRadio).toBeChecked(); //preferable

await page.waitForTimeout(3000);
});

//Select CheckBox using label and check Assertions

test.only("Select a checkbox and check if it's selected", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const wedcheckbox:Locator = page.getByLabel('wednesday');
await expect (wedcheckbox).toBeVisible();
await wedcheckbox.check();
await expect(wedcheckbox).toBeChecked();

await page.waitForTimeout(3000);
});


