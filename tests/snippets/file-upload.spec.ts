import{test,expect} from '@playwright/test'

test('upload files testcases',async({page})=>
{
    page.goto('https://the-internet.herokuapp.com/upload');
    page.locator('#file-upload').setInputFiles("/Users/bishnuprasad/Desktop/Screenshot 2025-04-23 at 12.10.40 AM.png")
   
    page.locator('#file-submit').click();
     await page.waitForTimeout(10000);
     await expect(page.locator('h3')).toHaveText('File Uploaded!');
     console.log("file upload completed")

}
)