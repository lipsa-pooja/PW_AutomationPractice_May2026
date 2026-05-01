
import{test,expect} from '@playwright/test';
import {loginpage} from '../pages/loginPage';
import{ProductPage} from '../pages/productPage';
import UserData from '../test-data/userData.json';


// Scenario 5: Logout
// Scenario: Verify user can logout successfully
//   Given user logs in to the application
//   When user clicks on logout
//   Then user should be navigated back to login page

test("Scenario-5:swaglabs logout test", async ({ page }) => {
 const login_page=new loginpage(page);
await login_page.openURL();
await login_page.loginToApp(UserData.validUser.Username,UserData.validUser.Password);
    


const product_page=new ProductPage(page);
await product_page.verifyUserIsInProductPage();
await product_page.logoutApplication();
//page.waitForTimeout(10000);


});