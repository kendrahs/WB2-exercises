"use script";
//variables
let payRate = 48;
let hoursWorked = 43;
let overtimeHours = hoursWorked - 40

let taxRate;

//calculate gross pay
let grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5) * 52;
let annualIncome = grossPay * 52


//single filers
var singleFile = false;

if (singleFile == true) {
    if (annualIncome < 12000) {
        taxRate = 5;
    }
    else if (annualIncome < 24999) {
        taxRate = 10;
    } 
    else if (annualIncome < 75000) {
        taxRate = 15;
    } 
    else {
        (annualIncome < 75000)
        taxRate = 20;
       
}

//joint filers


//calculate tax based on gross
var withholding = grossPay - (taxRate/grossPay)


//message
console.log("You worked " + hoursWorked + " at $" + payRate + " an hour. That leads to a gross pay of $" + grossPay +". Because your filing status is " + singleFile + ", your tax withholding this period is $" + + " and you net pay comes out to be $" + + ".")}