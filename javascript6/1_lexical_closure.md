## Lexical Scop

function init() {
    let name = "Mozilla"; 
    function displayName() {
        console.log(name); 
    }
    displayName();
}
init();

- when we have an inner function inside outer function then innerfunction can access the properties of outer function but outer function can't do that -->execution context.

## Closure

function MyFun() {
    let name = "Mozilla"; 
    function displayName() {
        console.log(name); 
    }
    return displayName;
}
const myfun=MyFun()
myfun()   //Mozilla
console.log(myfun) //[Function: displayName]     //reference.

- (**) here while returning the reference of innerfunction, whole lexical scope of function is being passed.
as if just innerfunction is being passed then name will be undefined as name was declared in the scope of outer function.

- a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

## real world scenario
        function clickHandler(color){
            document.body.style.backgroundColor = `${color}`
        }

        document.getElementById('orange').onclick = clickHandler("orange")
        document.getElementById('green').onclick = clickHandler("green")
 
- - here the color will change without the clicking of button as i have runned the function 
- - so to solve this i can use the concept of lexical scoping and closure.

# solution:

function clickHandler(color){
            return function(){
                document.body.style.backgroundColor = `${color}`
            }
        }

        document.getElementById('orange').onclick = clickHandler("orange")
        document.getElementById('green').onclick = clickHandler("green")

- or
- - The key concept here is closure. The change function retains access to the color variable from its outer scope 

function clickHandler(color) {
        document.body.style.backgroundColor = `${color}`;
    }
    document.getElementById('orange').onclick = function() {
        clickHandler("orange");
    };

    document.getElementById('green').onclick = function() {
        clickHandler("green");
    };

