import {test, expect, Locator} from "@playwright/test";

test("Test to verify the xpath axes", async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    //self axes
    //const germanycell: Locator = page.locator("//td[text()='Germany']/self::td");
    //await expect(germanycell).toHaveText('Germany');

    //patent axes
    //const parentRow: Locator = page.locator("//td[text()='Germany']/parent::tr");
    //await expect(parentRow).toContainText("Alfreds Futterkiste Maria Anders Germany");
    //console.log(await parentRow.textContent());

   // const secondrow: Locator = page.locator("//table[@id='customers']//tr[3]/child::td");
    //await expect(secondrow).toHaveCount(3)

    //ancestor

    //const table: Locator = page.locator("//td[text()='Germany']/ancestor::table");
    //await expect(table).toHaveAttribute('id','customers');

    //descendent
    //const allTDs:Locator = page.locator("//table[@id='customers']/descendant::td");
    //await expect(allTDs).toHaveCount(18);

    //following axes

    //const followingcell: Locator = page.locator("//td[normalize-space()='Germany']/following::td[1]");
    //await expect(followingcell).toHaveText("Centro comercial Moctezuma");
    
    // following sibligs

    //const rightsibling: Locator = page.locator("//td[normalize-space()='Germany']/following-sibling::td");
    //await expect(rightsibling).toHaveCount(0);

    //const rightsibling: Locator = page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td");
    //await expect(rightsibling).toHaveCount(1);

    //preceding

    //const pre: Locator = page.locator("//td[text()='Germany']/preceding::td[1]");
    //await expect(pre).toHaveText("Maria Anders");

    const pre: Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
    await expect(pre).toHaveCount(2);








});