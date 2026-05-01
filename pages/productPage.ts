

import {Page,Locator,expect} from '@playwright/test'

export class ProductPage
{
    //class variables
    private page:Page;
    private all_products:Locator;
    private cartBtn:Locator;
    private cartItem:Locator;
    private burger_menu:Locator;
    private logout_btn:Locator;
   

    constructor(page:Page)
    {
        this.page=page;

   this.all_products = page.locator('[data-test="inventory-item"]');
    this.cartBtn=page.locator("[data-test='shopping-cart-link']");
    this.cartItem=page.locator("[data-test='item-quantity']")
    this.burger_menu=page.locator("#react-burger-menu-btn");//react-burger-menu-btn
    this.logout_btn=page.locator("#logout_sidebar_link");
      
    }



    //methods
async verifyUserIsInProductPage()
{
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
}


async addProductToCart(expected_product:string)
{
const product_count = await this.all_products.count();

  for (let i = 0; i < product_count; i++) {

    const product_card = this.all_products.nth(i);
     const product_names = await product_card
      .locator("[data-test='inventory-item-name']")
      .innerText();
    console.log(product_names);
    if (product_names == expected_product) {
      await product_card
        .locator("[data-test='add-to-cart-sauce-labs-backpack']")
        .click();
  }


 }
}

  async goToCart()
  {
 await this.cartBtn.click();
  }

  async verifyCartCount()
  {
  
  await expect(this.cartItem).toHaveText("1");
  }

  async logoutApplication()
  {
    await this.burger_menu.click();
    await this.logout_btn.click();

  }
}