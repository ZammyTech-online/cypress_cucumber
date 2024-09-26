class LoginPage {
  elements = {
    usernameInput: () => cy.get("#userName"),
    passwordInput: () => cy.get('#userPass'),
    loginBtn: () => cy.get('.btn.btn-main'),
    // Cambiado de '.title' a '.message' para capturar el mensaje de error correcto
    errorMessage: () => cy.get('.message'),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
}

export const loginPage = new LoginPage();
