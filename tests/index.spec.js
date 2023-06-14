const { test, expect } = require('@playwright/test');

const url = "https://docs.google.com/forms/d/e/1FAIpQLScFT6td3uHPpiKewbH3Y7_4deKr04BTUTrANYJ2tSv6jtsZUA/viewform?fbzx=3654455444868156164"
const q1 = [0,1,2,3]
const q2 = [4,5,6,7]
const q3 = [8,9,10,11]
const q4 = [12,13,14,15]
const q5 = [16,17,18,19]

const LOOPING = 40

test('TEST', async ({ page }) => {
    let q1rand = 0
    let q2rand = 0
    let q3rand = 0
    let q4rand = 0
    let q5rand = 0
    
    for(let i = 0; i < LOOPING; i++){
        await page.goto(url)

        const btnNext = page.locator('span[class="l4V7wb Fxmcue"]').nth(3)
        await btnNext.click()
 
         q1rand = Math.floor(Math.random() * q1.length)
         q2rand = Math.floor(Math.random() * q2.length)
         q3rand = Math.floor(Math.random() * q3.length)
         q4rand = Math.floor(Math.random() * q4.length)
         q5rand = Math.floor(Math.random() * q5.length)

        const radioBtn = page.locator('div[class="AB7Lab Id5V1"]').nth(q1[q1rand])
        const radioBtn1 = page.locator('div[class="AB7Lab Id5V1"]').nth(q2[q2rand])
        const radioBtn2 = page.locator('div[class="AB7Lab Id5V1"]').nth(q3[q3rand])
        const radioBtn3 = page.locator('div[class="AB7Lab Id5V1"]').nth(q4[q4rand])
        const radioBtn4 = page.locator('div[class="AB7Lab Id5V1"]').nth(q5[q5rand])

        await radioBtn.click()
        await radioBtn1.click()
        await radioBtn2.click()
        await radioBtn3.click()
        await radioBtn4.click()

        await page.locator('span[class="l4V7wb Fxmcue"]').nth(1).click()

        q1rand = Math.floor(Math.random() * q1.length)
        q2rand = Math.floor(Math.random() * q2.length)
        q3rand = Math.floor(Math.random() * q3.length)
        q4rand = Math.floor(Math.random() * q4.length)

       await page.locator('div[class="AB7Lab Id5V1"]').nth(q1[q1rand]).click()
       await page.locator('div[class="AB7Lab Id5V1"]').nth(q2[q2rand]).click()
       await page.locator('div[class="AB7Lab Id5V1"]').nth(q3[q3rand]).click()
    //    await page.locator('div[class="AB7Lab Id5V1"]').nth(q4[q4rand]).click()
     
    //    await page.locator('span[class="l4V7wb Fxmcue"]').nth(1).click()

    //    // Page Akhir [bug]

    //    q1rand = Math.floor(Math.random() * q1.length)
    //    q2rand = Math.floor(Math.random() * q2.length)

    //    await page.waitForSelector('div[class="y6GzNb"]')

    //    await page.locator('div[class="AB7Lab Id5V1"]').nth(q1[q1rand]).click()
    //    await page.locator('div[class="AB7Lab Id5V1"]').nth(q2[q2rand]).click()

       await page.locator('span[class="l4V7wb Fxmcue"]').nth(1).click()

       console.log(` > Data ${i+1} terkirim`)
    }
});