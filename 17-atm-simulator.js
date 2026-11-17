// Challenge 17: ATM Simulator
// 1 = Balance, 2 = Withdraw, 3 = Deposit

let operation = Number(prompt("Choose: 1-Balance, 2-Withdraw, 3-Deposit"));
let amount = 0;

// checking the balance doesn't need an amount
if (operation !== 1) {
  amount = Number(prompt("Enter amount:"));
}

let balance = Number(prompt("Enter current balance:"));

switch (operation) {
  case 1:
    console.log("Your balance is: $" + balance);
    break;
  case 2:
    if (amount > balance) {
      console.log("Insufficient balance");
    } else {
      balance = balance - amount;
      console.log("Withdrew $" + amount + ". New balance: $" + balance);
    }
    break;
  case 3:
    balance = balance + amount;
    console.log("Deposited $" + amount + ". New balance: $" + balance);
    break;
  default:
    console.log("Invalid operation");
}
