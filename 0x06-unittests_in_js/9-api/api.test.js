const request = require('request');
const { expect } = require('chai');

const app = require('./api');

describe('Cart page', () => {
  it('Correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Correct result when :id is NOT a number (=> 404)', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Cannot GET /cart/hello');
      done();
    });
  });
});
