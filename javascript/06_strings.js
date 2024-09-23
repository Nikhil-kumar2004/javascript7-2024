let name="  nikhil kumar  "
let age="20"
console.log("hi " + name + " you are "+age) //old way.
console.log(`Hi ${name} you are ${age}`) //more readable //modern way 
// called string interpolation (backticks)
const str=new String("nikk") //using objects of javascript.
console.log(typeof str)  //object.
//declaration directly is lighter and with constructor it's heavier(more memory)
//Comparisons between two primitives are value-based (=== works as expected)-->normal declaration.
//Comparisons between two objects are reference-based (=== returns false even if values match)-->contructor.
//constructors are avoided as it sometime leads to unexpected behavior. 
console.log(name.length)
console.log(name.toUpperCase()) //string has various methods.
console.log(name.charAt(2))
console.log(name.indexOf('o'))  //-1

let str2=str.substring(0,4) // here -ve index is ignored and from 0 it starts.
let str3=name.slice(-4,4) // '-' indicates indexing starts from last.
console.table({str2,str3})
let str4=name.split(' ') //gives array(object).
let words=["hi","you"]
let str5=words.join('.')
console.log(str5) //hi.you
console.log(typeof str5) //string

console.log(name.trim()) //trims starting and ending spaces //trimStart(),trimEnd()

console.log(name.replace(' ','-')) //first occurance only.
console.log(name.replaceAll(' ','-'))
console.log(name.includes('nik')) //returns true if the substring is there in string.
