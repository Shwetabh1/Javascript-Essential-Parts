There are 4 design pattern you must be aware about

1. Module Design Pattern
2. Prototypical Design Pattern
3. Singleton Design Pattern
4. Observable Design Pattern

When using these pattern we need to keep these things in mind

1. Context: Where/under what circumstances is the pattern used?
2. Problem: What are we trying to solve?
3. Solution: How does using this pattern solve our proposed problem?
4. Implementation: What does the implementation look like?

#Module Design Pattern

// Modules are JavaScript Classes
// The module pattern allows for public and private (plus the lesser-know protected and privileged) access levels.
/*
 * Example
 */
 (function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

  })();

  var HTMLChanger = (function() {
    var contents = 'contents'

    var changeHTML = function() {
      var element = document.getElementById('attribute-to-change');
      element.innerHTML = contents;
    }

    return {
      callChangeHTML: function() {
      changeHTML();
      console.log(contents);
      }
    };
  })();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined

#Prototypical Design Pattern
// The Prototype design pattern relies on the JavaScript prototypical inheritance.
// Under what circumstances they are helpful? When is prottypical inheritance beneficial?
// 

#Singleton Design Pattern
Singleton Design Pattern Implementation

var MyNameSpace = {};
MyNameSpace.Singleton = (function() {

  // Private attribute that holds the single instance
  var singletonInstance;  

  // All of the normal code goes here
  function constructor() {
    // Private members
    var privateVar1 = "Nishant";
    var privateVar2 = [1,2,3,4,5];

    function privateMethod1() {
      // code stuff
    }

    function privateMethod1() {
      // code stuff
    }

    return {
      attribute1 : "Nishant",
      publicMethod: function() {
        alert("Nishant");// some code logic
      }
    }
  }

  return {
    // public method (Global access point to Singleton object)
    getInstance: function() {
      //instance already exist then return  
      if(!singletonInstance) {
        singletonInstance = constructor();
      }
      return singletonInstance;           
    }           
  }

})();   

// getting access of publicMethod
console.log(MyNamespace.Singleton.getInstance().publicMethod());


//Observable Design Pattern

There are many times when one part of the application changes, other parts needs to be updated. In AngularJS, if the $scope object updates, an event can be triggered to notify another component. The observer pattern incorporates just that - if an object is modified it broadcasts to dependent objects that a change has occurred

https://www.oodesign.com/observer-pattern.html

