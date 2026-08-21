// singleton
//object.create

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Kishan",
    "full name": "Kishan Chandan",
    [mySym]: "mykey1",
    age: 19,
    location: "Udupi",
    email: "kishan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.name);             //Kishan
console.log(JsUser["email"]);         //kishan@google.com
console.log(JsUser["full name"]);     //Kishan Chandan
console.log(JsUser[mySym]);           //mykey1

JsUser["full name"] = "Kishan Mogaveera"   //updating full name
Object.freeze(JsUser)                      //freeze the JsUser object, now nobody can change any value
JsUser["full name"] = "Moga"               // Moga is not printing because it is freezed
console.log(JsUser);            /*{
                                    name: 'Kishan',
                                    'full name': 'Kishan Mogaveera',
                                    age: 19,
                                    location: 'Udupi',
                                    email: 'kishan@google.com',
                                    isLoggedIn: false,
                                    lastLoginDays: [ 'Monday', 'Saturday' ],
                                    Symbol(key1): 'mykey1'
                                }*/

                                    
// Accessing using function
JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());       //Hello JS User
console.log(JsUser.greeting2());      //Hello JS User, Kishan
