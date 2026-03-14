const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle2' });

  const metrics = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');
    const pageWrapper = document.querySelector('.page-wrapper');
    const ann = document.querySelector('.marketing_announcementBar__...'); // wait, I don't know the exact hash, let's just get the first div child of body
    
    return {
      navRect: nav ? nav.getBoundingClientRect() : null,
      heroRect: hero ? hero.getBoundingClientRect() : null,
      pageWrapperRect: pageWrapper ? pageWrapper.getBoundingClientRect() : null,
      gap: hero && nav ? hero.getBoundingClientRect().top - nav.getBoundingClientRect().bottom : null,
      heroMargin: hero ? window.getComputedStyle(hero).marginTop : null,
      pageWrapperMargin: pageWrapper ? window.getComputedStyle(pageWrapper).marginTop : null,
      pageWrapperPadding: pageWrapper ? window.getComputedStyle(pageWrapper).paddingTop : null,
      bodyMargin: window.getComputedStyle(document.body).marginTop
    };
  });

  console.log(JSON.stringify(metrics, null, 2));
  await browser.close();
})();
