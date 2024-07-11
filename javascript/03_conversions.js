let score=undefined
let scoreno=Number(score)
console.log(typeof(scoreno)) //number
console.log(scoreno) //NaN

/*
all the below will get converted and type will be number but while printing result will be 
different.
"33abc"-->NaN(not a number)
null-->0
undefined-->NaN
true-->1, false-->0
*/

let value=3
let ans=Boolean(value)
console.log(ans)
/*
1..N-->true, 0-->false
""-->false, "nikhil"-->true
null,undefined-->false
*/
let avg=undefined
let k=String(avg)
console.log(typeof k) //string
console.log(k)// undefined
