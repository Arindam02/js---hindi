const accountId = 12345         //const value can notbe change
let accountEmail = "arindam@123google.com"
var accountPassword = "888888"
accountCity = "Kolkata"
let accountState;

// accountId = 2       Not Allowed

accountEmail = "abcd@gmail.com"
accountPassword = "212121"
accountCity = "Siliguri"

/*
Prefer Not to Use var
Because it has issue in Block Scope & Functional Scope
*/

console.log();
console.table([accountId, accountEmail, accountPassword , accountCity, accountState]);