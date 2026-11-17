// Challenge 12: Movie Access Checker
// can enter if age >= 18 OR has a ticket

let age = Number(prompt("Enter your age:"));
let ticket = prompt("Do you have a ticket? (yes/no)");

// Boolean("no") is still true, so compare the text instead
let hasTicket = ticket === "yes";
let canEnter = false;

if (age >= 18 || hasTicket) {
  canEnter = true;
}

console.log("Access granted: " + canEnter);
