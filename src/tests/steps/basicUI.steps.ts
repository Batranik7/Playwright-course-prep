
import {Given,When,Then} from '@cucumber/cucumber'

import { chromium,Browser,Page,expect } from '@playwright/test'

let browser:Browser;
let page:Page;

Given('I am on hrm loging page',async()=>{
browser=await chromium.launch({headless:false})
page=await browser.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.waitForSelector('input[name="username"]'); 
})

When('I enter valid Id and password',async()=>{
    
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[name="password"]').fill("admin123")
    await page.getByRole("button",{name: "Login"}).click()
    //await page.waitForTimeout(3000)
    await page.waitForSelector('text=Dashboard');
})

When('click on Login',async()=>{
    
})

Then('I should see dashboard page',async()=>{
    
})


Then('I Logout',async()=>{
    
})


When('I enter invalid Id and password',async()=>{
    
})

Then('I should see error message',async()=>{
    
})