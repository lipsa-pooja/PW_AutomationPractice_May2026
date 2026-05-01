

import {test,expect} from '@playwright/test';
import {loginpage} from '../pages/loginPage';
import{ProductPage} from '../pages/productPage';
import UserData from '../test-data/loginData.json';

test("Scenario-3:swaglabs Add Product to Cart  test", async ({ page }) => {
  
  
  const login_page=new loginpage(page);
  await login_page.openURL();
  await login_page.loginToApp(UserData.validUser.Username,UserData.validUser.Password);


  const product_page=new ProductPage(page);
  await product_page.verifyUserIsInProductPage();
  await product_page.addProductToCart("Sauce Labs Backpack");
  await product_page.goToCart();
  await product_page.verifyCartCount();

//await page.waitForTimeout(10000);
 
  
});