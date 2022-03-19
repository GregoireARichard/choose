const puppeteer = require('puppeteer');
(async () => {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
    	const url = "https://www.appchoose.io/product/sandqvist-sac-a-dos-roald-76a";
	await page.goto(url);
	let content = await page.evaluate(() => {
		let result = [];
		let imgs = [...document.querySelectorAll('img')];
		result.push({
			 title : document.querySelector('h1.sale_title_brand__1RDN5')?.textContent,
 			 description : document.querySelector('.sale_title_product__9Jcdn')?.textContent,
			 img : imgs.map((img) => img.src)
		})
		return result;
	  });
	  console.log(content);
	await browser.close();
})();

