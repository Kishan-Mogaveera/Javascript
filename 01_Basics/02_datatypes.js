"use strict"; //treat all JS code as newer version

// alert(3 + 3); // we can use alert, prompt, confirm in browser , but we are using nodejs so we will not use it

let name = "John"; //string
let age = 20; //number
let isApproved = true; //boolean
let email; //undefined
let state = null; //null
  

/*
number => 2 to power 53
string => "" 
boolean => true or false
undefined => undefined
null => standalone value that represents nothing
object => {}
symbol => Symbol() => unique and immutable value
*/

console.log("Name:", typeof name); //string
console.log("Age:", typeof age); //number
console.log("Is Approved:", typeof isApproved); //boolean
console.log("Email:", typeof email); //undefined
console.log("State:", typeof state); //object 