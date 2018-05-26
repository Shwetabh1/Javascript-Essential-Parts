#What the heck is event loop anyway?
To understand event loops first we need to understand about the inherent properties of JavaScript.
JS is a single threaded, non-blocking, asynchronous, concurrent language.

##Single Thread##

JavaScript has only one execution context or thread. That is at most one of the setTimeout callbacks(blocking functions) can execute 
at a time.

##How its non-blocking?##
Execution never stops. A asynchornous function is handled by webapis and exceution continues.

##How does everything work together?##

Consider the below diagram:
//todo the diagram

1. first console.log()  executes. it goes into the stack and then executes.

2. SetTimeout is passed to the webApis and then once the task is completed it is moved to the taskQueeue

3. the other functions execute.

4. once the stack is clear move the *event loop* moves it from task queue to stack.
