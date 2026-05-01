import { test,expect } from 'playwright/test'

import { loginpage } from "../pages/loginPage";
test("Scenario-1:swaglabs Valid login test", async ({ browser }) => {
  const page = await browser.newPage();
  const login_page=new loginpage(page);
  login_page.openURL();
  login_page.loginToApp("standard_user", "secret_sauce");
await page.waitForTimeout(10000);

});