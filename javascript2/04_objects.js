const obj=new Object() //singleton object.??
const obj2={} //non-singleton object.     //see singleton vs non-singleton
const obj1 = new Object();
console.log(obj1 === obj); // false (different instances)
const obj11 = {};
console.log(obj11 === obj2); // false (different instances)
//Both new Object() and {} create non-singleton objects because they produce unique, independent instances.
obj2.id="123abc" //insertion.
console.log(typeof obj) //object.
console.log(typeof obj2) //object.

const regularUser={
    fullname:{
        username:{
            firstname:"nikhil",
            lastname:"kumar"
        }
    }
}
console.log(regularUser.fullname.username.firstname)

const obj3=Object.assign({},obj,obj2) //{target,...objects}, without {} obj becomes target and
//all data gets stored in obj as well as obj3.
const obj4={...obj,...obj2}//preferred //using spread object.
console.log(obj3)

console.log(Object.keys(obj3)) //array.
console.log(Object.values(obj3)) //(**)
console.log(Object.entries(obj3)) //array of array of key value pairs
console.log(obj3.hasOwnProperty('id')) //true (**)