//object.create //singleton

//object literals
let obj={
    name:"nikhil",
    age:20,
    "full name":"nikk"
}
console.log(obj.name) //not preferred as "full name" will not be accessed by '.'
console.log(obj["full name"]) //preferred.

const sym=Symbol("key1")
let obj2={
    name:"nikhil",
    age:20,
    [sym]:"mykey",       //(**)correct way to write symbols.
    "full name":"nikk"
}
console.log(obj2.sym)//undefined
console.log(obj2[sym]) //mykey

obj2.age=21
Object.freeze('age') //now changes will not propogate(error will not be shown)
obj2.greeting=function(){
    console.log(`Hello user ${this.name}`)
}
console.log(obj2.greeting())
