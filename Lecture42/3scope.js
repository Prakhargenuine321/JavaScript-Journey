//var c = 300;
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


//For nested function "inner-function" can access outer function members but outer function can't access inner function members.
function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); //it will throw an error as it is out of it's scope.

    two();

}

// one()

if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


//In below code there are two cases:
//1)function using normal method -->here we can call function before declaration due to hoisting(where interpreter moved it's declaration to the top of an current scope).
//2)funtion expression -->here we can't call function before declaration as it is referenced in "variable".
console.log(addone(5));

function addone(num){
    return num + 1;
}



addTwo(5);
const addTwo = function(num){
    return num + 2;
}


//Some important points-->
//1)Global scope is different in "windows" of browser and different for node on 'VS'.