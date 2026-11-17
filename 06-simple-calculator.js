// Challenge 6: Simple Calculator (using switch)

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      result = "Cannot divide by zero";
    } else {
      result = num1 / num2;
    }
    break;
  default:
    result = "Invalid operator";
}

console.log(num1 + " " + operator + " " + num2 + " = " + result);
