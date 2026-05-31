import {test, expect} from "@playwright/test";

test("Get booking details by ID path parm", async({request})=>{
    const bookingid = 1; //pass this as path parm
    //Sending get request
    const response = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`);

    // parse the response and print
    const responsebody = await response.json();
    console.log(responsebody);

    //assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

});