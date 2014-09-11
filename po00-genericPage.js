var Page = require('astrolabe').Page;
/* --
  Generic is set to use ng-boilerplate https://github.com/ngbp/ngbp
  Astrolabe - https://github.com/stuplum/astrolabe
  Protractor api - http://angular.github.io/protractor/#/api
  Page Objects - http://angular.github.io/protractor/#/page-objects
  -- */
module.exports = Page.create({
    url: { value: 'http://127.0.0.1:8100/' },
    title:  { get: function() { return this.findElement(this.by.css('h1.title.ng-binding'));}},
    navBar:   { get: function() { return this.findElement(this.by.css('button.button.button-icon.icon.ion-navicon'));}},
    navList:   { get: function() { return this.findElement(this.by.css('header.bar.bar-header.bar-stable h1.title'));}},
    // Adds a signIn method to the page object.
    navInfo:   { value: function(username, password) {
        var page = this;
        //page.go();
        //page.username.sendKeys(username);
        //page.password.sendKeys(password);
        page.info.click();
        /*
        return this.invalid.isDisplayed().then(function (wrongLogin) {
            if (wrongLogin) {
                page.InvalidLoginException.thro(username + ', ' + password + ' is not valid');
            }
        });
        */
    } }
});
