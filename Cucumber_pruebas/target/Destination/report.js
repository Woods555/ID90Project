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
  "duration": 4781158800,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_waits_the_page_is_charged()"
});
formatter.result({
  "duration": 4205000,
  "status": "passed"
});
formatter.match({
  "location": "Methods.The_tool_can_see_the_button_Get_Started()"
});
formatter.result({
  "duration": 32902500,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_clicks_Log_In_button2()"
});
formatter.result({
  "duration": 1950629700,
  "status": "passed"
});
formatter.match({
  "location": "Methods.The_tool_verifies_Log_In_button()"
});
formatter.result({
  "duration": 27132100,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_closes_the_current_drivers()"
});
formatter.result({
  "duration": 4160408700,
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
  "name": "The tool writes the user \"qatest\"",
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
  "duration": 4512864700,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_waits_the_page_is_charged()"
});
formatter.result({
  "duration": 4265300,
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
  "duration": 124236000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatest",
      "offset": 26
    }
  ],
  "location": "Methods.the_tool_writes_the_user(String)"
});
formatter.result({
  "duration": 77982300,
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
  "duration": 75309000,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_clicks_Log_In_button()"
});
formatter.result({
  "duration": 78327400,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_waits_the_page_is_charged()"
});
formatter.result({
  "duration": 7615800,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_user_log_in_correctly_and_verify_the_page_is_charged()"
});
formatter.result({
  "duration": 7388791000,
  "status": "passed"
});
formatter.match({
  "location": "Methods.the_tool_closes_the_current_drivers()"
});
formatter.result({
  "duration": 4161168200,
  "status": "passed"
});
});