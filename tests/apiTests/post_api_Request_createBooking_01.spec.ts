import { test, expect } from "@playwright/test";

/*
Test: Create booking
Request Type: post
Request Body: Static
*/

test("Create post request using static body", async ({ request }) => {

    //request body
    const requestBody = {
        firstname: 'Vinay',
        lastname: 'RK',
        totalprice: 10000,
        depositpaid: true,
        bookingdates: {
            checkin: '2026-01-01',
            checkout: '2026-01-05'
        },
        additionalneeds: 'Extra Beds',
    }

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
        firstname: 'Vinay',
        lastname: 'RK',
        totalprice: 10000,
        depositpaid: true,
    });

    expect(booking.bookingdates).toMatchObject({
            checkin: '2026-01-01',
            checkout: '2026-01-05'
        });

});