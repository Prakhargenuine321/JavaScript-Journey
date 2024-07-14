//Method 1
let firstName = "Prakhar Patel";
console.log(firstName);

//Method 2
let descript = 'Programmer , Content Creator , Gamer';
console.log(descript);

//Method 3 (Template Strings)
let anoDescript = `Hello
My
Name
Is 
QUAD 
BUGS`;
console.log(anoDescript);

//Method 4 (Object Creation)
// new: This keyword is used to create a new "object instance".
// String: This is the constructor function for creating String objects.
// "Prakhar Patel": This string literal is passed as an argument to the String constructor, defining the content of the new String object.
// Therefore, the variable myName is assigned a reference to a newly created String object containing the characters "Prakhar Patel".

let myName = new String("Prakhar Patel");
console.log(myName);

//Concatenation--
let aName = "Developed ";
let bName = "Bharat ";

let ansTypeOne = aName + bName;
console.log(ansTypeOne);

let ansTypeTwo = `${aName}${bName}`;
console.log(ansTypeTwo);

//Length--
console.log(aName.length);
console.log(bName.length);

//UpperCase and LowerCase--
console.log(aName.toUpperCase());
console.log(bName.toLowerCase());
console.log(aName.toUpperCase);

//Substring--
console.log(aName.substring(2));
console.log(aName.substring(2,4)); //end-index is exclusive

//Split-- We split string into array with respect to specified characters
let sentence = "This and onward years are mine!";
console.log(sentence.split(" "));
//Issue in split-->
let sentenceTwo = "This and \"onward\" years are mine!"
console.log(sentenceTwo);
//'\' is used so that special characters are not treated as special characters.
let sentenceThree = "This and \\onward\\ years are mine!"
console.log(sentenceThree.split("\\"));

//Join--
let joinTheSentence = sentenceThree.split("\\");
console.log(joinTheSentence.join(","));

