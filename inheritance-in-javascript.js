//How inhertiance works in JavaScript 
//What is Prototypal Inheritance
/*
    This is an extremely common JavaScript interview question. All JavaScript objects have a prototype property, that is a reference to another object. 
    When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's prototype, and the prototype's prototype and so on, until it finds the property defined on one of the prototypes or until it reaches the end of the prototype chain. 
    This behavior simulates classical inheritance, but it is really more of delegation than inheritance.
 */