const score = 400
// console.log(score);

const balance = new Number(100) //defining number using object(Number)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); //to get values upto the decimal number passed as an argument here "1"

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //returns a string representing this number to the specified number of significant digits.
//Learn about significant digits:- https://byjus.com/maths/significant-figures/


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //this will return larger values in easy understandable format
//by-default return in terms of US-Standards but in above code it will return in Indian-standards

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); //run this code on Browser Console to get all the methods

// console.log(Math.abs(-4)); //converts -ive value into +ive values

// console.log(Math.round(4.6)); //rounding-off the number
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //it returns value between 0 and 1 
console.log((Math.random()*10) + 1); //to get values greater than 1 you need to multiply it as per requirement
console.log(Math.floor(Math.random()*10) + 1);


//defining the range to get values within range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)