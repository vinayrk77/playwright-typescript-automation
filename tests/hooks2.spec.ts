import {test, expect, Locator, Page} from "@playwright/test";

 let page: Page

test.beforeAll('Open App', async({browser})=>{
    page = await browser.newPage();
    await page.goto("https://demowebshop.tricentis.com/");
});

test.afterAll('close app', async()=>{
    await page.close();
});

test.beforeEach('Login', async()=>{
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByLabel('Email').fill('vinayrk26@gmail.com');
    await page.getByLabel('Password').fill('vinay@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(3000);
});

test.afterEach('Logout', async()=>{
    await page.getByText('Log out').click();
});

test("Find number of Products", async()=>{
    const products = page.locator('.product-item');
    const count = await products.count();
    console.log("number of products:",count);
    await expect(products).toHaveCount(6);
});

test("add to cart", async()=>{
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.getByLabel("Recipient's Name").fill("robertflick");
    await page.locator("#giftcard_2_RecipientEmail").fill("robertflick@gmail.com");
    await page.waitForTimeout(5000);

    await page.locator('input#add-to-cart-button-2').click();
    await expect(page.getByText('The product has been added to your shopping cart')).toBeVisible();

});