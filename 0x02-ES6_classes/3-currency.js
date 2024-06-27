/**
 * Represents a currency with a code and name.
 *
 * @class Currency
 * @param {string} code - The currency code.
 * @param {string} name - The currency name.
 */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Gets the currency code.
   *
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   *
   * @param {string} val - The new currency code.
   */
  set code(val) {
    this._code = val;
  }

  /**
   * Gets the currency name.
   *
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   *
   * @param {string} val - The new currency name.
   */
  set name(val) {
    this._name = val;
  }

  /**
   * This method returns a formatted string representing the currency's full name and code.
   *
   * @returns {string} A string in the format "{name} ({code})"
   */
  displayFullCurrency() {
    const result = `${this._name} (${this._code})`;
    return result;
  }
}
