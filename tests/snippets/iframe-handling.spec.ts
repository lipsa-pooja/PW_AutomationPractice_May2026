

/*https://demoqa.com/frames

Scenario:

Open frames page
Switch to frame 1
Verify text inside frame
Switch to frame 2
Verify text inside frame*/

import{test,expect} from '@playwright/test';
test('iframe handling testcases', async({page})=>
{
await page.goto('https://demoqa.com/frames');

//verify the main page
await expect(page.locator('#framesWrapper')).toBeVisible();


//switch to the first frame
const frame1= page.frameLocator('#frame1');
await expect(frame1.getByText('This is a sample page')).toBeVisible();
await page.waitForTimeout(3000);

//switch to the 2nd frame
const frame2=page.frameLocator('#frame2');
await expect(frame2.getByText('This is a sample page')).toBeVisible();


})

