var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Day3/NonAngular.js'],
  
  //for running on Firefox browser
  // capabilities: {
  // 	'browserName' : 'firefox'
  //	},
  
//for running on multiple browsers
  multiCapabilities: [{
	  'browserName' : 'firefox'
  },{
	  'browserName' : 'chrome'
  }],

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Reports/screenshots'
    }).getJasmine2Reporter());
 }

};	