//const tinderUser = new Object(); //declaration using constructor.
const tinderUser = {}; //declaration using object literals, better and efficient way.

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


//nesting the objects inside objects as much as we need.
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);



//Merging/Concatination of an object same behaviour as array.
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = { obj1, obj2 }; //show same behaviour as an array
// const obj3 = Object.assign({}, obj1, obj2, obj4); //it is used but not an often used method.

const obj3 = {...obj1, ...obj2}; //using spread operators -->spread and then combine it.
// console.log(obj3);



//Creating an "Array Of Objects".
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser);


//by using following methods we can get all keys of an object in array form.
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //it will give array of arrays, uncomment and try.

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check whether the entered property is available or not.



//<-----Object Destructuring----->



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor; //writing it multiple time is overhead

//this syntax is better way to handle this by destructuring.

const {courseInstructor} = course;
// console.log(courseInstructor);

const {courseInstructor: instructor} = course; //giving your preferred name for ease in use.

// console.log(instructor);


//following are the JSON format which is used to formst data when fetched using API.
//In JSON: key and value both are of "string" type.


//following data is in format of objects.
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//following data is in format of arrayofobjects.
// [
//     {},
//     {},
//     {}
// ]