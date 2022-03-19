# Choose technical interview - Grégoire Richard
 
In order to realize this exercise, I used **Node.js** with the **"puppeteer"** library

The main difficulty was to fetch all the images with puppeteer as it was not accepting the javascript selector "document.querySelectorAll"

Concerning the structure of the code itself, it's rather simple, first is puppeteer's initialization part, then a function sending the request 
> let content = await page.evaluate(() => 

I chose to declare an array to stock all the variables asked (Title, description,and the images) and then be able to return in one time.

Concerning this line :
> let imgs = [...document.querySelectorAll('img')];
it took me multiple attempts to finally be able to select all the images, as said previously I had some troubles using a simple "document.querySelectorAll"

To be fair, I found the answer here, on the documentation of Puppeteer [here](https://github.com/puppeteer/puppeteer/issues/303#issuecomment-322919968)

Finally, the code pushes the results of the query into the array "result" and the function returns it, then a simple console.log is enough.

 