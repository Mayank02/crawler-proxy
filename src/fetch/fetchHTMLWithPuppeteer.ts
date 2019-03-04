const puppeteer = require('puppeteer');

// keep the browser alive
let _browser = null;
const getNewPage = () => {
    if (_browser) {
        return _browser.newPage();
    }
    return puppeteer.launch({
        ignoreHTTPSErrors: true
    })
        .then((browser) => {
            _browser = browser;
            return browser.newPage();
        })
};

const fetch = async (url: string) => {
    const page = await getNewPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    const html = await page.content();
    await page.close();
    return html;
};

export default fetch;


