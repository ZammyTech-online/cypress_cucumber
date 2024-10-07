import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { transferenciasPuntualesPage } from "@pages/TransferenciasPuntualesPage";

// Hacer clic en el menú de transferencias
When("A user clicks on the transfer menu option", () => {
  transferenciasPuntualesPage.clickTransferMenu();
});

// Hacer clic en "Acceder" para crear una nueva transferencia
When('A user clicks on "Acceder" to create a new transfer', () => {
  transferenciasPuntualesPage.clickAccederNuevaTransferencia();
});

// Verificar que la página de nueva transferencia se muestra
Then("The new transfer page is displayed", () => {
  cy.url().should("include", "/transfer/new");
});


