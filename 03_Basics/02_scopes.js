if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);               //Here a will not print
// console.log(b);               //Here b will not print
// console.log(c);             //30 //only c will print //so avoid var datatype


let p = 300                               //Global scope
if (true) {
    let p = 10                            //local scope
    const q = 20
    var r = 30
    // console.log("Inner value: ", p);      //Inner value: 10 
    
}
// console.log(p);                           //300  


function one() {
    const username = "Kishan"

    function two() {
        const website = "Youtube"
        console.log(username);                //Kishan
    }
    // console.log(website);                  //error it is outside the function loop
    
    two()
}
// one()

if (true) {
    const username = "Kishan"
    if (username === "Kishan") {
        const website = " youtube"
        // console.log(username + website);        // Kishan youtube
        
    }
    // console.log(website);                    //error, it will not access because it is outside the loop
    
}
// console.log(username);                       //same error as up



// ++++++++++++++ interesting ++++++++++++++++++++++

//Type 1 using function
console.log(addone(5))                          //6 //Here we can print the output both at the starting and at the last of the function declaration
function addone(num) {
    return num + 1
}

//Type 2 declaring expression in function
// console.log(addtwo(5))                       //error //here if we print output first, it will show error. So here, we should have to print output at the last of the function declaration
const addtwo = function(num) {
    return num + 2
}
console.log(addtwo(5));                        //7 //Here the output will come
