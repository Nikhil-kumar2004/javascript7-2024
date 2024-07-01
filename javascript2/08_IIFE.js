//Immediately Invoked Function Expressions (IIFE)
//()-->function declarations. , ()-->funciton return.
(function chai(){            //named IIFE
    console.log("hi")
})(); // has to end first IIFE using ;
//immediately executes the function without explicitly calling function.
//help function from getting polluted through global variables.

( (name) => {               //unnamed IIFE
    console.log(`bye ${name}`)
})("nikhil")