<h2>HTML5 Interview Questions <h2>

<h3> What is the significance of `<!doctype html>`?</h3>
<p>DOCTYPE Declaration is the abbreviation for Document Type Declaration (DTD).
DOCTYPEs are required for legacy reasons. When omitted, browsers tend to use a different rendering mode that is incompatible with some specifications. Including the DOCTYPE in a document ensures that the browser makes a best-effort attempt at following the relevant specifications.
There are two modes. Quirk Mode and Standard Mode. If you avoid writing DOCTYPE it is rendered in quirk mode. QUIRK MODE was introduced to support the website built for legacy browsers. Also HTML validator doesn't work for quirk mode. 
</p>

<h3>How do you serve a page with content in multiple languages?</h3>
<p><html lang="en">...</html>
When you are making requests mention what language you want in header.
In the back end, the HTML markup will contain i18n placeholders and content for the specific language stored in YML or JSON formats. The server then dynamically generates the HTML page with content in that particular language, usually with the help of a back end framework.</p>

<h3>Describe the difference between a cookie, sessionStorage and localStorage</h3>
<p>All the above-mentioned technologies are key-value storage mechanisms on the client side. They are only able to store values as strings.
SessionStorage is short lived and gets deleted when window/tab is closed
localStorage is permanent.</p>
Cookies are also name value pair and can be stored both at client side or server side and is used for authnetication and authorization. It is used to maintain state over a stateless protocol.
https://www.owasp.org/index.php/Testing_for_cookies_attributes_(OTG-SESS-002) ---securing cookies
Ensure httpOnly flag is set so that client side javascript can't access it.
domain: Requests originating from a particuar domain only should access it.
secure - This attribute tells the browser to only send the cookie if the request is being sent over a secure channel such as HTTPS. This will help protect the cookie from being passed over unencrypted requests. If the application can be accessed over both HTTP and HTTPS, then there is the potential that the cookie can be sent in clear text.
expires flag can be used to set the expiration date.


<h3>Draw a canvas with a square on it.</h3>
<p><canvas id="abc" width="400" height="400">
  </canvas>
  var canv = document.querySelector("#abc");
  var ctx = canv.getContext("2d");
  ctx.fillRect(100, 100, canv.width, canv.height);</p>


<h3>Describe HTML5 features.</h3>
There are many new HTML5 Features broadly categoried into 5 sections:
1. Improved support for embedding graphics, audio, and video content via the new <canvas>, <audio>, and <video> tags.
2. Extensions to the JavaScript API such as storage and caching.
    window.localStorage - stores data with no expiration date
    window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)
    localStorage.getItem('key');
    localStorage.setItem('key','value');
3. Introduction of “web workers”.
4. Several new semantic tags were also added to complement the structural logic of modern web applications. These include the <main>, <nav>, <article>, <section>, <header>, <footer>, and <aside> tags.
5. New form controls, such as <calendar>, <date>, <time>, <email>, <url>, and <search>.

<h3>Consider HTML5 as an open web platform. What are the building blocks of HTML5? </h3>
<p>Semantics - Allowing you to describe more precisely what your content is.
Connectivity - Allowing you to communicate with the server in new and innovative ways.
Offline and storage - Allowing webpages to store data on the client-side locally and operate offline more efficiently.
Multimedia - Making video and audio first-class citizens in the Open Web.
2D/3D graphics and effects - Allowing a much more diverse range of presentation options.
Performance and integration - Providing greater speed optimization and better usage of computer hardware.
Device access - Allowing for the usage of various input and output devices.
Styling - Letting authors write more sophisticated themes.</p>


<h3> Script tag and various loading modes </h3>
<p>There are 3 loading modes: async, defer and default.
EX: <script src="demo_async.js" async></script>
If async is present: The script is executed asynchronously with the rest of the page (the script will be executed while the page continues the parsing).Use async when the script is independent of any other scripts on the page, for example, analytics.

If async is not present and defer is present: The script is executed when the page has finished parsing.A deferred script must not contain document.write.

If neither async or defer is present: <script> - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed.

<h3> Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions? </h3>
Placing <script>s just before </body>

<script>s block HTML parsing while they are being downloaded and executed. Downloading the scripts at the bottom will allow the HTML to be parsed and displayed to the user first.

Placing <link>s in the <head>
Putting <link>s in the head is part of the specification. Besides that, placing at the top allows the page to render progressively which improves the user experience.


<h3>Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute. </h3>
You would use the srcset attribute when you want to serve different images to users depending on their device display width - serve higher quality images to devices with retina display enhances the user experience while serving lower resolution images to low-end devices increase performance and decrease data wastage (because serving a larger image will not have any visible difference). For example: <img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" src="..." alt=""> tells the browser to display the small, medium or large .jpg graphic depending on the client's resolution. The first value is the image name and the second is the width of the image in pixels. For a device width of 320px, the following calculations are made:

500 / 320 = 1.5625
1000 / 320 = 3.125
2000 / 320 = 6.25
If the client's resolution is 1x, 1.5625 is the closest, and 500w corresponding to small.jpg will be selected by the browser.

If the resolution is retina (2x), the browser will use the closest resolution above the minimum. Meaning it will not choose the 500w (1.5625) because it is greater than 1 and the image might look bad. The browser would then choose the image with a resulting ratio closer to 2 which is 1000w (3.125).

srcsets solve the problem whereby you want to serve smaller image files to narrow screen devices, as they don't need huge images like desktop displays do — and also optionally that you want to serve different resolution images to high density/low-density screens.


##How would you support HTML5 tags?
Using a concept called polyfilling.

First we need to detect if tags are supported or not.
There are four basic techniques for detecting whether a browser supports a particular feature. From simplest to most complex:

Check if a certain property exists on a global object (such as window or navigator).

Example: testing for geolocation support
function supports_geolocation() {
  return 'geolocation' in navigator;
} 

or just use modernizer

Create an element, then check if a certain property exists on that element.

Example: testing for canvas support
function supports_video() {
  return !!document.createElement('video').canPlayType;
}

Create an element, check if a certain method exists on that element, then call the method and check the value it returns.

Example: testing which video formats are supported
function supports_canvas() {
  return !!document.createElement('canvas').getContext;
}


if (Modernizr.canvastext) {
  // let's draw some text!
} else {
  // no native canvas text support available :(
}

Create an element, set a property to a certain value, then check if the property has retained its value.

Example: testing which <input> types are supported



Make your own tags and add it to DOM or use already avaialble libraries called Modernizer which has feature detection for HTML5 and CSS3 tags.

if (Modernizr.canvas) {
  // let's draw some shapes!
} else {
  // no native canvas support available :(
} if (Modernizr.canvas) {
  // let's draw some shapes!
} else {
  // no native canvas support available :(
}


function supports_local_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e){
    return false;
  }
}