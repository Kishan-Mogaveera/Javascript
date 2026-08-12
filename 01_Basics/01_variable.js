const accountId = 123456;
let accountName = "John Doe";
var accountPassword = "12345";
accountCity = "New York"; // This will create a global variable if not declared with var, let, or const
let accountState;

// accountId = 654321; // This will throw an error because accountId is a constant and cannot be reassigned

accountName = "Jane Smith"; 
accountPassword = "67890";
accountCity = "Udupi";

console.log("Account ID:", accountId);

/*
Prefer not to use var
because of issue in block scope(flower brackets{}) and functional scope
*/

console.table([accountId, accountName, accountPassword, accountCity ,accountState]);