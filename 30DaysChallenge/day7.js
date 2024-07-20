//Task1-->

let objBook = {
    title : "Kalam Ka Sipahi",
    author : "Premchand",
    year : 2002
}

// console.log(objBook);


//Task2-->

// console.log(`Book Title: "${objBook.title}", Year: "${objBook.year}"`);


//Task3-->

//if we use 'this' with arrow-function it returns an 'undefined'.

//Arrow functions inherit this from the parent scope at the time they are defined, so this inside an arrow function refers to the surrounding context, not the object the method is called on.

objBook.bookDetail = () => {
    console.log(`Book Title: "${objBook.title}", Year: "${objBook.author}"`);
}


// objBook.bookDetail = function() {
//     console.log(`Book Title: "${this.title}", Year: "${this.author}"`);
// }

// objBook.bookDetail();


//Task4-->

objBook.updateYear = function(newYear){
    // this.year = newYear;
}

objBook.updateYear(2022);
// console.log(`Updated Year of book: ${objBook.year}`);


//Task5-->nested objects with having an 'array of objects'.

let objLibrary = {
    CityLibrary : [
    {
        title: "Kalam Ka Sipahi",
        author: "Premchand",
        year: 2002
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988
    },
    {
        title: "To Kill",
        author: "Harper Lee",
        year: 1960
    }
    ]
    ,
    townLibrary : [
        {
            title: "Kalam Ka Sipahi",
            author: "Premchand",
            year: 2002
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            year: 1988
        },
        {
            title: "To Kill",
            author: "Harper Lee",
            year: 1960
        }
    ]
}

// console.log(objLibrary);


//Task6-->

let library = []; //storing all library(keys of an object) names in an array.
Object.keys(objLibrary).forEach( (keys , ind = 0) => {
    library[ind] = keys;
    ind++;
});

// console.log(`In ${library[0]} library following books are available: ${objLibrary.CityLibrary}`);


// objLibrary.CityLibrary.forEach((title, num = 0) => {
//     console.log(`Book ${num}: ${objLibrary.CityLibrary[num].title}`);
//     num++;
// })

//below is the corrected version of above code.

objLibrary.CityLibrary.forEach( (book , num) => {
    // console.log(`Book ${num}: ${book.title}`);
    num++;
})


//Task7-->

objBook.bookDetail = function() {
    // console.log(`Book Title: "${this.title}", Year: "${this.year}"`);
}


objBook.bookDetail();


//Task8-->

for(const key in objLibrary.CityLibrary){
    // console.log(`${key} -->Title: ${objLibrary.CityLibrary[key].title} --> Author: ${objLibrary.CityLibrary[key].author} --> Year: ${objLibrary.CityLibrary[key].year}`);
}


//Task9-->

// Object.keys(objBook).forEach( (key) => {
//     console.log(`${key}`);
// });


//get the values of the objLibrary object.
let libraryValues = Object.values(objLibrary);

// console.log(libraryValues); //execute it to know what it actually contains inside it!

libraryValues.forEach( (library) => {
    library.forEach((book , index) => {
        console.log(`Index: ${index} , Book: ${book.title}`);
    });
    console.log("------------------------------------")
});