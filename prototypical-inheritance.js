/*
 * Exploring the what, why and How of inheritance in JavaScript.
 * All JavaScript objects have a prototype property, that is a reference to another object. 
 * When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's prototype, 
 * and the prototype's prototype and so on, until it finds the property defined on one of the prototypes or until it reaches the end of the prototype chain. 
 * This behavior simulates classical inheritance, but it is really more of delegation than inheritance.
 */

//let's create a person object
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//let's create a student object
function Student(name, age, rollno) { //this is called a constructor function
    Person.call(this, name, age);
    this.rollno = rollno;
}

//add it to person prototype chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var st = new Student('John', 23, 10);
st instanceof Student;

//NOTE: when we use for..in loop to iterate the properties of the Object,
//they search in proto chain and get all the objects
//__proto__ has the proto chain and also contains the constructor chain

//What happens when we create an object?

var first = new Person('John', 26);

/*
 1. A new object is created — the first object.
 2. this is bound to our first object. So any references to this will point to first.
 3. Our __proto__ is added. first.__proto__ will now point to Person.prototype.
 4. After everything is done, our brand new first object is returned to our new first variable.

 *Every JavaScript object has a prototype. All objects in JavaScript inherit their methods and properties from their prototypes.
 *Now we can add functions to the prototype object and all the objects inherting it can use it.
 *The prototype object is shared among all objects created with that constructor function.
 *This means we can add functions and properties to the prototype that all of our objects can use.
 */