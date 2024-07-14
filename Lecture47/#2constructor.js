class Human{
    age;
    ht;
    #wt; //private.

    constructor(newAge , height , weight){
        this.age = newAge;
        this.ht = height;
        this.#wt = weight; //we can also take value for 'private' field.
    }

    //using getters and setters to access 'private' from outside of block.
    get fetchWeight(){
        console.log("Your weight: " , this.#wt);
    }

}

let huOne = new Human(22 , 175 , 60);
console.log(huOne.age);
console.log(huOne.ht);
huOne.fetchWeight; //accessing the 'private' from outside of it's block.