const num=300 //js detects it to be a number. 
const num2=new Number(300) //we explicitly defines it to be number//object->type
//i.e. it has to be a number 100%
console.log(num)//300
console.log(num2) //[Number: 300]

console.log(num2.toString().length)//3
console.log(num2.toFixed(2))//300.00 //(**)very much used in real life to decrease precision value.

const num3=85.3532
console.log(num3.toPrecision(3)) //(**)3->85.4,2->85,5->85.353,7->85.35320,1->9e+1
const num4=1000000000
console.log(num4.toLocaleString())//(**)us-stadard by default//1,000,000,000
console.log(num4.toLocaleString('en-IN'))// indian standard. //1,00,00,00,000

//+++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++

console.log(Math)// object
console.log(Math.PI) //property
console.log(Math.abs(-4))//methods
console.log(Math.round(4.23))
console.log(Math.floor(3.43))
console.log(Math.ceil(5.34))
console.log(Math.max(3,5,4,6,9))

console.log(Math.random())//(**)0 (inclusive) and 1 (exclusive)
console.log(Math.random()*10) // if i want values between 0 and 10.

let mini=10
let maxi=20
console.log(Math.floor(Math.random()*(maxi-mini))+mini) //[mini,maxi-1]
console.log(Math.floor(Math.random()*(maxi-mini+1))+mini)//[mini,maxi]
