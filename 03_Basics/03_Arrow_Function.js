const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
user.welcomeMessage()               // hitesh , welocme to website
user.username = "Sam"
user.welcomeMessage()               // Sam , welocme to website

console.log(this);

//Type 1 function
function chai() {
    console.log(this.username);             //undefined
}
chai() 

//Type 2 function
const chai2 = function() {
    let username = "hitesh"
    console.log(this.username);            //undefined
}
chai2()


//Arrow Function
const addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(3, 4))                  //7

//implicit arrow function
const add2 = (n1, n2) => ( n1 + n2 )          
console.log(add2(5, 6));                  //11


//in arrow function without return function, we have to use paranthesis
const addboth = (n3, n4) => {username: "hitesh"}
console.log(addboth(3, 4));          //undefined

const addboth2 = (n5, n6) => ({username: "hitesh"})
console.log(addboth2(3, 4));         //{ username: 'hitesh}

