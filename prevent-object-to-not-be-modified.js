Object.preventExtensions()
Object.seal() 
Object.freeze()

How would you compare two objects in JavaScript? //The trick here is to understand you don't compare __proto__ but only the internal properties.

function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

Question: Write a simple function to tell whether 2 is passed as parameter or not?

Basics: arguments is a local variable, available inside all functions that provides a collection of all the arguments passed to the function. 
arguments is not an array rather an array like object. It has length but doesn't have the methods like forEach, indexOf, etc.

function isTwoPassed(){
  var args = Array.prototype.slice.call(arguments);
  return args.indexOf(2) != -1;
}


function log(){
  var args = Array.prototype.slice.call(arguments);
  args.unshift('(app)');

  console.log.apply(console, args);
};

To create a non-enumerable property we have to use Object.defineProperty()

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});


It won't be able to modify this property
enumberable: false --> won't be able to enumerate