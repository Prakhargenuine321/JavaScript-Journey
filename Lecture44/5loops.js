const coding = ["js", "ruby", "java", "python", "cpp"]


//following are the few ways how to use 'forEach' loop.
   

//#Method1-->declaring function inside-1

// coding.forEach( function (val){
//     console.log(val);
// } )


// #Method2-->declaring function inside-2(arrow-function).
// coding.forEach( (item) => {
//     console.log(item);
// } )


// #Method3-->defining function and putting it in 'forEach' loop.
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);


//following is the code if you want to access 'index , item , array' all at a time.
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


//in following code 'item' is referred to as 'object' inside array.
//following concept is used when we have to fetch data from 'array of objects' as taking out pricing, link and name etc.
// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )