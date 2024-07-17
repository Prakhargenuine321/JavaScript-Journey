const coding = ["js", "ruby", "java", "python", "cpp"]


//following are the few ways how to use 'foeEach' loop.
   

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

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )