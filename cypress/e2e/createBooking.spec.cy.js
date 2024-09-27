describe('Create Booking', () => {
    it('should successfully create a booking', () => {
      cy.request('POST', 'https://restful-booker.herokuapp.com/booking', {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2023-10-01',
          checkout: '2023-10-10',
        },
        additionalneeds: 'Breakfast',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.booking).to.have.property('bookingid');
      });
    });
  });
  
  