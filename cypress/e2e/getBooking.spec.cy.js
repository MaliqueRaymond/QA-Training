describe('Get Booking by ID', () => {
    it('should retrieve booking details by ID', () => {
      cy.request('GET', 'https://restful-booker.herokuapp.com/booking/1').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.firstname).to.eq('John');
      });
    });
  });
  