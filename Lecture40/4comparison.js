// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //try to have same data-type for conversion as this is an unpredictable results.
// console.log("02" > 1);


//equality check and comparisons work differently where comparison converts "null" into "number" treating it as "0"
//avoid these types of converions
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2); //it will check "datatype" as well as "value" so it is an scrict-check. 