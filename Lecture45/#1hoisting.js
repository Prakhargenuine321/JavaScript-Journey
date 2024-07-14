//Hoisting --> Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

//1)Function hoisting -->Calling function before it's declaration and woh call bhi ho jayega because in JS all the function declaration are moved at the top of scope by the compiler.

printName("Prakhar Patel");

function printName(yourName){
    console.log(yourName);
}

//2)Variable Hoisting -->In function whole function with logic moved at the top of the scope but in case of "var" sirf uska declaration top maein move hoga laekin usko assigned value move nahi hogi.

console.log(age); //access karta hai but assigned value nahi so answer will be "undefined".

var age = 22;


//3)"let" and "const" cannot accept hoisting and if we will try to do it will throw an "Reference-Error".
//Uncomment below and check it!

// console.log(num);
// let num = 20;


//4)Similarly hoisting is also not accepted by "function-expression" and if we will try to do it will throw an "Reference-Error".
//Uncomment below and check it!

//function-expression method
// sayHello();
// let sayHello = function(){
//     console.log("Hello everyone!");
// }

//arrow-function method
// sayHello();
// let sayHello = ()=>{
//     console.log("Hello everyone!");
// }