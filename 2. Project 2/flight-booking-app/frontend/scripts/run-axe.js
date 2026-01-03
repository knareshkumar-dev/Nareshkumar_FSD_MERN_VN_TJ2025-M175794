const fs = require('fs');
const puppeteer = require('puppeteer');
const axeSource = require('axe-core').source;

(async () => {
  const url = process.argv[2] || 'http://localhost:3004';
  const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle2'});
  await page.addScriptTag({content: axeSource});
  const results = await page.evaluate(async () => {
    return await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } });
  });
  await browser.close();
  fs.writeFileSync('axe-report.json', JSON.stringify(results, null, 2));
  console.log('Axe results written to axe-report.json');
})();
