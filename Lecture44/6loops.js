// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values); //it will give 'undefined' value as 'forEach' can't return.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//in following no need to use 'return' keyword as there is not any scope define.
// const newNums = myNums.filter( (num) => num > 4 );


//but in following code we must use 'return' explicitly as we are using 'scopes' here.
//if we dont't use 'return' then it will treat it as an object and return '[]' (which is empty).

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);

// const newNums = []; //declaring an array as an empty.


//following code does same as above but only difference is that we need to put some extra lines as well as logic.
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


//dclaring an array of objects(books details).
//similarly these values are fetched from database.
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //these are the ways we use in 
  let userBooks = books.filter( (bk) => bk.genre === 'History')

  //in following code 'mulitple-conditions' for filter is also applied as we do on e-commerce websites.
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  // console.log(userBooks);