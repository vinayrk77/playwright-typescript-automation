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
    await page.waitForTimeout(3000);   

    const nextbutton:Locator = page.locator("button[aria-label='Next']");
    const isdisabled = await nextbutton.getAttribute('class');

    if(isdisabled?.includes('disabled'))
    {
        hasmorepages=false;
    }
    else
    {
        await nextbutton.click();
    }
}
});


test("Filter the rows and check the row count", async ({page})=>{
await page.goto("https://datatables.net/");

const dropdown:Locator = await page.locator("#dt-length-0");
await dropdown.selectOption({label: '25'});
const rows= await page.locator("table#example tbody tr").all();
expect(rows.length).toBe(25);

});

test.only("Specific data in a table", async ({page})=>{
await page.goto("https://datatables.net/");

const searchbox:Locator = page.locator("input#dt-search-0");
await searchbox.fill('Dai Rios');

await page.waitForTimeout(5000);
const rows = await page.locator("table#example tbody tr").all();

if(rows.length>=1)
{
    let matchfound = false;
    for(let row of rows)
    {
        let text = await row.innerText();
        if(text.includes('Dai Rios'))
        {
            matchfound = true;
            break;
        }
    }
    //expect(matchfound).toBe(true);
    expect(matchfound).toBeTruthy();
}
else
{
    console.log("No results found for the searched text")
}



});