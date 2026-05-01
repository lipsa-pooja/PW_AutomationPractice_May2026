import{ test, expect} from '@playwright/test'

import{ loginpage} from '../pages/loginPage'
import LoginData from '../test-data/userData.json'


// Scenario 1: Valid user login
// Scenario: Verify user can login with valid credentials
//   Given user opens the SauceDemo application
//   When user logs in with valid username and password
//   Then user should land on the Products page
test("Scenario-1: swaglabs Valid login test", async({page})=>
{

const login_page=new loginpage(page);
await login_page.openURL();
await login_page.loginToApp(LoginData.validUser.Username,LoginData.validUser.Password)
console.log("valid Username: "+LoginData.validUser.Username);
console.log("valid password :"+LoginData.validUser.Password);
//page.waitForTimeout(10000);

 //verify user is landed on the product page
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

});




// Scenario 2: Invalid user login
// Scenario: Verify error message for invalid login
//   Given user opens the SauceDemo application
//   When user logs in with invalid username and password
//   Then user should see login error message
test("Scenario-2: swaglabs InValid login test", async({page})=>
{

const login_page=new loginpage(page);
await login_page.openURL();
await login_page.loginToApp(LoginData.invalidUser.Username,LoginData.invalidUser.Password)
console.log("invalid Username: "+LoginData.invalidUser.Username);
console.log("invalid password :"+LoginData.invalidUser.Password);
//page.waitForTimeout(10000);

  
  await expect(login_page.getErrorMessage()).toBeVisible();

  await expect(login_page.getErrorMessage()).toHaveText("Epic sadface: Username and password do not match any user in this service"
  );
    

});



