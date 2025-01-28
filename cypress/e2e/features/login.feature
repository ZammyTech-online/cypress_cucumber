Feature: Login Page
  As a user, I want to authenticate with valid credentials so that I can access the application.

  Background:
    Given The user navigates to the login page

  Scenario: Successful Login
    When The user logs in with username "standard_user" and password "secret_sauce"
    Then The user should be redirected to "/inventory.html"

  Scenario: Blocked User Login
    When The user logs in with username "locked_out_user" and password "secret_sauce"
    Then The error message "Epic sadface: Sorry, this user has been locked out." should be displayed

  Scenario: Incorrect Username Login
    When The user attempts to log in with invalid credentials:
      | username  | password       |
      | fake_user | secret_sauce   |
    Then The error message "Epic sadface: Username and password do not match any user in this service" should be displayed

  Scenario: Incorrect Password Login
    When The user attempts to log in with invalid credentials:
      | username       | password      |
      | standard_user  | wrong_pass    |
    Then The error message "Epic sadface: Username and password do not match any user in this service" should be displayed
