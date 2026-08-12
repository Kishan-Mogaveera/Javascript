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

// Convert number to string
let someNumber = 33; // number
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // string
console.log(stringNumber); // "33"


//************************operations*****************************
let value = 3;
let negValue = -value; // -3
console.log(negValue); // -3

// Arithmetic operations in JavaScript:
console.log("Add: ", (3 + 2)); // 5
console.log("Subtract: ", (3 - 2)); // 1
console.log("Multiply: ", (3 * 2)); // 6
console.log("Divide: ", (3 / 2)); // 1.5
console.log("Modulus: ", (3 % 2)); // 1
console.log("Power: ", (3 ** 2)); // 9 (3 to the power of 2)

// String concatenation in JavaScript:
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; // Concatenation
console.log(str3); // "Hello World"

// String concatenation with numbers:
console.log("1" + 2); // "12" (string concatenation)
console.log(1 + "2"); // "12" (string concatenation)
console.log("1" + 2 + 2); // "122" (string concatenation)
console.log("1" + (2 + 2)); // "14" (string concatenation, 2+2 is evaluated first)  
console.log(1 + 2 + "2"); // "32" (number addition, then string concatenation)


console.log(+true); // 1 (unary plus converts boolean to number)
console.log(+false); // 0 (unary plus converts boolean to number)
console.log(+""); // 0 (unary plus converts empty string to number)


// Pre increment and post increment operators:
let gameCounter = 100;
console.log(gameCounter); // 100 (initial value)
console.log(gameCounter++); // 100 (post-increment)
console.log(gameCounter++); // 101 (post-increment)
console.log(gameCounter); // 102 (current value after increments)

console.log(++gameCounter); // 103 (pre-increment)
console.log(++gameCounter); // 104 (pre-increment)
