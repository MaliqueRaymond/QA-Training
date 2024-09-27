describe('Update Booking', () => {
    it('should update a booking by ID', () => {
      cy.request('PUT', 'https://restful-booker.herokuapp.com/booking/1', {
        firstname: 'Jane',
        lastname: 'Smith',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.firstname).to.eq('Jane');
      });
    });
  });
  