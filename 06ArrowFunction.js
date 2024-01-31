const user = {
    name: "Prakhar",
    age: 21,
    branch: "ComputerScience",
    welcomeMessage: function() {
        // console.log(this.name + " Welcome to code studio!");

        // following is another way to write above line
        console.log(`${this.name} Welcome to code studio!`);

        //by printing only "this" we will get whole object description
        console.log(this);
    }
}

user.welcomeMessage();

//altering the object value and see the change in "this" reference
user.name = "Harshit Patel";
user.welcomeMessage();

//most important point what we get if there is no global object here, we get an "empty-object" but in browser we will get "window-object".
console.log(this);

//agar hum "function" ke anadar "this" print karte hain toh we get a lot values but hum function kae andar kisi ko access nahi kar sakte hain.
const thisInsideFunction = function (){
    console.log(this);
}
thisInsideFunction(); //function call karne ka tareeka yahan par bhi wahi hai.

//ARROW FUNCTION-->

//Syntax-->
const arrowFunctionSynatx = () => {
    console.log("Hello hum hain 'Arrow Function'");
}
arrowFunctionSynatx();

//In any "Arrow Function" also hum "this" ka use karke we can't access and if we print "this" inside it it will return "empty-object('{}')"
const arrowFunctionThisBehaviour = () =>{
    const name = "Prakhar";
    console.log(this);
    console.log("Daekha 'empty-object' aaya!");

    console.log(this.name);
    console.log("Daekha undefined aaya!");

}
arrowFunctionThisBehaviour();

//Implicit return in "Arrow Function"-->Remove Paranthesis + Single Line Code
//Rule yaeh hai ki agar "curly-braces" lagaya hai toh "return" keyword use karna padega but not in '()'.
const implicitBehaviourArrowFunction = (num1 , num2) => (num1 + num2);
const result_one = implicitBehaviourArrowFunction(10 , 12);
console.log(result_one);

//Jab yaeh return karega "object" then inside we have to use "{}" beacuse object is declared like this.
const printName = () => ({name: "Prakhar Patel"});
console.log(printName); //-->Is tarah se call karne par it will return the type of it.
console.log(printName()); //-->It will give the whole object.
console.log(printName().name);