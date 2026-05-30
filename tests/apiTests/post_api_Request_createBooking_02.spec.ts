import { test, expect } from "@playwright/test";
import fs from 'fs';

/*
Test: Create booking
Request Type: post
Request Body: Json
*/

test("Create post request using json file", async ({ request }) => {
    //read data from json
    const jsonFile = "tests/testdata/post_body_request.json";
    const requestBody:any=JSON.parse(fs.readFileSync(jsonFile, 'utf-8'))


    //send post request
    const response = await request.post("https://restful-booker.herokuapp.com/booking", {data:requestBody});
    const responseBody = await response.json()
    console.log(responseBody);

    //validate status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //validate response Body
    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody).toHaveProperty("booking");
    expect(responseBody).toHaveProperty("booking.additionalneeds");

    //validate booking details
    const booking = responseBody.booking
    expect(booking).toMatchObject( {
        firstname: requestBody.firstname,
        lastname: requestBody.lastname,
        totalprice: requestBody.totalprice,
        depositpaid: requestBody.depositpaid,
    });

    expect(booking.bookingdates).toMatchObject({
            checkin: requestBody.bookingdates.checkin,
            checkout: requestBody.bookingdates.checkout
        });

});