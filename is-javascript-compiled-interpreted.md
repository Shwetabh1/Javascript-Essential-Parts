<h2> Is JavaScript Compiled or Interpreted Language </h2>

First and foremost if you believe interpreted language means it will hit line number xyz in the program and that will be directly passed to CPU and will get executed, you are wrong. Let's first understand compilation and interpretation before we answer what JavaScript exactly is!

In compilation human readable code is converted into machine readable code before execution. For example bytecode in Java, a native excutable file in c. Now you can use this file and execute directly as it can be easily understood by hardware. It doesn't need another compilation for it to execute.

In Interpreted Language first the program is broken down and converted into "something else" which can be 'an abstract syntax tree', 'A tokenized representation of the source program' etc. which is then executed by interpreter. We need interpreter to execute it as these are not native machine codes directly excutable by hardware.

Javascript has come a long way since its inception in 1995. Javscript was an interpreted language. It no longer is.

The emergence of JIT compilers and JavaScript engines has blurred the line between compilation and interpretation to a point where the question doesn't mean all that much.

A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. In contrast, JavaScript earlier had no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

A JavaScript engine is a program or an interpreter which executes JavaScript code. A JavaScript engine can be implemented as a standard interpreter, or just-in-time compiler that compiles JavaScript to bytecode in some form.Because of the availability of JavaScript engines such as v8, Rhino, SpiderMonkey confusion has arrived.
The V8 JavaScript VM used in Chrome doesn't include an interpreter. Instead it consists of two compilers and compiles the code on the fly. One of the compilers runs quickly but generates inefficient code, the other is an optimizing compiler.

I can understand why some people would consider this "cheating", since V8 takes source code as input every time the code runs and the user has to have V8 installed. But consider a compiler which emits an executable which includes a complete interpreter and bytecode. Then you would have a stand-alone program. It just wouldn't be very efficient.


V8 — open source, developed by Google, written in C++
Rhino — managed by the Mozilla Foundation, open source, developed entirely in Java
SpiderMonkey — the first JavaScript engine, which back in the days powered Netscape Navigator, and today powers Firefox