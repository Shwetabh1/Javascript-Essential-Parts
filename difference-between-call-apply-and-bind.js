/*
  All three are used for calling a function with a certain context.
  Use .bind() when you want that function to later be called with a certain context, useful in events. 
  Use .call() or .apply() when you want to invoke the function immediately, and modify the context.
  Call/apply call the function immediately, whereas bind returns a function that, when later executed, will have the correct context set for calling the original function.
 */

/*
 * call() and apply() are similar but are different in the way it is called. 
 * call() takes the object and other params in comma seperated values.
 * apply() takes object as first parameter and all others as an array.
 * bind() does the same work of call() and apply() but is not called at the moment. 
 * It will be called at a later time explicitly by the user.
 */

//Let's start with a simple example. This is how we use call, apply and bind.
function fn() {
    console.log(this);
}

var obj = {
    value: 5
};

var boundFn = fn.bind(obj);
boundFn();     // -> { value: 5 }
fn.call(obj);  // -> { value: 5 }
fn.apply(obj); // -> { value: 5 }

//What are the different use cases of call, apply and bind?
//Primary use it to call different functions for different context. Useful in case of context
//We use Apply for variable-arity functions.
//Example

var person = {  
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

person.hello("world");  // output: "James Smith says hello world"
person.hello.call({ name: "Jim Smith" }, "world"); // output: "Jim Smith says hello world"

person.hello.apply({ name: "Drake Smith" }, ["world"]);

//for bind we can save the context and use it later.
var saveContext = person.hello.bind({name: 'Captain America'}, "world");
//call saveContext() at a later time.
saveContext();

person.hello.apply();