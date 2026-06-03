/*
No auth
basic auth 
bearer token
API key Authentication
*/

import { test, expect } from "@playwright/test";

//1). No auth

test("public API -No Auth", async ({ request }) => {

    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    console.log(responseBody);
});

//2). Basic Auth

test("Basic Auth passing Username and Password", async ({ request }) => {

    const response = await request.get("https://postman-echo.com/basic-auth", {
        headers: {
            Authorization: `Basic ` + Buffer.from("postman:password").toString("base64")
        }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

//3). Bearer Token - returns github repo
test("Token authentication - bearer", async ({ request }) => {
    const bearerToken = process.env.GITHUB_TOKEN;
    const response = await request.get("https://api.github.com/user/repos",{
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(await response.json());
});

//3). Bearer Token - returns user info
test.only("Token authentication2 - bearer", async ({ request }) => {
    const bearerToken = process.env.GITHUB_TOKEN;
    const response = await request.get("https://api.github.com/user",{
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(await response.json());

});
