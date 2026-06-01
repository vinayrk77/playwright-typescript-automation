/*
data: from jason
create a booking(post) --> bookingid
create token
update booking (put)
*/


import { test, expect } from "@playwright/test";
import fs from 'fs';

//utility file returns json file data
function readJson(filepath: string) {
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

test("Update booking using put", async ({ request }) => {
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

    //sending put request to update data
    const updateRequestBody = readJson('tests/testdata/put_request_body.json');
    const updateresponse = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`,
        {
            headers: { Cookie: `token=${token}` },
            data: updateRequestBody
        });
    expect(updateresponse.ok()).toBeTruthy();
    expect(updateresponse.status()).toBe(200);

    const updateResponseBody = await updateresponse.json();
    console.log(updateResponseBody);
    console.log("Booking details updated successfully....");


});