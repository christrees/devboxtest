var Page = require('astrolabe').Page;
module.exports = Page.create({
    url: { value: 'http://127.0.0.1:7999/#/login' },
    username: { get: function() { return this.findElement(this.by.model('credentials.username')); } },
    password: { get: function() { return this.findElement(this.by.model('credentials.password')); } },
    submit:   { get: function() { return this.findElement(this.by.buttonText('Sign in')); } },
    //invalid:  { get: function() { return this.findElement(this.by.id('incorrectLogin')); } },
    InvalidLoginException: { get: function() { return this.exception('Invalid Login'); } },
    // Adds a signIn method to the page object.
    signIn:   { value: function(username, password) {
        var page = this;
        //page.go();
        page.username.sendKeys(username);
        page.password.sendKeys(password);
        page.submit.click();
        /*
        return this.invalid.isDisplayed().then(function (wrongLogin) {
            if (wrongLogin) {
                page.InvalidLoginException.thro(username + ', ' + password + ' is not valid');
            }
        });
*/
    } }
});
