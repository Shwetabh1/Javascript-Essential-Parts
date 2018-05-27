/* Regular Expressions:
 * A Regular Expression, or RegEx, is a pattern used to match character combinations in a string. In JavaScript, regular expressions are
 * also objects. 
 * (PS: The regex feature of JS is actually borrowed from Perl.)
 */

//In JS you can declare regexes in two ways:

var reg1 = /hel*/;
var reg2 = new RegExp('hel*',[//flags]);

//Moreover all the functions related to regular expressions can be divided into two major categories:

/* testing functions		string functions

	test 						match
	exec						search
								split
								replace
*/

/* 
 * WRITING REGEXES
 * 1. Understand Character Class
 * 2. Understand Capturing Groups
 * 3. Understand LookAheads
 * and you are done! (you can skip 3 if you just wanna learn the basics)
 */

/* 1. Character Class

   /\s/ - white space characters
   /\S/ - Non White Space charcters
   /\d/ - digit [0-9]
   /\D/ - A non digit character
   /\w/ - a word character
   /\W/ - A non word charcter [^A-Za-z0-9_] 

 Also flags

 * i - ignore case
 * g - global
 * m - multiline 
 */

/*
 * 2. Capturing Groups
 * var re = /f(o)(o)/
 * here we have 2 capturing groups. 
 */


/*
 * 3. What is lookahead?
 * You look around but don't move. Helpful when you don't need to match and return the string
 * There are two kinds of lookahead:
   a.positive lookahead (?=) what immediately follows the current position is the string foo
   b.negative lookahead (?!) what immediately doesn't follow is not the string foo
 *
 */


//test
var reg1 = /foo*/;
reg1.test('football'); //returns true

//exec()
//returns the result in an array.
//if you use capturing groups the result is stored from 1 to n.
var reg1 = /f(o)(o)/;
var arr = reg1.exec('football');
//arr[0] will contain

//split()
'h,el,lo'.split(/,/);

//replace()
'heyyyyy'.replace(/y/, 'str'); //replaces the first instance. Use global flag to replace all instances.

//match()
'hey'.match(/he*/);

//search
//returns the index
'hey'.search(/h/);