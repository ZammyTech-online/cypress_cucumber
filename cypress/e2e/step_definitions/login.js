import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage";

Given("The user navigates to the login page", () => {
  cy.visit("/");
  cy.url().should("include", "saucedemo.com");
});

When("The user logs in with username {string} and password {string}", (username, password) => {
  loginPage.submitLogin(username, password);
  cy.log(`Attempting login with Username: ${username}, Password: ${password}`);
});

When("The user attempts to log in with invalid credentials:", (dataTable) => {
  dataTable.hashes().forEach(({ username, password }) => {
    loginPage.submitLogin(username, password);
    cy.log(`Testing incorrect login with Username: ${username}, Password: ${password}`);
  });
});

Then("The user should be redirected to {string}", (expectedUrl) => {
  cy.url().should("include", expectedUrl);
});

Then("The error message {string} should be displayed", (expectedMessage) => {
  loginPage.elements.errorMessage().should("be.visible")
    .and("contain.text", expectedMessage);
});
