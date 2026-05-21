import { test, expect } from "@playwright/test";
import * as fs from 'fs';

const jsonpath = "tests/testdata/data.json";

const loginData:any = JSON.parse(fs.readFileSync(jsonpath,'utf-8'));


for (const {email, password, validity} of loginData) {

    test.describe("Authentication", () => {

        test(`Login test for ${email} and ${password}`, async ({page}) => {
            await page.goto("https://demowebshop.tricentis.com/");
            await page.getByRole('link', { name: 'Log in' }).click();
            await page.getByLabel('Email').fill(email);
            await page.getByLabel('Password').fill(password);
            await page.getByRole('button', { name: 'Log in' }).click();

            if (validity.toLowerCase() === 'valid') {
                const Logoutlink = page.getByRole('link', { name: 'Log out' });
                await expect(Logoutlink).toBeVisible({ timeout: 5000 });
            }
            else {
                const errorMessage = page.getByText('Login was unsuccessful');
                await expect(errorMessage).toBeVisible();

                await expect(page).toHaveURL(/login/);
            }

        });

    });

}
