const request = require('request');
const { expect } = require('chai');

// const app = require('./api');

describe('Index page', () => {
  it('Correct GET/ Response', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  /*it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  
  it('Correct response for invalid route?', (done) => {
    request.get('http://localhost:7865/invalid', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Server should return 404 for invalid route', (done) => {
    request.get('http://localhost:7865/invalid', (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });*/
});
