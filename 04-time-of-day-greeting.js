// Challenge 4: Time of Day Greeting
// hour should be a number from 0 to 23

let hour = Number(prompt("Enter the hour (0-23):"));

if (hour >= 0 && hour <= 11) {
  console.log("Good morning!");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
