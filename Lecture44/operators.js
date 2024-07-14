//Arithmetic Operators

let numOne = 10;
let numTwo = 2;

// console.log(numOne + numTwo);
// console.log(numOne - numTwo);
// console.log(numOne * numTwo);
// console.log(numOne / numTwo);
// console.log(numOne % numTwo);
// console.log(numOne ** numTwo);

//Unary Operators

// console.log(++numOne);
// console.log(numOne++);
// console.log(--numOne);
// console.log(numOne--);
// console.log(numOne);

//Assignment Operator

// let a = 10;
// console.log(a);
// a += 10;
// console.log(a);
// a *= 2;
// console.log(a);

//Comparison Operator(T/F)-->You know it right

// ~Strict equality~ is denoted by '==='. When we use strict equality operator, both the data-type and the value are checked to determine equality, and it returns a boolean answer.
console.log('5' === 5);
// ~Loose equality~ is denoted by '=='. When we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer.
console.log('5' == 5);

//Ternary Operator

let age = 25;
let status1 = (age > 18) ? 'I can vote' : 'I cannot vote';
console.log(status1);

//Logical Operator
//Logical Operators with non-boolean values: refer-->JS Notes.
//Also understand concept of short-circuiting: refer-->JS Notes.
console.log(false || 6 || 7 || 12); //Here 6 will be print because of short-circuiting it will just see one 'truthy'-value and skip rest and print '6'.

//Bit-Wise Operator
console.log(2 | 10);
console.log(~(0));
console.log(2 ^ 2);

console.log(5<<2); //Left shift operator-->num*2^digit
console.log(10 >> 2); //Rigth shift operator-->num/2^digit


