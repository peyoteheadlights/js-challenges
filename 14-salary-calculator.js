// Challenge 14: Salary Calculator
// hours over 40 are paid at 1.5x the rate

let hours = Number(prompt("Enter hours worked:"));
let rate = Number(prompt("Enter hourly rate:"));

let regularPay;
let overtimePay;

if (hours > 40) {
  regularPay = 40 * rate;
  overtimePay = (hours - 40) * rate * 1.5;
} else {
  regularPay = hours * rate;
  overtimePay = 0;
}

let total = regularPay + overtimePay;

console.log("Regular: $" + regularPay + ", Overtime: $" + overtimePay + ", Total: $" + total);
