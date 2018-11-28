var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Day3/NonAngular.js'],
  
  //for running headless Chrome browser
   capabilities: {
   		browserName : 'chrome',
   		
   		chromeOptions : {
   				//args: ["--headless", "--disable-gpu", "--window-size=800,600"]
   				args: ["--headless"]
   		}
   	
  	},
  
  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Reports/screenshots'
    }).getJasmine2Reporter());
 }

};	