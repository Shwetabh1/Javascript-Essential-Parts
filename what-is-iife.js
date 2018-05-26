/*
 * What is IIFE?
 * IIFE is an acronym for Immediately Invoked Function Expressions.
 * You declare a function and then immediately invoke it.
 * Why do we need it and what is the use?
 * The primary reason to use an IIFE is to obtain data privacy. 
 * Because JavaScript's var scopes variables to their containing function, any variables declared within the IIFE cannot be accessed by the outside world.
 * advantage : doesn't take name in function name space.
 */ 

//example program
 (function () {
    // logic here
})();

(function () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
})();

// ReferenceError: foo is not defined
console.log(foo);

//Unfortunately, the draw back of iife is: The evaluation of given expression is always undefined, 
//so if your IIFE function returns anything, you can't use it.
//An example:

const foo = void function bar() { return 'foo'; }();
console.log(foo); // undefined