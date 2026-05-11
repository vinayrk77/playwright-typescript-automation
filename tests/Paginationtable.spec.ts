import {test, expect, Locator} from "@playwright/test";

test("Verify and assert Pagination Table", async ({page})=>{
await page.goto("https://datatables.net/");

let hasmorepages=true;

while(hasmorepages)
{
    const rows = await page.locator("table#example tbody tr").all();
    for(let row of rows)
        {
            console.log(await row.innerText());
        }
}

});