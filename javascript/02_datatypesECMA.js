"use strict"//treat all js as the newer version.

//alert(3+4)//we are using nodejs, not browser

//semicolans should be avoided as it marks end of line and hinders readibility.
//e.g. console.log(3); console.log("hi")-->prints with semicolan but not without it.
console.log(3+   
    3)//prints buts code readibility should be high 

let a=123 //number-->2^53-1 //else bigINT
let a2=1234567891234561234567899987654n;
let b="nikhil"
let c=true
let d//undefined
let e=null //standalone value
//symbol -->mainly used in nodejs, it provides uniqueness.
console.log(a2);
//object

console.log(typeof undefined) //undefined
console.log(typeof null) //object.

// In this case, 'n' is not added then BigInt is treated as a Number, and since JavaScript Number cannot precisely handle 
//integers larger than 2^53−1, precision might be lost for very large numbers.
