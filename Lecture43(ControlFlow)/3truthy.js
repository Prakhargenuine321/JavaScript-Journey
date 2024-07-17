//trythy values are those values which are assumed to be true and 'true' are strict.
const userEmail = []; //assign 'string' here and then 'exe' and then assign 'empty-string' and again 'exe'.

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} -->"" & '' iskae andar hai mltb string hai.

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { //it  = will store all "keys" of given object in array from and then check it's length.
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??):this operator will operate over--> 1)null 2)undefined
//returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
//The nullish coalescing operator has the fifth-lowest operator precedence, directly lower than || and directly higher than the conditional (ternary) operator.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")