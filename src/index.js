import puppeteer from "puppeteer";

// const openWebPage = async()=>{
//     const browser=  await puppeteer.launch({
//         headless:false,
//         slowMo:200
//     });

//     const page = await browser.newPage()

//     await page.goto('http://example.com/');

//     browser.close();

// }

// openWebPage();

// const captureScreenShot = async()=>{
//     const browser=  await puppeteer.launch({
//         headless:false,
//         slowMo:200
//     });

//     const page = await browser.newPage()

//     await page.goto('http://facebook.com/');
//     await page.screenshot({path:'example.png'})
//     browser.close();

// }

// captureScreenShot();

// const goTo = async()=>{
//     const browser=  await puppeteer.launch({
//         headless:false,
//         slowMo:200,
//     });

//     const page = await browser.newPage()

//     await page.goto('https://quotes.toscrape.com/');
//     // await page.screenshot({path:'example.png'})

//     await page.click('a[href="/login"]')

//     // await new Promise(r=>setTimeout(r,3000));
//     browser.close();

// }

// goTo();


// const getDataFrom = async()=>{
//     const browser=  await puppeteer.launch({
//         headless:false,
//         slowMo:200,
//     });

//     const page = await browser.newPage()

//     await page.goto('https://example.com/');
//     const res = await page.evaluate(()=>{
//         const title = document.querySelector('h1').innerText;
//         const description = document.querySelector('p').innerText;
//         const more = document.querySelector('a').innerText;

//         return {
//             title,
//             description,
//             more
//         }

//     });
//     console.log(res)
//     browser.close();

// }

// getDataFrom();




// const getQuotes = async()=>{
//     const browser=  await puppeteer.launch({
//         headless:false,
//         slowMo:200,
//     });

//     const page = await browser.newPage()

//     await page.goto('https://quotes.toscrape.com/');
//     const res = await page.evaluate(()=>{
//         const quotes = document.querySelectorAll('.quote');

//         const data = [...quotes].map(quote=>{
//             const text = quote.querySelector('.text').innerText
//             const author = quote.querySelector('.author').innerText
//             const tags = [...quote.querySelectorAll('.tag')].map(tag=>tag.innerText);
//             return {
//                 text, author, tags
//             }
//         })
        
        
//         return data

//     });
//     console.log(res)
//     browser.close();

// }

// getQuotes();


// const getLinkedin = async()=>{
//     const browser=  await puppeteer.launch({
//         headless:false,
//         slowMo:200,
//     });

//     const page = await browser.newPage()

//     await page.goto('https://www.linkedin.com/in/luis-martinez-kyb/');

//     //     await page.click('a[href="/login"]')
//     const res = await page.evaluate(()=>{
//         const data =  document.querySelector('section button .contextual-sign-in-modal__modal-dismiss-icon');
//         console.log(data)
//         data.click();
//         // return document.getElementById('ember361').children[0].innerText 
//     // document.querySelector('section button .contextual-sign-in-modal__modal-dismiss-icon')
//     });
//     // await page.click('button[]');

//     await new Promise(r=>setTimeout(r,3000));
//     console.log(res)
//     browser.close();

// }

// getLinkedin();

// 