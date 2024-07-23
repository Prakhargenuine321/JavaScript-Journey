//Task1

const hisName = "Prakhar";
const age = 18;

const message = `Welcome ${hisName} your age is: ${age}`;

// console.log(message);

//Task2

const multiLineMessage = `Welcome ${hisName} your age is: ${age}
Hope you are fine and doing well!`;

// console.log(multiLineMessage);


//Task3(Array Destructuring) -->Array destructuring ek syntax hai jo aapko arrays se values ko alag-alag variables mein unpack karne ki suvidha deti hai. Ye aapko ek baar mein array se multiple values ko extract karna aasan bana deti hai.

//#1 -->basic example
const num = [1 , 2 , 3 , 4 , 5 , 6];
const [a , b , c] = num;

// console.log(a);
// console.log(b);
// console.log(c);


//#2 -->extract values selectively
const [one , , two] = num;

// console.log(one);
// console.log(two);


//#3 -->can also be used with default values
const numOne = [1];
const [d , e =2] = numOne;
// console.log(d);
// console.log(e); //but deafult-value will work if already value is not there.


//#4 -->You can use it with the rest operator (...) to collect the remaining elements:
const [first , second , ...rest] = num;
// console.log(first);
// console.log(second);
// console.log(rest);


//Task4 -->Object Destructuring.


//#1
const book = {
    title : "Shri Bhagvadgeeta",
    author : "Maharishi VedVyas"
};

const {title , author} = book;
// console.log(title);
// console.log(author);


//#2  -->You can also use object destructuring with different variable names:
const {title: bookTitle , author: bookAuthor} = book;
// console.log(bookTitle);
// console.log(bookAuthor);


//#3 -->Object destructuring can also be used with default values:
const {title:bookT , author: aut , origin = "Bharat"} = book;
// console.log(bookT);
// console.log(aut);
// console.log(origin);


//#4 -->You can also nest object destructuring for objects within objects:
const detail = {
    yourName : "Prakhar Patel",
    address : {
        city : "Kanpur",
        zip : 208019
    }
}

const {yourName , address: {city , zip}} = detail;

// console.log(yourName);
// console.log(city);
// console.log(zip);


//Task5 

let arr = [1 , 2 , 3 , 4 , 5];
let newArr = [6 , 7];

newArr = [...arr , ...newArr];
// console.log(newArr);


//Task6

function multiValueSum(val1 , val2 , ...num){ //using 'rest(...)' operator to take unlimited values as an parameter.
    let sum = 0;
    num.forEach((n) => {
        sum = sum + n;
    })
    return val1 + val2 + sum;
}

const sum = multiValueSum(20 , 10 , 30 , 40 , 50 , 60);
// console.log(sum);


//Task7

function productOfTwo(val1 , val2 = 1){
    return val1 * val2;
}

let product = productOfTwo(20 , 10);
// console.log(product);

product = productOfTwo(13);
// console.log(product);


//Task8  -->Enhanced Literal

//ECMAScript 2015 (ES6) mein ek shorthand syntax introduce hua, jo object properties aur methods define karne ko zyada concise aur readable banata hai.

//#1 -->If a variable name and a property name are the same, you can omit the property name.
const hisNam = "Prakhar";
const hisAge = 22;

const personId = {
    hisNam,
    hisAge
};

// console.log(personId);

//#2 -->You can define methods without the function keyword.

const person = {
    hisNam,
    hisAge,
    greet(){
        console.log("Hello ji bina function keyword kae hoon!");
    }
}

// person.greet();
// console.log(person);


//Task9 -->Continuing same topic as above but below is known as 'Computed Property Names'.


//#3 -->You can use expressions to define property names dynamically.
const keyName = "grade";

const per = {
    hisNam,
    hisAge,
    [keyName] : "A"
}

// console.log(per);


//#4 -->You can use shorthand syntax to define prototype properties.

const proto = {
    sayHello(){
        console.log("Hello Ji");
    }
};

const protoType = {
    hisNam,
    hisAge,
    __proto__ : proto
}

protoType.sayHello();


