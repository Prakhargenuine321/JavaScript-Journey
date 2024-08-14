const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); //'this' is used as we have to tell browser that we are talking about current context
        console.log(this); //if you exexute this line then you will get clear understanding "this" and current context.
    }

}



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


//Constructor Function-->
//baar-baar object banana for everyone is not a good idea
//so we use constructor function.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this //-->yaeh return karao ya na karao but implicitly injected hota hai.
    //Return this is used to clearly indicate that the function returns the object instance, but it's not mandatory.
}  

//'new' keyword is an constructor function which allows to 
//create multiple instances of a object.


//agar hum niche likhe code maein "new" ka use na karaein toh 'userTwo' ki values 'userOne' ki values
//ko override kar daeingi.


//jasae hi 'new' is called "empty object" is created(instance).
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); //-->khud kae baare maein ho reference
//console.log(userTwo);