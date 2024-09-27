describe('Custom Login Command Test', () => {
    it('should successfully log in using the custom command', () => {
      cy.visit('https://example.com/login');
      cy.login('testuser', 'testpassword');  // Using the custom command
      cy.url().should('include', '/dashboard');
    });
  });
  