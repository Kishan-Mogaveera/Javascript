//for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number");  //this will print before 5
//     }
//     console.log(element);          // it will print numbers from 0 to 9 one by one
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and ${i}`); 
        // console.log(i + '*' + j + ' = ' + i*j );
    }
}


const myArray = ["IronMan", "Spidy", "BatMan"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}


//break and continue
for (let a = 1; a <= 20; a++) {
    if (a == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of a is ${a}`);

}

for (let b = 1; b <= 20; b++) {
    if (b == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of b is ${b}`);

}

