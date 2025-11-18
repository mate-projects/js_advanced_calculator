'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    currentValue: 0,
    get add() {
      return (value) => {
        this.currentValue += value;
      };
    },
    get subtract() {
      return (value) => {
        this.currentValue -= value;
      };
    },
    get multiply() {
      return (value) => {
        this.currentValue *= value;
      };
    },
    get divide() {
      return (value) => {
        this.currentValue /= value;
      };
    },
    get result() {
      return this.currentValue;
    },
    operate(callback, value) {
      callback(value);

      return this;
    },
    reset() {
      this.currentValue = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
