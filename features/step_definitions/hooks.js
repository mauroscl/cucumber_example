var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After, setDefaultTimeout}) {
  setDefaultTimeout(20 * 1000);
  After(function() {
    return this.driver.quit();
  });
});