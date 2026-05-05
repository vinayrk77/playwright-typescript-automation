import {test, expect, Locator} from "@playwright/test";

test("Comparing all the methods", async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
const products:Locator = page.locator(".product-title");

//innerText() vs textContent()

//console.log(await products.nth(3).innerText());
//console.log(await products.nth(3).textContent());

const count = await products.count();

//for(let i=0; i<count; i++)
//{
    //const productname:String = await products.nth(i).innerText();
    //console.log(productname);

    //const productname:String | null = await products.nth(i).textContent();
    //console.log(productname);

    //const productname:String | null = await products.nth(i).textContent();
    //console.log(productname?.trim());
    
//}

//const productNames: string[] = await products.allInnerTexts();
//console.log("Product Names captured by allInnertexts", productNames);

//all() converts Locator to Locator[] - type of array

const productLocators: Locator[] = await products.all();
console.log(productLocators);

//console.log(await productLocators[2].innerText());

for(let productloc of productLocators)
{
    console.log(await productloc.innerText());
}



});