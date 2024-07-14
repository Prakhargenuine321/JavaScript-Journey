//Function call stack -->In this we need to just know that how function deals with stack.

//1)Assigning function to a variable.

let sayHello = function(){
    console.log("Hello Ji Kya Haal Chaal!");
}
sayHello();

//2)Calling function in function

function greet(sayHello , name){
    console.log("Hello" , name);
    sayHello();
}
greet(sayHello , "Prakhar Patel");

//3)Returning function from function

function solve(number){
    return function solveSquare(number){
        return number * number;
    }
}

let ans = solve(5); //solve will return an function

let finalAns = ans(10); //returned function has passed value from here
console.log(finalAns);


//4)Storing function in Data-Structure
const arrOfFunctions = [
    function(a , b){
        return a + b;
    },
    function(a , b){
        return a * b;
    },
    function(a , b){
        return a - b;
    }
];

let add = arrOfFunctions[0];
let ansAdd = add(5 , 10);
console.log(ansAdd);


let mul = arrOfFunctions[1];
let ansMul = mul(5 , 10);
console.log(ansMul);


let sub = arrOfFunctions[2];
let ansSub = sub(5 , 10);
console.log(ansSub);


//Uncomment and try it!
// arrOfFunctions.forEach((value , index)=>{
//     console.log("index: " , index , " value: " , value);
// })


//5)Using functions in an object
let obj = {
    num : 12,
    age : 22,
    greet : ()=>{
        console.log("Hello Everyone!");
    }
}

console.log("Number: " , obj.num , "Age: " , obj.age);
obj.greet();

