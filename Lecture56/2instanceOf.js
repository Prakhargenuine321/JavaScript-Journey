//1)Instanceof checks if a constructor's prototype is in an object's prototype chain, returning a boolean. You can customize it with Symbol.hasInstance.

function user(userName , age , gender){
    this.userName = userName;
    this.age = age;
    this.gender = gender;

    return this;

}


//Instance of "constructor-function"
const userOne = new user("Prakhar Patel" , 22 , "M");

console.log(userOne); //it will return whole object.
console.log(userOne.userName); //for accessing each elements.
console.log(userOne.constructor); //it will return reference to the respective "object" whose instance we have been created.

//understanding "instanceOf" operator.
console.log(userOne instanceof user); //return "true" if it is an instance of an given "constructor-function"



