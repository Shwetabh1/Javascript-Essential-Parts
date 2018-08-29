/* let and var have a lot of differences.
 * 1. let is scoped to the nearest enclosing block where as var is scoped to the nearest function block.
 * 2. Visibility in Global scope.
 * 3. Performance.
 * 4. Redeclaration. 
 * 5. Global let variables are not added in the window object. 
 */

// 1. let is scoped to the nearest enclosing block where as var is scoped to the nearest function block.
// Consider the following example. Variable declared via var can be used inside anywhere within the function.

function hasForLoop() {
    //fVar *is* visible out here

    for( var fVar = 0; fVar < 5; fVar++ ) {
        //fVar is visible to the whole function
    }

    //fVar *is* visible out here
}


//variable declared via let can only be used inside the for loop.
function allyIlliterate() {
    //tuce is *not* visible out here

    for( let tuce = 0; tuce < 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
        //and there is a separate tuce variable for each iteration of the loop
    }

    //tuce is *not* visible out here
}

//2. Visibility in Global scope. Declare a variable but access it before. Can be done with var. (hoisting) but not with let 
//let variables are only usable in lines of code that occur after the variable is declared (even though they are hoisted!).
war = 'Maroon 5';
console.log(war);
var war;

// this will give an error. Variable not defined.
letItGo = 'hey';
console.log(letItGo); 
let letItGo ;

//3. Performance
//let is faster than var, but only when inside a different scope than the main scope of a function. 
//In the main scope, var and let are roughly identical in performance. Plus Browser support for let.

//4. let variables may not be redeclared by a subsequent var or let.

//this is perfectly fine

var a = 'a';
var a = 'b';

//this is not fine.

let a = 'a';
let a = 'b'; //thorws an error;

//5. The window object is supported by all browsers. It represents the browser's window.
//   All global JavaScript objects, functions, and variables automatically become members of the window object.
//   Global let variables are not added in the window object.

/*  
 * NOTE: const is similar to let in all aspects apart from the fact that variable declared via const can't be reassigned.
 */

 //const
 // variables declared via const must always be initialized.
 // objects declared via const can have changed properties.

 const abc = {
    a: 5,
    b: 6
 };

 // abc can be changed but not not its assignment cuz that is constant