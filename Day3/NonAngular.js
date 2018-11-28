describe("This is a demo Non Angular application Protractor test", function() {
	
	// describe - Given
	// it - Then
	// locators - model, binding, id ....
	
	
	it("This test will submit a form", function() {
		
		//browser.ignoreSynchronization = true;
		
		//browser.get("http://seleniumpractise.blogspot.com/2016/09/complete-registration-form.html");
		
		//element(by.name("first_name")).sendKeys("Sandeep");
		
		//element(by.name("last_name")).sendKeys("Parihar");
		
		browser.driver.get("http://seleniumpractise.blogspot.com/2016/09/complete-registration-form.html");
		
		browser.driver.findElement(by.name("first_name")).sendKeys("Sandeep");
		
		browser.driver.findElement(by.name("last_name")).sendKeys("Parihar");
		
		browser.driver.findElement(by.name("maths")).click();
		
	});
	
});