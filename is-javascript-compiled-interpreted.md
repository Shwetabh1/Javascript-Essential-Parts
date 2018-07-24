<h2> Is JavaScript Compiled or Interpreted Language </h2>

First and foremost if you believe interpreted language means it will hit line number xyz in the program and that will be directly passed to CPU and will get executed, you are wrong. Let's first understand compilation and interpretation before we answer what JavaScript exactly is!

In compilation human readable code is converted into machine readable code before execution. For example bytecode in Java, a native excutable file in c. This file can be executed directly as it can be easily understood by hardware. It doesn't need another compilation for it to execute.

In Interpreted Language first the program is broken down and converted into "something else" which can be 'an abstract syntax tree', 'A tokenized representation of the source program' etc. which is then executed by interpreter. We need interpreter to execute it as these are not native machine codes directly executable by hardware. Thus everytime you execute the code, interpreter comes into picture unlike compilation. That is why interpretation is slower than compilation.

We now understand how compilation differs from interpretation but this doesn't answer our question of whether JS is compiled or interpreted.
Javascript has come a long way since its inception in 1995. Javscript was an interpreted language. It no longer is.

The emergence of JIT compilers and JavaScript engines(v8, Rhino, SpiderMonkey) has blurred the line between compilation and interpretation to a point where the question doesn't mean all that much.

A JavaScript engine is a program or an interpreter which executes JavaScript code. A JavaScript engine can be implemented as a standard interpreter, or just-in-time compiler that compiles JavaScript to bytecode in some form.

<h3>Few JavaScript Engines:</h3>
```
V8 — open source, developed by Google, written in C++
Rhino — managed by the Mozilla Foundation, open source, developed entirely in Java
SpiderMonkey — the first JavaScript engine, which back in the days powered Netscape Navigator, and today powers Firefox
```

A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode/native exceutable code that the machine understands and can execute. In contrast, JavaScript earlier had no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

Ecma Script defines javascript in Interpreter agnostic terms. 
Moroever here is what Kyle Simpson said
>It may be self-evident, or it may be surprising, depending on your level of interaction with various languages, but despite the fact that JavaScript falls under the general category of "dynamic" or "interpreted" languages, it is in fact a compiled language. It is not compiled well in advance, as are many traditionally-compiled languages, nor are the results of compilation portable among various distributed systems.