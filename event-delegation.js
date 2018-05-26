//What is event delegation, why it is used and how it works?

/* 
 * Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. 
 * The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM. 
 * The benefits of this technique are:
 *    -Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
 *    -There is no need to unbind the handler from elements that are removed and to bind the event for new elements.
 */

// Example : PARENT UL With several Elements 

<ul id="parent-list">
	<li id="post-1">Item 1</li>
	<li id="post-2">Item 2</li>
	<li id="post-3">Item 3</li>
	<li id="post-4">Item 4</li>
	<li id="post-5">Item 5</li>
	<li id="post-6">Item 6</li>
</ul>

/* 
 * Lets also say that something needs to happen when each child element is clicked.  
 * You could add a separate event listener to each individual LI element, but what if LI elements are frequently added and removed from the list?
 * Adding and removing event listeners would be a nightmare, especially if addition and removal code is in different places within your app.
 * The better solution is to add an event listener to the parent UL element.
 * But if you add the event listener to the parent, how will you know which element was clicked?
 *    -Simple:  when the event bubbles up to the UL element, 
      -         you check the event object's target property to gain a reference to the actual clicked node.       
 */


// Here's a very basic JavaScript snippet which illustrates event delegation:
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});