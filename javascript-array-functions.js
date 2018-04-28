/* This JS file demonstrates the use of array and its functions in JavaScript. */

// Create an Array 
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['John', 'Mayor', 1, 2];

console.log('arr1\'s contents:', arr1);
console.log('a\'s length:', arr1.length);

/* Access any Element within it */
console.log(arr2[0]); //accessing the first element.
console.log(arr2[arr.length - 1]); //accessing the last element.
console.log(arr2[1000]); //there is no array index out of bound check. This will return undefined. 

// Add to the front
arr1.unshift(500);
console.log(arr1);

// Delete from the front
let elem = arr1.shift();
console.log(elem);
console.log('arr1\'s contents:', arr1);

// Insert at end 
arr1.push(500);

// Delete from end 
console.log(arr1.pop());

/* Splice and Slice */
// slice
// Remember slice using this analogy. You get a slice of bread. Bread remains the same. 

let array = [1, 2, 3, 4, 5]
console.log(array.slice(2));
//This remove 3,4,5 and the original array is not affected with resulting in [1,2].

// splice
// Modifies the original array.
// The splice() method can take n number of arguments:
array = [1, 2, 3, 4, 5];
console.log(array.splice(2));
//This remove 3,4,5 and the original array is affected with resulting in [1,2].
array = [1, 2, 3, 4, 5];
console.log(array.splice(2, 1, 5));
//Removes 1 item from index 2 and inserts 5 at its place.

//more examples
let array2 = [6, 7, 8, 9, 0];
console.log(array2.splice(2, 1));
// shows [8]

console.log(array2.splice(2, 0));
//shows [] , as no item(s) removed.

console.log(array2);
// shows [6,7,9,0]

let array3 = [11, 12, 13, 14, 15];
console.log(array3.splice(2, 1, "Hello", "World"));
// shows [13]

console.log(array3);
// shows [11, 12, "Hello", "World", 14, 15]
let array4 = [16, 17, 18, 19, 20];
console.log(array4.splice(-2, 1, "me"));
// shows  [19]

console.log(array4);
// shows [16, 17, 18, "me", 20]

// indexOf method
let position = arr1.indexOf('second');
console.log(position, 'Array Position');

//copy an array.
let arr3 = arr1.slice();

/* Iteration:
 * We can use the for…of statement to iterate over an array.  
 * This type of statement creates a loop that lets you iterate over iterable objects such as Array, String, Set, and Map. 
 */
for (let e of arr1) {
    console.log('e:', e);
}