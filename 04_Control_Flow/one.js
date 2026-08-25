//if
//<, >, <=, >=, ==, ===, !=, !==
if ( 2 == "2" ) {
    console.log("EXECUTED");           //EXECUTED
}

if ( 2 === "2" ) {                    //=== -> means it will check the datatypes also
    console.log("executed");          //it will not print
}

if ( 2 != 3 ) {
    console.log("will execute");     //will execute
    
}

const temperatue = 41
if (temperatue < 50 ) {
    console.log("less than 50");
} else {
    console.log("temperatue is greater than 50");
}

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`);      //user power: fly
                                              //it will print inside the scope
}
// console.log(`user power: ${power}`);      //here it wil not print because power is defined outside the scope

//nested if
const balance = 1000
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

//Real life example
const userLoggedIn = true
const debitCard = true
const loggedINFromGoogle = false
const loggedINFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
}

if (loggedINFromGoogle || loggedINFromEmail) {
    console.log("User logged in");
    
}
