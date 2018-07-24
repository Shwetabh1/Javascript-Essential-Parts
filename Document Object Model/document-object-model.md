<h2> Document Object Model <h2>
1. What is DOM?
1. Examining the DOM object.
1. Accessing the DOM.
1. Traversing the DOM.
1. DOM Event Handling 

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It is a structure that can be manipulated by javascript or any other scripting language. The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content. Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.

<h3> Examining the DOM Object </h3>
*Use console.dir(document) to display all DOM elements for a webpage.*
`
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
`
<h3> Accessing the DOM element </h3>
* `document.getElementById()`
* `document.getElementsByTagName()`
* `document.getElementsByClassName()`
* `document.querySelector()`

1. document.getElementById()
*NOTE:*
innerText: pays attention to the styling
textContent: doesn't pay attention to the styling

`<p> hello <span style="displaye:none"> 123 </span></p>`

innerText: will display hello not 123. 
textContent: will display 123 along with hello
` var header = document.getElementById('main-header');
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

2. document.getElementsByClassName()
	document.getElementsByTagName()

3. document.querySelector()
	document.querySelectorAll()
var header = document.querySelector('#header');
header.style.borderBottom

document.querySelector('.list-group-item:last-child');
document.querySelector('.list-group-item:nth-child(2)');

//////////// Traversing the DOM //////////

var itemList = document.querySelector('#items');
console.log(itemList.parentNode); //this give the parentNode
itemList.parentNode.style.backgroundColor = 'yellow';


children
firstElementChild
nextElementSibling
previousElementSibling


createElement
var newDiv = document.createElement('div');

newDiv.className = "hello";

newDiv.id = "hello1";

newDiv.setAttribute('title', 'Hello Div');
console.log(newDiv);


/////////// DOM Event Handling //////////
var but = document.querySelector('#sub');
but.addEventListener('click', function1);

function function1(e){
	console.log(e); //e.target //e.target.id;
}
