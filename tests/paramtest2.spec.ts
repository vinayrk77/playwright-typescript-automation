import { test, expect } from "@playwright/test";

const loginTestDate: string[][] = [
    ["vinayrk26@gmail.com", "vinay@123", "valid"],
    ["invaliduser@expample.com", "test@123", "invalid"],
    ["validuser@expample.com", "test@abcd", "invalid"],
    ["", "", "invalid"],
];

for (const [email, password, validity] of loginTestDate) {

    test.describe("Authentication", () => {

        test(`Login test for ${email} and ${password}`, async ({page}) => {
            await page.goto("https://demowebshop.tricentis.com/");
            await page.getByRole('link', { name: 'Log in' }).click();
            await page.getByLabel('Email').fill(email);
            await page.getByLabel('Password').fill(password);
            await page.getByRole('button', { name: 'Log in' }).click();

            if (validity.toLowerCase() === 'valid') {
                const Logoutlink = await page.getByRole('link', { name: 'Log out' });
                await expect(Logoutlink).toBeVisible({ timeout: 5000 });
            }
            else {
                const errorMessage = await page.getByText('Login was unsuccessful');
                await expect(errorMessage).toBeVisible();

                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
            }

        });

    });

}

