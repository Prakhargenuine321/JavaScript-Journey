//Classes -->It is like an blueprint.
//Object -->Real-world entity that is made using classes(blueprint).

class Human{

    //properties
    age = 22; //public
    #wt = 60; //private(cannot accessed outside this block)(mark by '#')
    height = 175;


    //behaviour
    walking(){
        console.log("I am walking"); 
    }
    running(){
        console.log("I am running");
    }
    weight(){
        console.log("My weight: " , this.#wt); //accessing private within same block.
    }


    //but we can access private using "getters and setters".
    //we can code this function without using "get" and "set" keyword but using it will ensure the semantic clarity.
    //we can also set "if" condition to ensure the accessibilty of an private data so basically here we are using concept of encapsulation and we are adding abstract layer to ensure data privacy.
    get fetchWeight(){
        return this.#wt;
    }
    set modifyWeight(val){ //we have to take value to modify the field
        this.#wt = val;
    }
}

//Object creation
let huOne = new Human();
console.log("My age: " , huOne.age);
huOne.walking();
huOne.running();


//if we try to access private we get error
// console.log(huOne.#wt);


//so access using getters and setters
console.log(huOne.fetchWeight);