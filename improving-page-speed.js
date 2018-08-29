How would you improve the speed of a website.

1. Use techniques such as Debouncing and Throttling.
2. No redirection
3. Minify JS and CSS.
4. Use CDN.
5. Use Caching  
6. Remove Render Blocking JavaScript
7. Lazy Loading 

Debouncing and/or Throttling is a way to improve page speed.
Debounce and throttle are two similar (but different!) techniques to control how many times we allow a function to be executed over time.

/////////////////////////
DEBOUNCING:
////////////////////////
The Debounce technique allow us to "group" multiple sequential calls in a single one.

USE-CASE: Resizing window. Once you are done you should display the resized width and height.

This function — when wrapped around an event — will execute only after a certain amount of time has elapsed.

// implement debounce: you can use loadash _.debounce
function debounce(fn, delay) {
  // maintain a timer
  let timer = null;
  // closure function that has access to timer
  return function() {
    // get the scope and parameters of the function 
    // via 'this' and 'arguments'
    let context = this;
    let args = arguments;
    // if event is called, clear the timer and start over
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}

Using throttle we can ensure at every X second the check function is invoked.
Throttling is another technique that’s is similar to debouncing, except that instead of waiting for some time to pass by before calling a function, throttling just spreads the function calls across a longer time interval.
By using _.throttle, we don't allow to our function to execute more than once every X millisecond.

Throttling can be done using two ways. Leading edge or tariling edge.
Leading: The event is happening rapidly. After it stops it calls it. 
Trailing: The event is happening. when it starts again the function is called.

The main difference between this and debouncing is that throttle guarantees the execution of the function regularly, at least every X milliseconds.

USE-CASE:A quite common example. The user is scrolling down your infinite-scrolling page. You need to check how far from the bottom the user is. If the user is near the bottom, we should request via Ajax more content and append it to the page.

Scrolling can generate a lot of events depending on the speed by which it is used.

Coding Example:

// Very simple example.
$(document).ready(function(){
  
  // Check every 200ms the scroll position
  $(document).on('scroll', _.throttle(function(){
    check_if_needs_more_content();
  }, 300));

  function check_if_needs_more_content() {     
    pixelsFromWindowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() -$(window).height();
    
  // console.log($(document).height());
  // console.log($(window).scrollTop());
  // console.log($(window).height());
  //console.log(pixelsFromWindowBottomToBottom);
    
    
    if (pixelsFromWindowBottomToBottom < 200){
      // Here it would go an ajax request
      $('body').append($('.item').clone()); 
      
    }
  }
});


const throttle = (func, limit) => {
  let lastFunc
  let lastRan
  return function() {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
  }
}



What is progressive rendering?
Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible.

It used to be much more prevalent in the days before broadband internet but it is still used in modern development as mobile data connections are becoming increasingly popular (and unreliable)!
Examples of such techniques:

Lazy loading of images - Images on the page are not loaded all at once. JavaScript will be used to load an image when the user scrolls into the part of the page that displays the image.
Prioritizing visible content (or above-the-fold rendering) - Include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred scripts or listen for the DOMContentLoaded/load event to load in other resources and content.
Async HTML fragments - Flushing parts of the HTML to the browser as the page is constructed on the back end. More details on the technique can be found here.