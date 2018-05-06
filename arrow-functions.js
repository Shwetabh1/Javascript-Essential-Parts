/*
 * What are arrow functions, how are they different from traditional functions and what are the advantages of using it?
 */

//let's start with an example:
//normal function:
let foo = function() {
    console.log('BAZ')
}

//arrow function
let bar = () => {
    console.log('BAZ')
}

//Difference
/* The biggest difference between arrow functions and normal functions is of scope and context.
 * In classic function expressions, the this keyword is bound to different values based on the context in which the function is called.
 * Whereas arrow functions use the value of this in their lexical scope. This leads to very different behaviour.
 */

let obj = {
    myVar: 'foo',

    myFunc: function() {
        console.log(this.myVar)

        setTimeout(function() {
            console.log(this.myVar)
        }, 1000)
    }
}
obj.myFunc() // foo ... then... undefined

/* what is happening above is myfunc is called from obj so myVar is in its context but setTimeout context is different. 
 * Its context is actually a Timeout object in Node or the window object in browsers. 
 * If we right the above setTimeout as an arrow function the result would be different as setTimeout would now take the value of this
 * from their lexical scope 
 */
let obj = {
    myVar: 'foo',

    myFunc: function() {
        console.log(this.myVar)

        setTimeout(() => {
            console.log(this.myVar)
        }, 1000)
    }
}
obj.myFunc() // foo ... then... foo


// consider this
let obj = {
    myVar: 'foo',

    myFunc: () => {
        console.log(this.myVar)
    }
}

obj.myFunc() // undefined

// It is because myVar is not in the lexical scope of myFunc method.
// But arrow functions don’t bind this to the object that called them. 
// They just use the value of this in the scope in which they were defined. They are unusable for object methods. 

//Function expressions are best for object methods.
//Arrow functions are best for callbacks or methods like map, reduce, or forEach