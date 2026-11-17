// Challenge 7: Multiplication Table (1 to 10)

let num = Number(prompt("Enter a number:"));
let table = "";

for (let i = 1; i <= 10; i++) {
  table += num + " x " + i + " = " + (num * i) + "\n";
}

console.log(table);
