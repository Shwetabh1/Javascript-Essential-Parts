<h2> How JavaScript Works </h2>
Why JavaScript is called single threaded? what is the event loop? What is asynchronous execution?
To understand all these we need to understand about the inherent properties of JavaScript.
JavaScript is a single threaded, non-blocking, asynchronous, concurrent language.

<h3>Single Thread</h3>

JavaScript has only one execution context or thread. That is at most one of the setTimeout callbacks(blocking functions) can execute 
at a time.

<h3>How its non-blocking?</h3>
Execution never stops. A asynchornous function is handled by webapis and exceution continues.

<h3>How does everything work together?</h3>

<img src="https://github.com/Shwetabh1/Javascript-Essential-Parts/blob/master/JavScript_CallStack.png" alt="Essential JavaScript" width="640" height="480"/>


1. Heap : This is where the memory allocation happens
1. Stack : This is where your stack frames are as your code executes. It records where we are in the program. Each entry into the stack is called stack frame.
1. Web API: They are not provided by the engine but the Browser (like the DOM, AJAX, setTimeout)
1. Callback queue: Once the web api's have executed they are moved to the callback queue.
1. Event Loop: When there is no stack frame it moves the result to stack.


```
console.log('before');
setTimeout(()=> {
	console.log('Inside SetTimeout');
},3000)
console.log('after');
```

1. first console.log() executes. It goes into the call stack and then executes.

2. SetTimeout is passed to the webApis and then once the task is completed it is moved to the Callback Queue.

3. The other functions execute.

4. Once the stack is clear the *event loop* moves it from callback queue to stack. It then gets executed.