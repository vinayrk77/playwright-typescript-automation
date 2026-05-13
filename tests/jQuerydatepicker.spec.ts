import{test, expect, Locator, Page} from "playwright/test";

async function selectDate(targetYear:string, targetMonth:string, targetDate:string, page:Page, isFuture:boolean)
{
    while(true)
{
    const currentMonth = await page.locator(".ui-datepicker-month").textContent();
    const currentYear = await page.locator(".ui-datepicker-year").textContent();

    if(currentMonth===targetMonth && currentYear===targetYear)
    {
        break;
    }

    if(isFuture)
    {
    await page.locator(".ui-icon-circle-triangle-e").click(); //Future
    }else
    {
    await page.locator(".ui-datepicker-prev").click(); //past
    }

    

}

//Select date

const alldates = await page.locator(".ui-datepicker-calendar td").all();

for(let dt of alldates)
{
    const dateText = await dt.innerText();
    if(dateText === targetDate)
    {
        await dt.click();
        break;
    }
}
}

test("Verify the date picker", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const dateInput:Locator = page.locator("input#datepicker");
expect(dateInput).toBeVisible();

// using fill method
await dateInput.fill("06/20/2025");

//approach 2 using date picker

await dateInput.click();

//select target date
const year ='2019';
const month = 'January';
const date = '31';

await selectDate(year, month, date, page, false);

const expectedDate = '01/31/2019';
await expect(dateInput).toHaveValue(expectedDate);


await page.waitForTimeout(5000);

});