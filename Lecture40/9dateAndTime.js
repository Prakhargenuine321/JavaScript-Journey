// Dates-->It is an object datatype.
//Integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date()

//following all are methods of an Date() object

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// console.log(myDate.toTimeString()); //Indian standard timings


//In JavaScript month is started from "0"

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 15, 3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023") //passing as an string but month should be passed in 1 - 12 range.
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); //gives value of time in millisecond 

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //to convert values in seconds(smaller values)

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time ` //using string-interpolation method



//.toLocaleString() is very useful method as we can customize it as per our need 
//here 'default' is time standard
//we can define objects for what we need
// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })


//To access it we can use following method
let options = { weekday: 'long' };
let weekday = newDate.toLocaleDateString('default', options);
// console.log(weekday); // Output will be the full weekday name, e.g., "Thursday"