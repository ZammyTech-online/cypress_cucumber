import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage';

// Step definition for visiting the login page
Given("A web browser is at the saucelabs login page", () => {
  cy.visit("/");
});

// Step definition for submitting login with provided username and password
When("A user enters the username {string}, the password {string}, and clicks on the login button", (username, password) => {
  loginPage.submitLogin(username, password);
});

// Step definition for incorrect credentials using a data table
When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password);
  });
});

// Step definition to validate the URL contains 'inventory.html'
Then("the url will contain the inventory subdirectory", () => {
  cy.url().should("contain", "/inventory.html");
});

// Step definition to validate the error message
Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
