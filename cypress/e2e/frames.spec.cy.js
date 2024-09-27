describe('Testing Frames on DemoQA', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/frames');
    });
  
    it('should verify content inside the first frame', () => {
      cy.get('#frame1').then(($iframe) => {
        const iframe = $iframe.contents().find('body');
        cy.wrap(iframe).find('#sampleHeading').should('have.text', 'This is a sample page');
      });
    });
  
    it('should verify content inside the nested frame', () => {
      cy.visit('https://demoqa.com/nestedframes');
      cy.get('iframe[srcdoc]').then(($iframe) => {
        const body = $iframe.contents().find('body');
        cy.wrap(body).find('p').should('have.text', 'Child Iframe');
      });
    });
  });
  