// Scenario-1: Verify user can login with valid credentials (Valid user login)
//   Given user opens the SauceDemo application
//   When user logs in with valid username and password
//   Then user should land on the Products page

import { test, expect } from "@playwright/test";

test.skip("Scenario-1:swaglabs Valid login test", async ({ browser }) => {
  const page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
  const username = await page.locator("input#user-name");
  await username.fill("standard_user");

  const password = await page.locator("input#password");
  await password.fill("secret_sauce");

  const loginbtn = await page.locator('input[value="Login"]');
  await loginbtn.click();
  await page.waitForTimeout(10000);
});

// Scenario-2: Verify error message for invalid login (Invalid user login)
//   Given user opens the SauceDemo application
//   When user logs in with invalid username and password
//   Then user should see login error message

test("Scenario-2:swaglabs Invalid login test", async ({ page }) => {
  //const page = await browser.newPage();
  await page.goto("/");
  const username = page.locator("input#user-name");
  await username.fill("standard_user123");

  const password = page.locator("input#password");
  await password.fill("secret_sauce456");

  const loginbtn = page.locator('input[value="Login"]');
  await loginbtn.click();
  const error_msg = page.locator("h3[data-test='error']");
  await expect(error_msg).toBeVisible();

  await expect(error_msg).toContainText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

// Scenario-3: Verify user can add a product to cart (Add Product to Cart)
//   Given user logs in to the application
//   When user adds "Sauce Labs Backpack" to the cart
//   Then cart count should be displayed as "1"

test("Scenario-3:swaglabs Add Product to Cart  test", async ({ browser }) => {
  const page = await browser.newPage();
  await page.goto("/");
  const username = page.locator("input#user-name");
  await username.fill("standard_user");

  const password = page.locator("input#password");
  await password.fill("secret_sauce");

  const loginbtn = page.locator('input[value="Login"]');
  await loginbtn.click();

  // Logic should be :
  // Get all product cards
  // Loop one by one
  // Read product name from each card
  // Compare with expected product name
  // If matched, click Add to cart button inside the same card
  // Stop the loop

  //verify user is landed on the product page
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  const all_products = page.locator('[data-test="inventory-item"]');
  const product_count = await all_products.count();
  //console.log("Number of product is :" + product_count);
  const expected_product = "Sauce Labs Backpack";

  for (let i = 0; i < product_count; i++) {
    //This picks one product card at a time.
    const product_card = all_products.nth(i);
    // i = 0  → allProducts.nth(0) → first product card
    // i = 1  → allProducts.nth(1) → second product card
    // i = 2  → allProducts.nth(2) → third product card

    //This reads the product name from that card only.
    const product_names = await product_card
      .locator("[data-test='inventory-item-name']")
      .innerText();
    console.log(product_names);
    if (product_names == expected_product) {
      await product_card
        .locator("[data-test='add-to-cart-sauce-labs-backpack']")
        .click();
      //break;
    }
  }
  page.locator("[data-test='shopping-cart-link']").click();
  //   Then cart count should be displayed as "1"

  await expect(page.locator("[data-test='item-quantity']")).toHaveText("1");
  console.log("Scenario 3 completed");
  await page.waitForTimeout(10000);
});

// Scenario-4: Verify user can checkout a product successfully (User Checkout)
//   Given user logs in to the application
//   And user adds "Sauce Labs Backpack" to the cart
//   When user proceeds to checkout
//   And user enters checkout information
//   And user completes the order
//   Then order confirmation message should be displayed

test("Scenario-4:swaglabs User Checkout  test", async ({ page }) => {
  await page.goto("/");
  const username = page.locator("input#user-name");
  await username.fill("standard_user");

  const password = page.locator("input#password");
  await password.fill("secret_sauce");

  const loginbtn = page.locator('input[value="Login"]');
  await loginbtn.click();

  const all_products = page.locator('[data-test="inventory-item"]');
  const product_count = await all_products.count();
  const expected_product = "Sauce Labs Backpack";

  for (let i = 0; i < product_count; i++) {
    //This picks one product card at a time.
    const product_card = all_products.nth(i);

    //This reads the product name from that card only.
    const product_names = await product_card
      .locator("[data-test='inventory-item-name']")
      .innerText();

    if (product_names == expected_product) {
      await product_card
        .locator("[data-test='add-to-cart-sauce-labs-backpack']")
        .click();
    }
  }
 await  page.locator("[data-test='shopping-cart-link']").click();

  //verify use is in Cart page
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  const checkout_btn = await page.locator("#checkout").click();

  const first_name = page.locator("#first-name");
  await first_name.fill("Lipsa");
  const last_name = page.locator("#last-name");
  await last_name.fill("Panda");

  const zip_code = page.locator("#postal-code");
  await zip_code.fill("522646");
  const continue_btn = page.locator("#continue");
  await continue_btn.click();

  const finish_btn=page.locator("#finish");
  await finish_btn.click();

  await page.waitForTimeout(10000);

  //   Then order confirmation message should be displayed
await expect(page.locator("[data-test='complete-header']")).toHaveText("Thank you for your order!");
});



// Scenario-5: Verify user can logout successfully
//   Given user logs in to the application
//   When user clicks on logout
//   Then user should be navigated back to login page


test("Scenario-5:swaglabs logout test", async ({ page }) => {
  await page.goto("/");
  const username = page.locator("input#user-name");
  await username.fill("standard_user");

  const password = page.locator("input#password");
  await password.fill("secret_sauce");

  const loginbtn = page.locator('input[value="Login"]');
  await loginbtn.click();

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
const burger_menu=page.locator("#react-burger-menu-btn");
await burger_menu.click();

await page.locator("#logout_sidebar_link").click();
//page.waitForTimeout(10000);

});