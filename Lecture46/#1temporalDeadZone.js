//1)In "global-scope" we can access all keywords (let/const/var) from anywhere inside anywhere.

//2)In "function-scoping" all keywords (let/const/var) behave same
function generateName(){
    var fullName = "Prakhar";
    console.log("Hello Ji! " , fullName);
}
//we cannot access "fullName" declared inside from outside

generateName();
//Uncomment following and you will get error!
// console.log(fullName);


//3)In "block-scoping" 'var' can be accessed from anywhere but let/const cannot be accessed outside the "block"
{
    var nameVar = "Prakhar";
    console.log(nameVar);
}
console.log(nameVar);

{
    let nameLet = "Prakhar";
    console.log(nameLet);
}
//Uncomment following and you will get error!
// console.log(nameLet);
//Same will be for "const".


//4)Temporal Dead-Zone --> As we know that hoisting of "let/const" is not possible so this is related to it.
console.log(marks);
console.log("Hello");
console.log("Hello");
const marks = 20;
console.log(marks);
//So from line 32 to 35 this zone is known as "Temporal Dead Zone" as we cannot access marks here and it will also throw error as hoisting is not possible.
