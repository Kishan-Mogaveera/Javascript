// Primitive datatype
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

const bigNumber = 3244764946887952n
console.log(typeof bigNumber);



// Reference type (Non Primitive)
// Array, Objects, Functions

const heros = ["shakthiman", "naagraj", "doga"]
let myObject = {
    name: "Kishan",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}


// Memory types
// Stack (primitive), Heap (non-primitive)

let myYtname = "Kishan"
let anotherName = "Chandan"

console.log(myYtname);
console.log(anotherName);

let user1 = {
    email: "user@google.com",
    upi: "user@sbi"
}

let user2 = user1
user2.email = "kishan@google.com"

console.log(user1.email);
console.log(user2.email);

