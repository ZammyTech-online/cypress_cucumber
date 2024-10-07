import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage';

// Abrir la página de login (solo una vez aquí)
Given("A web browser is at the tucoban login page", () => {
  cy.visit("https://api-test.iesa.es/tucoban/login");
});

// Realizar login reutilizando el Page Object Model (POM)
When("A user enters the username {string} and the password {string} and clicks on the login button", (username, password) => {
  loginPage.submitLogin(username, password);
});

// Verificar que el login fue exitoso
Then("the url will contain the account list subdirectory", () => {
  cy.url().should("include", "/account/list");
});

// Validación del mensaje de error
Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().invoke('text').then((text) => {
    const trimmedText = text.trim(); // Eliminar espacios adicionales
    expect(trimmedText).to.equal(errorMessage);
  });
});
