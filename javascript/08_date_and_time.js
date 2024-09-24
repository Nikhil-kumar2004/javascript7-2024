let date=new Date()
console.log(typeof date) //object
console.log(date) //irregular format //2024-06-30T06:03:39.553Z
// in browser enviroment bydefault it's tostring format but in case of node.js enviroment it's json or iso.
console.log(date.toString()) //Sun Jun 30 2024 06:03:39 GMT+0000 (Coordinated Universal Time)
//human readable format
console.log(date.toDateString()) //Sun Jun 30 2024
console.log(date.toISOString()) //2024-06-30T06:03:39.553Z //js 1.8
console.log(date.toJSON()) //2024-06-30T06:03:39.553Z //same as iso only difference is js1.8.5
//under the hood toJSON calls toISOString.
console.log(date.toLocaleString()) //6/30/2024, 6:03:39 AM
console.log(date.getMonth()+1) //for the end user index+1=exact month.
console.log(date.toLocaleDateString()) //6/30/2024

//date produces same output as iso and json but they are strings while date is an object.
let date2=new Date(2023,0,23,5,4) //year,month(index),date,hours,minutes.
let date3=new Date("2023-01-14")
let currentdate=Date.now() //(**)
console.log(currentdate) //ms // 1719728942130
//calculated from january 1 1970.
console.log(date2.getTime()) //gives time of that date in ms.
//now i can compare date2 and todays date.
console.log(Math.floor(Date.now()/1000)) //(**) converted to seconds without decmial places.

let date4=date2.toLocaleString('en-IN',{  //(**) customization.
    weekday: "long",
    year: "2-digit",
    month:"narrow",
    day:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    timeZoneName:"long"
})
console.log(date4) //Monday 23 J, 23, 05:04:00 am Coordinated Universal Time.