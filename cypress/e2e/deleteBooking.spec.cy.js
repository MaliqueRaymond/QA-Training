describe('Delete Booking', () => {
    it('should delete a booking by ID', () => {
      cy.request('DELETE', 'https://restful-booker.herokuapp.com/booking/1').then((response) => {
        expect(response.status).to.eq(201); // 201 indicates successful deletion
      });
    });
  });
  