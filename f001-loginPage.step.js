// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var signInPage = require('./po01-loginPage.js');

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

module.exports = function() {

    this.Given(/^I run Cucumber with Protractor$/, function(next) {
        next();
    });

    this.Then(/^it should still do normal tests$/, function(next) {
        expect(true).to.equal(true);
        next();
    });

    this.Then(/^it should expose the correct global variables$/, function(next) {
        expect(protractor).to.exist;
        expect(browser).to.exist;
        expect(by).to.exist;
        expect(element).to.exist;
        expect($).to.exist;
        next();
    });

    this.Given(/^I go to the login$/, function(next) {
        signInPage.go();
        next();
    });

    this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
        browser.debugger();
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(next);
    });

    this.When(/^I login with (.*) and (.*)$/, function (user, password, next) {
      // express the regexp above with the code you wish you had
      signInPage.signIn(user,password);
      //signInPage.username.sendKeys(user);
      //signInPage.password.sendKeys(password);
      //signInPage.submit.click();
      //browser.debugger();
      //expect(signInPage.username.getAttribute('value')).to.equal(user);
      next();
    });

    this.Then(/^I expect to be taken to (.*)$/, function (page, next) {
      // express the regexp above with the code you wish you had
      browser.debugger();
      expect(browser.getTitle()).to.eventually.equal(page).and.notify(next);
    });

};
