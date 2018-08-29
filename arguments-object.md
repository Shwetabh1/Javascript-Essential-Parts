<h1>What is arguments array?</h1>

The arguments object is a local variable available within all (non-arrow) functions.
This object contains an entry for each argument passed to the function, the first entry's index starting at 0.

The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length. 
console.log(typeof arguments); // 'object'

<h2>Creating Array from Arguments Object</h2>
1. Array.from(arguments);
2. var args = Array.prototype.slice.call(arguments,0);
3. var args = [].slice.call(arguments);


