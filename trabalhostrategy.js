// Defining the Strategy interface
class Strategy {
  execute(num1, num2) {}
}

// Concrete implementation of Strategy for addition operation
class AdditionStrategy extends Strategy {
  execute(num1, num2) {
    return num1 + num2;
  }
}

// Concrete implementation of Strategy for subtraction operation
class SubtractionStrategy extends Strategy {
  execute(num1, num2) {
    return num1 - num2;
  }
}

// Concrete implementation of Strategy for multiplication operation
class MultiplicationStrategy extends Strategy {
  execute(num1, num2) {
    return num1 * num2;
  }
}

// Context class that uses the selected Strategy
class Calculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calculate(num1, num2) {
    return this.strategy.execute(num1, num2);
  }
}

// Example usage of the calculator
const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));
const operation = prompt("Enter the operation (+, -, *): ");

let strategy;

switch (operation) {
  case '+':
    strategy = new AdditionStrategy();
    break;
  case '-':
    strategy = new SubtractionStrategy();
    break;
  case '*':
    strategy = new MultiplicationStrategy();
    break;
  default:
    console.log("Invalid operation!");
    process.exit();
}

const calculator = new Calculator(strategy);
const result = calculator.calculate(num1, num2);
console.log("Result:", result);
