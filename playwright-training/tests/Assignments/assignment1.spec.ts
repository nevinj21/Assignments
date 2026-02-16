import { test, expect } from '@playwright/test';

test.describe('Parabank', async () => {
    //Launch application using url 
    test.beforeEach('test 1 - Launch Application', async ({ page }) => {
        await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    })
    //Test 2 verify application logo is displayed
    test('test 2 - Logo Visible', async ({ page }) => {
        //await page.goto("https://parabank.parasoft.com/parabank/index.htm")
        let logo = await page.locator('img.logo');
        await expect.soft(logo).toBeVisible()
    });
    //Verify application caption displayed as "Experience the difference
    test('test 3 - Caption Text', async ({ page }) => {
        //await page.goto("https://parabank.parasoft.com/parabank/index.htm")
        let caption = await page.locator('p.caption');
        await expect.soft(caption).toHaveText('Experience the difference');
    });
    //4.Enter invalid username 5.Enter empty Password
    test('test 4 and 5 - Enter Invalid UserName',async({page}) => {
        let loginUserName = await page.locator('input[name = "username"]')
        await loginUserName.fill('xxxxx')
        let loginPasswrod = await page.locator('input[name = "password"]')
        await loginPasswrod.fill('hello')
    })
    //6 and 7 .Click on login button and Error Message Validation
    test('test 6 and 7- Click on Login Button and Error Message',async({page}) => {
        let loginButton = await page.locator('input[value = "Log In"]')
        await loginButton.click();

        let errorMessage = await page.getByText('Please enter a username and password.')
        await expect.soft(errorMessage).toHaveText('Please enter a username and password.')
    });
    //8.9,10 and 11,12,13 Click on admin page link and select soap radio button and scroll to drop down and select the option webservice and submit
    test('test 8,9,10,11,12,13 ',async({page}) => {
        //select admin page
     await page.getByText('Admin Page').click();
     //select soap radio button
     let soapRadioBtn = await page.locator('input[value="soap"]')
     await soapRadioBtn.check();
    //scrolling to dropdown
     let dropdown = await page.locator('select[id = "loanProvider"]');
     await dropdown.scrollIntoViewIfNeeded();
    //  //selecting webservice from drop down
      await dropdown.selectOption({label: 'Web Service'})
    //  //clicking on submit
      await page.locator('input[value = Submit]').click();
    //Validate Successfull message
    let successMessage = await page.getByText('Settings saved successfully.')
    await expect.soft(successMessage).toBeVisible()
    });


   

    
});
