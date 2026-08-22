function sayMyName() {
    console.log("K");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
}
sayMyName()                     //It will print my name one by one

//Type1
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
addTwoNumbers(3,4)             //7
addTwoNumbers(3,"4")           //34
addTwoNumbers(3,"a")           //3a
addTwoNumbers(3,null)          //3

//Type2
function addTwoNumbers(num3, num4) {
    let result = num3 + num4
    return result
    console.log("Hitesh");             //Here Hitesh will not print because after the return code is unreachable
    
    //or
    // return num3 + num4
}
const result = addTwoNumbers(3, 5)
console.log("Result: ",result);          //Result: 8


//Functions with Objects
function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Kishan"));       //Kishan just logged in
console.log(loginUserMessage());               //Please enter a username


//Rest/Spread Operator (...)
function calculateCartPrice(val1, val2, ...num) {           //(num) -> 200
    return num                                              //(...num)-> [ 200, 400, 500 ]
}                                                           //(val1, val2, ...num) -> [ 500, 800 ]
console.log(calculateCartPrice(200, 400, 500, 800));


const user = {
    username: "Hitesh",
    price: 199
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
    
}
handleObject(user)                        //Username is Hitesh and price is 199 
handleObject({                                
    username: "Sam",
    price: 399
})                                        //Username is Sam and price is 399 


//Functions with Array
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));                 //400
console.log(returnSecondValue([200, 400, 500, 1000]));      //400
