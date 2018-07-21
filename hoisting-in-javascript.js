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
JavaScript code is first tokenized and then parsed into an abstract syntax tree.
During this phase the variable declaration are moved to the top of their scope while defintions are left in place.
This is how hoisting works.

Whenever v8 enters the execution context of a certain code (function); it starts by lexing or tokenizing the code. Which mean it will split your code into atomic tokens like foo = 10.
After analyzing the entire current scope, it parses a translated version of into an AST (for Abstract Syntax Tree).
Each time it encounter a declaration, it sends it to the scope to create the binding. For each declaration it allocates memory for that variable. Just allocates memory, doesn’t modify the code to push the declaration up in the codebase. And as you know, in JS, allocating memory means setting the default value undefined.
After that, each time it encounters an assignment or an evaluation, it asks the scope for the binding. If not found in the current scope, it goes up into parent scopes until it finds it.
Then it generate the machine code that the CPU can execute.
Finally, the code is executed.
*/

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