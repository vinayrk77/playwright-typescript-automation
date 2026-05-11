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

// read all the data from table
console.log("Printing all table data")
const allrowdata = await rows.all()
for(let row of allrowdata.slice(1))
{
    const cols = await row.locator('td').allInnerTexts();
    console.log(cols.join('\t'));
}

//print book names where author is Mukesh
console.log("Books Writtern by Mukesh.....");

const mukeshbooks:string[] = [];

for(let row of allrowdata.slice(1))
{
    const cells = await row.locator('td').allInnerTexts();
    const author = cells[1];
    const books = cells[0];

    if(author === 'Mukesh')
    {
        console.log(`${author} \t ${books}`);
        mukeshbooks.push(books);

    }
}
expect(mukeshbooks).toHaveLength(2);

//calculate proce of all books

let totalprice:number = 0;
for(let row of allrowdata.slice(1))
{
    const cells = await row.locator('td').allInnerTexts();
    const price = cells[3];

    totalprice = totalprice+parseInt(price)

}
console.log("Totalprice is ", totalprice);
expect(totalprice).toBe(7100);



});
