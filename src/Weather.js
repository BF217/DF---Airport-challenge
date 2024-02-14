export class Weather {
  constructor() {
    this.stormy = false;
  }

  static isStormy() {
    return this.stormy; // Math.random() < 0.5; // AI suggested to use Math.random() to generate random weather
  } // changed to false to control demonstration in console application

  static setStormy(condition) {
    this.stormy = condition;
  }
}

export default Weather;
