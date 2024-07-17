//Task1

// for(let it = 1 ; it <= 10 ; it++){
//     console.log(it);
// }


//Task2

// for(let it = 1 ; it <= 10 ; it++){
//     console.log(`5 * ${it} = ${5*it}`);
// }


//Task3
// let totalSum = 0; //I have used 'const' in place of 'let' got an error because we can't reassign to 'const'
// for(let it = 1 ; it <= 10 ;it++){
//     totalSum += it;
// }
// console.log(`Total sum is: ${totalSum}`);


//Task4
// let limit = 10;
// while(limit != 0){
//     console.log(limit);
//     limit--;
// }


//Task5

// let num = 1;
// do {
//     console.log(num);
//     num++;
// } while (num != 6);


//Task6

// let factNum = 10;
// let fact = 1;
// do {
//     fact = fact * factNum;
//     factNum--;
// } while (factNum != 0);
// console.log(`Factorial is: ${fact}`);


//Task7

for(let i = 1 ; i <= 5 ; i++){
    for(let j = 1 ; j <= i ; j++){
        process.stdout.write("*"); //here 'process.stdout.write()' is used to print without trailing new line.
    }
    console.log();
}