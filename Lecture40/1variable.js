const accountId = 144553;
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //It is also possible in JS but not an good idea to do it
let accountState;

// accountId = 2 // not allowed(reassign)
// const accountId = 3; //not allowed(redeclare)


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); //accountState is undefined