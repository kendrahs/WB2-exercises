"use script";

//variables
let payRate = 40;
let hoursWorked = 50;
let overtimeHours = hoursWorked - 40

//calculate gross pay 
let grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5);

//calculating overtime
if (hoursWorked > 40){
    overtimeHours = hoursWorked - 40
}
else {
    overtimeHours = 0
}


//testing with different # of hours
console.log("You worked " + hoursWorked + " with " + overtimeHours + " of them being overtime.")
console.log("You've made $" + grossPay + ".")
