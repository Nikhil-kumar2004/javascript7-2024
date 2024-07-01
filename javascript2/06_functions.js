function sayMyName(username){
    return `${username} is my name`
}
console.log(sayMyName()) //(**)undefined is my name.

function sayMyName(username){
    if(username===undefined){  //(!username)
        return "give name"
    }
    return `${username} is my name`
}

function sayMyName(username = "nikk"){  //default value.
    return `${username} is my name`
}

function add(val1,...num1){ //(**)rest operator.
    return num1
}
console.log(add(100,200,300,4000)) //[200,300,4000]

function printobj(anyobject){      //anyobject or any name like 'a'.
    return `${anyobject.name} is your name`
}
const myobject={
    name:"nikhil",
    age:20
}
console.log(printobj(myobject))
function returnarray(arr){
    return arr[0]
}
console.log(returnarray([300,400]))