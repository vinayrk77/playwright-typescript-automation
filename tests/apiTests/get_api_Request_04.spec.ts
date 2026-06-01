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

test.only("Get booking details by Name- query param", async({request})=>{
    const firstname = "Sally";
    const lastname = "Brown";

    //Sending get request
    const response = await request.get("https://restful-booker.herokuapp.com/booking/",{params:{firstname,lastname}});

    // parse the response and print
    const responsebody = await response.json();
    console.log(responsebody);

    //assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //check response should not be zero
    //expect(responsebody.length).toBeGreaterThan(0);

    for(const item of responsebody)
    {
        expect(item).toHaveProperty('bookingid');
        expect(typeof item.bookingid).toBe('number');
        expect(item.bookingid).toBeGreaterThan(0);
    }
});