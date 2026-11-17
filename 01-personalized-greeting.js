// Challenge 1: Personalized Greeting
// Ask for name and age, then print a message with the birth year

let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let currentYear = 2026;
let birthYear = currentYear - age;

console.log("Hello " + name + "! You are " + age + " years old and you were born around " + birthYear);
