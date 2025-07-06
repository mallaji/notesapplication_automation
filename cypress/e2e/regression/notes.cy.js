import AuthPage from '../../support/pages/AuthPage';
import NotesPage from '../../support/pages/NotesPage';

describe('Regression: Notes CRUD - Combined Flow', () => {
  it('should create, update, and delete a note in one test', () => {
    const originalTitle = `Test Note ${Date.now()}`;
    const updatedTitle = `${originalTitle}_updated`;

    cy.on('window:confirm', () => true);

    AuthPage.visitLogin();
    AuthPage.enterLoginEmail('admin@admin.com');
    AuthPage.enterLoginPassword('admin123');
    AuthPage.clickLogin();
    NotesPage.verifyDashboardLoaded();

    // Create a new note
    NotesPage.clickAddNote();
    NotesPage.selectCategory('Work');
    NotesPage.enterTitle(originalTitle);
    NotesPage.enterDescription('Note created via Cypress.');
    NotesPage.toggleCompleted(true);
    NotesPage.clickSubmit();
    NotesPage.verifyDashboardLoaded();
    cy.contains('[data-testid="note-card-title"]', originalTitle).should('exist');

    // Update the note
    NotesPage.clickEditNote(originalTitle);
    NotesPage.enterTitle(updatedTitle);
    NotesPage.enterDescription('Note updated via Cypress.');
    NotesPage.toggleCompleted(false);
    NotesPage.clickSubmit();
    NotesPage.verifyDashboardLoaded();
    cy.contains('[data-testid="note-card-title"]', updatedTitle).should('exist');

    // Delete the note
    NotesPage.clickDeleteNote(updatedTitle);
    cy.wait(1000);
    cy.contains('[data-testid="note-card-title"]', updatedTitle).should('not.exist');
  });
});
