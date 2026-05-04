import {test, expect, Locator} from "@playwright/test";

test("Test the hiddenbootstrap dropdown", async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator("input[name='username']").fill('admin');
await page.locator("input[name='password']").fill('admin123');
await page.getByRole('button',{name: 'Login'}).click();

//click on the pim
const pim :Locator = page.getByText('PIM');
await expect(pim).toBeVisible();
await pim.click();


// cick on job title

await page.locator(".oxd-select-text-input").nth(2).click();
await page.waitForTimeout(5000);

//capture all the options from dropdown

const options = page.locator(".oxd-select-dropdown .oxd-select-option");

const count = await options.count();
console.log("Total options:", count);

// print all option texts
for (let i = 0; i < count; i++) {
  const text = await options.nth(i).textContent();
  console.log(text);
}

for (let i = 0; i < count; i++) {
  const text = await options.nth(i).innerText();
  if(text==='QA Lead')
  {
    await options.nth(i).click();
    break;

  }
}
await page.waitForTimeout(3000);
});