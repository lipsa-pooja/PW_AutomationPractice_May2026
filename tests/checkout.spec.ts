import {test,expect} from '@playwright/test';
import {loginpage} from '../pages/loginPage';
import{ProductPage} from '../pages/productPage';
import UserData from '../test-data/userData.json';
import { CheckoutPage } from '../pages/checkoutPage';



// Scenario 4: Checkout product
// Scenario: Verify user can checkout a product successfully
//   Given user logs in to the application
//   And user adds "Sauce Labs Backpack" to the cart
//   When user proceeds to checkout
//   And user enters checkout information
//   And user completes the order
//   Then order confirmation message should be displayed


test("Scenario-4:swaglabs User Checkout  test", async ({ page }) => {
 
     const login_page=new loginpage(page);
  await login_page.openURL();
  await login_page.loginToApp(UserData.validUser.Username,UserData.validUser.Password);


  const product_page=new ProductPage(page);
  await product_page.verifyUserIsInProductPage();
  await product_page.addProductToCart("Sauce Labs Backpack");
  await product_page.goToCart();
  await product_page.verifyCartCount();


 
const Checkout_Page=new CheckoutPage(page);
await Checkout_Page.verifyUserIsInCartPage();
await Checkout_Page.goToCheckout();
await Checkout_Page.addCheckOutDetails(UserData.checkoutUser.firstName,UserData.checkoutUser.lastName,UserData.checkoutUser.postalCode);
await Checkout_Page.verifyOrderConfirmationMsg();

//await page.waitForTimeout(10000);


});