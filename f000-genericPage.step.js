// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var genericPage = require('./po00-genericPage.js');

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

module.exports = function() {
    //-- Check to validate cucumber protactor enviroment is running
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
    //--
    //-- f000-genericPage.feature - Scenario Outline: Generic Page exists
    //-- 
    this.Given(/^I am on a page$/, function (next) {
      next();
    });
    this.When(/^I go to (.*)$/, function (webAddress, next) {
      //browser.debugger();
      genericPage.go();
      next();
    });
    this.Then(/^I expect to see a tab (.*) with title (.*)$/, function (webTitle, pageTitle, next) {
      browser.debugger();
      //expect(browser.getTitle()).to.evnetually.contain(webTitle);
      expect(genericPage.title.getText()).to.eventually.contain(pageTitle);
      next();
    });
    //--
    //-- f000-genericPage.feature - Scenario Outline: Navigate to About
    //-- 
    this.Given(/^I am on the (.*) page with (.*) with (.*)$/, function (currentPage, user, password, next) {
      //browser.debugger();
      genericPage.go();
      next();
    });
    this.When(/^I touch or click (.*)$/, function (navLink, next) {
      genericPage.navBar.click();
      next();
    });
    this.Then(/^I expect to see the navagation sidemenu list$/, function (next) {
      browser.debugger();
      expect(genericPage.title.getText()).to.eventually.contain('Playlists');
      next();
    });

};
