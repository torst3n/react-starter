// var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'ENIT Systems Assert Title': function(browser) {
    browser
      .url('https://www.enit-systems.com/')
      .waitForElementVisible('body')
      .assert.title('ENIT Systems | Energie einfach managen')
      .saveScreenshot('enit-systems-test.png')
      .end();
  }
};
