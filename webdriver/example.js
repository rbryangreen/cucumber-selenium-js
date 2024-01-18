const { Builder } = require('selenium-webdriver');
require('chromedriver');

// Specify the path to chromedriver executable
process.env.CHROME_DRIVER_PATH = '/Users/bryangreen/chromedriver_mac64';

const driver = new Builder().forBrowser('chrome').build();

module.exports = driver;