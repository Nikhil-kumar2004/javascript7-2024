const arr=[1,2,"nikhil"]
//arrays in js are resizable and can contain mix of values.
//it makes shallow copy(pointing to same reference) as well as deep copy(do not share same reference)

//"An array can make both shallow and deep copies depending on the data types it contains. For primitive data 
//types (like numbers, strings, booleans), deep copies are made because they are copied by value. For objects 
//(including arrays), shallow copies are made because only references to the objects are copied."

let originalArray = [1, 2, {a: 3}];
let shallowCopy = [...originalArray];
shallowCopy[2].a = 50; 
shallowCopy[0]=100
console.log(originalArray); // [1, 2, {a: 50}]
console.log(shallowCopy);   // [100, 2, {a: 50}]
//object is non-primitive so, creating deep copy.

arr.push(4)
arr.pop()
arr.unshift(8) //adds element at the 0th index.
arr.shift() //remove element from the start.

console.log(arr.includes(2))
console.log(arr.indexOf(2))
let val=arr.join();
console.log(val)// 1,2,"nikhil"-->string.

console.log(arr.slice(1,2)) //returns a part of array. // [2]
console.log(arr.splice(1,2)) //[2,"nikhil"] //returns a part and also removes it from array.
// start from 1 and remove 2 elements (and also insert 3 in that position(1,2,3))
console.log(arr)// [1]