//falsy values   => false, 0, -0, BigInt 0n, "", null, undefined, NaN
//Truthy values  => true, "0", "false", " ", [], {}, function(){} 

const userEmail = "kishan@gmail.com"
if (userEmail) {
    console.log("Got the user email");         //Got the user email
} else {
    console.log("Don't have user email");   
}

const userEmail2 = ""
if (userEmail2) {
    console.log("Got the user email");
} else {
    console.log("Don't have user email");    //Don't have user email
}

const userEmail3 = []
if (userEmail3.length === 0) {
    console.log("Array is empty");            //Array is empty
} 

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");          //Object is empty
    
}

//Nullish Coalescing Operator (??) : null, undefined
let val1;

val1 = 5 ?? 10
console.log(val1);          //5
val2 =null ?? 10
console.log(val2);          //10
val3 = undefined ?? 10 
console.log(val3);          //10
val4 = null ?? 10 ?? 20
console.log(val4);          //10


//Ternary Operator (?:)
// value = condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

