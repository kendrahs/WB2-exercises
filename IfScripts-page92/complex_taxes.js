"use script";
//variables
let payRate = 40;
let hoursWorked = 50;
let overtimeHours = hoursWorked - 40

let taxRate;

//calculate gross pay
let grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5) * 52;
let annualIncome = grossPay * 52


//single filers
if (annualIncome < 12000) {

}

//joint filers



//calculate tax based on gross
console.log("You worked " + hoursWorked + " at $" + payRate + " an hour. That leads to a gross pay of $" + grossPay +". Because your filing status is " + + ", your tax withholding this period is $" + + " and you net pay comes out to be $" + + ".") 