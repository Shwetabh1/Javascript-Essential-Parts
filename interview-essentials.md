1. General Web Knowledge
You will be expected to have a grasp of the technologies and paradigms that make up the web.

HTTP requests – GET and POST along with associated headers such as Cache-Control, ETag, Status Codes, and Transfer-Encoding.
REST vs RPC.
Security – when to use JSONP, CORs, and iFrame policies.

2. Javascript

Execution context, especially lexical scope and closures.
Hoisting, function & block scoping and function expressions & declarations.
Binding – specifically call, bind, apply and lexical this.
Object prototypes, constructors and mixins.
Composition and high order functions.
Event delegation and bubbling.
Type Coercion using typeof, instanceof and Object.prototype.toString.
Handling asynchronous calls with callbacks, promises, await and async.
When to use function declarations and expressions.

3. DOM

Selecting or finding nodes using document.querySelector and in older browsers document.getElementsByTagName.
Traversal up and down – Node.parentNode, Node.firstChild, Node.lastChild and Node.childNodes.
Traversal left and right – Node.previousSibling and Node.nextSibling.
Manipulation – add, remove, copy, and create nodes in the DOM tree. You should know operations such as how to change the text content of a node and toggle, remove or add a CSS classname.
Performance – touching the DOM can be expensive when you have many nodes, you should at least know about document fragments and node caching.

4. SYSTEM DESIGN


Rendering – client-side (CSR), server-side (SSR) and universal rendering.
Layout – if you’re designing a system used by multiple development teams, you need to think about building components and if you require teams to follow a consist markup to use said components.
State management such as choosing between unidirectional data flow or two-way data binding. You should also think about if your design will follow a passive or reactive programming model, and how components related to each other for example Foo–> Bar or Foo –>Bar.
Async flow – your components may need to communicate in real-time with the server. The design you propose should consider XHR vs bidirectional calls. If your interviewer asks you to support older browsers, your design will need to choose between hidden iFrames, script tags or XHR for messaging. If not, you could propose using websockets or you might decide server-sent events (SSE) are better.
Separation of concerns – Model-View-Controller (MVC), Model-View-ViewModel (MVVM) and Model-View-Presenter (MVP) patterns.
Multi-device support – Will your design use the same implementation for the web, mobile web, and hybrid apps or will they be separate implementations? If you were building a site like Pinterest, you might consider three columns on the web but only one column on mobile devices. How would your design handle this?
Asset delivery – In large applications, it’s not uncommon to have independent teams owning their own codebases. These different codebases probably have dependencies on each other and each usually has their own pipeline to release changes to production. Your design should consider how assets are built with dependencies (code splitting), tested (unit and integration tests) and deployed. You should also think about how you will vend assets through a CDN or inline them to reduce network latency.
