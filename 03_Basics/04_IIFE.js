// Immediately Invoked Function Expression (IIFE)
//if we write more than one IIFE, then semicolon after the function calling is very important

//Type 1 normal function calling
function chai() {
    console.log(`DB CONNECTED`);            //DB CONNECTED
    
}
chai();                                     //semicolon imp

//Type 2 IIFE calling (named IIFE)
(function coffee() {
    console.log(`VPN CONNECTED`);           //VPN CONNECTED
    
})
();                                         //semicolon imp

//Type 3 using arrow function (unamed IIFE)
( (word) => {
    console.log(`BLUETOOTH CONNECTED ${word}`);          //BLUETOOTH CONNECTED SUCCESSFULLY
    
})
('SUCCESSFULLY');                                        //semicolon imp