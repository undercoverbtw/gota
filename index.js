const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
       args: ['--no-sandbox'],
    targetFilter: (target) => target.type() !== "other",
  });

  const page = await browser.newPage();
 // Navigate to the URL (GET request)
  const response = await page.goto(url, { waitUntil: 'networkidle2' });

  // Get and print the status code and page content
  console.log('Status Code:', response.status());
  const content = await page.content();
  console.log(content);


    const title = await page.title();
    console.log("Page title:", title);
    await browser.close();
  
})();
