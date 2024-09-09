const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance with no-sandbox and headless options
  const browser = await puppeteer.launch({
    headless: true,          // Run in headless mode
    args: ['--no-sandbox']   // Add the no-sandbox argument
  });

  const page = await browser.newPage();

  // Define the URL you want to request
  const url = 'https://gota.io';

  // Navigate to the URL (GET request)
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Get the page content
  const content = await page.content();

  // Print the page content to the console
  console.log(content);

  // Close the browser
  await browser.close();
})();
