const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
  it('Correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Correct result when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Correct result when :id is NOT a number (=> 404)', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.be.equal('Cannot GET /cart/hello');
      done();
    });
  });
});
