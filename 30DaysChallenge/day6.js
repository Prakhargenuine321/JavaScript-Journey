//Task1

let arr = [1 , 2 , 3 , 4 , 5];
// console.log(arr);


//Task2

// console.log(`First: ${arr[0]} and Last: ${arr[4]}`);


//Task3

arr.push(6);
// console.log(arr);


//Task4

//we don't have to pass value inside it as it will pop-out last element.
arr.pop();
arr.pop();
// console.log(arr);


//Task5

arr.shift();
// console.log(arr);


//Task6

arr.unshift(10);
// console.log(arr);


//Task7

let newArr = arr.map( (num) => num * 2 );
// console.log(newArr);


//Task8

newArr = arr.filter( (num) => num % 2 == 0 );
// console.log(newArr);


//Task9

newArr = arr.reduce((acc , currVal) => acc + currVal,0);
// console.log(newArr);


//Task10

// for(let it = 0 ; it < arr.length ; it++){
//     console.log(`Element at: ${it} is: ${arr[it]}`);
// }


//Task11

// arr.forEach( (num) => console.log(`Element ${num}`));


//Task12

let arrTwoDim = [[1 , 2] , [3 , 4] , [4 , 5]];
// arrTwoDim.forEach( (num1 , num2) => console.log(`${arrTwoDim[num1] ,arrTwoDim[num2]}`));


// for(let i = 0 ; i < arrTwoDim.length ; i++){ //here defined the length of an "row"
//     for (let j = 0; j < arrTwoDim[0].length; j++) { //here defined the length of an "column"
//         console.log(`Row: ${i} Column: ${j} and Element: ${arrTwoDim[i][j]}`);
//     }
// }


//Task13
// console.log(arrTwoDim[2][1]);


