//What is this?

It is not some reference or scope.

this is actually a binding that is made when a function is invoked, 
and what it references is determined entirely by the call-site where the function is called.

When a function is invoked, an activation record, otherwise known as an execution context, is created. This record contains information about where the function was called from (the call-stack), how the function was invoked, what parameters were passed, etc.
One of the properties of this record is the this reference which will be used for the duration of that function's execution.

To understand this binding, we have to understand the call-site: the location in code where a function is called (not where it's declared).

function identify() {
	return this.name.toUpperCase();
};

function speak() {
	var greeting = "Hello, I'm " + identify.call( this );
	console.log( greeting );
};

var me = {
	name: "Kyle"
};

var you = {
	name: "Reader"
};

identify.call( me ); // KYLE
identify.call( you ); // READER

speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER