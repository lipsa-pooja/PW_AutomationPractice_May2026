

import {test,expect} from '@playwright/test';
import {loginpage} from '../pages/loginPage';
import{ProductPage} from '../pages/productPage';
import UserData from '../test-data/userData.json';


// Scenario 3: Add product to cart
// Scenario: Verify user can add a product to cart
//   Given user logs in to the application
//   When user adds "Sauce Labs Backpack" to the cart
//   Then cart count should be displayed as "1"

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