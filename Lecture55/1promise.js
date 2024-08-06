//pehlae 'fetch' ki functionalities nahi thi tab 'Q' aur 'Blue-Bird' libraries ka use karke hum 'fetch' ki functionalities ka use karte thae.
//baad maein in functionalities ko 'merge' kar diya gaya with JS.

//Promises -->The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is in one of these states:
//1) pending: initial state, neither fulfilled nor rejected.
//2) fulfilled: meaning that the operation was completed successfully.
//3) rejected: meaning that the operation failed.

//1)-->before learning how to 'consume' 'promises' we need to understand how to 'create' promises.
// const promiseOne = new Promise(function(resolve , reject){
//     //Do an async task
//     //DB calls, cryptography and network
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve(); //if we want to run 'then()' so we have to connect it with resolve and 'resolve()' is an method, jo run hoga after 'asyn-task'
//         //async task is completed.
//     }, 1000)
// })

// //2)-->after creating 'promises', need to 'consume' it.
// promiseOne.then(function(){
//     console.log("Promise is consumed!");
// }); //'.then()' has direct connections with 'resolve'.

// //3)-->Another method to do above
// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async task-2 is completed");
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("Promise-2 is consumed");
// })

// //4)-->resolve() returns value so humm, values ko consume karne kae liyae following method ka use karaeingae.
// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({username : "Prakhar" , age : 22 , ed : "BTech"});
//     } , 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

//5) How to handle 'errors'
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false; //put here 'true' and then again execute it.
//     if (!error) {
//       resolve({ username: "Prakhar", password: "thereIGo" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise either resolved or rejected");
//   });

//6)Using asyn-await to handle errors
//hum ".then()"/".catch()" ya async-await ka bhi use kar sakte hain
//async-await cannot handle error as ".catch()" handles
//so we need to wrap that portion of code inside "try-catch" block

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true; //put here 'false' and then again execute it.
//     if (!error) {
//       resolve({ username: "JavaScript", age: 22, growth: "doing it!" });
//     } else {
//       reject("ERROR: JS not handled!");
//     }
//   }, 1000);
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     } finally{
//         console.log("I will be always executed");
//     }
// }

// consumePromiseFive();

//7)fetching the data from an API

//#method1(using async-await)

//all about await-->
//1) It makes JavaScript wait until a Promise is resolved or rejected.
//2) Normally, you'd use the then() method for Promises.
//3) await allows you to avoid the callback pattern.
//4) You can assign the result of a fulfilled Promise to a variable using await.
//5) This makes your code cleaner and easier to read.

// async function getUserData() {
//   try {
//     const response = await fetch("https://api.github.com/users/Prakhargenuine321");
//     const data = await response.json();
//     console.log(data.created_at); //this is how you can use this data
//   } catch (error) {
//     console.log(`E: ${error}`);
//   }
// }

// getUserData();


//#method2(.then() and .catch())
const dataHai = fetch("https://api.github.com/users/Prakhargenuine321").then(
    (response) => {
        return response.json();
    }
).then((data) => {console.log(data);}
).catch((error) => {console.log(error);});

