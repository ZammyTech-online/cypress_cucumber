class LoginPage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    errorMessage: () => cy.get(".error-message-container"),
  };

  typeUsername(username) {
    this.elements.usernameInput().clear().type(username, { delay: 100 });
  }

  typePassword(password) {
    this.elements.passwordInput().clear().type(password, { delay: 100 });
  }

  clickLogin() {
    this.elements.loginBtn().should("be.visible").click();
  }

  submitLogin(username, password) {
    cy.log("Submitting login with credentials.");
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
}

export const loginPage = new LoginPage();
