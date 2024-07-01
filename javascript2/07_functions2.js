//Hoisting: declarations shifts to the top.
console.log(addone(5))  //6
function addone(num){   //supports hoisting.
    return num+1 
}

//console.log(addtwo(5)) //error //not support hoisting
const addtwo=function(num){  //it's called expressions (variables) sometimes.
    return num+2
}
//this-->refers to the current context i.e. data inside currect scope.
const user={
    name:"nikhil",
    age:20,
    greeting:function(){
        console.log(`${this.name}, welcome`)
        console.log(this) // { name: 'nikhil', age: 20, greeting: [Function: greeting] }
    }
}
console.log(user.greeting())
console.log(this)//{} //as there are on global context in node enviornment.
//in browser-->(**)window is the global object so window is the global context.

function chai(){
    let username="nikhil"
    console.log(this) //lots of values.
    console.log(this.username)  //undefined  //this context works only inside objects not functions.
}
//arrow function
const arr = () =>{
    let username="nikhil"
    console.log(this.username)  //undefined.
}

const arr2 = (num1,num2) =>{  //explicit return
    return num1+num2
}
const arr3 = (num1,num2) => num1+num2  //implicit return
const arr4 = (num1,num2) => (num1+num2) //implicit return
const arr5 = (num1,num2) => ({name:"nikhil"}) //have to use {} on returning objects.
console.log(arr5(2,3))