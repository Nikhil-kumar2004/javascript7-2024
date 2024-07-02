//if-else
//conditionals: =,<,>,<=,>=,==,===,!=,!==
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//without break all rest or the code gets executed except default.

//falsy values:
// 0, -0, false, BigInt 0n, "", null, undefined, NaN

//truthy values:
// "0", 'false', " ", [], {}, function(){}
let obj={}
if(Object.keys(obj).length===0){
    console.log("empty object")
}
console.log(false == 0);  // true
console.log(0 == '');     // true
console.log(false == ''); // true
function hey(){
    console.log("hi")
}

//Nullish coalescing operator(??) //null and undefined.

//to check if the funcion is returning a value or not
//The nullish coalescing operator returns the right-hand operand (value2) when the left-hand operand
//(value1) is null or undefined. Otherwise, it returns the left-hand operand (value1).
let val= null ?? 10 //10
let val2=undefined ?? 20 //20 //instead of 20 a complex function could be there as fallback mechanism.
let val3=undefined ?? 10 ?? 20 //returns the first value that is not null or undefined.
console.table([val,val2,val3])
function maybeReturnsValue() {
    // some code that may or may not return a value
  }
  
let result = maybeReturnsValue() ?? "Default Value";
console.log(result);
//if maybeReturnsValue() returns null or undefined, result will be assigned "Default Value". 
//If maybeReturnsValue() returns any other value, result will be assigned that value.