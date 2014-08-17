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

<!-- README_MailServiceslcDeveloperSetup.md 
  -- .
  -- ctrees@mailserviceslc.com
  -- .
-->
Mailserviceslc Developer Setup
==============================
 * __Goal:__ Developer Setup on MS1047-IMAC.
 * __Test:__ Run End to End sandboxed test on this mac.

I want to re-create the testing I have done on another mac, so I created an admin user MS1047-IMAC.

MS1047-IMAC Specs
-----------------
 * 3.06 GHz Intel Core 2 Duo
 * 8GB 1067 MHz DDR3
 * ATI Radeon HD 4670 256MB
 * SN: QP9500Q8895
 * OS X 10.9.4 (13E28)

```
  Model Name:	iMac
  Model Identifier:	iMac10,1
  Processor Name:	Intel Core 2 Duo
  Processor Speed:	3.06 GHz
  Number of Processors:	1
  Total Number of Cores:	2
  L2 Cache:	3 MB
  Memory:	8 GB
  Bus Speed:	1.07 GHz
  Boot ROM Version:	IM101.00CC.B00
  SMC Version (system):	1.52f9
  Serial Number (system):	QP**9S
  Hardware UUID:	EE**915
```

### Installs
1. [Online Markup Editor]
1. [Google Chrome]
1. [FireFox]
1. [Skype]
1. [Sublime Text 3]
1. [NodeJS]
1. [Vagrant]
1. [VagrantCloud] mailserviceslc - ctrees@mailserviceslc.com - Gray9Test
1. Package box from working account on CPAMC-iMac-2
  1. cd to /Users/cat/Sites/15_CAT_MS/MS-jonck and run:

```
CPAMC-iMac-2:MS-jonck cat$ vagrant package
==> default: Clearing any previously set forwarded ports...
==> default: Exporting VM...
==> default: Compressing package to: /Users/cat/Sites/15_CAT_MS/MS-jonck/package.box
```

  1. Create [msllc VagrantCloud]
  1. Point provider [msllc VagrantCloud Provider] to [msllc devbox Package]
  1. __Last Step -__ Package box from working account on CPAMC-iMac-2 __- Section__
1. Install [VirtualBox]
1. Install [msllc VagrantCloud]
  1. Create working directory /Users/cat/Desktop/MS-devbox
  1. cd into directory and run 'vagrant init mailserviceslc/devbox':

```
ms1047-imac:MS-devbox cat$ vagrant init mailserviceslc/devbox
A `Vagrantfile` has been placed in this directory. You are now
ready to `vagrant up` your first virtual environment! Please read
the comments in the Vagrantfile as well as documentation on
`vagrantup.com` for more information on using Vagrant.
ms1047-imac:MS-devbox cat$ vagrant up
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Box 'mailserviceslc/devbox' could not be found. Attempting to find and install...
    default: Box Provider: virtualbox
    default: Box Version: >= 0
==> default: Loading metadata for box 'mailserviceslc/devbox'
    default: URL: https://vagrantcloud.com/mailserviceslc/devbox
==> default: Adding box 'mailserviceslc/devbox' (v0.1.0) for provider: virtualbox
    default: Downloading: https://vagrantcloud.com/mailserviceslc/devbox/version/1/provider/virtualbox.box
==> default: Successfully added box 'mailserviceslc/devbox' (v0.1.0) for 'virtualbox'!
==> default: Importing base box 'mailserviceslc/devbox'...
==> default: Matching MAC address for NAT networking...
==> default: Checking if box 'mailserviceslc/devbox' is up to date...
==> default: Setting the name of the VM: MS-devbox_default_1407082135190_38536
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
    default: Adapter 1: nat
==> default: Forwarding ports...
    default: 22 => 2222 (adapter 1)
==> default: Booting VM...
==> default: Waiting for machine to boot. This may take a few minutes...
    default: SSH address: 127.0.0.1:2222
    default: SSH username: vagrant
    default: SSH auth method: private key
    default: Warning: Connection timeout. Retrying...
    default: Warning: Connection timeout. Retrying...
==> default: Machine booted and ready!
==> default: Checking for guest additions in VM...
==> default: Mounting shared folders...
    default: /vagrant => /Users/cat/Desktop/MS-devbox
ms1047-imac:MS-devbox cat$ pwd
/Users/cat/Desktop/MS-devbox
ms1047-imac:MS-devbox cat$ 
```

  1. Modify ports to forward in Vagrantfile as such:

