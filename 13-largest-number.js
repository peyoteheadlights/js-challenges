// Challenge 13: Largest of three numbers (nested if)

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));
let largest;

if (a >= b) {
  if (a >= c) {
    largest = a;
  } else {
    largest = c;
  }
} else {
  if (b >= c) {
    largest = b;
  } else {
    largest = c;
  }
}

console.log("Largest number is: " + largest);
