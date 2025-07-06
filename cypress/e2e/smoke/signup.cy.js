import AuthPage from '../../support/pages/AuthPage';

describe('Smoke: Sign Up Flow', () => {
  it('should register a new user', () => {
    AuthPage.visitRegister();
    const email = `user_${Date.now()}@test.com`;
    AuthPage.enterName('Test User');
    AuthPage.enterEmail(email);
    AuthPage.enterPassword('Password123!');
    AuthPage.confirmPassword('Password123!');
    AuthPage.clickRegister();
    AuthPage.verifyRegistrationSuccess();
  });
});
