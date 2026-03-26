 import{test , expect} from "@playwright/test"
  test('page  specification', async ({page})=>{
        // BROWSER LAUNCH
        await page.goto('https://practicetestautomation.com/practice-test-login/')
        await page.waitForTimeout(2000)

      //   USERNAME
        await page.locator('[id="username"]').fill('student')
        await page.waitForTimeout(2000)
      
      // PASSWORD
        await page.locator('[id="password"]').fill('Password123')
        await page.waitForTimeout(2000)
      
      // SUMMIT
        await page.locator('[id="submit"]').click()
        await page.waitForTimeout(2000)
      


  })

  
