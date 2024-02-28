const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('rounding integer inputs', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('rounding one integer and one float input', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('rounding float inputs, one up, one down', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('rounding float inputs, both up', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('rounding zero inputs', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('rounding float numbers, both down', () => {
        assert.strictEqual(calculateNumber(1.49999, 3.49999), 4);
    });

    it('rounding large integer inputs', () => {
        assert.strictEqual(calculateNumber(1000000000, 2000000000), 3000000000);
    });

    it('rounding large float inputs', () => {
        assert.strictEqual(calculateNumber(1.2345, 3.4567), 4);
    });
});
