const accountId = 144553
let accountEmail = "ravi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2  // not allowed //{} called as scope

/*
Prefered not to used var 
Because of issue in Block scope and Functional scope
*/
accountEmail = "hc@gmail.com";
accountPassword = "234567";
accountCity = "nagpur";

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
