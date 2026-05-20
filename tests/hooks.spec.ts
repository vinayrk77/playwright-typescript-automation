import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
    console.log("This is before all.....");
});

test.afterAll(async () => {
    console.log("This is after all.....");
});

test.beforeEach(async () => {
    console.log("This is before each.....");
});

test.afterEach(async () => {
    console.log("This is after each.....");
});

test("Test 1", async () => {
    console.log("This is Test 1");
});

test("Test 2", async () => {
    console.log("This is Test 2");
});

test("Test 3", async () => {
    console.log("This is Test 3");
});

test("Test 4", async () => {
    console.log("This is Test 4");
});