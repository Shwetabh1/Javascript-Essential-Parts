How would you improve page speed?

All points are collected from here: https://developers.google.com/speed/docs/insights/

The first question is why should we?
1. Because of better user experience.
2. SEO (Better page rank for better site load time)

#1. Minify HTML, CSS and JS
Minification refers to the process of removing unnecessary or redundant data without affecting how the resource is processed by the browser - e.g. code comments and formatting, removing unused code, using shorter variable and function names, and so on.

UglifyJS for JS, CSS Nano for css and so on.

#2.Reduce redirects
Each time a page redirects to another page, your visitor faces additional time waiting for the HTTP request-response cycle to complete. For example, if your mobile redirect pattern looks like this: "example.com -> www.example.com -> m.example.com -> m.example.com/home," each of those two additional redirects makes your page load slower.

#3.Remove Render-Blocking JavaScript
Before the browser can render a page it has to build the DOM tree by parsing the HTML markup. During this process, whenever the parser encounters a script it has to stop and execute it before it can continue parsing the HTML. In the case of an external script the parser is also forced to wait for the resource to download, which may incur one or more network roundtrips and delay the time to first render of the page. 

--Either render async
--<script async src="abc.js">
or defer mode
-- If the content of the page is constructed by client-side JavaScript, then you should investigate inlining the relevant JavaScript modules to avoid extra network roundtrips.


#4 Leveraging caching
Fetching resources over the network is both slow and expensive: the download may require multiple roundtrips between the client and server,
Should have good caching policy with security.

E-tags: ETag provides a revalidation token that is automatically sent by the browser to check if the resource has changed since the last time it was requested.
