//1)In following code as we can see that poping value from "b" will also pop from "a" as "b = a" is copying reference inspite of values.
let a = [1 , 2 , 3 , 4 , 5];
let b = a;
b.pop(5);
a.forEach((value , index)=>{
    console.log("Index: " , index , " Value: " , value);
});

console.log(" = = = = = = = = = ");

b.forEach((value , index)=>{
    console.log("Index: " , index , " Value: " , value);
});

//2)For copying values we need to use "spread-operator"(...) as it can only copy values inspite of reference.
let c = [...a];
console.log("Before pop");
c.forEach((value , index)=>{
    console.log("Index: " , index , " Value: " , value);
});

console.log("After pop");
c.pop(4);

c.forEach((value , index)=>{
    console.log("Index: " , index , " Value: " , value);
});

console.log("There is no change in a");
a.forEach((value , index)=>{
    console.log("Index: " , index , " Value: " , value);
});

//3)Similarly we can also copy objects
let obj1 = {
    name : "Prakhar",
    age : 22,
    number : 23
};

let obj2 = [...obj1];
obj2.pop();

obj1.forEach((value , index)=>{
    console.log(value , "-->" , index);
});

obj2.forEach((value , index)=>{
    console.log(value , "-->" , index);
});
