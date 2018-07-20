## Difference between console.log() and console.dir(). ##

1. console.log([1,2]) , console.dir([1,2]) shows the difference!
1. console.log() prints out a toString() representation in many cases ex: console.log(/foo/);
1. console.dir() always prints out a navigable tree. 
_Note: Don't use console.dir() in production! It is a non standard feature._

## What are first class programming construct? ##

In computer science, a programming language is said to support first-class functions (or function literal) if it treats functions as first-class objects. Specifically, this means that the language supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions

1. A function is an instance of the Object type
1. A function can have properties and has a link back to its constructor method
1. You can store the function in a variable.
1. You can pass the function as a parameter to another function.
1. You can return the function from a function.


Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.

Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.

## `null` is not an instance of Object. ##

If you try  `typeof null` it returns object. This is actually a bug that is so deeproted it can't be removed.
ECMA script clearly states that `null` is not an Object but a primitive value.
There are two things at play here. `null value` and `null type`. `null value` is a *primitive* value that represents the intentional absence of any object value. `Null type` is a type whose sole value is `null ` value. 


## why `null>=0` equals `true`? ##

Consider the following test cases and their outputs

`null == 0` <br>
output: `false` <br>
`null > 0` <br>
output: `false`<br>
`null + 1 === 1` <br>
output: `true`<br>
`null > 0 || null == 0` <br> 
output: `false`<br>

`null` undergoes type coercion when compared against different type values as Null is a type in itself.
When compared against numbers it is coerced to numbers.
When compared against undefined it is coerced to undefined.
Thus the above behaviour is exhibited.

## what is high order functions? ##
Higher order function are nothing but callback function.

## explain spread ##
Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

`function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6`