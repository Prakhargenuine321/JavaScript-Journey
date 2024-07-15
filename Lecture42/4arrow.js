const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //here 'this' refers to current context(scope).
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); //in 'node' environment it will give "empty-object" as no object is in current context but on 'browser' it will give "window" object.


//Arrow Function-->


//Using normal function-->so you can't use this within function and wait for further discussions.
// function chai(){
    // let username = "hitesh";
    // console.log(this.username); //if you execute "console.log(this)" you will get a lot but if you do this (already written) you will get 'undefined'
// }
// 
// chai();


//Using function expression-->Same problem as of above.
// const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// }
// chai();

//Using Arrow function-->Same problem as of above but if you try to console "this" here you will get "empty-object" but in above two ways we get a lot functionalities.
//'this' inside an arrow function is same as outside the function as arrow function don't have their own "this" context.
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }


// chai();


//following are the few more methods for arrow function.

//Explicit return-->
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit return-->
// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 ); //-->if "{}" then must be written 'return' keyword but if paranthesis than no need to write 'return' keyword
//Above concept will be used a lot in ReactJS.

const addTwo = (num1, num2) => ({username: "hitesh"}); //if you return 'object' then it must be wrap inside paranthesis "()".


// console.log(addTwo(3, 4));


//It will be discussed in detail in further "loop" lectures.
// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach();