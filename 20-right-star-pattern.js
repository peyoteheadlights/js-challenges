// Challenge 20: Right Triangle Star Pattern
//   *
//  **
// ***

let rows = Number(prompt("Enter number of rows:"));
let pattern = "";

for (let i = 1; i <= rows; i++) {
  // spaces first
  for (let j = 1; j <= rows - i; j++) {
    pattern += " ";
  }
  // then stars
  for (let k = 1; k <= i; k++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);
