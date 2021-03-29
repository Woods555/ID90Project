Feature: Makes a valid login
  I want to use this template for my feature file
   
 @tagid90-Login
  Scenario: Makes a valid login
    Given Open the browser and the page "https://beta.id90travel.com/login"
    And The tool waits the page is charged
    And The tool writes the company "AEROLINEAS ARGENTINAS (AR)"
    And The tool writes the user "qatest"
    And The tool writes the password "12345"
    When The tool clicks Log In button
    And The tool waits the page is charged
    Then The user Logs In correctly and verify the page is charged
    And The tool closes the current driver
    