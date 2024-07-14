const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros); //it will take whole array on single index.
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //this is not a good method to merge array.


//Conactenation of two arrays -->it returns new array
//So take new array to store it and then access it

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//Using spread operator
//It is just like spreading the glass will make each piece individual
// const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);
// console.log([...marvel_heros , ...dc_heros , ...dc_heros]); //also access it without storing in another array.


//flatening an array to get it in normalized form.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; //in this array we are having max_depth = 2.

//this is trick that we can write "infinity" so that it will manage depth automatically
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh")); //to check whether a given value is an array or not
// console.log(Array.from("Hitesh")); //it will convert given value in an array format
// console.log(Array.from({name: "hitesh"})); //interesting 

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));


//here is the difference between "Array" and "Array.of"
let arr4 = Array(7); // Creates an empty array with length 7
let arr5 = Array.of(7); // Creates an array with one element: [7]

// console.log(arr4); // Output: [ <7 empty items> ]
// console.log(arr5); // Output: [7]

//This demonstrates that Array.of is more predictable and less error-prone when dealing with single numeric arguments.
