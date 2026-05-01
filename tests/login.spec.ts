import{ test, expect} from '@playwright/test'

import{ loginpage} from '../pages/loginPage'
import LoginData from '../test-data/loginData.json'

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