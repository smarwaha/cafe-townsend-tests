require('cucumber');
const TEST_REPORT_PATH = './e2e/test-reports/';
var {defineSupportCode} =

    exports.config = {
		seleniumAddress: 'http://localhost:4444/wd/hub',
		getPageTimeout: 60000,
		allScriptsTimeout: 60000,
		specs: ['./e2e/features/*.feature'],
		capabilities: {						
			'browserName': 'chrome',
		},
			
		directConnect: true,
		framework: 'custom',
		frameworkPath: require.resolve('protractor-cucumber-framework'),
		cucumberOpts: {
			compiler: [],
			strict: true,
			format: 'progress',
			require: "./e2e/features/step_definitions/*.js",
		  defaultTimeoutInterval: 60000
		},


      beforeLaunch: () => {
    },

  onPrepare:
() => {
    browser.driver.manage().timeouts().pageLoadTimeout(4000);
    browser.driver.manage().timeouts().implicitlyWait(5000);
    browser.driver.manage().window().maximize();

},



};


