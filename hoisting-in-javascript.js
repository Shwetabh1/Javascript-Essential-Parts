/*
 * Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
 * Of note however, is the fact that the hoisting mechanism only moves the declaration. The assignments are left in place.
 * There are three aspects to consider. 
       1. How it works internally.  
       2. Hoisting for var, let & const. 
       3. Hoisting for function. 
 */

// 1.How it works internally
/*To understand this we need to understand JavaScript compilation/interpretation code. 
JavaScript is first converted into an abstract syntax tree.
During this phase the variable declaration are moved to the top of their scope while defintions are left in place.
This is how hoisting works.*/

// 2.Hoisting for var, let and const.
//Hoisting doesn't happen for let and const.
//Consider the follwing example:

console.log(abc); // output would be undefined. 
var abc = "hello";

//The above code snippets essentially becomes like following while interpreting. This is called hoisting. 

var abc;
console.log(abc);
abc = "hello";

/*
 *Assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed. 
 */
a = 5;

//here a becomes a global variable which can be used anywhere.
var a = b = 5;
// here b = 5 and a = b. thus b is a global variable while a is not.
//This means that, all undeclared variables are global variables.

// 3. Hoisting for function.
/*
 *function declaration are hoisted but function expressions are not hoisted.
 */
//Function declarations

hoisted(); // Output: "This function has been hoisted."

function hoisted() {
    console.log('This function has been hoisted.');
};

//function expressions are not hoisted.
expression(); //Output: "TypeError: expression is not a function

var expression = function() {
    console.log('Will this work?');
};

/*  
 * Also Note, 
 */

//Variable assignment over function declaration
var double = 22;

function double(num) {
    return (num * 2);
}

console.log(typeof double); // Output: number

//Function declarations over variable declarations
var double;

function double(num) {
    return (num * 2);
}

console.log(typeof double); // Output: function

//Variable definition over function defintion

var num = 2;

function num() {};

console.log(num); //here 2 will be printed

/* class should be initialised first before using.*/