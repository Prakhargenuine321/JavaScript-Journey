// conditional statements
let age = 18;
if(age > 18){
    console.log("You can drive!");
}
else if(age == 18){
    console.log("Lets try if you are eligible!");
}
else{
    console.log("No you cannot drive!");
}
// Practice Qur-1 -->
let new_age = 25;
if(new_age>=10 && new_age<=20){
    console.log("Your age is: "+new_age+" and your are between 10 and 20");
}
else{
    console.log("You are not between 10 and 20");
}
// Practice Que-2 -->
switch(new_age){
    case 18:
        console.log("Your age is: "+new_age);
        break;
    case 10:
        console.log("Your age is: "+new_age);
        break;  
    default:
        console.log("Your age is: "+new_age);
}
// Practice Que-3 -->
let num = 46;
if(num%6 == 0){
    console.log("Given number: "+num+" is divisible by 2 and 3!");
}
else{
    console.log("Given number: "+num+" is not divisible by 2 and 3!");
}
// Practice Que-4 -->
let num1 = 38;
if(num1%6 == 0){
    console.log("Given number: "+num1+" is divisible by 2 and 3!");
}
else if(num%2==0){
    console.log("Given number: "+num1+" is divisible by 2!");
}
else if(num%3==0){
    console.log("Given number: "+num1+" is divisible by 3!");
}
else{
    console.log("Given number: "+num1+" is neither divisible by 2 nor by 3!");
}

// Practice Que-5 -->
let drive_age = 78;
drive_age >= 18 ? console.log("You can drive!") : console.log("You cannot drive!");