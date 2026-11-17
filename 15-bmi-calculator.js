// Challenge 15: BMI Calculator
// BMI = weight / (height * height)

let weight = Number(prompt("Enter your weight (kg):"));
let height = Number(prompt("Enter your height (m):"));

let bmi = weight / (height * height);
let category;

if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi < 25) {
  category = "Normal weight";
} else if (bmi < 30) {
  category = "Overweight";
} else {
  category = "Obese";
}

console.log("BMI: " + bmi.toFixed(2) + " - " + category);
