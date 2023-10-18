var grossMonthly = 5000;
var taxMoney = (23 * grossMonthly) / 100;


var netMonthly = grossMonthly - taxMoney;

console.log 
    ("I made $" + grossMonthly + " this month, but left with $" + netMonthly.toFixed(2) + " after $" + taxMoney.toFixed(2) + " was withheld for taxes.")