<h2> Document Object Model </h2>

1. What is DOM?
1. Examining the DOM object.
1. Accessing the DOM.
1. Traversing the DOM.
1. DOM Event Handling 

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It is a structure that can be manipulated by javascript or any other scripting language. The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content. Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.

<h3> Examining the DOM Object </h3>
_Use console.dir(document) to display all DOM elements for a webpage_

```// console.dir(document);
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
```

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
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }   

3. document.querySelector()
	The Element method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
	var header = document.querySelector('#header');
header.style.borderBottom
document.querySelector('.list-group-item:last-child');
document.querySelector('.list-group-item:nth-child(2)');
   
   document.querySelectorAll()
   var matches = document.querySelectorAll("p"); //obtain a nodelist of all <p> elements.
   // var odd = document.querySelectorAll('li:nth-child(odd)');
   // var even= document.querySelectorAll('li:nth-child(even)');

4. document.getElementsByTagName()

//////////// Traversing the DOM //////////

children
firstElementChild
nextElementSibling
previousElementSibling
createElement

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);






/////////// DOM Event Handling //////////
var but = document.querySelector('#sub');
but.addEventListener('click', function1);

function function1(e){
	console.log(e); //e.target //e.target.id;
}
