 const {test, expect} = require ('@playwright/test')
test('Handling Demoblaze', async ({page})=>{

    //Launch browser
    await page.goto('https://www.demoblaze.com/')
    await page.waitForTimeout(2000)
    
    //Login
    await page.locator('[id="login2"]').click()
    await page.waitForTimeout(2000)

    //Username
    await page.locator('[id="loginusername"]').fill('maddy@123')
    await page.waitForTimeout(2000)
    
    //Password
    await page.locator('[id="loginpassword"]').fill('iampsychedelic')
    await page.waitForTimeout(2000)
    
    //Click
    await page.locator('[onclick="logIn()"]').click()
    await page.waitForTimeout(2000)

})