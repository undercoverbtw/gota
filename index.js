const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    targetFilter: (target) => target.type() !== "other",
  });

  const page = await browser.newPage();
  await page.goto("https://gota.io");

    const title = await page.title();
    console.log("Page title:", title);
    await browser.close();
  
})();
