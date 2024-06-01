import puppeteer from "puppeteer";
import { writeFile } from "node:fs/promises";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/@TheBadComedian/videos");
  await page.setViewport({ width: 1080, height: 1024 });
  let arr = await page.evaluate(() => {
    let text = Array.from(
      document.querySelectorAll("#video-title"),
      (el) => el.innerText
    );
    return text;
  });
    try {
    const data = arr.map(i=>(i +"\n"))
    const promise = writeFile("data.txt", data,);
    await promise;
  } catch (err) {
    console.error(err);
  } finally {
    console.log('All received data is written in data.txt.\nClosing the browser... ')
    await browser.close();
  }
  console.log('Browser is closed')
})();
