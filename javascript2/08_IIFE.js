//Immediately Invoked Function Expressions (IIFE)
//()-->function declarations. , ()-->funciton return.
(function chai(){            //named IIFE
    console.log("hi")
})(); // has to end first IIFE using ;
//immediately executes the function without explicitly calling function.
//help function from getting polluted through global variables by creating new scope.

( (name) => {               //unnamed IIFE
    console.log(`bye ${name}`)
})("nikhil")

//+++++++++++++++++++ Javascript Execution Environment ++++++++++++++++++
/*
-It tells how javascript runs the file.
-Execution Conexts made when file is runned:
1)Global EC is always made and referred through 'this' keyword ,browser->window object,node.js->{}(global object)
The global execution context is the default execution context where JavaScript code runs initially.
Every time a function is invoked, a new function execution context is created.
2)Function EC
3)Eval EC(optional)->treated as global.

-Code runs in 2 phases: 1)Memory Creation Phase 2)Execution Phase
-for every function a new execution context is made and deleted.
"C:\Users\Nikhilkr\Pictures\Screenshots\Screenshot 2024-07-02 094430.png"
"C:\Users\Nikhilkr\Pictures\Screenshots\Screenshot 2024-07-02 095153.png"-->call stack.
*/