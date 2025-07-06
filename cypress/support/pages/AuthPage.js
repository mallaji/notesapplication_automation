class AuthPage {
  visitLogin() {
    cy.visit('/notes/app/login');
  }

  visitRegister() {
    cy.visit('/notes/app/register');
  }

  enterName(name) {
    cy.get('[data-testid="register-name"]').clear().type(name);
  }

  enterEmail(email) {
    cy.get('[data-testid="register-email"]').clear().type(email);
  }

  enterPassword(password) {
    cy.get('[data-testid="register-password"]').clear().type(password);
  }

  confirmPassword(password) {
    cy.get('[data-testid="register-confirm-password"]').clear().type(password);
  }

  clickRegister() {
    cy.get('[data-testid="register-submit"]').click();
  }

  enterLoginEmail(email) {
    cy.get('[data-testid="login-email"]').clear().type(email);
  }

  enterLoginPassword(password) {
    cy.get('[data-testid="login-password"]').clear().type(password);
  }

  clickLogin() {
    cy.get('[data-testid="login-submit"]').click();
  }

  verifyDashboard() {
    cy.contains('MyNotes').should('exist');
  }
  
  verifyRegistrationSuccess() {
  cy.contains('User account created successfully').should('be.visible');
  cy.get('[data-testid="login-view"]').should('be.visible');
}
}

export default new AuthPage();
