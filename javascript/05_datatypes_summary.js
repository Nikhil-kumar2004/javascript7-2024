//Primitive-->call by value(copy)-->stores data of only one type.
//7 types-->number,string,boolean,null,undefined,bigint,symbol.

const Id=Symbol("123")
const anotherID=Symbol("123") //unique.
console.log(Id==anotherID)//false
console.log(Id===anotherID)//false

let bigInt=2345678999999999934n
console.log(typeof bigInt) //bigint

//Reference(Non-Primitive)-->call by reference(address)-->can sore more than 1 type of data.
//3 types-->Array,Object,Function

let arr=["nikhil",84,"hey"]
let obj={
    name:"nikhil",
    age:20
}
let fun=function(){
    console.log("Run")
}
console.log(arr)
console.log(typeof arr) //object

console.log(obj)
console.log(typeof obj) //oject

console.log(fun)
console.log(typeof fun) //function -->function object, more specificely.