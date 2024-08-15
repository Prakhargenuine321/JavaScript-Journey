class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

//here we are using 'extends' for inheritance so ab woh bar-bar 
//'__proto__' ya 'Object.setPrototypeOf()' ko use karne ka jhanjhat nahi hai 
//but BTS yahi kam ho raha hai.

class Teacher extends User{
    constructor(username, email, password){
        super(username); //super keyword ka use object literal ya class ke [[Prototype]] 
        //par properties access karne ke liye hota hai, ya phir superclass ka constructor invoke karne ke liye.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123"); //using 'new' keyword is mandatory to create new 'instance' of class
//which is know as an 'object'.

chai.logMe();
const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(chai instanceof User);