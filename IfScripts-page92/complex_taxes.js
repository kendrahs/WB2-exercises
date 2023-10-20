"use script";
//variables
let payRate = 48;
let hoursWorked = 43;
let overtimeHours = hoursWorked - 40
let taxRate;

//calculate gross pay
let grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5) * 52;
let annualIncome = grossPay * 52
let filingStatus = "joint"


//single filers
if (filingStatus == single) {
    if (annualIncome < 12000) {
        taxRate = 0.05;
    }
    if (annualIncome < 25000) {
        taxRate = 0.10;
    } 
    if (annualIncome < 75000) {
        taxRate = 0.15;
    } 
    if {
        (annualIncome > 75000)
        taxRate = 0.20;
    }
    else {
        ("Error.")
    }
}

//joint filers
if (filingStatus == joint) {
    if (annualIncome < 12000) {
        taxRate = 0;
    }
    if (annualIncome < 25000) {
        taxRate = 0.06;
    } 
    if (annualIncome < 75000) {
        taxRate = 0.11;
    } 
    if {
        (annualIncome > 75000)
        taxRate = 0.20;
    }
    else {
        ("Error.")
    }
}

//calculate tax based on gross
var withholding = grossPay - (taxRate/grossPay)


//message
console.log("You worked " + hoursWorked + " at $" + payRate + " an hour. That leads to a gross pay of $" + grossPay +". Because your filing status is " + singleFile + ", your tax withholding this period is $" + + " and you net pay comes out to be $" + + ".")}