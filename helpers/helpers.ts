// custom functions.
const helpers = {
    async loadPage(page) {
        await page.goto("http://zero.webappsecurity.com/");
    },

    async takeScreenshot(page) {
        await page.screenshot({path: 'screenshots/main_page.png'});
    }
}

export default helpers;
