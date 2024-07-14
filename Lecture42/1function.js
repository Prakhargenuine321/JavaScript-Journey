//Function Declaration--
function greet(nameOne) {
    return `Hello, ${nameOne}!`;
}
// console.log(greet("Bharat"));

//Function Expression--
const greetOne = function(nameTwo) {
    return `Hello, ${nameTwo}`;
}
// console.log(greetOne("Bharat!"));

//Arrow Function--Mostly used!
const greetTwo = (nameThree) =>{
    return `Hello, ${nameThree}`; //using "string-interpolation".
}
// console.log(greetTwo("Hindustan!"));


//Function-->
function sayMyName(){
    console.log("Hello, Prakhar!");
}

// sayMyName //it is just an reference.
// sayMyName(); //it is an actual call of function.



function addTwoNumbers(number1, number2){ //values passed during definition are "parameters".

    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3, 5); //values passed during function call are "arguments".

// console.log("Result: ", result);



// function loginUserMessage(username){
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("Prakhar"));


function loginUserMessage(username = "sam"){ //the value given here is by-default value which works when no value is passed to function.
    if(!username){ //it is just like "if(username === undefined)" but written code is better way because undefined is treated as "false" so whenever no value is passed it will be true and this will run.
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());