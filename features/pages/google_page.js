// google_page.js
const { Builder, By } = require('selenium-webdriver');

class GooglePage {
    constructor(driver) {
        this.driver = driver;
        this.searchBox = By.name('q');
    }

    async open() {
        await this.driver.get('https://www.google.com');
    }

    async search(query) {
        await this.driver.findElement(this.searchBox).sendKeys(query);
        await this.driver.findElement(this.searchBox).submit();
    }

    async getTitle() {
        return await this.driver.getTitle();
    }
}

module.exports = GooglePage;
