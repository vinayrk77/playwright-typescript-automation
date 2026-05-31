import { test, expect } from "@playwright/test";
import {faker} from "@faker-js/faker";
import {DateTime} from "luxon";

/*
Test: Create booking
Request Type: post
Request Body: random data faker
*/

test("Create post request using static body", async ({ request }) => {

    //date generation
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const totalprice = faker.number.int({min:1200, max:10000});
    const depositpaid = faker.datatype.boolean();

    const checkin = DateTime.now().toFormat("yyyy-MM-dd");
    const checkout = DateTime.now().plus({days:8}).toFormat("yyyy-MM-dd");
    const additionalneeds = 'Extra Beds';

    //request body
    const requestBody = {
        firstname: firstname,
        lastname: lastname,
        totalprice: totalprice,
        depositpaid: depositpaid,
        bookingdates: {
            checkin: checkin,
            checkout: checkout,
        },
        additionalneeds: additionalneeds,
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
        firstname: firstname,
        lastname: lastname,
        totalprice: totalprice,
        depositpaid: depositpaid,
        bookingdates: {
            checkin: checkin,
            checkout: checkout,
    }
    });

    expect(booking.bookingdates).toMatchObject({
            checkin: checkin,
            checkout: checkout,
        });

});