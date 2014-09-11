README.md

MS-test
=======

Goal: Baseline template for ionic protractor/cucumber/page-object testing.

Test: Clone this, run test get green.

Setup devboxtest
-----

```
git clone https://github.com/christrees/devboxtest.git
cd devboxtest
sudo npm install
```

Setup devboxtest infrastructure
----

## Setup and Start Selenium Server

```
catmini:devboxtest cat$ ./node_modules/protractor/bin/webdriver-manager update
catmini:devboxtest cat$ ./node_modules/protractor/bin/webdriver-manager start
```


## Setup default ionic

Install Client Template [Ionic Vagrant Install][ionic-box]

```
catmini:Desktop cat$ mkdir catonic
catmini:Desktop cat$ cd catonic/
catmini:catonic cat$ vagrant init drifty/ionic-android
```

[Create basic ionic template][ionic-project]

Edit Vagrant port map in Vagrantfile:

```
  config.vm.network "forwarded_port", guest: 8100, host: 8100
  config.vm.network "forwarded_port", guest: 35729, host: 35729
```

Fire up Vagrant, create catapp ionic project, fire up server

```
catmini:catonic cat$ vagrant up
catmini:catonic cat$ vagrant ssh
vagrant@ionic-android:~$ cd /vagrant/
vagrant@ionic-android:/vagrant$ ls
README.md  Vagrantfile
vagrant@ionic-android:/vagrant$ ionic start catapp sidemenu
vagrant@ionic-android:/vagrant$ cd catapp/
vagrant@ionic-android:/vagrant/catapp$ ionic serve
Running dev server: http://10.0.2.15:8100
Running live reload server: http://10.0.2.15:35729
```


# Test Mode

```
ccatmini:catonic cat$ protractor protactor.config.js 
Using the selenium server at http://localhost:4444/wd/hub
2 scenarios (2 passed)
5 steps (5 passed)
```

# Debug Mode

```
catmini:catonic cat$ protractor debug protactor.config.js 
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
catmini:catonic cat$ 
```

<!-- README_MailServiceslcDeveloperSetup.md 
  -- .
  -- ctrees@mailserviceslc.com
  -- .
-->

### Installs
1. [Online Markup Editor]
1. [Google Chrome]
1. [FireFox]
1. [Skype]
1. [Sublime Text 3]
1. [NodeJS]
1. [Vagrant]
1. [VagrantCloud]



  1. npm install - (woops fogot to install node.js)
  1. __Last Step:__ Auto Test of the [msllc VagrantCloud] install
1. __Last Step:__ Installs Section

