README.md

MS-test
=======

Goal: Baseline template for MS-devbox protractor/cucumber/page-object testing.

Test: Clone this and run the test.

Setup
-----

```
git clone /Users/cat/Sites/15_CAT_MS/MS-test/.git
sudo npm install
```

Test
----

1. Start Vagrant devbox
```
vagrant up
```
2. Start Selenium Server
```
webdriver-manager start
```
3. Test
```
CPAMC-iMac-2:MS-test cat$ protractor protactor.config.js 
Using the selenium server at http://localhost:4444/wd/hub
2 scenarios (2 passed)
5 steps (5 passed)
CPAMC-iMac-2:MS-test cat$ 
```
4. Debug Mode
```
CPAMC-iMac-2:MS-test cat$ protractor debug protactor.config.js 
Using the selenium server at http://localhost:4444/wd/hub
Hit SIGUSR1 - starting debugger agent.
debugger listening on port 5858
connecting... ok
break in timers.js:77
  75 }
  76 
  77 function listOnTimeout() {
  78   var msecs = this.msecs;
  79   var list = this;
debug> c
break in /usr/local/lib/node_modules/protractor/lib/protractor.js:1148
 1146   // jshint debug: true
 1147   this.driver.executeScript(clientSideScripts.installInBrowser);
 1148   webdriver.promise.controlFlow().execute(function() { debugger; },
 1149                                           'add breakpoint to control flow');
 1150 };
debug> c
debug> 2 scenarios (2 passed)
5 steps (5 passed)
Error 0
CPAMC-iMac-2:MS-test cat$ 
```