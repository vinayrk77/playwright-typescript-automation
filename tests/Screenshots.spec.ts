import {test, expect, Locator} from "@playwright/test";

test("Verify Screenshots", async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");

const timestamp = Date.now()

//await page.screenshot({path: 'Screenshot/'+'homegage'+timestamp+'.png'});

//fullpage
//await page.screenshot({path: 'Screenshot/'+'fullpage'+timestamp+'.png', fullPage:true});

//logo
//await page.getByAltText('Tricentis Demo Web Shop').screenshot({path:'Screenshot/'+'logo'+timestamp+'.png'});

await page.locator(".product-grid").screenshot({path:'Screenshot/'+'futureproducts'+timestamp+'.png'});

});