// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); 

//1)".trueLength" jaisa koi method toh nahi hai
//par ab tum dimaag lagaogae ki hum uski jagah ".trim().length" ka use kar sakte hain
//par baar-baar yaeh karna sahi nhi hai
//so try karaeinge ki hum ".trueLength" method ko add on karaein to save time.

// let my = "Prakhar      ";
// console.log(`-------->${my.trim().length}`);



let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


//as we know ki 'array', 'function', 'string' yaeh sab 'object' sae hokar
//jate hain so 'object' is an higher heirarchy
//toh agar hum 'object' maein kuch add karaeinge toh that will be accessible by all the constructor-function.

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// 1)Object.prototype: This is the prototype object from which all JavaScript objects inherit properties and methods.
// 2)hitesh: A method added to Object.prototype, making it available on all objects.
// 3)function(): The function logs a message to the console when called.



// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh() 
// heroPower.heyHitesh() //-->It will not get power of "heyHitesh()" kyunki chain maein 'array' lower hai aur wo sirf

//array ko hi yaeh power dae sakta hai.


//<<---NOTE--->
// Modifying Object.prototype ko generally production code mein discourage kiya jata hai kyunki yeh unexpected behavior aur conflicts create kar sakta hai doosri libraries ya aapki application ke parts ke saath. Aksar yeh better hota hai ki methods ko directly specific objects par define kiya jaye ya phir agar aapko inheritance chahiye, toh ES6 classes ka use karein.

//<<----------------------------<>----------------------------->>

// {inheritance} -->har aek object individual hai and woh aek dusrae sae share nahi karte apni property
//toh agar humaein koi property different objects maein same rakhni hai toh hum 
//{inheritance} ka use karte hain.

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //we can use "__proto__" property to enable inheritance
}

Teacher.__proto__ = User //aisa jaroori nahi hai ki hum "__proto" ka access sirf inside object karte hain
//we can also do this outside of it.

// modern syntax--> but above syntax is outdated so we need to use modern one.


Object.setPrototypeOf(TeachingSupport, Teacher)


//ab jab humnae itna seekh liya hai toh ab jo sabse paehla kam rah gaya tha usae karte hain
//yani adding ".trueLength" method in "String" directly so that humaesa ".trim().length" 
//likhna na pade.

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); //jab execute karoge tab you will know ki "this" kya kar raha hai,

    //chalo bata deta hoon ki jab bhi "this" call hoga toh uskae paas "method" ko current call kisnae kiya uska
    //reference hoga.
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();

//yahan sae OOPS concept complete ho gaya hai ab 
//iskae aagae jo bhi padhaeinge woh sirf "syntax" ka khel hai
//backend par jo kam ho raha hoga woh yahi hai.