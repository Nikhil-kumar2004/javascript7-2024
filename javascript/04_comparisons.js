//these things are not preferred as we want clean code not confusions.
console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(2+2+"1")//41

console.log(2>=1)//works as expected-->true

console.log("1">1)//strings are converted to number //false
console.log(2>"1")//true
console.log("1"==1)//true
console.log("2"==1)//false
console.log("1"===1)//false //strict equality i.e. datatype is also checked.

console.log(null==0)//false
console.log(null>=0)//true //comparison operators treat null diffently then equality operator.
console.log(null===0)//false

console.log(undefined==0)//false // in case of undefined always false.