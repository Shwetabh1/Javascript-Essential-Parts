/* 
 * Here we explore the what, why and how of closures.
 * what is closure?
 * 
 */

What is a closure, and how/why would you use one?

A closure is the combination of a function and the lexical environment within which that function was declared.
The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available.
Closures are functions that have access to the outer (enclosing) function's variables—scope chain even after the outer function has returned.

Why would you use one?

->Data privacy / emulating private methods with closures. Commonly used in the module pattern.
->Partial applications or currying.

Remember it this way. Closure is nothing but a function with preserved data.

Lets get into the details

closures are nothing but functions with PRESERVED data.

var Employee = function (name, company, salary) {
   var name = name ;       //Public attribute default value is null
    var company = company ; //Public attribute default value is null
    var salary =salary ; //Public attribute default value is null

    // Private method
    var increaseSalary = function (salary) {
        salary=  salary + 1000;
    };

    // Public method
    var dispalyIncreasedSalary = function() {
       
        console.log(salary);
    };
    return {increaseSalary:increaseSalary,dispalyIncreasedSalary:dispalyIncreasedSalary};
};

var e=new Employee("san","cdi",5000);
e.increaseSalary(1000);
e.dispalyIncreasedSalary();


To understand it you need to understsand lexical scoping

Anytime you try to access anything from outside the scope it becomes a closure.

The word "lexical" refers to the fact that lexical 
scoping uses the location where a variable is declared within the source code to determine where that variable is available.

What are practical examples of Closures?? Where would one use closure?
When you know data at a later time;

//closure 

GLobal scope is visible to all other scopes.In client-side JavaScript, 
the global scope is generally the web page inside which all the code is being executed.
A global object is defined in global scope.Window or global in case of node 
 



