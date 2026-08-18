//************* Numbers ********************
const score = 400
console.log(typeof score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);  //converted to string
console.log(balance.toFixed(2));         //numbers after decimal point

const otherNum = 23.8966
const otherNum2 =123.8966
console.log(otherNum.toPrecision(3));    //23.9//only 3 numbers are allowed after precision 
console.log(otherNum2.toPrecision(3));   //124

// According to Country's standard numbers 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 (INDIAN)
console.log(hundreds.toLocaleString('en-US')); //1,000,000 (USA)


//*************** Maths ************************* 
console.log(Math);
console.log(Math.abs(-4));      //4 // negative to positive
console.log(Math.round(4.6));   //5 // roundoff number
console.log(Math.ceil(5.2));    //6 // Next integer value
console.log(Math.floor(5.9));   //5 // previous integer value
console.log(Math.max(4, 3, 6, 8));  //8 
console.log(Math.min(4, 3, 6, 8));  //3

console.log(Math.random());     //0.5038734174080901 // random values is generated
console.log(Math.random()*10 + 1);    //6.11390674463435
console.log((Math.random()*10) + 1);  //5.134414070288601
console.log(Math.floor(Math.random()*10) + 1);  //5

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //10 //random two digit number is generated
