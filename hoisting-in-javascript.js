/*
 * Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
 * Of note however, is the fact that the hoisting mechanism only moves the declaration. The assignments are left in place.
 * There are three aspects to consider. 1. var & let & const 2. function 
 * I will explain that with a simple example given below.
 */

 console.log(abc); // abc would be undefined. 
 var abc = "hello";

 /*
  * The above code snippets is essentially sth like this while interpreting. This is called hoisiting. Works in case of var and functions.
  * but not with let and const.
  */
  var abc;
  console.log(abc);
  abc = "hello";


 
 /*
  *Assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed. 
  *  
  */
  a = 5;

 // here a becomes a global variable which can be used anywhere.
 var a = b = 5;
 // here b =5 and a = b. thus b is a global variable while a is not.
 //This means that, all undeclared variables are global variables.


 /*
  *
  *function declaration are hoisted but function expressions are not hoisted.
  * what that essentially means is
  */
//Function declarations


hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};

// this will give the output.


//function expressions are not hoisted.
expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};

/*  
 * Also Note, 
 */

 Variable assignment over function declaration
var double = 22;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: number
Function declarations over variable declarations
var double;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: function


/* class should be initialised first before using.*/
