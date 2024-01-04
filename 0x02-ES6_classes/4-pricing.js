import Currency from './3-currency';

/* eslint-disable class-methods-use-this */
export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount, 'Amount');

    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._currency = currency;
  }

  validateNumber(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a valid number`);
    }
    return value;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.validateNumber(newAmount, 'Amount');
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._currency = newCurrency;
  }

  // Method to display full price information
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
