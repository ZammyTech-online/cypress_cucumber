import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage';

// Definición para "tags.feature"
Given("A web browser is at the saucelabs login page - tag demo", () => {
  cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button - tag demo", (username, password) => {
  loginPage.submitLogin(username, password);
});

Then("the url will contains the inventory subdirectory - tag demo", () => {
  cy.url().should("contain", "/inventory.html");
});

Then("The error message {string} is displayed - tag demo", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
