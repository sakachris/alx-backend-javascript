const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should return the sum of rounded numbers, up and down', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return the sum of rounded numbers, both up', () => {
            assert.strictEqual(calculateNumber('SUM', 1.54, 4.5), 7);
        });

        it('should return the sum of zero and positive number', () => {
            assert.strictEqual(calculateNumber('SUM', 0, 4.5), 5);
        });

        it('should return the sum of zero and negative number', () => {
            assert.strictEqual(calculateNumber('SUM', 0, -4.5), -4);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the subtraction result of rounded numbers, up & down', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return the subtraction result of rounded numbers, both up', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.54, 4.5), -3);
        });

        it('should return the subtraction result of zero and positive number', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0, 4.5), -5);
        });

        it('should return the subtraction result of zero and negative number', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0, -4.5), 4);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the division result of rounded numbers when divisor is not zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when divisor is zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return the division result of negative numbers when divisor is not zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
        });

        it('should return the division result of zero and positive number when divisor is not zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0, 4.5), 0);
        });

        it('should return the division result of zero and negative number when divisor is not zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0, -4.5), -0);
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for invalid type', () => {
            assert.throws(() => {
                calculateNumber('INVALID', 1.4, 4.5);
            }, /^Error: Invalid type\. Type must be SUM, SUBTRACT, or DIVIDE\.$/);
        });
    });
});
