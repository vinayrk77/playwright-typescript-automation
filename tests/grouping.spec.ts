import { test, expect } from "@playwright/test";

test.describe("Group1", async () => {
    test("Test 1", async () => {
        console.log("This is Test 1");
    });

    test("Test 2", async () => {
        console.log("This is Test 2");
    });
});


test.describe("Gropu2", async () => {
    test("Test 3", async () => {
        console.log("This is Test 3");
    });

    test("Test 4", async () => {
        console.log("This is Test 4");
    });


});
