import{Page,Locator,expect} from '@playwright/test'

export class CheckoutPage
{
    //class variables
    private page:Page;
    private checkout_btn:Locator;
    private first_name:Locator;
    private last_name:Locator;
    private zip_code:Locator;
    private continue_btn:Locator;
    private finish_btn:Locator;

  
    constructor(page:Page)
    {
        this.page=page;

          this.checkout_btn = page.locator("#checkout");
        this.first_name = page.locator("#first-name");
        this.last_name = page.locator("#last-name");
        this.zip_code = page.locator("#postal-code");
       this.continue_btn = page.locator("#continue");
         this.finish_btn=page.locator("#finish");


    }

    //methods
async verifyUserIsInCartPage()
{
     await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html");
}


async goToCheckout()
{
    await  this.checkout_btn .click();
}

    async addCheckOutDetails(firstname:string,lastname:string,zipcode:string)
    {
       await this.first_name.fill(firstname);
       await this.last_name.fill(lastname);
       await this.zip_code.fill(zipcode);
       await this.continue_btn.click();
        await this.finish_btn.click();
    }

    async verifyOrderConfirmationMsg()
    
    {
        await expect(this.page.locator("[data-test='complete-header']")).toHaveText("Thank you for your order!");
    }
}
