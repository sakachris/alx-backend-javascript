const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(() => {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it('should log the correct message for totalAmount = 100 and totalShipping = 20', () => {
        calculateNumberStub.returns(120);

        sendPaymentRequestToApi(100, 20);

        assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
    });

    it('should log the correct message for totalAmount = 10 and totalShipping = 10', () => {
        calculateNumberStub.returns(20);

        sendPaymentRequestToApi(10, 10);

        assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
    });
});
