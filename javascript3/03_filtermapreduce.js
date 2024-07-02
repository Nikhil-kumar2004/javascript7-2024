//foreach loop does not return anything.
const array=[2,3,4,5]
const val=array.forEach( (item) => {
    return item
});
console.log(val)  //undefined.

//to return
const arr=[]
array.forEach(function (item){
    if(item>=4) arr.push(item)
})
console.log(arr)

//or simply use filter.
const ans=array.filter((item) => {    //true/false.
    return item>=4                 //implicit return is also possible.
})
//whenever curly braces are used in funciton then return is used if storing in some variable.
console.log(ans) //[4,5]

const value=array.map((item) => item+5)  //(**)
console.log(value) //[7,8,9,10]  
//filter only filters based on condition and for item+5 it would have returned [2,3,4,5]
//map is similar to forEach but can return.

//chaining
let values=array.map((item) => item*10).map((item) => item+5).filter((it) => it>=25)
console.log(values) //[25,35,45,55]
//output array of one map is passed to another map and overall output is then passed to filter.

shopingcart=[
    {
        item:"py course",
        price:2999
    },
    {
        item:"js course",
        price:299
    }
]
const answer=shopingcart.reduce( (acc,curritem) => acc + curritem.price,0) //(**)
console.log(answer)
// 0 ->initial value then passed to accumulator.