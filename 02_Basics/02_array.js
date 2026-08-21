const marvel_heros = ["IronMan","Spidy", "Thor"]
const dc_heros = ["superman", "flash", "batman"]

//pushing second array in the first array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);          //[ 'IronMan', 'Spidy', 'Thor', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]);       //[ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]);    //flash

//concatinatng 2 arrays
// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);              //[ 'IronMan', 'Spidy', 'Thor', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);         //[ 'IronMan', 'Spidy', 'Thor', 'superman', 'flash', 'batman' ]

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);         //[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

console.log(Array.isArray("Kishan"));       //false
console.log(Array.from("Kishan"));          //[ 'K', 'i', 's', 'h', 'a', 'n' ]
console.log(Array.from({name: "Kishan"}));  //[] //very interesting case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));    //[ 100, 200, 300 ]
