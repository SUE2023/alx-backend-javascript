// Import the Currency class from the 3-currency.js file
import { Currency } from './3-currency';

export default class Pricing {
  // Constructor with two attributes: amount and currency
  constructor(amount, currency) {
   // if (!(currency instanceof Currency)) {
     // throw new Error('currency must be an instance of Currency');
   // }
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error('currency must be an instance of Currency');
    }
    this._currency = value;
  }

  // Method to return the formatted pricing
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to return the converted price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
