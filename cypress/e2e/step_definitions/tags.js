import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage';

// URL correcta para el proyecto Tucoban con el tag demo
Given("A web browser is at the tucoban login page - tag demo", () => {
  cy.visit("https://api-test.iesa.es/tucoban/login");
});

// Acciones para ingresar el usuario y contraseña con tag demo
When("A user enters the username {string}, the password {string}, and clicks on the login button - tag demo", (username, password) => {
  loginPage.submitLogin(username, password);
});

// Manejo de credenciales incorrectas con tag demo
When("A user provides incorrect credentials, and clicks on the login button - tag demo", (table) => {
  table.hashes().forEach((row) => {
    cy.log(`Username: ${row.username}`);
    cy.log(`Password: ${row.password}`);
    loginPage.submitLogin(row.username, row.password);
  });
});

// Validación de URL correcta post login con tag demo
Then("the url will contains the account list subdirectory - tag demo", () => {
  cy.url().should("include", "/account/list");
});

// Validación del mensaje de error mostrado con tag demo (sin espacio adicional al final)
Then("The error message {string} is displayed - tag demo", (errorMessage) => {
  loginPage.elements.errorMessage().invoke('text').then((text) => {
    const trimmedText = text.trim(); // Eliminar espacios adicionales
    expect(trimmedText).to.equal(errorMessage);
  });
});
