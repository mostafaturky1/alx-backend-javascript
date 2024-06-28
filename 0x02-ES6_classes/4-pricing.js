import Currency from "./3-currency";
/**
 * A class representing a Pricing.
 */
export default class Pricing {
  /**
   * Create a Pricing.
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency of the pricing.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Get the amount of the pricing.
   * @returns {number} The amount of the pricing.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set the amount of the pricing.
   * @param {number} val - The new amount of the pricing.
   * @throws {TypeError} If the value is not a number.
   */
  set amount(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = val;
  }

  /**
   * Get the currency of the pricing.
   * @returns {Currency} The currency of the pricing.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Set the currency of the pricing.
   * @param {Currency} val - The new currency of the pricing.
   * @throws {TypeError} If the value is not an instance of Currency.
   */
  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new TypeError('Currency must be Currency');
    }
    this._currency = val;
  }

  /**
   * Display the full price in the format: "amount currencyName (currencyCode)".
   * @returns {string} The full price.
   */
  displayFullPrice() {
    const result = `${this._amount} ${this._currency.name} (${this._currency.code})`;
    return result;
  }

  /**
   * Convert a price using a conversion rate.
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted price.
   * @throws {TypeError} If the amount or conversionRate is not a number.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
