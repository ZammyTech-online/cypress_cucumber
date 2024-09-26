import { 
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/LoginPage';

// URL correcta para el proyecto Tucoban
Given("A web browser is at the tucoban login page", () => {
  cy.visit("https://api-test.iesa.es/tucoban/login");
});

// Acciones para ingresar el usuario y contraseña
When("A user enters the username {string}, the password {string}, and clicks on the login button", (username, password) => {
  loginPage.submitLogin(username, password);
});

// Manejo de credenciales incorrectas
When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(`Username: ${row.username}`);
    cy.log(`Password: ${row.password}`);
    loginPage.submitLogin(row.username, row.password);
  });
});

// Validación de URL correcta post login
Then("the url will contains the account list subdirectory", () => {
  cy.url().should("include", "/account/list");
});

// Validación del mensaje de error mostrado (sin espacio adicional al final)
Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().invoke('text').then((text) => {
    const trimmedText = text.trim(); // Eliminar espacios adicionales
    expect(trimmedText).to.equal(errorMessage);
  });
});