```
  # config.vm.network "forwarded_port", guest: 80, host: 8080
   config.vm.network "forwarded_port", guest: 8000, host: 8000
   config.vm.network "forwarded_port", guest: 7999, host: 7999
```

  1. Restart Vagrant 'vagrant halt' then 'vagrant up'

```
ms1047-imac:MS-devbox cat$ vagrant halt
==> default: Attempting graceful shutdown of VM...
ms1047-imac:MS-devbox cat$ vagrant up
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Checking if box 'mailserviceslc/devbox' is up to date...
==> default: Clearing any previously set forwarded ports...
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
    default: Adapter 1: nat
==> default: Forwarding ports...
    default: 8000 => 8000 (adapter 1)
    default: 7999 => 7999 (adapter 1)
    default: 22 => 2222 (adapter 1)
==> default: Booting VM...
==> default: Waiting for machine to boot. This may take a few minutes...
    default: SSH address: 127.0.0.1:2222
    default: SSH username: vagrant
    default: SSH auth method: private key
    default: Warning: Connection timeout. Retrying...
    default: Warning: Connection timeout. Retrying...
==> default: Machine booted and ready!
==> default: Checking for guest additions in VM...
==> default: Mounting shared folders...
    default: /vagrant => /Users/cat/Desktop/MS-devbox
==> default: Machine already provisioned. Run `vagrant provision` or use the `--provision`
==> default: to force provisioning. Provisioners marked to run always will still run.
ms1047-imac:MS-devbox cat$ 
```

  1. __Last Step:__ Install Vagrant Project [https://vagrantcloud.com/mailserviceslc/devbox]
1. Manual Test of the [msllc VagrantCloud] install
  1. Browse to [devbox login] should get login.
  1. Login with customer_user test should get home page [devbox home].
  1. Click on View should get test01 submitter [devbox view].
  1. Click on Show should get a list of 2 documents [devbox show].
  1. __Last Step:__ Manual Test of the [msllc VagrantCloud] install
1. Auto Test of the [msllc VagrantCloud] install
  1. cd to working dir
```
ms1047-imac:MS-devbox cat$ pwd
/Users/cat/Desktop/MS-devbox
```
  1. Clone the test template [devbox e2e source]
```
ms1047-imac:MS-devbox cat$ git clone https://github.com/christrees/devboxtest.git
Cloning into 'devboxtest'...
remote: Counting objects: 12, done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 12 (delta 2), reused 12 (delta 2)
Unpacking objects: 100% (12/12), done.
Checking connectivity... done.
ms1047-imac:MS-devbox cat$ 
```

  1. npm install - (woops fogot to install node.js)
  1. __Last Step:__ Auto Test of the [msllc VagrantCloud] install
1. __Last Step:__ Installs Section

![Alt text](http://christrees.github.io/devboxtest/02_ref_img_01_TestTemplateDiagram.svg)
<img src="http://christrees.github.io/devboxtest/02_ref_img_01_TestTemplateDiagram.svg">

### Verify Install and Develper Workflow
1. Some Step
  1. Some SubStep
  1. __Last Step:__ Some Step
1. Next step
1. __Last Step:__ Verify Install and Develper Workflow Section

ms  ssh://git@jira:7999/asf/devbox.git (fetch)
ms  ssh://git@jira:7999/asf/devbox.git (push)

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
