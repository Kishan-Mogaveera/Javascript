let score1 = 100; // number
let score2 = "200"; // string
let score3 = "300abc"; // string
let score4 = null; // null
let score5 = undefined; // undefined

console.log(typeof score1); // number
console.log(typeof score2); // string
console.log(typeof score3); // string
console.log(typeof score4); // object
console.log(typeof score5); // undefined

let valueInNumber = Number(score2); // convert string to number
console.log(typeof valueInNumber); // number

let valueInNumber2 = Number(score3); // convert string to number
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // NaN (Not a Number)

// "33" => 33
// "33abc" => NaN


let isLoggedIn = 1; // number
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

let isLoggedIn2 = 0; // number
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); // false

let isLoggedIn3 = "abc"; // string
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3); // true

let isLoggedIn4 = ""; // empty string
let booleanIsLoggedIn4 = Boolean(isLoggedIn4);
console.log(booleanIsLoggedIn4); // false

// 1 => true; 0 => false
// "abc" => true; "" => false


let someNumber = 33; // number
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // string
console.log(stringNumber); // "33"