class LoginPage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    errorMessage: () => cy.get(".error-message-container"), // Agregado
  };

  // Métodos reutilizables con clear() antes de escribir
  typeUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  // Método principal para iniciar sesión
  submitLogin(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
}

export const loginPage = new LoginPage();
