describe('Testing Alerts on DemoQA', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/alerts');
    });
  
    it('should handle a simple alert', () => {
      cy.get('#alertButton').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('You clicked a button');
      });
    });
  
    it('should handle a timer alert', () => {
      cy.get('#timerAlertButton').click();
      cy.wait(5000); // Wait for the timer to finish
      cy.on('window:alert', (str) => {
        expect(str).to.equal('This alert appeared after 5 seconds');
      });
    });
  
    it('should handle confirm alert', () => {
      cy.get('#confirmButton').click();
      cy.on('window:confirm', (str) => {
        expect(str).to.equal('Do you confirm action?');
      });
      cy.on('window:confirm', () => true); // Accept the confirm
      cy.get('#confirmResult').should('have.text', 'You selected Ok');
    });
  });
  