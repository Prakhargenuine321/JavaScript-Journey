//Objects are dynamic in nature as we can change it's properties on run-time.

let obj = {
    age : 22,
    wt : 60,
    height : 170
}

console.log(obj);

//manipulating object in runtime
obj.strength = "MERN Stack";
console.log(obj);


//Object Cloning-->
let a = obj; //this is not an object cloning as it is only referencing to same object as 'obj'.

//there are multiple ways of cloning...

//#Method1 -->Using "spread-operator"
let dest = {...obj};

//changing in any property will change in the refrential one also but no change in the clone one.
obj.age = 30;
console.log("Main Object: " , obj);
console.log("Refrential: " , a);
console.log("Clone Object: " , dest);

//#Method2 -->Using "assign-method"
let srcTwo = {
    naMe : "Prakhar",
    factor : "No"
}

let dest2 = Object.assign({} , obj , srcTwo);
console.log("Using assign method: " , dest2);

//#Method3 -->Using "iteration-method" (try to avoid using it)
let dest3 = {}; //declaring as an empty object

for(let key in srcTwo){
    let newKey = key;
    let newValue = srcTwo[key];
    dest3[newKey] = newValue;
}

console.log("Cloning through iteration: " , dest3);