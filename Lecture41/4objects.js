// Objects are created in 2 ways --> 1)Using Constructor 2)Using Literals
// Singleton -->when object is created using constructor.


// object literals

//Taking a symbol and using it as an "key" in objects.
//Declaration of symbol.
const mySym = Symbol("key1"); 


const JsUser = {
    name: "Prakhar",
    "full name": "Prakhar Patel",
    [mySym]: "mykey1", //syntax to use symbol as an key is "[mySym]" inside brackets.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //it is better method to access properties of an objects.
// console.log(JsUser["full name"]); //as you cannot access it like as "JsUser.full name" it will give an error.
// console.log(JsUser[mySym]); //accessing the symbol "key".


//Changing the values of an properties.
JsUser.email = "hitesh@chatgpt.com";

// Object.freeze(JsUser); //freezing the values so that it will not be changed.
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);


//Functions are like type-1 members inside objects as they are treated as normal variables.
//Function with normal values.
JsUser.greeting = function(){
    console.log("Hello JS user");
}

//Function by using another property of same object
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //for these type you have to do "String-Interpolation".
}

JsUser.greeting();
JsUser.greetingTwo();