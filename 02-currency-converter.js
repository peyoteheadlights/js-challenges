// Challenge 2: Currency Converter
// Convert an amount in EGP to USD, EUR and GBP

let egp = Number(prompt("Enter amount in EGP:"));

let usdRate = 47.22;
let eurRate = 54.35;
let gbpRate = 61.95;

let usd = (egp / usdRate).toFixed(2);
let eur = (egp / eurRate).toFixed(2);
let gbp = (egp / gbpRate).toFixed(2);

console.log(egp + " EGP = $" + usd + " USD, €" + eur + " EUR, £" + gbp + " GBP");
