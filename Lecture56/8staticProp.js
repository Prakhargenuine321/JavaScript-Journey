class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ //so agar hum kisi "property" ya "method" ka access nahi dena chahte toh we use
        //static keyword.
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User { //even it's child will also be not able to access static portion.
    constructor(usernames, email){
        super(usernames); //we must have to call 'super' before using 'this' and all.
        this.usernames = usernames;
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); //it will throw error as "createId()" is an 'static'.