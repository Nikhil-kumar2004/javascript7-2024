- JS is a prototype based language.

## what is prototype behaviour
- js haar nhi manata agar koi cheez nhi mili hai to wo uske or andar jayega
- browser while doing console.log for values in array ...etc then it gives protypes that these are the methods that can be used
- in that also it gives access to protoypes of object 
- which can further have a prototypes if we use getter and setter but object is last and references to null.

- everything in js has access to this prototypes of object so everything can be treated as object and we can use object properties(not all are usable)
- - "C:\Users\Nikhilkr\Pictures\Screenshots\Screenshot 2024-07-09 110232.png"

# example
function multiply(num){
    return num*5;
}
multiply.you=2
console.log(mulitply(num)) -- 20
console.log(mulitply.you) -- 2
console.log(mulitply.prototype) -- {}

# working of new keyword:
- Here's what happens behind the scenes when the new keyword is used:

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is     bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
