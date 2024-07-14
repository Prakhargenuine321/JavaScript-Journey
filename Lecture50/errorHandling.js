//Error -->It is an event which disrupts the normal flow of an program.

//Types of Error -->
//There are two types of error- 
//1)Compile-Time(at parsing of program) as[console.log(1; ]
//2)Run-Time(error at execution of program) as[console.log(x) --> but 'x' is not defined]

//It's all about how efficiently you handle errors.


//Handling -->We can handle it using "try-catch" block
try {
    console.log("Try block starts here!");
    console.log(x);
    console.log("TRY block ends here!");
} catch (error) {
    console.log("Catch blcok ends here!");
    console.log("Printing the type of error: " , error);
}
//finally block -->Not depends error it will run by any-mean.
finally{
    console.log("Main run hounga error sae mtlb nahi hai!");
}


//creating custom error using "throw"
try {
    console.log("Try block starts here!");
    console.log(x);
    console.log("TRY block ends here!");
} catch (error) {
    throw new Error("Pahle declare variable and then use it!");
}

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Using throw for custom errors!");
}