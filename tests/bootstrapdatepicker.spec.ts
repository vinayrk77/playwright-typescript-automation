import {test, expect, Locator} from "playwright/test";

test("verify booking.com datepicker", async({page})=>{
await page.goto("https://www.booking.com/?chal_t=1778682034626&force_referer=");
const closePopup = page.locator('[aria-label="Dismiss sign-in info."]');

if(await closePopup.isVisible())
{
    await closePopup.click();
}
await page.locator('button[data-testid="searchbox-dates-container"]').click();

await page.waitForSelector('div[role="dialog"]');


//checkin date selection
let checkinYear: string = "2027";
let checkinMonth: string = "December";
let checkinDay: string = "31";

//Navigate through calender to get dersired date

while(true)
{
    const checkInMonthYear = await page.locator('div[role="dialog"] h3').first().innerText();
    const currentMonth = checkInMonthYear.split(" ")[0];
    const currentYear = checkInMonthYear.split(" ")[1];

    if(currentMonth === checkinMonth && currentYear === checkinYear){
        break;
    }else{
        await page.locator('button[aria-label="Next month"]').click();
    }
}

// select the specific checkin date
const alldates = await page.locator('td button').all();
let checkInDateSelected= false;

for(let date of alldates)
{
    const datetext = await date.innerText();
    if(datetext === checkinDay){
        await date.click();
        checkInDateSelected = true;
        break;
    }
}
expect (checkInDateSelected).toBeTruthy();





await page.waitForTimeout(3000);
});

