//#1
const myName = "hitesh"
const repoCount = 50

//below method is not an good practice
// console.log(name + repoCount + " Value");


//#2
//use below modern method which is also known as "String Interpolation"
console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);


//#3
//below method is used to declare string using "String" object by using this method inside browser console you will get a lot of methods that are helpful for us
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]); //accessing 
// console.log(gameName.__proto__); //using prototype


// console.log(gameName.length); //method of an prototype
// console.log(gameName.toUpperCase()); //but it will not change the original value
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //excluding last values
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //it will remove all the starting and end spaces not between string 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //replacing the portion of strings 

console.log(url.includes('sundar')) //it will check whether the entered keyword is there in string or not

console.log(gameName.split('-')); //spliting the given string