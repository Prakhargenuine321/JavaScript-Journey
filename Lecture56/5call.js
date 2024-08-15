//learning about ".call()" method 

function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username); //jab hum function kae andar function call karte hain 
    //toh woh call toh ho jata hai but problem yaeh hai ki uskae call hote hi 
    //uska "execution-context" call-stack sae chala jata hai so, humare paas no-reference hai
    //of that function toh is problem ko hatane kae liya we use ".call" method.

    //yahan par "this" is passed to tell ki jo sub-function call hua hai woh apna 'this' use na kare
    //current function will use its.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);