![Alt text](https://rawgithub.com/christrees/devboxtest/master/02_ref_img_01_TestTemplateDiagram.svg)
<img src="https://rawgithub.com/christrees/devboxtest/master/02_ref_img_01_TestTemplateDiagram.svg">

### Verify Install and Develper Workflow
1. Some Step
  1. Some SubStep
  1. __Last Step:__ Some Step
1. Next step
1. __Last Step:__ Verify Install and Develper Workflow Section

### References
#### Tool Links
  1. [Online Markup Editor] http://dillinger.io/#
  1. [Google Chrome] https://www.google.com/intl/en_us/chrome/browser/
  1. [FireFox] https://www.mozilla.org/en-US/firefox/new/
  1. [Sublime Text 3] http://www.sublimetext.com/3
  1. [NodeJS] http://nodejs.org/
  1. [Skype] http://www.skype.com/en/download-skype/skype-for-mac/downloading/
  1. [VirtualBox] https://www.virtualbox.org/wiki/Downloads
  1. [Vagrant] http://www.vagrantup.com/downloads.html
  1. [VagrantCloud] https://vagrantcloud.com/
  1. __Last Step -__ Tool Links __- Section__
#### Internal Sandbox Testing Links
  1. [msllc devbox] https://vagrantcloud.com/mailserviceslc/devbox
  1. [msllc devbox Provider] https://vagrantcloud.com/mailserviceslc/devbox/version/1/provider/virtualbox/edit
  1. [msllc devbox package] http://10.2.5.104/~cat/15_CAT_MS/MS-jonck/package.box
  1. [devbox login] http://127.0.0.1:7999/#/login "http://127.0.0.1:7999/#/login"
  1. [devbox home] http://127.0.0.1:7999/#/ "http://127.0.0.1:7999/#/"
  1. [devbox view] http://127.0.0.1:7999/#/view "http://127.0.0.1:7999/#/view"
  1. [devbox show] http://127.0.0.1:7999/#/list/view/1/documents "http://127.0.0.1:7999/#/list/view/1/documents"
  1. [devbox e2e source] https://github.com/christrees/devboxtest "https://github.com/christrees/devboxtest"
  1. __Last Step -__ Internal Sandbox Testing Links __- Section__
#### External Libs
  1. [Protractor] https://github.com/angular/protractor "https://github.com/angular/protractor"
  1. [Protractor npm] https://www.npmjs.org/package/protractor "https://www.npmjs.org/package/protractor"
  1. [Protractor webdriver API] https://github.com/angular/protractor/blob/master/docs/api.md#api-protractor-prototype-findelement "https://github.com/angular/protractor/blob/master/docs/api.md#api-protractor-prototype-findelement"
  1. [PageObject Example] https://github.com/onekilo79/protractor-astrolabe-example "https://github.com/onekilo79/protractor-astrolabe-example"
  1. [PageObject Astrolabe Lib] https://github.com/stuplum/astrolabe "https://github.com/stuplum/astrolabe"
  1. [Cucumber Given-When-Then] https://github.com/cucumber/cucumber/wiki/Given-When-Then "https://github.com/cucumber/cucumber/wiki/Given-When-Then"
  1. __Last Step -__ External Libs __- Section__
1. __Last Step -__ References Section __- Section__

<!-- Links -->

[ionic-box]: https://github.com/driftyco/ionic-box
[ionic-project]: http://ionicframework.com/getting-started/
[ionic-catapp]: http://127.0.0.1:8100/

[Online Markup Editor]: http://dillinger.io/#
[Google Chrome]: https://www.google.com/intl/en_us/chrome/browser/
[FireFox]: https://www.mozilla.org/en-US/firefox/new/
[Sublime Text 3]: http://www.sublimetext.com/3
[NodeJS]: http://nodejs.org/
[Skype]: http://www.skype.com/en/download-skype/skype-for-mac/downloading/
[VirtualBox]: https://www.virtualbox.org/wiki/Downloads
[Vagrant]: http://www.vagrantup.com/downloads.html
[VagrantCloud]: https://vagrantcloud.com/

[msllc devbox]: https://vagrantcloud.com/mailserviceslc/devbox
[msllc devbox Provider]: https://vagrantcloud.com/mailserviceslc/devbox/version/1/provider/virtualbox/edit
[msllc devbox package]: http://10.2.5.104/~cat/15_CAT_MS/MS-jonck/package.box
[devbox login]: http://127.0.0.1:7999/#/login "http://127.0.0.1:7999/#/login"
[devbox home]: http://127.0.0.1:7999/#/ "http://127.0.0.1:7999/#/"
[devbox view]: http://127.0.0.1:7999/#/view "http://127.0.0.1:7999/#/view"
[devbox show]: http://127.0.0.1:7999/#/list/view/1/documents "http://127.0.0.1:7999/#/list/view/1/documents"
[devbox e2e source]: https://github.com/christrees/devboxtest "https://github.com/christrees/devboxtest"

[Protractor]: https://github.com/angular/protractor "https://github.com/angular/protractor"
[Protractor npm]: https://www.npmjs.org/package/protractor "https://www.npmjs.org/package/protractor"
[Protractor webdriver API]: https://github.com/angular/protractor/blob/master/docs/api.md#api-protractor-prototype-findelement "https://github.com/angular/protractor/blob/master/docs/api.md#api-protractor-prototype-findelement"
[PageObject Example]: https://github.com/onekilo79/protractor-astrolabe-example "https://github.com/onekilo79/protractor-astrolabe-example"
[PageObject Astrolabe Lib]: https://github.com/stuplum/astrolabe "https://github.com/stuplum/astrolabe"
[Cucumber Given-When-Then]: https://github.com/cucumber/cucumber/wiki/Given-When-Then "https://github.com/cucumber/cucumber/wiki/Given-When-Then"

<!-- Template copy pase -->

### Copy Paste Section Template
1. Some Step
  1. Some SubStep
  1. __Last Step -__ Some Step __- Section__
1. Next step
1. __Last Step -__ Section Template __- Section__
