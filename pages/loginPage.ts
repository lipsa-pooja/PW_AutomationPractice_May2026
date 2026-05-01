import {Page, Locator , expect} from '@playwright/test'

export class loginpage
{

    //class Variables
    private page: Page;
    private username: Locator;
    private password: Locator;
    private loginbtn: Locator;
    private errorMsg:Locator;

//constructors
constructor(page:Page)
{
    this.page=page;
    this.username= page.locator("input#user-name");
    this.password= page.locator("input#password");
    this.loginbtn= page.locator('input[value="Login"]');
    this.errorMsg=page.locator("h3[data-test='error']");
}

//methods
async openURL()
{
      await this.page.goto("/");
      //await page.goto("/");
}

async loginToApp(username:string,password:string)
{
await this.username.fill(username);
await this.password.fill(password);
await this.loginbtn.click();
}



  getErrorMessage() {
    return this.errorMsg;
  }
    
}