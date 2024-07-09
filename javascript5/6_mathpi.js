// can we change the value of Math.pi if no why?
const pi=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(pi)
/*Output:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
  overwriting is false hardcoded.
*/

// Object.defineProperty(Math,"PI",{   //TypeError: Cannot redefine property: PI
//     writable:true
// })

const obj={
    name:"nikhil",
    age:20,
    isAvailable:true,
    greeting: function(){
        console.log("hey")
    }
}
console.log(Object.getOwnPropertyDescriptor(obj)) //undefined
console.log(Object.getOwnPropertyDescriptor(obj,'name'))
/*Output:
{
  value: 'nikhil',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
Object.defineProperty(obj,"name",{         //not defineProperties.
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(obj,'name'))  //properties changed

for (const key in obj) {
    console.log(`${key}:${obj[key]}`)
}
/*Output:
age:20
isAvailable:true                          //name is not enumerable.
greeting:function(){
        console.log("hey")   //this should not be like this as key,value pair is needed-->code fat gya hai
    }
*/
for (const key in obj) {
    if(typeof obj[key]!='function'){
        console.log(`${key}:${obj[key]}`)
    }   
}