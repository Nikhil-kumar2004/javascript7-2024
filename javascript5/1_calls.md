## what will the situation of call stack when there is a function inside of function.
- outer function will be pushed into call stack then the inside function will be pushed inside call stack
- all the function have a execution context but the inside called function will have the execution context as the outer function and what will 'this' will refer to?

- -  in that case this refers to the global execution context.
- window = {this: window}
- node : in node environment we don't have window access so this refers to empty object, {}