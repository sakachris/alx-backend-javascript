/* eslint-disable class-methods-use-this */

export default class Currency {
  constructor(code, name) {
    this._code = this.validateString(code, 'Code');
    this._name = this.validateString(name, 'Name');
  }

  // function to validate string attributes
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this.validateString(newCode, 'Code');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'Name');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
