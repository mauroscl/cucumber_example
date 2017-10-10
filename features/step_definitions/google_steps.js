//var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');
var assert = 

defineSupportCode(function ({ Given, When, Then }) {
    Given('I visit the Google page', function () {
        return this.driver.get('https://www.google.com');
    });

    When('I type {string} in the search field', function (term) {
        this.driver.findElement(By.id('lst-ib'))
            .sendKeys(term);
    });

    When('type ENTER', function()  {
        this.driver.findElement(By.id('lst-ib'))
            .sendKeys(Keys.ENTER);
    });

    Then('the first link will be {string}',function (link) {
        var link = this.driver
        .findElement(By.id('rso'))
        .findElement(By.tagName('a'))
        .getText();

    });
});