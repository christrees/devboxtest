exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseURL: 'http://127.0.0.1:7999/#/',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'cucumber',

  specs: [ '*.feature' ],

  cucumberOpts: {
    require: '*.step.js',
    tags: '@dev',
    format: 'summary'
  }

};
