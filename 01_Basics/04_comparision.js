// Comparison operators
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 2); // true
console.log(2 <= 2); // true
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 === 2); // true (strict equality, checks value and type)
console.log(2 !== 2); // false (strict inequality, checks value and type)

console.log("2" > 1); // true (string "2" is converted to number 2)
console.log("02" > 1); // true (string "02" is converted to number 2)

console.log(null > 0); // false (null is converted to 0)
console.log(null == 0); // false (null is only equal to undefined)
console.log(null >= 0); // true (null is converted to 0)
 
console.log(undefined > 0); // false (undefined is not converted to a number)
console.log(undefined == 0); // false (undefined is only equal to null)
console.log(undefined >= 0); // false (undefined is not converted to a number)

// Strict equality vs loose equality
console.log(2 === 2); // true (strict equality, checks value and type)
console.log(2 === "2"); // false (strict equality, checks value and type)
console.log(2 == "2"); // true (loose equality, converts string "2" to number 2)
