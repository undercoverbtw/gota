const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance with no-sandbox and headless options
  const browser = await puppeteer.launch({
    headless: true,          // Run in headless mode
    args: ['--no-sandbox']   // Add the no-sandbox argument
  });

  const page = await browser.newPage();

    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
  await page.setUserAgent(userAgent);
  
  // Define the URL you want to request
  const url = 'https://gota.io';

  // Navigate to the URL (GET request)

  const response = await page.goto(url, { waitUntil: 'networkidle2' });
  
const headers = response.headers();
console.log(headers);

console.log(response.status());
  

  // Close the browser
  await browser.close();
})();
