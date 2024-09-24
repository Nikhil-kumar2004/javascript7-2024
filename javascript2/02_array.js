const arr1=[1,2,3,4]
const arr2=[4,5,6]
const arr3=[5,6,7,8]
arr1.push(arr2)
console.log(arr1) //[1,2,3,4, [4,5,6]]

const arr4=arr2.concat(arr3) //makes new array and doesn't change arr2.
//not preferred as difficulty in concatenation of more than 2 arrays.
console.log(arr4) 

const arr5=[...arr2,...arr3,...arr4] //preferred  //spread operator
console.log(arr5)

const arr6=arr1.flat(1) //[1,2,3,4,4,5,6] //Infinity--> if many levels of array inside array.
console.log(arr6)

console.log(Array.isArray("nikk")) //false
console.log(Array.from("nik")) //['n','i','k']
//arr.for() -> Converts array-like or iterable objects into arrays.
console.log(Array.from({name:"nikk"})) //[]-->interesting case

const a=1
const b=2
console.log(Array.of(a,b))  //[1,2] //from will give error
//arr.of() -> Creates an array from individual arguments.