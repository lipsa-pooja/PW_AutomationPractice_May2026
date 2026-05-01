import{test,expect} from '@playwright/test'

// Scenario: Verify text in newly opened window
//   Given user opens the Windows page
//   When user clicks on the "Click Here" link
//   Then a new browser tab/window should open
//   And user should switch to the new tab/window
//   And user should verify the text "New Window"
//   And user should close the new tab/window
//   And user should return back to the original window


test('window handling testcases',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/windows');
//await page.waitForTimeout(10000);


//verify the parent page
await expect(page.locator('h3')).toHaveText('Opening a new window');


/* waitForEvent('popup')  → wait for new tab/window
click()                → action that opens the new tab/window
newPage                → child tab/window object
page                   → parent/original page */

  // Wait for new tab/window and click the link
const [newPage]=await Promise.all([
    page.waitForEvent('popup'),
    page.getByText('Click Here').click(),
])

//wait for the child page to load
await newPage.waitForLoadState();

//verify the chid window page
await expect(newPage.getByText('New Window')).toBeVisible();
await newPage.close();

await expect(page.getByText('Opening a new window')).toBeVisible();

});
