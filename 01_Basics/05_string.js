const name = "Kishan"
const repoCount = 50

// console.log(name + repoCount + "Value");   // old method

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`); //new method use this

const gameName = new String('Free-Fire') 
console.log(gameName[0]);
console.log(gameName.__proto__);       

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));       //at index 2 which letter is there
console.log(gameName.indexOf('i'));    //in which index the letter 'i' is 
console.log(gameName.split('-'));

const newString = gameName.substring(0,4)  //last value is excluded (same as in C & Python laguage)
console.log(newString);

const anotherString = gameName.slice(-8,7)
console.log(anotherString);

//Unknown space while writing
const newStringOne = "  Kishan  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kishan.com/kishan%20moga"
console.log(url.replace("%20","-"));
console.log(url.includes('moga'));


