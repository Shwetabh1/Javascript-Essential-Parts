/*
 * Context: The object to which the method belongs. Anytime you call a method via objects it will run in the CONTEXT of the object.
 * Scope pertains to the visibility of Object.
 */


// Every function invocation has both a scope and a context associated with it. 
// Fundamentally, scope is function-based while context is object-based. 
// In other words, scope pertains to the variable access of a function when it is invoked and is unique to each invocation.
// Context is always the value of the this keyword which is a reference to the object that “owns” the currently executing code.

/*
Scope: collects and maintains a look-up list of all the declared identifiers (variables), 
       and enforces a strict set of rules as to how these are accessible to currently executing code.
       The JavaScript Engine first compiles code before it executes, and in so doing, it splits up statements like var a = 2; into two separate steps:
        First, var a to declare it in that Scope. This is performed at the beginning, before code execution.
        Later, a = 2 to look up the variable (LHS reference) and assign to it if found.
        Both LHS and RHS reference look-ups start at the currently executing Scope, and if need be (that is, they don't find what they're looking for there),
        they work their way up the nested Scope, one scope (floor) at a time, looking for the identifier, until they get to the global (top floor) and stop, and either find it, or don't
*/




