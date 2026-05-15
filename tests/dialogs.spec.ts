import {test, expect, Locator} from "playwright/test";

test("Verify simple dialog", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog', (dialog) => {
    console.log("Dialog type is:", dialog.type());
    expect(dialog.type()).toContain('alert');
    console.log("Dialog Text:", dialog.message());
    expect(dialog.message()).toContain('I am an alert box!');
    dialog.accept();
})

await page.getByRole('button', { name: 'Simple Alert' }).click();

await page.waitForTimeout(5000);
});

test("verify confirmation dialog", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog', (dialog) => {
    console.log("Dialog type is:", dialog.type());
    expect(dialog.type()).toContain('confirm');
    console.log("dialog test is:",dialog.message());
    expect(dialog.message()).toContain('Press a button!');
    dialog.accept();
    //dialog.dismiss();
})

await page.getByRole('button',{name: 'Confirmation Alert'}).click();
const text :string = await page.locator("#demo").innerText();
console.log("output text:",text);
await expect( page.locator("#demo")).toHaveText('You pressed OK!');
//await expect( page.locator("#demo")).toHaveText('You pressed Cancel!');
await page.waitForTimeout(5000);
});

test.only("Verify prompt dialog", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
page.on('dialog', (dialog) => {
console.log("Dialog type is:",dialog.type());
expect(dialog.type()).toContain('prompt');
console.log("Dialog Text:",dialog.message());
expect(dialog.message()).toContain('Please enter your name:');
expect(dialog.defaultValue()).toContain('Harry Potter');
dialog.accept('VINAY');
});

await page.getByRole('button',{name: 'Prompt Alert'}).click();
const text:string = await page.locator('#demo').innerText();
console.log("Output Text:",text);
expect(page.locator('#demo')).toHaveText("Hello VINAY! How are you today?");
});