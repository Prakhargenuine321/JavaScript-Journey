const myNums = [1, 2, 3]

//reduce() method:- The final result of running the reducer across all elements of the array is a single value.

//'accumulator' --> The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0], it is an empty container.

//'currentValue' --> The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

//'initialValue' --> A value to which accumulator is initialized the first time the callback is called, in following code '0' is initialValue.

// const myTotal = myNums.reduce(function (accumulator, currval) {
//     console.log(`accumulator: ${accumulator} and currval: ${currval}`);
//     return accumulator + currval
// }, 0)

// const myTotal = myNums.reduce( (accumulator, curr) => accumulator+curr, 0);

// console.log(myTotal);


//in following 'example' we can see the real-life use-case.
//we can do following with the help of 'forEach' this is a lot better method.

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);