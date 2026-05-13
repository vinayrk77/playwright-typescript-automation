import {test, expect, Locator} from "playwright/test";

test("verify booking.com datepicker", async({page})=>{
await page.goto("https://www.booking.com/?chal_t=1778682034626&force_referer=");
await page.locator('button[data-testid="searchbox-dates-container"]');



await page.waitForTimeout(3000);
});

