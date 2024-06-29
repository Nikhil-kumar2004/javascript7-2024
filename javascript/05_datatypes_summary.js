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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory-->Stack and Heap
/*
Stack-->Primitive //The stack is a region of memory that stores temporary variables
Heap-->Reference //The heap is a region of memory used for dynamic memory allocation, 
where variables are allocated and freed manually.
*/
let person="nikhil"
let persontwo=person;// copy of person's data is given not the address.
persontwo="ankit"
console.log(person)//nikhil
console.log(persontwo)//ankit

let obj1 = {
    name:"nikhil",
    age:20
}
obj2=obj1 //reference of address is given where data is stored.
obj2.age=24
console.log(obj1.age)
console.log(obj2.age)