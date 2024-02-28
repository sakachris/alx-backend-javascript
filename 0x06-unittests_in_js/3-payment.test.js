const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberSpy;

    beforeEach(() => {
        calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        calculateNumberSpy.restore();
    });

    it('should call Utils.calculateNumber with correct arguments and log the result', () => {
        const totalAmount = 100;
        const totalShipping = 20;

        sendPaymentRequestToApi(totalAmount, totalShipping);

        assert(calculateNumberSpy.calledOnceWithExactly('SUM', totalAmount, totalShipping));
    });
});
