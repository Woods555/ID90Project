$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VerifyHome.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the user can login correctly",
  "description": "I want to use this template for my feature file",
  "id": "verify-the-user-can-login-correctly",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify the user can login correctly",
  "description": "",
  "id": "verify-the-user-can-login-correctly;verify-the-user-can-login-correctly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tagid90-Home"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open the browser and the page \"https://beta.id90travel.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The tool waits the page is charged",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The tool can see the button Get Started",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "The tool clicks Log In button2",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The tool verifies Log In button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The tool closes the current driver",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://beta.id90travel.com",
      "offset": 31
    }
  ],
  "location": "Methods.open_the_browser_and_the_page(String)"
});
formatter.result({
  "duration": 4681086500,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_waits_the_page_is_charged()"
});
formatter.result({
  "duration": 3861800,
  "status": "passed"
});
formatter.match({
  "location": "Methods.The_tool_can_see_the_button_Get_Started()"
});
formatter.result({
  "duration": 30762900,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_clicks_Log_In_button2()"
});
formatter.result({
  "duration": 1968411100,
  "status": "passed"
});
formatter.match({
  "location": "Methods.The_tool_verifies_Log_In_button()"
});
formatter.result({
  "duration": 19928800,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_closes_the_current_drivers()"
});
formatter.result({
  "duration": 4157731300,
  "status": "passed"
});
formatter.uri("VerifyLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Makes a valid login",
  "description": "I want to use this template for my feature file",
  "id": "makes-a-valid-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Makes a valid login",
  "description": "",
  "id": "makes-a-valid-login;makes-a-valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tagid90-Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open the browser and the page \"https://beta.id90travel.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The tool waits the page is charged",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The tool writes the company \"AEROLINEAS ARGENTINAS (AR)\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The tool writes the user \"qatests\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The tool writes the password \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The tool clicks Log In button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The tool waits the page is charged",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user Logs In correctly and verify the page is charged",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The tool closes the current driver",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://beta.id90travel.com/login",
      "offset": 31
    }
  ],
  "location": "Methods.open_the_browser_and_the_page(String)"
});
formatter.result({
  "duration": 4459188000,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_waits_the_page_is_charged()"
});
formatter.result({
  "duration": 3549800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AEROLINEAS ARGENTINAS (AR)",
      "offset": 29
    }
  ],
  "location": "Methods.the_tool_writes_the_company(String)"
});
formatter.result({
  "duration": 121573000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatests",
      "offset": 26
    }
  ],
  "location": "Methods.the_tool_writes_the_user(String)"
});
formatter.result({
  "duration": 76371300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 30
    }
  ],
  "location": "Methods.the_tool_writes_the_password(String)"
});
formatter.result({
  "duration": 71433700,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_clicks_Log_In_button()"
});
formatter.result({
  "duration": 81272000,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_waits_the_page_is_charged()"
});
formatter.result({
  "duration": 4284300,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_user_log_in_correctly_and_verify_the_page_is_charged()"
});
formatter.result({
  "duration": 10167030000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@class\u003d\u0027primary-content gtm-footer-link\u0027] (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat scriptSteps.Methods.the_user_log_in_correctly_and_verify_the_page_is_charged(Methods.java:77)\r\n\tat ✽.Then The user Logs In correctly and verify the page is charged(VerifyLogin.feature:13)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027primary-content gtm-footer-link\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-EJG0D21\u0027, ip: \u0027192.168.100.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Woods\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51955}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2140ccee5c3eaa91fe05e7453a7f9a31\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027primary-content gtm-footer-link\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat scriptSteps.Methods.the_user_log_in_correctly_and_verify_the_page_is_charged(Methods.java:77)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Methods.the_tool_closes_the_current_drivers()"
});
formatter.result({
  "status": "skipped"
});
});