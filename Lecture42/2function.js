//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
//Following restrictions for 'rest parameter'-->
//1)A function definition can only have one rest parameter.
//2)The rest parameter must be the last parameter in the function definition.
//3)Cannot have a default value.

function calculateCartPrice(val1, val2, ...num1){ //here '...' is 'rest operator', I know it is also known as 'spread operator' but it depends on our use cases that what we are going to say it.
//In above case 'val1' & 'val2' will take first 2 values from passed values and rest will be as 'rest param'.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))



//function with objects-->

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){ //passing an object.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //if we will do 'prices' instead of 'price' then it will generate error.
}

// handleObject(user); //passing object reference
handleObject({ //passing whole object
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); //passing array-reference.
console.log(returnSecondValue([200, 400, 500, 1000])); //passing whole array.