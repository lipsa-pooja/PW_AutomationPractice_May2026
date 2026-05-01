
import { Page, Locator } from "@playwright/test";


 export class loginpage{
    //Because the class needs to know which browser page it should work on.
 //class variable, I am declaring a page variable inside the class.
 private page:Page;
private username:Locator;
private password:Locator;
private loginbtn:Locator;



//constructors
constructor(page:Page) // receives page from test
{
    // stores received page into class variable,I am receiving the real page from the test and saving it inside this class.
    this.page=page;
     //locators
this.username= page.locator("input#user-name");
this.password=page.locator("input#password");
this.loginbtn=page.locator('input[value="Login"]');
    
}
  


//methods
async openURL()
{
  await this.page.goto("/");
}

async loginToApp(username:string,password:string)
{
await this.username.fill(username);
await this.password.fill(password);
await this.loginbtn.click();
 // await page.waitForTimeout(10000);
}
}









 


  