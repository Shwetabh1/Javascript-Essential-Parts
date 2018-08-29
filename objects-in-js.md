string
number
boolean
null
undefined
object

All are primitive type.

Ways you can create Objects:


Copy a new object 

#1 var newObj = JSON.parse( JSON.stringify( someObj ) );

#2 var newObj = Object.assign( {}, myObject );

/* The duplication that occurs for Object.assign(..) however is purely = style assignment, so any special characteristics of a property (like writable) on a source object are not preserved on the target object */

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: true,
	configurable: true,
	enumerable: true
} );

#Iterating only original properties
for (var property in object) {
    if (object.hasOwnProperty(property)) {
        // do stuff
    }
}

Object.keys(obj).forEach(function(key,index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object 
});