//Agar humnae function maein kuch parameter pass kiya par uski call maein koi value pass nhi ki toh hum function define kae time usae aek default value dae sakte hain.
function setName(firstName = "Your" , lastName ="Name"){
    console.log("Your Name: " , firstName , " " , lastName);
}


setName("Prakhar" , "Patel"); //If passed the arguments then it will normally see below cases.
setName();
setName("Prakhar");


//If one parameter is dependent on other.
function setNameOne(firstName = "Your" , lastName =firstName.toUpperCase()){
    console.log("Your Name: " , firstName , " " , lastName);
}


setNameOne("Prakhar" , "Patel");
setNameOne();
setNameOne("Prakhar");


//we can also add objects to the parameters.
function setNameTwo(firstName = {age: 22 , height:175 , weight:60}){
    console.log("Your Name: " , firstName);
}


setNameTwo("Prakhar"); 
setNameTwo();


//we can also add arrays in-place of objects.
function setNameThree(firstName = ["prakhar" , "ji" , "kya"]){
    console.log("Your Name: " , firstName);
}


setNameThree("Prakhar"); 
setNameThree();


//behaviour when we pass 'null' and 'undefined' as an argument.
function setNameFour(firstName = ["prakhar" , "ji" , "kya"]){
    console.log("Your Name: " , firstName);
}


setNameFour(null); //it will store 'null' and print 'null'.
setNameFour(undefined); //it will not store 'undefined' and print what you set default value for parameter.


//we can also pass 'function' as an default parameter
function getAge(){
    return 22;
}

function huMan(naMe , age = getAge()){
    console.log("Name: " , naMe , "--> Age: " , age);
}

huMan("Prakhar" , 23);
huMan("Harshit");