/* advanced_calculator.js */

// Filename: advanced_calculator.js
// Description: A sophisticated and elaborate calculator implementation in JavaScript
// Author: [Your Name]

class Calculator {
  constructor() {
    this.result = 0;
  }

  // Add two numbers
  add(a, b) {
    this.result = a + b;
    return this;
  }

  // Subtract two numbers
  subtract(a, b) {
    this.result = a - b;
    return this;
  }

  // Multiply two numbers
  multiply(a, b) {
    this.result = a * b;
    return this;
  }

  // Divide two numbers
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result = a / b;
    return this;
  }

  // Power of a number
  power(base, exponent) {
    this.result = Math.pow(base, exponent);
    return this;
  }

  // Square root of a number
  squareRoot(num) {
    if (num < 0) {
      throw new Error("Cannot calculate square root of a negative number");
    }
    this.result = Math.sqrt(num);
    return this;
  }

  // Calculate the factorial of a number
  factorial(num) {
    if (num < 0) {
      throw new Error("Cannot calculate factorial of a negative number");
    }
    let factorial = 1;
    for (let i = num; i > 1; i--) {
      factorial *= i;
    }
    this.result = factorial;
    return this;
  }

  // Get the current result
  getResult() {
    return this.result;
  }
}

// Usage example:

const calculator = new Calculator();

const result = calculator
  .add(5, 3)
  .subtract(2, 1)
  .multiply(4, 2)
  .divide(10, 5)
  .power(2, 3)
  .squareRoot(16)
  .factorial(5)
  .getResult();

console.log("The final result is:", result);

// Output:
// The final result is: 362880