import puppeteer from 'puppeteer'

export default function getElementText(site, elementSelector) {
    (async () => {
        const browser = await puppeteer.launch({ headless: "new" });

        const page = await browser.newPage();
        await page.goto(site);
        await page.waitForSelector(elementSelector);

        const lyrics = await page.evaluate((elementSelector) => {
            const lyricsElement = document.querySelector(elementSelector);
            if (lyricsElement) {
                return lyricsElement.innerText;
            } else {
                return "Não encontrado";
            }
        }, elementSelector);

        console.log(lyrics);

        await browser.close();
    })();
}
