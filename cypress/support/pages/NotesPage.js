class NotesPage {
  visit() {
    cy.visit('https://practice.expandtesting.com/notes/app');
  }

  verifyDashboardLoaded() {
    cy.get('[data-testid="add-new-note"]', { timeout: 15000 }).should('be.visible');
  }

  clickAddNote() {
    cy.get('[data-testid="add-new-note"]').click();
  }

  selectCategory(category) {
    cy.get('[data-testid="note-category"]').select(category);
  }

  enterTitle(title) {
    cy.get('[data-testid="note-title"]').clear().type(title);
  }

  enterDescription(description) {
    cy.get('[data-testid="note-description"]').clear().type(description);
  }

  toggleCompleted(check = true) {
    cy.get('[data-testid="note-completed"]').then($checkbox => {
      if ($checkbox.is(':checked') !== check) {
        cy.wrap($checkbox).click();
      }
    });
  }

  clickSubmit() {
    cy.get('[data-testid="note-submit"]').click();
  }

  clickCancel() {
    cy.get('[data-testid="note-cancel"]').click();
  }

  waitUntilNoteAppears(title) {
    cy.contains('[data-testid="note-card-title"]', title, { timeout: 15000 }).should('be.visible');
  }

  clickEditNote(title) {
    this.waitUntilNoteAppears(title);
    cy.contains('[data-testid="note-card-title"]', title)
      .parents('[data-testid="note-card"]')
      .find('[data-testid="note-edit"]')
      .click();
  }

  clickDeleteNote(title) {
  cy.contains('[data-testid="note-card-title"]', title, { timeout: 10000 })
    .should('be.visible')
    .parents('[data-testid="note-card"]')
    .find('[data-testid="note-delete"]')
    .click({ force: true });

  cy.get('[data-testid="note-delete-confirm"]', { timeout: 10000 })
    .should('be.visible')
    .click();
  }

  verifyNoteExists(title, shouldExist = true) {
    const condition = shouldExist ? 'exist' : 'not.exist';
    cy.contains('[data-testid="note-card-title"]', title).should(condition);
  }
}

export default new NotesPage();
