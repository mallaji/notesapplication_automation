import AuthPage from '../../support/pages/AuthPage';

describe('Smoke: Login Flow', () => {
  it('should login with valid credentials', () => {
    AuthPage.visitLogin();
    AuthPage.enterLoginEmail('admin@admin.com'); 
    AuthPage.enterLoginPassword('admin123');
    AuthPage.clickLogin();
    AuthPage.verifyDashboard();
  });
});
