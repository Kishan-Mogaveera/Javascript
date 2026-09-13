let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);    // 0 2 4 6 8 10
    index = index + 2
}

let myArray = ["IronMan", "Spidy", "BatMan"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


let score = 1
do {
    console.log(`score is ${score}`);             // 1 2 3 4 5 6 7 8 9 10
    score++
} while (score <= 10)

//In do while, it will print first then it checks the condition 
let score1 = 11
do {
    console.log(`score is ${score1}`);             // 11
    score1++
} while (score1 <= 10)
