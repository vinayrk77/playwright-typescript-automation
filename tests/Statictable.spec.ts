import {test, expect, Locator} from "@playwright/test";

test("verify the static table", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const table:Locator = page.locator("table[name='BookTable'] tbody");
await expect(table).toBeVisible();

//count number of rows
const rows: Locator = page.locator("table[name='BookTable'] tbody tr");
await expect(rows).toHaveCount(7);
const rowcount:number = await rows.count();
console.log("Number of rows in a table are: ", rowcount);
expect(rowcount).toBe(7);

//count the number of headers/columns

const columns: Locator = rows.locator("th");
await expect(columns).toHaveCount(4);

const columncount:number = await columns.count();
console.log("Number of columns/headers ", columncount);
expect(columncount).toBe(4);

// read all data from 2nd row

const secondrowcells:Locator = rows.nth(2).locator('td');

const secondrowtext:String[] = await secondrowcells.allInnerTexts();
console.log("Second row data: ", secondrowtext);

await expect(secondrowcells).toHaveText(['Learn Java', 'Mukesh', 'Java', '500']);

console.log("Printing second row data......")
for(let text of secondrowtext)
{
    console.log(text);
}

});
