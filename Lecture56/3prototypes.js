//In javascript everything is 'object'
//So, JS is an prototypal language.

function multipleBy5(num){
    this.num = num;
    return num*5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5)); //this is treating it just as a function

console.log(multipleBy5.power);

console.log(multipleBy5);


//All JS objects inherit properties and methods from 'prototype'.
//as, 'Date' object inherits from 'Date.prototype'.

//The 'Object.prototype' is on the top of the prototype inheritance chain:
console.log(multipleBy5.prototype); 


//we can add new properties to the object by using 'protoype'
multipleBy5.prototype.count = 10;


function createUser(username, price){
    this.username = username;
    this.price = price;
}

createUser.prototype.increment = function(){
    this.price++;  //here we are using to identify kisnae isko call kiya hai
    //agar hum 'this' nahi use karte hain to it will not identify current-context.
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

const chai = new createUser("chai", 25); //'new' keyword use karna jaroori hai,
// Without the new keyword, this would point to the global object, leading to unexpected results.

const tea = new createUser("tea", 250);

//--> In modern JavaScript, classes are often used instead of constructor functions, but the new keyword still plays the same role behind the scenes when creating instances of classes.

chai.printMe();

// tea.printMe(); //as told it will lead to undefined behaviour, but if we use 'new' it will work fine.
tea.printMe();


//IMPORTANT NOTE-->
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/