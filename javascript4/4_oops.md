## OOP
-Yes, JavaScript has classes. The class syntax was introduced in ECMAScript 2015 (ES6). This syntax provides a more straightforward and structured way to create objects and manage inheritance, making it easier for developers to write and understand object-oriented code in JavaScript.

## Objects:
-collection of properties and methods.

## why use OOPS
--to eliminate spaghetti code

## Parts of OOPS
Object literals: object made using constructor.

-classes
-constructor functions
-prototypes
-instances(new, this)

## 4 pillars of OOP
-abstraction
-encapsulation
-inheritance
-polymorphism

## new keyword
- it's an constructor function
const date=new Date()
- used to make new instance/executional context.
Steps:
-new empty object is created.
-constructor function is called.
-arguments are packed inside this keyword
-returned by function

## need of new keyword
function User(username,logincount,isloggedin){
    this.username=username
    this.logincount=logincount
    this.isloggedin=isloggedin    // return this; is implicitly defined and object will be printed.
}
const userone=User("nikhil",5,true)
const usertwo=User("ankit",3,false)

-console.log(userone)   // ankit,3,false //values overwritten.