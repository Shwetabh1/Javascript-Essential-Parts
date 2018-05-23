//TODO

#Difference between console.log() and console.dir()

console.log([1,2]) , console.dir([1,2]) shows the difference!
console.log() prints out a toString() representation in many cases ex: console.log(/foo/);
console.dir() always prints out a navigable tree. 
Note: Don't use console.dir() in production! It is a non standard feature.

#What are first class programming construct?

In computer science, a programming language is said to support first-class functions (or function literal) if it treats functions as first-class objects. Specifically, this means that the language supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions

A function is an instance of the Object type
A function can have properties and has a link back to its constructor method
You can store the function in a variable.
You can pass the function as a parameter to another function.
You can return the function from a function.


Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.

Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.
