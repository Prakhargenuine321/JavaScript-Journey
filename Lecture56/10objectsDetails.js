//Aek important concept hai ki hum "Math.PI" ki value kyun nahi change kar sakte in JS.

const unchangeValue = Object.getOwnPropertyDescriptor(Math , "PI");


//jab tum "unchangeValue" ko print karoge toh it will give decription 
//and tumko tab pata chal jayega ki why we cannot "change" or "override" "PI" value.
console.log(unchangeValue);

//try karke daekh lo but change nahi hogi value.
Math.PI = 5;
console.log(Math.PI);

//nahi hua na change.

//so hum bhi jab objects define karte hain toh hum
//decide kar sakte hain ki kya koi change kar sakta hai ya nahi.

//similarly aur bhi aisi properties hain for other functionalities 
//as, to stop someone from iterating: "enumerable" must be disabled.

// Object.defineProperty(Math , "PI" , {
//     writable: true
// })

//jyada chalak ban rahe the but you cannot change as it is hard coded.


//but koi baat nahi tum yahi apne "objects" par kar sakte ho.
const user = {
    username : "Prakhar Patel",
    userID : 12309,
    userPoints : 300,
    getDetails : function(){
        console.log(`${this.username} , ${this.user}`);
    }
}

//ab check karo apni "object kae property descriptor" ko.
console.log(Object.getOwnPropertyDescriptor(user , "userID"));

//toh sab property "true" hongi chalo ab change karte hain.
Object.defineProperty(user , "userID" , {
    enumerable: false,
})

//ab usko tum iterate nahi kar paoge "userID" ko.
for (const [key , value] of Object.entries(user)) {
    //jab tum function print karate ho toh console na karakar poora "function" return karti hai
    //so here is an condition ki sirf wahi values print hongi jo "function" na ho.
    if(typeof value !== 'function'){ 
        console.log(`${key} ==> ${value}`);
    }
}

//ab phir check you know ki kyun nahi iterate ho raha hai.
console.log(Object.getOwnPropertyDescriptor(user , "userID"));