const antibotbrowser = require("antibotbrowser");
const puppeteer = require('puppeteer');

(async () => { 

   const antibrowser = await antibotbrowser.startbrowser();  

    const browser = await puppeteer.connect({browserWSEndpoint: antibrowser.websokcet});

   // Normal use from now on
    const page = await browser.newPage();    

    await page.setViewport({width:0, height:0});

    page.goto("https://gota.io")

	

})();
