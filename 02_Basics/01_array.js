//Array
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);           //[ 0, 1, 2, 3, 4, 5 ]
console.log(myArr[0]);        //0

const myHeros = ["IronMan","Spidy", "Thor"]
const myArr2 = new Array(1, 2, 3, 4)

// Array Methods
myArr.push(6)         //add element at last
myArr.push(7)
myArr.pop()           //removes elements from the last

myArr.unshift(9)          //adds elements to strating element
myArr.shift()             //removes elements from starting

console.log(myArr.includes(9));  //false
console.log(myArr.indexOf(3));   //3

console.log(myArr);

const newArr = myArr.join()
console.log(myArr);             // [0, 1, 2, 3, 4, 5]
console.log(newArr);            // 0, 1, 2, 3, 4, 5

//slice, splice
console.log("A",myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);
