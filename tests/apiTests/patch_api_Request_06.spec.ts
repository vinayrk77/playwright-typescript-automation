/*
data: from jason
create a booking(post) --> bookingid
create token
update booking (patch)
*/


import { test, expect } from "@playwright/test";
import fs from 'fs';

//utility file returns json file data
function readJson(filepath: string) {
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

test("partial booking using patch", async ({ request }) => {
    //call function
    const requestBody = readJson('tests/testdata/post_body_request.json');

    //create booking
    const createResponse = await request.post("https://restful-booker.herokuapp.com/booking", { data: requestBody });
    expect(createResponse.ok()).toBeTruthy();

    const responseBody = await createResponse.json();
    const bookingid = responseBody.bookingid; // extracting booking id from response body.
    console.log("Booking id is:", bookingid);

    //Create Token
    //read json data
    const tokenRequestBody = readJson('tests/testdata/token_request_body.json');
    const tokenResponse = await request.post("https://restful-booker.herokuapp.com/auth", { data: tokenRequestBody });
    expect(tokenResponse.ok()).toBeTruthy();

    const tokenResponseBody = await tokenResponse.json();
    const token = tokenResponseBody.token;
    console.log("Token generates is:", token);

    //sending patch request to update data
    const patchRequestBody = readJson('tests/testdata/patch_request_body.json');
    const partialupdateresponse = await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingid}`,
        {
            headers: { Cookie: `token=${token}` },
            data: patchRequestBody
        });
    expect(partialupdateresponse.ok()).toBeTruthy();
    expect(partialupdateresponse.status()).toBe(200);

    const partialupdateResponseBody = await partialupdateresponse.json();
    console.log(partialupdateResponseBody);
    console.log("Booking details updated successfully....");


});