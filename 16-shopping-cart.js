// Challenge 16: Shopping Cart Total
// 10% tax, and 5% discount if the amount is over $100

let amount = Number(prompt("Enter purchase amount:"));

let tax = amount * 0.10;
let discount = 0;

if (amount > 100) {
  discount = amount * 0.05;
}

let finalPrice = amount + tax - discount;

console.log("Subtotal: $" + amount + ", Tax: $" + tax + ", Discount: $" + discount + ", Final: $" + finalPrice);
