const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//similar scoping is also available here if we open scope then need to use 'return' keyword.
//it can be better alternative of 'forEach'.  
// const newNums = myNumers.map( (num) => { return num + 10});


//performing 'chaining'(using more 2 than methods at once).
//result of 1st one is pass over to next one.
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);