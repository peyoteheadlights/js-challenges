// Challenge 11: Swap two numbers without a third variable

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("After Swapping: num1=" + num1 + ", num2=" + num2);
