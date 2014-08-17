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

<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <g>
  <title>Layer 1</title>
  <rect stroke="#000000" opacity="0.85" id="svg_6" height="191.00001" width="403.25005" y="29.24999" x="201.99998" stroke-width="3" fill="#bfbfbf"/>
  <g id="svg_52">
   <path fill="#aad4ff" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m415.50616,187.40248l16.14352,-34.57909l53.81177,0l16.14355,34.57909l-86.09885,0z" stroke="#000000" id="svg_50"/>
   <text fill="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" x="437.58607" y="177.2279" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.573754847049713,0,0,0.8303086757659912,207.48971078824252,32.19344722729693) " stroke="#000000" id="svg_51">protractor.js</text>
  </g>
  <g id="svg_72">
   <path fill="#aad4ff" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m413.96295,165.75433l16.14352,-34.57909l53.81177,0l16.14355,34.57909l-86.09885,0z" stroke="#000000" id="svg_70"/>
   <text fill="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" x="434.89641" y="151.15549" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.573754847049713,0,0,0.8303086757659912,207.48971078824252,32.19344722729693) " stroke="#000000" id="svg_71">page object</text>
  </g>
  <g id="svg_48">
   <path fill="#aad4ff" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m412.62845,141.04677l16.14352,-34.57911l53.81174,0l16.14355,34.57911l-86.09882,0z" stroke="#000000" id="svg_46"/>
   <text fill="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" x="432.5705" y="121.3984" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.573754847049713,0,0,0.8303086757659912,207.48971078824252,32.19344722729693) " stroke="#000000" id="svg_47">step.js</text>
  </g>
  <ellipse stroke="#000000" ry="76.32339" rx="189.64462" id="svg_32" cy="356.20799" cx="238.13926" opacity="0.3" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#ffaaaa"/>
  <path stroke="#000000" fill="#bfbfbf" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m381.44156,205.5314c-0.65674,0.00716 -1.29233,0.03221 -1.95322,0.06079c-10.55908,0.44725 -19.88055,3.30597 -24.61563,7.56366l-2.50919,3.22009c0.54123,-1.1163 1.37204,-2.20038 2.50919,-3.22009c-8.44458,-3.73174 -20.29593,-5.4527 -32.00711,-4.64769c-11.71103,0.80859 -21.88202,4.0502 -27.43954,8.7444c-15.6908,-4.11815 -35.25043,-3.87128 -50.38333,0.65118c-15.13068,4.52245 -23.1953,12.52617 -20.74489,20.60149l1.60284,3.2845c-0.7238,-1.07698 -1.26511,-2.17178 -1.60284,-3.2845l-0.24544,0.30412c-13.15233,0.61179 -23.94023,4.96251 -26.74101,10.78374c-2.80296,5.82483 3.02315,11.79985 14.4342,14.80891l17.81616,1.84616c-6.22061,0.21826 -12.43274,-0.42218 -17.81616,-1.84616c-8.80112,4.20404 -10.82565,10.42596 -5.02049,15.56741c5.80513,5.13779 18.20427,8.09674 30.99574,7.42767l7.7751,-0.87659c-2.50076,0.4436 -5.10011,0.73703 -7.7751,0.87659c7.26317,5.69955 19.30363,9.85706 33.43782,11.51007c14.13409,1.65295 29.14734,0.67627 41.66394,-2.70847c10.21295,6.86594 28.33777,10.4725 46.51248,9.25955c18.17505,-1.21646 33.16928,-7.04123 38.49405,-14.94485l1.84622,-4.41867c-0.27502,1.49911 -0.87708,2.97681 -1.84622,4.41867c12.49985,3.49567 28.22409,3.69238 41.14157,0.51523c12.91763,-3.18076 20.9758,-9.2417 21.09555,-15.83936l-4.63052,-9.86069l-18.24167,-6.67273c14.10458,3.76749 22.99817,9.50647 22.87219,16.53345c16.77136,0.07513 31.01868,-6.05377 37.41141,-13.08435c6.39243,-7.03415 3.97366,-15.04861 -6.34659,-21.07021c4.2822,-4.48663 4.02817,-9.58516 -0.6965,-13.97876c-4.72464,-4.39369 -13.43735,-7.66026 -23.91901,-8.94116c-2.34555,-5.82124 -12.01309,-10.50471 -24.78995,-12.03961c-12.77713,-1.5349 -26.38245,0.35779 -34.93604,4.86952l-5.1947,3.73886c1.32602,-1.35243 3.061,-2.61186 5.1947,-3.73886c-6.02966,-3.54572 -15.48938,-5.54573 -25.34799,-5.41336l0,0l-0.00003,0.00002l0,0.00002z" id="svg_8"/>
  <g id="svg_17" stroke="null">
   <text fill="#ff7f00" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" x="323.7554" y="283.77222" id="svg_15" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.5135966305217856,0,0,0.7242144376176896,91.28795104516081,53.39699558148766) " stroke="#000000">REST</text>
   <path fill="#000000" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" d="m233.50139,245.51485c0.00154,-0.66583 0.53026,-4.74948 1.17432,-9.07466c2.00984,-13.48598 2.03993,-13.54518 4.5921,-9.24704l1.50966,2.54367l4.41528,-2.51683c5.83965,-3.32614 12.80872,-4.55658 19.21457,-3.39214c2.71832,0.49362 5.603,1.29636 6.4118,1.78482c1.60254,0.96692 1.49927,1.80008 -1.05594,8.5323c-1.39893,3.68961 -1.53369,3.79433 -3.95258,3.09293c-4.11572,-1.19327 -10.81825,-0.81818 -14.05316,0.78947l-3.03456,1.50591l2.12984,2.50807c1.17133,1.37938 1.83475,2.7146 1.47525,2.96471c-0.36089,0.25183 -4.7449,0.7404 -9.74271,1.08861c-7.49774,0.52046 -9.08534,0.4191 -9.08389,-0.57982l0,0l0.00002,0zm38.61024,37.1844l-3.2486,-4.85431l2.95657,-3.2265c3.04486,-3.32294 5.23895,-7.98624 6.20657,-13.18515l0.55264,-2.96643l-3.18417,0.57477c-1.75076,0.31604 -3.19321,0.27371 -3.20657,-0.09128c-0.06146,-1.71042 8.26294,-18.55856 9.07175,-18.36244c1.27148,0.30748 14.17905,12.9232 14.17905,13.858c0,0.41748 -1.35693,1.00401 -3.01511,1.30316l-3.01337,0.54417l-0.29803,5.80081c-0.38181,7.44022 -3.8551,16.0264 -8.69284,21.48578c-1.93652,2.18533 -3.86865,3.97363 -4.29099,3.97363c-0.4238,0 -2.23163,-2.18375 -4.01691,-4.85425l0,0l0,0l0,0.00003zm-29.32118,13.60776c0,-0.53751 0.51057,-2.08911 1.13374,-3.44971c1.13231,-2.46936 1.12485,-2.48111 -3.09445,-5.64349c-6.59882,-4.94559 -11.50557,-13.72275 -13.04822,-23.34668l-0.50612,-3.1557l3.60654,-0.55936c7.43613,-1.14929 7.50371,-1.11548 8.99239,4.604c1.00497,3.8605 2.24211,6.17258 4.90657,9.17947c1.959,2.21075 3.83421,3.82825 4.1696,3.59512c0.33412,-0.23499 0.8194,-1.61249 1.07552,-3.0643c0.25746,-1.45203 0.79382,-2.6402 1.19215,-2.6402c0.9151,0 9.52872,15.32837 9.66498,17.19772c0.0914,1.25082 -4.56522,3.41409 -16.69994,7.76129c-0.77417,0.27551 -1.39276,0.06436 -1.39276,-0.47821l0,0l0,0.00003z" id="svg_13" stroke="#000000"/>
   <text fill="#ff7f00" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" x="323.7554" y="303.52894" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.5135966305217856,0,0,0.7242144376176896,91.28795104516081,53.39699558148766) " id="svg_16" stroke="#000000">API</text>
  </g>
  <g id="svg_12">
   <path fill="#ffaaaa" d="m154.411,322.97702c0,4.87775 -16.56522,8.83237 -36.99999,8.83237m36.99999,-8.83237l0,0c0,4.87775 -16.56522,8.83237 -36.99999,8.83237c-20.43424,0 -37,-3.95462 -37,-8.83237m0,0l0,0c0,-4.879 16.56578,-8.83362 37,-8.83362c20.43478,0 36.99999,3.95462 36.99999,8.83362l0,35.33313c0,4.87781 -16.56522,8.83362 -36.99999,8.83362c-20.43424,0 -37,-3.95581 -37,-8.83362l0,-35.33313z" id="svg_1" stroke="#000000"/>
   <text fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="116.88414" y="356.4388" id="svg_3" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" opacity="0.75">SQL</text>
  </g>
  <g id="svg_22">
   <path fill="#aad4ff" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m314.9863,367.68024l12.93744,-55.80554l43.12482,0l12.93747,55.80554l-68.99973,0z" stroke="#000000" id="svg_23"/>
   <text fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" x="351.11553" y="345.91528" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" id="svg_24">js</text>
  </g>
  <g id="svg_11">
   <path fill="#aad4ff" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m227.29346,367.65536l12.93745,-55.80554l43.1248,0l12.93747,55.80554l-68.99973,0z" id="svg_4" stroke="#000000"/>
   <text fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" x="262.93513" y="345.89041" id="svg_10" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve">php</text>
  </g>
  <g id="svg_9">
   <rect id="svg_2" height="29" width="58" y="288.88437" x="231.50892" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" stroke="#000000" fill="#bfbfbf"/>
   <text stroke="#000000" transform="matrix(0.6420673727989197,0,0,0.6486486196517944,33.869374848902225,64.56081613898277) " xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_7" y="375.2905" x="353.96185" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000">HTTP</text>
  </g>
  <g id="svg_14">
   <rect id="svg_25" height="29" width="58" y="289.63437" x="320.50892" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" stroke="#000000" fill="#bfbfbf"/>
   <text id="svg_26" stroke="#000000" transform="matrix(0.6420673727989197,0,0,0.6486486196517944,33.869374848902225,64.56081613898277) " xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="376.44675" x="492.57659" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000">HTTP</text>
  </g>
  <g id="svg_31">
   <path id="svg_27" d="m162.2937,337.82101l19.125,-19.125l0,9.5625l27.71712,0l0,-9.5625l19.12505,19.125l-19.12505,19.125l0,-9.56253l-27.71712,0l0,9.56253l-19.125,-19.125z" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#bfbfbf"/>
   <text stroke="#000000" transform="matrix(0.5896114110946655,0,0,0.7028656005859375,6.848359577357769,61.12611722946167) " xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_30" y="399.60029" x="317.84299" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000">scocket</text>
  </g>
  <g id="svg_21">
   <rect height="29" width="58" y="192.06193" x="229.9124" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" stroke="#000000" fill="#bfbfbf" id="svg_28"/>
   <text stroke="#000000" transform="matrix(0.6420673727989197,0,0,0.6486486196517944,33.869374848902225,64.56081613898277) " xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="226.02257" x="351.47532" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000" id="svg_29">HTTP</text>
  </g>
  <g id="svg_33">
   <path fill="#00ffff" stroke="#000000" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m280.50439,186.76256l2.16754,-8.66653l8.66653,-2.16614l-10.83408,10.83267l-54.16591,0l0,-65l64.99998,0l0,54.16733" id="svg_5"/>
   <text fill="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="162.66793" y="148.42756" id="svg_20" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.701298713684082,0,0,1,143.8246693611145,0) " stroke="#000000">browser</text>
  </g>
  <g id="svg_34">
   <rect height="29" width="58" y="190.81231" x="427.46586" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" stroke="#000000" fill="#bfbfbf" id="svg_35"/>
   <text stroke="#000000" transform="matrix(0.6420673727989197,0,0,0.6486486196517944,33.869374848902225,64.56081613898277) " xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="224.09607" x="659.15869" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000" id="svg_36">HTTP</text>
  </g>
  <g id="svg_53">
   <rect height="29" width="58" y="192.81751" x="323.08028" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" stroke="#000000" fill="#bfbfbf" id="svg_54"/>
   <text stroke="#000000" transform="matrix(0.6420673727989197,0,0,0.6486486196517944,33.869374848902225,64.56081613898277) " xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="227.18741" x="496.58139" opacity="0.75" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000" id="svg_55">HTTP</text>
  </g>
  <rect fill="#007fff" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="317.57138" y="122.68517" width="64.60143" height="61.95694" id="svg_56" stroke="#000000"/>
  <text fill="#ffff00" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="366.33386" y="154.34259" id="svg_58" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.7143270969390869,0,0,0.9363417029380798,88.00064506009221,8.843992349047767) " stroke="#000000">selenium</text>
  <text fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="333.55499" y="83.65693" id="svg_59" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve"/>
  <text fill="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="349.36368" y="256.13556" id="svg_60" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" transform="matrix(1.01885986328125,0,0,0.5410035252571106,-5.891644477844238,35.62960135191679) " stroke="#000000">java</text>
  <path fill="#00ffff" stroke="#000000" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m273.88412,118.7495l17.75583,-17.75597l0,8.87794l25.73279,0l0,-8.87794l17.75583,17.75597l-17.75583,17.75591l0,-8.87796l-25.73279,0l0,8.87796l-17.75583,-17.75591z" id="svg_62"/>
  <text fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="304.20225" y="123.31299" id="svg_64" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve">?rpc?</text>
  <g id="svg_67" stroke="null">
   <path fill="#007fff" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m361.10803,220.31129l24.85794,-19.88228l0,9.94098l36.02576,0l0,-9.94098l24.85806,19.88228l-24.85806,19.88194l0,-9.94096l-36.02576,0l0,9.94096l-24.85794,-19.88194z" id="svg_65" stroke="#000000"/>
   <text fill="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="473.1531" y="231.79456" id="svg_66" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.7024486440927831,0,0,0.7863718867301941,70.55000128187692,42.82188830095038) " stroke="#000000">webdriver</text>
  </g>
  <path fill="#007fff" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m331.39047,271.78903l0.56943,-5.17419l-6.69809,-0.90021c-16.95709,-2.27991 -33.57877,-11.94624 -42.83371,-24.91075c-1.66049,-2.32608 -2.77185,-4.5668 -2.4697,-4.97998c0.69305,-0.94722 17.57901,-8.49013 19.00681,-8.49013c0.58243,0 1.98203,1.38744 3.1098,3.08269c4.80948,7.23146 17.25708,14.77295 26.02097,15.76639l3.55331,0.40251l-0.61102,-4.47157c-0.63416,-4.64223 -0.45575,-5.61719 1.02762,-5.61719c0.94897,0 29.26837,17.82719 30.078,18.93369c0.61398,0.83983 -3.28107,3.95457 -17.22681,13.77592c-6.05801,4.26675 -11.7074,7.75696 -12.55493,7.75696c-1.35629,0 -1.47284,-0.61942 -0.97168,-5.17413l0,0z" id="svg_68" transform="rotate(-153.243408203125 321.056884765625,252.14846801757812) " stroke="#000000"/>
  <path fill="#000000" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m105.49149,245.3717c0,-1.89281 0,-3.78607 0,-5.67891c-8.21278,-0.03691 -16.42477,-0.07335 -24.63754,-0.11026c0,-1.78615 0,-3.57231 0,-5.35843c6.48622,-0.07112 12.97247,-0.14268 19.4583,-0.21426c-7.41997,-11.14622 -14.83994,-22.29155 -22.25992,-33.43777c-3.19821,-0.46544 -6.07713,2.45818 -6.29823,6.00163c-0.33134,14.82068 -0.14737,29.65125 -0.19926,44.47641c11.31233,0 22.6243,0 33.93666,0c0,-1.89282 0,-3.78609 0,-5.67841zm0.04631,-23.63342c0.01651,-3.69696 0.03302,-7.39436 0.04953,-11.09221c3.52516,5.06085 6.64809,10.51064 10.56825,15.19743c3.47324,2.57297 6.65736,-1.61688 9.28624,-3.68436c3.67496,-3.25987 7.44696,-6.41261 10.88878,-9.97858c2.10423,-3.53355 -1.40402,-8.55705 -4.98355,-7.22284c-3.20587,1.76901 -5.76872,4.78627 -8.66899,7.11617c-1.72493,2.11967 -3.79172,3.47008 -4.99323,-0.02881c-2.55357,-3.489 -4.60063,-7.54741 -7.74692,-10.42737c-3.16882,-1.97789 -7.00725,-0.78954 -10.4664,-1.15144c-5.27869,0.01801 -10.56102,-0.05222 -15.83731,0.11523c7.18161,10.81133 14.43933,21.56279 21.76991,32.24944c0.12361,-3.69426 0.10027,-7.39526 0.13368,-11.09267l0,0zm-11.93364,-25.15126c4.30388,-0.79088 7.60358,-5.32013 7.57336,-10.16132c1.51276,-0.07156 3.0251,-0.14314 4.53784,-0.21471c-1.2937,-1.8217 -2.58781,-3.6434 -3.88112,-5.46555c-6.44998,0 -12.90041,0 -19.3508,0c0.01852,4.52881 -0.50975,9.79492 2.96552,13.04309c2.0688,2.36545 5.28029,3.25807 8.1552,2.79848zm10.74744,-21.78468c0.83952,-1.6628 3.82596,-4.685 0.22105,-3.8437c-7.3624,-0.11792 -14.726,-0.05852 -22.0892,-0.07292c0,2.50049 0,5.00145 0,7.5015c6.55791,0 13.11542,0 19.67332,0c0.73161,-1.1951 1.46323,-2.38977 2.19482,-3.58487l0,0z" id="svg_73" stroke="#000000"/>
  <path stroke="#000000" fill="#000000" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m57.45484,87.82842c-3.42102,-0.84286 -5.40298,-4.30811 -5.16914,-7.45167c-0.08753,-4.10606 0.3203,-8.4267 -1.79375,-12.20219c-1.20508,-2.81893 -3.2578,-5.30779 -4.11449,-8.24541c-1.06598,-4.55758 0.25077,-9.72307 4.21816,-12.78271c4.47432,-3.56078 11.61951,-4.02488 16.54483,-0.99845c3.47385,2.2224 5.98042,5.88787 5.88727,9.88776c0.40759,2.98878 -0.86253,5.8 -2.35658,8.36938c-1.07051,2.06877 -2.32061,4.09315 -3.29228,6.18499c-0.25609,4.28905 -0.10926,8.61745 -0.80397,12.86961c-1.15733,3.29494 -5.51885,5.53516 -9.12005,4.36871l0,0zm9.03552,-7.66888c-2.03029,-1.0164 -4.9478,-0.35559 -7.30774,-0.5744c-1.9277,0.35811 -5.3531,-0.7345 -6.37797,0.90446c2.34372,0.85153 5.09809,0.21323 7.59317,0.35408c1.99645,-0.17807 4.29344,0.16886 6.09254,-0.68414l0,0zm-0.15199,-1.91262c0.29877,-2.58229 -4.09802,-1.26456 -5.88424,-1.64899c-2.36396,0.44444 -6.12617,-0.95129 -7.61296,1.03279c0.88098,1.99382 4.81023,0.59162 6.87347,1.03397c2.20033,-0.07243 4.48304,0.07327 6.62365,-0.41776l0.00008,0zm0.02731,-4.52443c0.58045,-5.0304 3.89214,-9.21886 5.80972,-13.82037c1.57664,-5.5094 -1.54585,-11.8036 -7.1991,-14.11617c-5.62688,-2.59008 -13.12376,-0.63343 -16.30368,4.44174c-3.06387,4.19221 -2.47915,9.88831 0.51537,13.96524c2.13676,3.56299 3.84153,7.56706 3.56386,11.71356c4.43526,0 8.8706,0 13.30586,0c0.10266,-0.72796 0.20531,-1.45601 0.30797,-2.18401zm-9.81898,-7.12669c-1.75732,-2.83782 -3.5613,-5.69751 -4.785,-8.77298c1.10022,-1.32267 1.42025,-2.79598 1.76196,-4.35004c3.08788,-0.56332 -0.39301,3.26815 2.52232,3.35454c2.58784,1.04572 1.45264,-5.07425 3.60263,-2.86829c-1.54335,2.42101 3.0316,4.82948 3.19951,1.3661c-0.2218,-2.61501 2.76523,-2.12505 1.60064,0.24728c0.09608,1.2204 2.23555,1.57023 2.27213,2.5518c-1.54011,3.10264 -2.87888,6.30595 -4.70258,9.2762c-0.41045,-1.14999 1.61454,-4.0323 2.2616,-5.72469c1.24859,-1.46289 2.32152,-5.40526 -0.93344,-4.86792c-1.88826,2.73533 -4.42825,-1.72417 -6.27702,0.89719c-1.56949,0.4348 -4.03791,-2.52439 -4.49316,0.32093c1.18205,3.37953 3.64162,6.25977 4.9285,9.60439c-0.43672,-0.2391 -0.68537,-0.65862 -0.95809,-1.0345l0,0zm-2.46655,-12.38557c-0.85458,-0.38734 0.36017,2.05919 0,0l0,0zm5.10748,0.28896c-1.10935,-1.74352 -0.51437,2.11551 0,0zm4.95059,0c-1.10927,-1.74352 -0.51443,2.11551 0,0zm-23.04732,-12.88332c-1.96061,-1.84808 -4.12782,-3.58215 -5.83293,-5.61923c4.25967,3.27482 8.15845,6.96297 11.99728,10.66037c1.0193,1.30098 -1.77845,-1.21486 -2.29913,-1.63658c-1.30284,-1.12061 -2.58855,-2.25827 -3.86523,-3.40456l0,0zm30.27549,5.28377c3.31398,-3.83488 6.40584,-7.85526 9.97865,-11.4859c-0.59821,1.56318 -2.52403,3.43361 -3.73502,5.04351c-2.02216,2.33663 -3.91248,4.80718 -6.22488,6.90218c-0.28869,0.28334 -0.71965,-0.38776 -0.01866,-0.45979l-0.00008,0l0,0zm-7.17793,-3.63812c1.14503,-3.04163 2.80575,-5.93691 4.65865,-8.65911c-0.04302,1.51014 -2.00822,4.37232 -2.9527,6.24489c-0.53435,0.75349 -0.98508,1.95521 -1.70596,2.41422zm-14.66252,-3.90078c-0.79755,-1.08051 -3.19852,-3.59642 -2.75025,-3.93951c2.31481,2.38369 4.66918,4.84405 6.33203,7.663c-1.41611,-1.00868 -2.43501,-2.46558 -3.58178,-3.72349l0,0zm9.16659,-0.85037c-0.16142,-1.01475 0.33963,-5.85886 0.61806,-2.56959c0.00095,2.06087 0.23259,4.38091 -0.38506,6.25668c-0.26441,-1.20597 -0.20031,-2.46147 -0.23299,-3.68709l0,0z" id="svg_76"/>
  <text style="cursor: move;" fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="549.65389" y="79.46478" id="svg_78" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve">User</text>
  <text fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="240.61784" y="402.50691" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" id="svg_80">Infrastructure</text>
  <text fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="510.80037" y="298.89186" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" id="svg_81">DevTest</text>
  <path stroke="#000000" id="svg_18" d="m191.60252,36.75499l160.8181,0l0,19.125l44.69547,0l0,-6.375l41.98642,12.75l-41.98642,12.75l0,-6.375l-44.69547,0l0,19.125l-160.8181,0l0,-51z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" fill="#ffd4aa"/>
  <g id="svg_39">
   <path fill="#ffd4aa" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m422.11282,90.72857l0,-48.75l0,0c0,-2.07092 2.74249,-3.75 6.12799,-3.75l73.5,0c3.38251,0 6.12201,1.67908 6.12201,3.75c0,2.07092 -2.7395,3.75 -6.12201,3.75l-6.12799,0l0,48.75c0,2.07092 -2.74249,3.75 -6.125,3.75l-73.5,0l0,0c-3.38251,0 -6.125,-1.67908 -6.125,-3.75c0,-2.07092 2.74249,-3.75 6.125,-3.75l6.125,0zm12.25,-52.5l0,0c3.38251,0 6.125,1.67908 6.125,3.75c0,2.07092 -2.74249,3.75 -6.125,3.75c-1.68976,0 -3.0625,-0.83954 -3.0625,-1.875c0,-1.03592 1.37274,-1.875 3.0625,-1.875l6.125,0m61.25299,3.75l-67.37799,0m-12.25,45l0,0c1.69275,0 3.0625,0.83954 3.0625,1.875c0,1.03593 -1.36975,1.875 -3.0625,1.875l6.12799,0m-6.12799,3.75l0,0c3.38251,0 6.12799,-1.67908 6.12799,-3.75l0,-3.75" id="svg_37" stroke="#000000"/>
   <text fill="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="468.42459" y="68.96153" id="svg_38" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" transform="matrix(0.8088235259056091,0,0,0.9285714030265808,81.25000149011612,3.071429669857025) " stroke="#000000">feature</text>
  </g>
  <text fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="267.95742" y="67.53041" id="svg_79" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve">business case</text>
  <g id="svg_44">
   <path fill="#aad4ff" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m413.21808,118.37223l16.14352,-34.57911l53.81171,0l16.14355,34.57911l-86.09879,0z" id="svg_41" stroke="#000000"/>
   <text fill="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" x="433.59815" y="94.08984" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve" id="svg_42" transform="matrix(0.573754847049713,0,0,0.8303086757659912,207.48971078824252,32.19344722729693) " stroke="#000000">cucumberjs</text>
  </g>
  <text style="cursor: move;" id="svg_19" fill="#000000" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="551.15389" y="107.21478" font-size="24" font-family="serif" text-anchor="middle" xml:space="preserve">Stories</text>
  <text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_40" y="129" x="121.25002" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">Feature</text>
  <path stroke="#000000" id="svg_61" fill="#000000" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" d="m181.77844,100.83029c-0.00421,-1.34518 -1.44762,-9.59536 -3.20587,-18.33354c-5.48689,-27.24577 -5.56905,-27.36538 -12.53651,-18.68183l-4.12134,5.13899l-12.05374,-5.08477c-15.94229,-6.71981 -34.96783,-9.20566 -52.45587,-6.85313c-7.42102,0.99726 -15.29618,2.61901 -17.50422,3.60587c-4.37495,1.95348 -4.09299,3.63671 2.8827,17.23785c3.81908,7.45411 4.187,7.66568 10.79055,6.24864c11.23596,-2.41077 29.53385,-1.65298 38.3652,1.59498l8.28433,3.0424l-5.81445,5.06704c-3.19769,2.7868 -5.00883,5.48432 -4.02739,5.98958c0.98515,0.50879 12.9536,1.49587 26.5976,2.19936c20.46886,1.05145 24.80301,0.84669 24.79907,-1.17145l0,0l-0.00005,0zm-105.40614,75.12378l8.8687,-9.80713l-8.07145,-6.51851c-8.3125,-6.71335 -14.30236,-16.13461 -16.944,-26.63803l-1.50871,-5.9931l8.69281,1.16122c4.77959,0.63853 8.71747,0.55301 8.75396,-0.18441c0.16779,-3.45557 -22.55784,-37.49393 -24.76591,-37.0977c-3.47117,0.6212 -38.70886,26.1088 -38.70886,27.9974c0,0.84344 3.70444,2.02837 8.23124,2.63278l8.22653,1.09937l0.81364,11.71938c1.0423,15.03152 10.52442,32.37822 23.73149,43.40781c5.28667,4.41505 10.56142,8.02797 11.71439,8.02797c1.15694,0 6.09235,-4.41185 10.96615,-9.80708l0,0l0,0l0,0.00003zm80.04691,27.49184c0,-1.08592 -1.39383,-4.22063 -3.09508,-6.96944c-3.09125,-4.98889 -3.07085,-5.0126 8.44785,-11.4016c18.01479,-9.99159 31.41028,-27.72412 35.6217,-47.16737l1.38173,-6.37547l-9.84589,-1.1301c-20.30064,-2.32187 -20.48512,-2.25357 -24.54924,9.30151c-2.74358,7.79938 -6.12094,12.47046 -13.39491,18.54533c-5.34811,4.4664 -10.46747,7.73421 -11.38307,7.26321c-0.91211,-0.47473 -2.23697,-3.25771 -2.93613,-6.1908c-0.7029,-2.93353 -2.16714,-5.33401 -3.25462,-5.33401c-2.49821,0 -26.01345,30.96797 -26.38544,34.74464c-0.24951,2.52707 12.46306,6.89749 45.59087,15.68015c2.11346,0.55664 3.80223,0.13002 3.80223,-0.96613l0,0l0,0.00006z"/>
  <g id="svg_77">
   <path stroke="#000000" id="svg_74" d="m402.66376,334.08875l-18.46994,0l-15.39047,16.125l15.39047,16.125l18.46994,0l0,-32.25z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" fill="#ffd4aa"/>
   <text stroke="#000000" transform="matrix(0.8084087397617346,0,0,0.7962962985038757,79.73333873123875,77.68011390425818) " id="svg_69" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="348.10465" x="380.76285" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000">css</text>
  </g>
  <g id="svg_82">
   <path id="svg_83" stroke="#000000" d="m524.91376,136.83875l-18.46994,0l-15.39047,16.125l15.39047,16.125l18.46994,0l0,-32.25z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" fill="#ffd4aa"/>
   <text id="svg_84" stroke="#000000" transform="matrix(0.8084087397617346,0,0,0.7962962985038757,79.73333873123875,77.68011390425818) " xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="100.39535" x="531.98586" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000">css</text>
  </g>
  <g id="svg_85">
   <path id="svg_86" stroke="#000000" d="m313.41376,150.33875l-18.46991,0l-15.3905,16.125l15.3905,16.125l18.46991,0l0,-32.25z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" fill="#ffd4aa"/>
   <text id="svg_87" stroke="#000000" transform="matrix(0.8084087397617346,0,0,0.7962962985038757,79.73333873123875,77.68011390425818) " xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="117.34883" x="270.36078" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#000000">css</text>
  </g>
  <path stroke="#000000" id="svg_88" fill="#000000" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" opacity="0.75" d="m580.63434,269.80597c-0.00458,-1.35199 -1.58765,-9.64383 -3.51599,-18.42615c-6.01758,-27.38336 -6.10773,-27.5036 -13.74908,-18.77618l-4.52002,5.16495l-13.21967,-5.11046c-17.48444,-6.75372 -38.35031,-9.25215 -57.52991,-6.88774c-8.13889,1.0023 -16.77579,2.63225 -19.19745,3.6241c-4.7981,1.96333 -4.48883,3.65508 3.16156,17.32489c4.18851,7.49174 4.59204,7.70439 11.83429,6.2802c12.32285,-2.42294 32.39075,-1.66132 42.07629,1.60306l9.08569,3.05774l-6.37677,5.09265c-3.50714,2.80087 -5.49353,5.51199 -4.41711,6.01981c1.08051,0.51135 14.20654,1.50345 29.17041,2.21045c22.44873,1.05676 27.20215,0.85104 27.19781,-1.17731l0,0l-0.00006,0zm-115.60196,75.50314l9.72653,-9.85669l-8.8522,-6.55139c-9.11655,-6.74725 -15.68579,-16.21606 -18.58289,-26.77255l-1.65472,-6.02335l9.53363,1.16708c5.24197,0.64175 9.56073,0.55579 9.60077,-0.18536c0.18399,-3.47302 -24.73984,-37.68329 -27.16147,-37.28506c-3.80698,0.62436 -42.45316,26.24066 -42.45316,28.13879c0,0.84772 4.06274,2.03864 9.0274,2.64609l9.02228,1.10492l0.8924,11.77853c1.14307,15.10748 11.54242,32.54178 26.02698,43.62708c5.798,4.43735 11.58304,8.06851 12.84753,8.06851c1.2688,0 6.68161,-4.43414 12.02692,-9.85663l0,0l0,0l0,0.00003zm87.78983,27.63071c0,-1.09143 -1.52881,-4.24197 -3.39447,-7.00467c-3.39026,-5.01407 -3.36798,-5.0379 9.26495,-11.45917c19.75732,-10.04205 34.44867,-27.86414 39.06744,-47.40558l1.51526,-6.40765l-10.79828,-1.13583c-22.26422,-2.33359 -22.46655,-2.26492 -26.92383,9.34851c-3.00885,7.83875 -6.71301,12.53342 -14.69061,18.63898c-5.86542,4.48895 -11.47998,7.77328 -12.48413,7.2999c-1.00018,-0.47711 -2.45331,-3.27414 -3.22009,-6.22202c-0.771,-2.94839 -2.37677,-5.36099 -3.56952,-5.36099c-2.73987,0 -28.52966,31.12439 -28.93759,34.9201c-0.27368,2.53983 13.66861,6.93234 50.00082,15.75934c2.31787,0.55945 4.17004,0.13071 4.17004,-0.97101l0,0l0,0.00009z"/>
  <text id="svg_89" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="255" x="548.75002" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#ffff00">write</text>
  <text id="svg_90" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="355.5" x="528.50002" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#ff0000">fail</text>
  <text id="svg_91" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="288" x="431.00002" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#7fff00">pass</text>
  <text stroke="#000000" transform="matrix(0.8727754354476929,0,0,0.8139534592628479,3.450966313481331,18.13953772187233) " id="svg_43" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="126.10714" x="51.18733" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#bfbfbf">Idea</text>
  <text style="cursor: move;" stroke="#000000" transform="matrix(0.7635467648506165,0,0,1,19.448278591036797,0) " id="svg_45" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="179.25" x="182.93389" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#00ff00">Acceptance</text>
  <text id="svg_92" stroke="#000000" transform="matrix(0.8727754354476929,0,0,0.8139534592628479,3.450966313481331,18.13953772187233) " xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" y="71.74285" x="131.10479" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#ffff00">Define</text>
 </g>
</svg>