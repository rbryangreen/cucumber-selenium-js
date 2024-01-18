// example_steps.js
const { Given, Then, And } = require('cucumber');
const { Builder } = require('selenium-webdriver');
const assert = require('assert');
const GooglePage = require('../pages/google_page');

let driver;
let googlePage;

Given(/^I open Google$/, async function () {
    driver = await new Builder().forBrowser('chrome').build();
    googlePage = new GooglePage(driver);
    await googlePage.open();
});

Then(/^I search for "([^"]*)"$/, async function (query) {
    await googlePage.search(query);
});

Then(/^the title should contain "([^"]*)"$/, async function (expectedTitle) {
    const actualTitle = await googlePage.getTitle();
    assert.ok(actualTitle.includes(expectedTitle), `Expected title to contain "${expectedTitle}", but got "${actualTitle}"`);
    // await driver.quit();
});