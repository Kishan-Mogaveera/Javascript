// Dates
let myDate = new Date()
console.log(myDate.toString());             //Tue Aug 18 2026 10:51:30 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());         //Tue Aug 18 2026
console.log(myDate.toISOString());          //2026-08-18T05:21:30.616Z
console.log(myDate.toJSON());               //2026-08-18T05:21:30.616Z
console.log(myDate.toLocaleDateString());   //18/8/2026
console.log(myDate.toLocaleString());       //18/8/2026, 10:51:30 am
console.log(myDate.toLocaleTimeString());   //10:51:30 am
console.log(typeof myDate);                 //object

let myCreatedDate = new Date(2026, 0, 25);  //(year, 0 to 11(jan to dec), date)
console.log(myCreatedDate.toDateString());  //Sun Jan 25 2026

let myCreatedDate_Time = new Date(2026, 0, 25, 10, 15);  //(year, 0 to 11(jan to dec), date, hour, minute)
console.log(myCreatedDate_Time.toLocaleString());        // 25/1/2026, 10:15:00 am

let myCreatedDate2 = new Date("2026-01-14")
console.log(myCreatedDate2.toLocaleString()); //14/1/2026, 5:30:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp);               //1787031452992
console.log(myCreatedDate2.getTime());  //1768348800000

console.log(Date.now());                  //1787031655938
console.log(Date.now()/1000);             //1787031655.938
console.log(Math.floor(Date.now()/1000)); //1787031655

let newDate = new Date()
console.log(newDate);                  //2026-08-18T05:44:52.156Z
console.log(newDate.getMonth()+ 1);    //8
console.log(newDate.getDay());         //2
 
newDate.toLocaleString('default', {
    weekday: "long"
})
