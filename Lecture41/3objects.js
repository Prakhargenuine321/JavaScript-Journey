//Objects-->

// let obj = {
//     name : "Prakhar Patel",
//     "last name" : "TechDope", //'key' are like strings.
//     age : 22 ,
//     greet : function(){
//         console.log("Hello Ji!");
//     }
// };
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

//Shallow Copy -->Change in copy of array will also affect in original array.
// let obj1 = {
//     a: 1,
//   b: {
//     c: 2,
//   },
// };
// const shallowCopy = Object.assign({} , obj1);
// shallowCopy.b.c = 10;
// console.log(obj1.b.c);
// console.log(shallowCopy.b.c);

//Deep Copy
// let obj2 = {
//     a: 1,
//   b: {
//     c: 2,
//   },
// };
// const deepCopy = JSON.parse(JSON.stringify(obj2)); //JSON stands for JavaScript Object Notation and it is a text-based format, JSON data is written as name/value pairs, with a field name in double quotes, followed by a colon, and then the value
// deepCopy.b.c = "Hello";
// console.log(obj2.b.c);
// console.log(deepCopy.b.c);

//"For-in" loop -->Loops through the properties of an Object.
// let objIntro = {
//   name : "Prakhar",
//   lastName : "Patel",
//   age : "22",
//   branch : "CSE"
// }
// for(key in objIntro){
//   console.log(key , "->" , objIntro[key]);
// }