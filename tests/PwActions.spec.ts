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

// capture all check boxes

const days: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const checkboxes:Locator[] = days.map(index => page.getByLabel(index));
expect (checkboxes.length).toBe(7);

for(const checkbox of checkboxes)
{
   await checkbox.check();
   await expect(checkbox).toBeChecked();
}
// uncheck last 3 checkboxex and asert
for(const checkbox of checkboxes.slice(-3))
{
   await checkbox.uncheck();
   await expect(checkbox).not.toBeChecked();
}

// if checked unchecked and if unchecked then check

for(const checkbox of checkboxes)
{
    if(await checkbox.isChecked())
    {
       await checkbox.uncheck();
       await expect(checkbox).not.toBeChecked(); 
    }
    else
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
}
await page.waitForTimeout(3000);
// Randomly select Checkboxes and asert

const indexes:number[] = [1,3,6]
for(const i of indexes)
{
    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
}

//select checkbox based on label

const weekname: string = 'Friday';

for(const label of days)
{
    if(label.toLowerCase()===weekname.toLowerCase())
    {
        const checkbox=page.getByLabel(label);
        checkbox.check();
        await expect(checkbox).toBeChecked();

    }
}

await page.waitForTimeout(5000);
});


