//promise-this object represents the eventual completion(or failure) of an asynchronous operation.
// basically it pushes operation into a queue and gets completed in the future
//bluebird was a library that were used for many features like fetch,then,catch before promises so js
//integrated it by default in the pure js.

// An asynchronous operation in programming is an operation that allows a program to continue executing 
// other tasks while waiting for the completion of that operation. Unlike synchronous operations, which 
// block the execution of further code until the current operation completes, asynchronous operations allow 
// the program to remain responsive and handle other tasks in parallel.

const promiseOne=new Promise(function(resolve,reject){   //microtask queue.
    //Do an async task
    //DB calls, cryptography, network ...
    setTimeout(function(){
        console.log('inside promise')
        resolve() //resolve is connected to then and called using resolve method.
    })   //without 1s delay it prints before fetch but after normal function.
})
promiseOne.then(function(){
    console.log('inside then')
})

// A promise is created using the Promise constructor, which takes an executor function.
// The executor function has two parameters: resolve and reject.
//The promise will only resolve after the setTimeout delay.

function myfun(){
    console.log('hi')   //runs before all promises as promises are supposed to run later.
}
myfun()

//even if there are 100 functions functions in microtask queue will always be executed at last.
//After executing the 100 synchronous functions, you initiate a direct check on a URL or perform an 
//operation that involves synchronous code (e.g., making a synchronous AJAX request using XMLHttpRequest).

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('inside promise 2')
        resolve() //resolve is connected to then and called using resolve method.
    },1000)
}).then(function(){
    console.log('inside then 2')
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"nikhil",age:20})
    },1000)
})
promiseThree.then(function(user){
    console.log(user) //object is printed.
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:'nikhil',age:20})
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})
promiseFour.then(function(user){
    return user.username
}).then(function(u){
    console.log(u)            //value returned by previous then is passed into next then //chaining.
}).catch(function(error){
    console.log(error)        //error is printed while rejection.
}).finally(() => 'either resolved or rejected')       //runs everytime.

//async/await.

async function promiseFive(){
    try{
        const response =await promiseFour //await is used as it takes time to do this operation.
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
promiseFive()
//The await keyword is used to pause the execution of an async function until a promise is resolved or 
//rejected. While paused, other code can run. Once the promise is resolved, the value is returned and 
//assigned to a variable, and the function continues executing from that point.


async function promiseSix(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()  //await as is takes time to convert.
        //console.log(data)
    }
    catch{
        console.log('E: something is wrong')
    }
}
promiseSix()
//Fetch has seperate queue which is of high priority so, runs before all other promises(visit async-theory)
//if having same time.
//Fetch method fetches a resourse from the network returning a promise (i.e. either response or reject)
//Fetch method is only rejected when a network error is encountered(permission error,type error) 
//and does not reject on HTTP errors.

fetch('https://jsonplaceholder.typicode.com/users') 
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error) //-->e.g. TypeError.
})

//"C:\Users\Nikhilkr\Pictures\Screenshots\Screenshot 2024-07-09 091050.png" // and watch that part again.

// the order of execution can sometimes vary based on the timing of asynchronous operations, 
// even without setTimeout delays
//-->in case of fetch and promise.

// Promises
// When using Promises with .then() and .catch(), the Promise itself doesn't pause execution. Instead, it 
// schedules the execution of the attached .then() and .catch() handlers for later, when the Promise settles 
// (either resolves or rejects).

// Async/Await
// async/await is syntactic sugar over Promises, making asynchronous code look more like synchronous code. 
// When you use await inside an async function, it effectively pauses the execution of that function until 
// the Promise being awaited either resolves or rejects. This pause is only within the async function itself; 
// it doesn't block the overall JavaScript execution thread.

//e.g. i have 50 functions then calling async/await funciton and then another 50 functions are called.
/* 
1)first 50 funcitions are called
2) async/await function is called
3)The await fetch('https://jsonplaceholder.typicode.com/users') line is reached.
4)The asyncFunction is paused at the await expression, and the fetch request is initiated. 
Control is returned to the main thread.
5)another 50 functions are executed.
6)after that Once the fetch request completes, the Promise returned by fetch is resolved.
7)The rest of the asyncFunction is added to the microtask queue.
8)The event loop processes the microtask queue after the current stack of synchronous tasks completes.
9)The continuation of the asyncFunction executes.The await response.json() expression is evaluated, which 
returns another Promise.
10)Once the JSON parsing Promise is resolved, the rest of the asyncFunction (after the second await) is added
 to the microtask queue.
 11)The final part of the asyncFunction (logging the data and "Async Function End") executes.
*/
