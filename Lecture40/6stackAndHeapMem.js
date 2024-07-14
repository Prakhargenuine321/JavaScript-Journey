//Stack(for primitive) and Heap(for non-primitive).
//In Stack we get copy of values so no affect to original values.
//In heap we get reference of values so can change original values.
//See screenshot attached with this folder.

let myName = "Prakhar";
let myAnotherName = myName;
myAnotherName = "CodeBug";
console.log(myName);
console.log(myAnotherName);

let userOne = {
    email: "prakhar@mail.com",
    password: "9464@"
}

console.table(userOne);