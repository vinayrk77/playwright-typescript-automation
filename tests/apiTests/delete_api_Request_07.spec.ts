/*
create booking
get booking
create token
update booking
deletebooking
*/

import { test, expect } from "@playwright/test";
import fs from 'fs';

//function to read json file
function readJson(filepath: string) {
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}


test("Delete booking end-to-end", async ({ request }) => {
    // read the json file
    const postRequestBody = readJson('tests/testdata/post_body_request.json');

    //create Booking
    const postCreateResponse = await request.post("https://restful-booker.herokuapp.com/booking", { data: postRequestBody });
    expect(postCreateResponse.ok()).toBeTruthy();

    const postResponseBody = await postCreateResponse.json();
    const bookingid = postResponseBody.bookingid;
    console.log("booking id is ==>", bookingid);

    //get booking
    const getresponse = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`);
    const getResponseBody = await getresponse.json();
    console.log("Get response is", getResponseBody);



    //create token
    const tokenRequestBody = readJson("tests/testdata/token_request_body.json");
    const tokenResponse = await request.post("https://restful-booker.herokuapp.com/auth", { data: tokenRequestBody });
    expect(tokenResponse.ok()).toBeTruthy();

    const tokenResponseBody = await tokenResponse.json();
    const token = tokenResponseBody.token;
    console.log("Token generated is==>", token);

    //Update request put
    const putRequestBody = readJson("tests/testdata/put_request_body.json");
    const putResponse = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`,
        {
            headers: { cookie: `token=${token}` },
            data: putRequestBody
        });
    expect(putResponse.ok()).toBeTruthy();
    expect(putResponse.status()).toBe(200);

    const putResponseBody = await putResponse.json();
    console.log(putResponseBody);
    console.log("Booking details updated successfully....");

    //Delete Request
    const deleteResponse = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingid}`,
        {
            headers: { Cookie: `token=${token}` }
        });
    expect(deleteResponse.statusText()).toBe('Created');
    expect(deleteResponse.status()).toBe(201);

    console.log("Booking is deleted successfully");

    const getDeletedResponse = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`);

    expect(getDeletedResponse.status()).toBe(404);

    console.log("Verified: Booking no longer exists");











});