// Challenge 5: Average Score Calculator
// pass if average >= 50

let score1 = Number(prompt("Enter score 1:"));
let score2 = Number(prompt("Enter score 2:"));
let score3 = Number(prompt("Enter score 3:"));

let average = (score1 + score2 + score3) / 3;
let status;

if (average >= 50) {
  status = "Pass";
} else {
  status = "Fail";
}

console.log("Average: " + average.toFixed(2) + ", Status: " + status);
