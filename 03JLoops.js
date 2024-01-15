// Loops

//1)for loop
let num_1 = 1 ;
for (let i = 0; i < 10; i++) {
    console.log(num_1 + i);
}

//2)"for in" loop -->we can access elements and key of an object but mainly key is accessed
let num_2_obj = {
    Name : "Prakhar Patel",
    Branch : "CSE",
    Year : "Third"
}
for(const key in num_2_obj){
    const element = num_2_obj[key];
    console.log(key , element);
}

//3)"for each" loop -->To access iterable variables
let num_3_obj = {
    Name : "Prakhar Patel",
    Branch : "CSE",
    Year : "Third"
}
for(const c of num_3_obj.Name){
    console.log(c);
}

//4)"while" loop -->normal one already known
let num3 = 2;
while(num3 < 10){
    console.log(num3);
    num3++;
}

//similarly "do-while" loop -->atleast one-time executes