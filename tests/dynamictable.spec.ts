import {test, expect, Locator} from "@playwright/test";

test("Test to verify dynamic table", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const table:Locator = page.locator('#taskTable>tbody');
await expect(table).toBeVisible();

//select the number of rows and count

const tablerows:Locator[] = await table.locator('tr').all();
console.log("Number of rows in a table",tablerows.length);
expect(tablerows).toHaveLength(4);

//For Chrome process get value of CPU load
let cpuLoad = '';
for(const row of tablerows)
{
   const processName:String = await row.locator('td').nth(0).innerText();
   if(processName==="Chrome")
   {
    cpuLoad = await row.locator('td',{hasText:'%'}).innerText();
    console.log("CPU load of Chrome", cpuLoad);
    break;
   }
}

// comapre it with value
let chrometext:string = await page.locator("#displayValues p").nth(0).innerText();
console.log("Chrome cpu load", chrometext);

if(chrometext.includes(cpuLoad))
{
    console.log("CPU Load of chrome is equal");
}
else{
    console.log("CPU Load of chrome is not equal");
}

expect (chrometext).toContain(cpuLoad);

await page.waitForTimeout(5000);

});