//for,while,do-while

//Array specific loops

//for of --> for iterable objects.
const arr=[1,2,3,4]
for(const val of arr){ //no len,no increment.
    console.log(val)
}

let str="nikhil kumar"
for(let char of str){
    console.log(char)
}

let map=new Map()
map.set('a',1)
map.set('b',2)
for(let key of map){
    console.log(key) //['a',1],['b',2]
}
for(let [key,value] of map){
    console.log(key)   //a,b
}

let obj={
    name:"nikhil",
    age:20
}
// for(const [key,value] of obj){     //obj is not iterable.
//     console.log(key)
// }                                  //for(const [key,value] of Object.entries(obj)) -->now iterable.

//for in --> iterate over enurable properties.
//enumerable objects refer to objects whose properties (or elements) can be iterated over
for(const key in obj){
    console.log(obj[key])
}

let arr2=[3,4,5]
for(const key in arr2){
    console.log(key) //0,1,2 -->gives keys(index);
    console.log(arr2[key])
}

for(const key in map){
    console.log(key)   //nothing is printed. // not enurable
}

//for each -->(**)high order array.
const arr3=[54,3,2,33]
arr3.forEach(function (item){      //call back function is passed in forEach which does not have name.
    console.log(item)
})

arr3.forEach( (item,index) => {
    console.log(item,index)
})

arr3.forEach( (it,index,arr) => { //for each has access to value,index and whole array.
    console.log(it,index,arr)
})

const api=[          //most common format.
    {
        name:"nikhl",
        age:20
    },
    {
        name:"ankit",
        age:18
    }
]
api.forEach( (item) => {            //made easy.
    //item.name="nikk" //modification is possible.
    console.log(item.name)
})
