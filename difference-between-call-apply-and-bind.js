//consider the below function
//call and apply are similar and are different in the way it is called. call takes the object and other params in comma seperated values.
//apply takes object as first parameter and all others as an array.
//bind does the same work of call and apply but is not called at the moment. It will be called at a later day.

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