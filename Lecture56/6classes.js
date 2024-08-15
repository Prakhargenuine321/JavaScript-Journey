//Whatever we are understanding about classes, all these "syntatical-functionalities"
//are added in "ES-6" and above version of JS.

//jab maeine kaha ki "syntatical-functionalities", iska mtlb hai ki hum bhale "class"
//kae naam par use kar rahe hain but behind the scene JS is working as an "prototypal" language
//so everything is just an object.

// ES6

class User {
    constructor(username, email, password){ //jaise hi "new" keyword use hoga "constructor" will be executed.
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//behind the scene -->agar 'class' ki functionalities nahi di gayi hoti toh following tareeka hota
//and jab "class" ka use kar rahe hain to bhi BTS yahi hota hai.

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());