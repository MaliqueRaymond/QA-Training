describe('API Health Check', () => {
    it('should return 201 status code for the HealthCheck endpoint', () => {
      cy.request('GET', 'https://restful-booker.herokuapp.com/ping').then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
  