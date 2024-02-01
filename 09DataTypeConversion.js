//1)-->Hum frontend par toh jante hain ki value ka data-type kya hai but backend pae kiase janaeinge toh uske liya hum "typeof" or "typeof()" ka use karte hain.

//2)-->
let score = 33;
//we know ki yaeh number hai.

console.log(typeof score); //pata hai ki yaeh "number" print karega.

//3)-->But agar kisi nae yahi number humko "string" kae form maein send kiya hai but hum isae "number" ki tarah use karna chahte hain so we will do "data-type-conversion".
let scoreInNumber = Number(score); //toh yahan par "Number" object kar use kiya hai for "string to number" conversion.

console.log(typeof(scoreInNumber)); //yahan par "typeof()" function ka use kiya hai and print hoga "number".

//4)-->But agar hum aisa string likh daein ki kuch naya ho jaye.
let scoreMix = "33abc";
//kya lagat hai ki kya print hoga

let scoreMixInNumber = Number(scoreMix);
console.log(typeof scoreMixInNumber); //but yahan par "number" print hoga.

//but agar hum value print karnae ka try karein toh daekho kya hota hai.
console.log(scoreMixInNumber);//toh yahan par "NaN" print hoga which is "Not a Number".

//5)Few more points:
/*
 a)true => 1 , false => 0;

 b)boolen conversion:-
   a)1 => true , 0 => false
   b)"" => false
   c)"prakhar" => true

 c)string conversion and more will be known  
*/