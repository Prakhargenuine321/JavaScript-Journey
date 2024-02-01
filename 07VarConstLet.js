const accountId = 14453; //-->Change nahi hota (can't re-assign).

let accountEmail = "prakhargenuine@gmail.com"; //Change hota hai this can be always preferred.

var accountPassword = "1223"; //-->Change hota hai avoid using "var" because "block-scope" aur "function-scope" problem ki wajah sae.

accountCity = "Jaipur"; //-->Hum js maein aise bhi variables declare karte hain but yaeh aek *acchi practice nahi hai*.

let accountState; //-->Agar variable ko aise hi declare karke leave kar dete hain and print karte hain we will get "undefined".

//1)Yaeh humaein "Assignment to constant variable" error dega mtlb hum const ko change nahi kar sakte hain.
//Uncomment and justify about point.
// accountId = 122;
// console.log(accountId); 

accountEmail = "prakhargenuineChange@gmail.com";
accountPassword = "1234";
accountCity = "Bengaluru";

//2)Ab sabko aek-aek kar print karne sae accha hai ki hum "console.table([])" ka use kar "tabular-format" maein print karaein.
console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);