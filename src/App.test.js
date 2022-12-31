import { toMatchImageSnapshot } from 'jest-image-snapshot';
const puppeteer = require('puppeteer');
expect.extend({ toMatchImageSnapshot });



it('CreateReactApp home', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://amansingh1202.github.io/screenshot_pipeline');
    // await page.goto('http://localhost:3000/')
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
})