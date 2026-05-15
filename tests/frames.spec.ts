import {test, expect, Locator} from "playwright/test";

test("Verift the frames", async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/");

//total number o frames present in a page
const frames = page.frames();
console.log("Number of frames", frames.length);

//Approach 1 using page.frame
/*
const frame = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"});
if(frame)
{
    await frame.locator("input[name='mytext1']").fill("Hello");
}
else{
    console.log("Frame is not available");
}
await page.waitForTimeout(5000);
*/
//Approach 2 Using framelocator

const inputbox = page.frameLocator("[src='frame_2.html']").locator("input[name='mytext2']");
await inputbox.fill("Vinay is a Automation Tester");
await page.waitForTimeout(5000);
});

test.only("Verify inner/child frames", async({page}) => {
await page.goto("https://ui.vision/demo/webtest/frames/");
const frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});

if(frame3)
{
    await frame3.locator("input[name='mytext3']").fill("Vinay is Superhero");
    const childframes = frame3.childFrames();
    console.log("Child Frames in frame 3 are:", childframes.length);
    const radio = childframes[0].getByText("I am a human");
    await radio.click();
    await expect(radio).toBeVisible();
}
else{
    console.log("No Frame Found");
}
await page.waitForTimeout(5000);
});