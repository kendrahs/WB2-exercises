var numberOfPeople = 12

var numberOfVans = numberOfPeople / 15
var vanRentCost = 250 * numberOfVans
var eachPersonPayment = vanRentCost / numberOfPeople

console.log ("We have " + numberOfPeople + " people going on a tour, so we'll be needing " + Math.round(numberOfVans) + " van(s). That's $" + vanRentCost.toFixed(2) + ". If we are to split, the payment evenly per person, it'll come out to be $" + eachPersonPayment.toFixed(2) + ".")