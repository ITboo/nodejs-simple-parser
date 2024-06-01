import puppeteer from "puppeteer";
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/@UtopiaShow/videos/");
  let arr = await page.evaluate(()=>{
    let text = Array.from(document.querySelectorAll('#video-title'), el=>el.innerText);
    return text;
  })
console.log(arr)
  await browser.close();
})();
