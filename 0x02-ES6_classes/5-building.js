/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    this._sqft = this.validateNumber(sqft, 'Square Feet');
  }

  validateNumber(value, attributeName) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attributeName} must be a valid number`);
    }
    return value;
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method to be overridden by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
