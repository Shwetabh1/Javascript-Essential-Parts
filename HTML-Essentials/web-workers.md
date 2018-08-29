The Web Workers API makes it possible to execute a JavaScript file asynchronously and autonomously. A web worker is essentially a thread executing a JavaScript file. Thus, using web workers you can achieve multi threading in your web applications.

var worker = new Worker("http://jenkov.com/worker.js");


https://www.html5rocks.com/en/tutorials/workers/basics/