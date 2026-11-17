# JS Challenges

My solutions for Assignment 7: the 20 challenges on the JS Challenges site (https://tinyurl.com/js-challenges).

Topics covered: variables, data types, `prompt()` and `Number()`, if / else if / else, nested if, switch, for loops, while loops and nested loops.

## How to run

The solutions use `prompt()` for input and `console.log()` for output, so they run in the browser:

- paste the code into the challenge's editor on the site and press **Run** / **Submit Solution**, or
- open the browser console (F12) and paste the code there.

## Challenges

| # | Challenge | File | Main idea |
|---|-----------|------|-----------|
| 1 | Personalized Greeting | `01-personalized-greeting.js` | variables, string concatenation |
| 2 | Currency Converter | `02-currency-converter.js` | division, `toFixed(2)` |
| 3 | Even or Odd Checker | `03-even-or-odd.js` | `%` and if-else |
| 4 | Time of Day Greeting | `04-time-of-day-greeting.js` | if / else if / else |
| 5 | Average Score Calculator | `05-average-score.js` | average, pass if >= 50 |
| 6 | Simple Calculator | `06-simple-calculator.js` | switch on the operator |
| 7 | Multiplication Table | `07-multiplication-table.js` | for loop 1 to 10 |
| 8 | Even Numbers Printer | `08-even-numbers.js` | for loop with `i += 2` |
| 9 | Factorial Calculator | `09-factorial.js` | for loop, accumulator |
| 10 | Smallest Integer Finder | `10-smallest-integer.js` | while loop |
| 11 | Value Swapper | `11-value-swapper.js` | swap with + and - (no third variable) |
| 12 | Movie Access Checker | `12-movie-access.js` | `\|\|` operator |
| 13 | Largest Number Finder | `13-largest-number.js` | nested if |
| 14 | Salary Calculator | `14-salary-calculator.js` | overtime at 1.5x after 40 hours |
| 15 | BMI Calculator | `15-bmi-calculator.js` | if-else ladder |
| 16 | Shopping Cart Total | `16-shopping-cart.js` | 10% tax, 5% discount over $100 |
| 17 | ATM Simulator | `17-atm-simulator.js` | switch on the operation |
| 18 | FizzBuzz | `18-fizzbuzz.js` | for loop + `%` |
| 19 | Left Star Pattern | `19-left-star-pattern.js` | nested for loops |
| 20 | Right Star Pattern | `20-right-star-pattern.js` | nested loops (spaces then stars) |

## Notes

- In challenge 12, `Boolean("no")` is `true` (any non-empty string is truthy), so I compare the answer with `"yes"` instead.
- In challenge 17, checking the balance (option 1) doesn't ask for an amount.
- The site's console joins every `console.log` together, so challenges 7, 18, 19 and 20 build one string and log it once.
