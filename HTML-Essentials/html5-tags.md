<h2> This document contains explanation of various HTML5 tags </h2>

//What is the difference between HTML5 Tags and div
As their name says, this is for semantic purposes only. It's for improving the automated processing of documents. Automated processing happens more often than you realize - each website ranking from search engines is derived from automated processing of all the website out there.

Basically websites will be ranked higher. Better search etc.

Think about how much time Google spends trying to figure out what part is header, footer, and navigation and what part is actual content. The word “Doctor Network” may appear on every page… but what if you want to find the page about the Doctor Network. Yes, metatags do help, but tags like <header>, <footer>,  <nav>, and <article> are critical for machines.

In my current job, we have done a good deal of page scraping. Let me tell you, markup out there is appauling! The accuracy of content indexing (e.g. search engines) would dramatically improve if everyone used more semantic markup

Drawbacks?
Unfortunately, do to the lack of standardization between browsers currently these tags can be interpreted differently or entirely ignored all together. 

How will you ensure HTML5 tags are rendered?
Simply embed this script in the <head> section of your markup to enable the use of the new tags for older browsers:

<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

Without getting too technical, when the above jQuery script runs it creates new elements inside the Internet Explorer Document Object Model(DOM) so that it understands the new markup

1. Time tag
<p>We open at <time>10:00</time> every morning.</p>

2. Datalist Tag
  <input list="browsers" name="browser">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>

3. Figure
<figure>
    <img src="discovery.jpg" alt="Space Shuttle">
    <figcaption>NASA - Space Shuttle Discovery</figcaption>
</figure>

4. Meter
<meter value="2" min="0" max="10">2 out of 10</meter><br>

5. ProgressBar
<progress value="22" max="100">
</progress>

6. Video
<video width="" height="" controls>
	<source src="video_url" type="video/mp4">
</video>
In the HTML above, width and height set the dimensions for the video element. The controls attribute creates playback buttons such as "Play" and "Pause". The source src tag provides the URL where the video is hosted and type specifies the video's type, in this case, "video/mp4".

7. Audio
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio>

8. Section tag

section convey a different meaning but performs the same function.
<section> marks up a section The HTML Section element (<section>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading.
<div> marks up a generic block with no associated semantics. The HTML element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything

9. nav tag
The <nav> tag defines a set of navigation links.
Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only for major block of navigation links.
<nav>
  <p><a href="login.html">Log In</a></p>
  <p><a href="signup.html">Sign Up</a></p>
  <p><a href="contact.html">Contact Us</a></p>
</nav>

10. <footer> tag
<footer>
  <p>&copy; Acme Granola Corporation 2016<p>
  <div class="social">
    <a href="#"><img src="instagram-icon.png"></a>
    <a href="#"><img src="facebook-icon.png"></a>
    <a href="#"><img src="twitter-icon.png"></a>
  </div>
</footer>

11. <main> tag
A document can only have 1 <main> tag.

12. <aside> tag
Used for sidebars.

X. Support for Calendar ???
<fieldset>
    <legend>Choose trip dates</legend>
    <div>
        <label for="start">Start</label>
        <input type="date" id="start" name="trip"
               value="2018-07-22"
               min="2018-01-01" max="2018-12-31" />
    </div>
    <div>
        <label for="end">End</label>
        <input type="date" id="end" name="trip"
               value="2018-07-29"
               min="2018-01-01" max="2018-12-31"/ >
    </div>
</fieldset>

13. Details tag 
<details>
<summary> This is a collapsible </summary>
<p> I am collapsing yo </p>
</details>