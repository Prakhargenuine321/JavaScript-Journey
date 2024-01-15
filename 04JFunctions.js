//Now here learning about functions.
function sum(a , b ,c = 3){ //aur yahan par humnae "c" ko jo value di hai woah aek default value khalayegi.
    console.log(a , b , c);
    return a + b + c; 
}

result1 = sum(3 , 5);
result2 = sum(7 , 5 , 0); //yahan par humnae value pass ki hai for "c"
result3 = sum(3 , 13 , 1); //yahan par humnae value pass ki hai for "c" in function
//aek case aur hai jismae agar hum function ke parameter maein koi value na daein toh woah "undefined" ki category maein aata hai, result4 waalae ka output dekho samajh aajayega.
result4 = sum(3);
console.log("The value is: "+result1);
console.log("The value is: "+result2);
console.log("The value is: "+result3);
console.log("The value is: "+result4);

//Aao ab seekhein "Arrow Function" kae baare maein.
const func1 = (x)=>{
    console.log("I am an arrow function", x);
}
//toh yaeh tha humara "Arrow Function" isko hum variable ki tarah declare karke function ki tarah use kar sakte hain.
func1("HA"); //isae hum function-call kahte hain ya function-invocation
func1(90);
func1('a');