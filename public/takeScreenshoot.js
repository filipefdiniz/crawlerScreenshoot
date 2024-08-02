const puppeteer = require('puppeteer');
const path = require('path');

async function takeScreenshot() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br/');  // Substitua pela URL desejada
    const screenshotPath = path.join(__dirname, 'public', 'screenshot.png');
    await page.screenshot({ path: screenshotPath });
    await browser.close();
}

takeScreenshot();
