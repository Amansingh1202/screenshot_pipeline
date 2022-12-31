const puppeteer = require('puppeteer');


describe("Browser testing", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("make a screenshot", async () => {
    await page.goto('https://amansingh1202.github.io/screenshot_pipeline');
    //await page.goto('http://localhost:3000/')
    await page.screenshot({ path: "screenshot.png" });
  });
  afterAll(async () => {
    await browser.close();
  });
});

// it('CreateReactApp home', async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://amansingh1202.github.io/screenshot_pipeline');
//     //await page.goto('http://localhost:3000/')
//     const image = await page.screenshot();
//     expect(image).toMatchImageSnapshot();
// })
