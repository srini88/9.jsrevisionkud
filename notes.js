doing advanced techniques in JS and jQuery...

HTML5 canvas draw function...
create a square logo...
silver square with a black logo


jquery dan Wahlin... great course.....Jquery fundamentals..

why use jquery?

single javascript file.... very powerful,. cross browser....amazing...I6, firefox, chrome, opera...

jquery makes it you can focus on your app... jquery can take care for you...

featuers -- selectors.....imp...
events --- imps..
very rich AJAX --- use jquery to callback to server and get JSON...
and finally plugins...very rich free jQuery plugins..

how do you locate elements with a specific class? modern browser use query 

how do you apply styles to multiple elements?

how do you handle events in a cross browser mannner?

IE 6-8   go with jQuery 1.x 

also jQuery 2.x 


why CDN?  go to a site -- and they use this URL from google...that script is cached for that domain..

you go to another domain ..it is already cached... 

microsoft and google have data centers all over the world.. get some speed benefits.. 
caching, regionality..
parallelism..

what happens if you can't get jQuery script... will cause a big problem..

provide a fall back ...

<script src ="cnd link"></script>  successful window object will have  anew property called jQuery 
<script>
window.jQuery || document.write('<script src = "jquery"></\script>');
</script>

$ = is the alias.. called once DOM hierarcy is loaded...but before all  the images have loaded.....

when it is ready ,,call the callback --- inline anonymous function..

use $(document).ready(function(){

});


////handling events...
easy and robust API -- handle different types of events in different ways..

on and off type of functions...
events can bubble up...


live delegate and on -- live and delegate are old... new api is on and off...


different tehcniques to do hover events.... 

click event --- IE 8 and earlier... 

myButton.addEventListener('click', function(){})

myButton.attachEvent ('onclick', function(){})  ...event name of the event is different......in IE8..

jQuery wraps all this pieces of functionality..... 
events notify a program that a user performed some type of action...


jQuery provides a cross-browser event model that works in IE, chrome, Opera a..




jqeury =-- click , blur, focus, dblclick, mousedown , mouseup, mouseover, keydown , keypress..





Selecting with jQuery

With jQuery, selecting things is the same as plain Javascript: it uses CSS selectors.

If you select something using plain JS, you can’t use jQuery functions without selecting it with jQuery. If you select something with jQuery, you can’t use plain JS functions.

$('#thing') — will select an element with the ID of thing
$('div') — select all the div elements on the page
$('.thang') — will select all the elements with the class of thang


If you want to apply something to all the elements you selected in jQuery, there are two ways to do it:

Directly using the collection
Using a loop

var $thePTags = $('p');

// Directly: this will apply the same CSS to all the elements
$thePTags.css('color', 'red');

// A loop
$thePTags.each(function (i) {
  // $(this) refers the current thing inside this loop
  $(this).css('color', 'red');
});

.offset
Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.
The .offset() method allows us to retrieve the current position of an element relative to the document. Contrast this with .position(), which retrieves the current position relative to the offset parent.

.offset() returns an object containing the properties top and left.


hooking up events in html is shit... dont put onclick and all that shit in html..instead do it in JS... 

-----------------event delegation------------



---------------------Testing and prototyping Javascript .----another course..




unit --small section of code.....verify the functionality...

define a test suite... could be a javascript module...


mocha is our unit test framework, expect is an assertion library...calculator.....

<script>
mocha.ignoreLeaks();
mocha.run();
</script>

put expect, put mocha, put our calculator.js, then  put our testing files..code..



---first define a calculator test suite...

describe("Calculator", function(){
	var Calculator;


	beforeEach(function(){
		calculator = new Calculator();

	})

	describe("Add", function(){
		it("should return sum of both operands", function(){
			expect(calculator.add(1,1).to.be(2))
		})

	})

})

///howw unit tests should be predictable, pass or fail, self documenting..

//each unit test should have single responsibility,,

///useful error messages...

///unit tests are not integration tests...

////use static data...

///each test should test one feature of one component at a time..
///integration tests...are very handy...
//// 


//testing tools...

mocha,  js test runner... q unit , jasmine.. 

grunt js automation node, written in JS. automates, concatenation, minification, compiling and transpiling etc..



hard to test code...

tightly coupled componemt, private parts, singletons, anonymous functins, mised concerns, new operatorrs..



singleton --- reset singleton and test...

be wary of code that mixes various different concerns...MVC ..
testing code like this can be very awkward...


problem with new ....

new Date - hard to test...



.each is an iterator that is used to iterate over only jQuery objects collection while jQuery.each ($.each) is a general function for iterating over javascript objects and arrays

$.each(dataArray, function() { });
Or, if you have a DOM jQuery object:

$(Selector).each(dataArray, function() { });


try not to tightly couple your components... use depencdency injection..

limit use of singletons, otherwise you will need to reset them..

anonymous functin - name will show up in the stack trace..


Mocha Javascript test runner...
simple tests...  

asynchronous testing... mocha is good...elegant....Getting started withGrunt, runs on Node....use grount to automatically runn tests...


Mocha testing framework...

Hooks - you can provide several hooks to run code before and after tests....set up and tear down...

before(function()) oruns one before the suite..

beforeEach  runs before each test..

afterEach = after each test
after  -- terar down for suite..


Cross - browser and node support....

simple async support..


able to use assertion library of choice..

integrates with contiuous integration..

highlights slow tests..

before, after, 

Global variable Leak detection..


Expect assertion Library....like english..


include mocha stylesheet..

div id ="mocha" 

mocha bdd approach..

10 unit tests --- I want to see all results of test.s..

use bail :false

mocha.setup({
	ui :bdd;
})
globals : ["jQuery"]
timeout:3000

if test takes too long ,  it will fail..

bail : false, bail on first test suite..

ignoreLeaks :true

grep : use a string or a regexp to filter tests with..


calculator - should return NaN if passed 0 arguments..


mocha bdd approach..

BDD uses a more verbose style so that it can be read almost like a sentence.

This is what I meant by saying that BDD eliminates issues that TDD might cause. The ability to read your tests like a sentence is a cognitive shift in how you will think about your tests. The argument is that if you can read your tests fluidly, you will naturally write better and more comprehensive tests.


The difference between BDD and TDD is that BDD begins with a B and TDD begins with a T. But seriously, the gotcha with TDD is that too many developers focused on the "How" when writing their unit tests, so they ended up with very brittle tests that did nothing more than confirm that the system does what it does.

BDD provides a new vocabulary and thus focus for writing a unit test. Basically it is a feature driven approach to TDD.

Exactly. There is no difference between BDD and TDD. BDD is TDD done right. TDD done right is BDD. The problem is that doing TDD right is hard, or more precisely learning how to do TDD right is hard. The reason is that TDD has absolutely nothing whatsoever to do with testing, but it is hard to understand that important fact when all the terminology is about testing. So, BDD literally is just TDD with all the testing terminology replaced with behavioral examples terminology. It's like that "try not to think of a pink elephant" thing.







BDD utilizes something called a "Ubiquitous Language," a body of knowledge that can be understood by both the developer and the customer. This ubiquitous language is used to shape and develop the requirements and testing needed, at the level of the customer's understanding.




Idiom. TDD settles for tests, BDD enforces story telling format
JavaScript Examples

Unit tests in jasmine (BDD)

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
Unit tests in jsUnity (TDD)

function test_lists() { assert.areEqual([1, 2, 3], [1, 2, 3]) }


Something not implemented yet -- it will show in pending..

apply only method to run only one test or suite...


mocha easy to do async

setTimeout
deferred
animation 
ajax


use done...

also can set timeout on a suite..

The assertions, or expectations as they are often called, are where things start to differ. Mocha does not have a built in assertion library. There are several options though for both Node and the browser: Chai, should.js, expect.js, and better-assert. A lot of developers choose Chai as their assertion library. Because none of these assertion libraries come with Mocha, this is another thing you will need to load into your test harness. Chai comes with three different assertion flavors. It has the should style, the expect style, and the assert style.


Both libraries have a similar API regarding the structure of your tests. They both allow you to write your tests using a describe block. They also both have the same approach for asynchronous testing using a callback method (done)



getting started with grunt..

Javascript task runner
runs on node
automates repetitive tasks
supports jshint, less 

runs the tasks in gruntfile.js


grunt contrib watch..to look at changes inthe file system..


grutn watch...willl wait forthe fies to be changed..


mocha makes BDD style unit testing easy,

Async support is simple in Mocha...


mocking your front end application...

what is mocking,,,using native technichques....use sinon.jx external....mockjax...amplifyJS request


mocking --- spies --means fake function that records how it is used...stubs - fake function with predefined behavior


sinon js - stubs and mocks fo r JS..no dependencies , works with any nit testing framework...



stub is used whenever we want to fake functionality..


ending here.....00still more jquery one chapter..left...


---lloking at web performance....---another pluralsight...


HTTP compression........browser can handle compressed content, server can zip it up before it sends it to the client...

content expiration- leverage  customer's browser cache ...

3) content Distribution Network...offload files to your own web server..
4) Etags-  variation of content expiration...

%) remove unnecessary http headers...



1) HTTP compression ----- send as little as possible...utilize http compression...

conding header - on the request --- 

with compression enabled....compress the particular file and send the compressed result to the client browser


by this we get about 53% less bandwidth...

now use IIS compression...

IIS7 can control when to stop using if CPU usage is too high.....
only static compression is on by default..

compress on the fly and send it out to the client --- dynamic content compression...


all css, js files will be reduced...

IIS compression...built in -- it is free....all major browsers support it...

browser can send the accepting coding header....there is no reason not to use http compression...trade off -- it uses very less percentage of the CPU..


Microsoft’s IIS is the second most popular Web server software. It consists of a series of services including File Transfer Protocol (FTP), Hypertext Transfer Protocol (HTTP), Simple Mail Transfer Protocol (SMTP) and others that enable a Windows machine to manage Web sites




For most people reading this, compression is enabled by adding some code to a file called .htaccess on their web host/server. This means going to the file manager (or wherever you go to add or upload files) on your webhost.

browser will say Accept-encoding:gzip ,...then server will do the necessary compression...


The browser sends a header telling the server it accepts compressed content (gzip and deflate are two compression schemes): Accept-Encoding: gzip, deflate

The server sends a response if the content is actually compressed: Content-Encoding: gzip



s exciting as it may appear, HTTP Compression isn’t all fun and games. Here’s what to watch out for:

Older browsers: Yes, some browsers still may have trouble with compressed content (they say they can accept it, but really they can’t). If your site absolutely must work with Netscape 1.0 on Windows 95, you may not want to use HTTP Compression. Apache mod_deflate has some rules to avoid compression for older browsers.
Already-compressed content: Most images, music and videos are already compressed. Don’t waste time compressing them again. In fact, you probably only need to compress the “big 3” (HTML, CSS and Javascript).
CPU-load: Compressing content on-the-fly uses CPU time and saves bandwidth. Usually this is a great tradeoff given the speed of compression. There are ways to pre-compress static content and send over the compressed versions. This requires more configuration; even if it’s not possible, compressing output may still be a net win. Using CPU cycles for a faster user experience is well worth it, given the short attention spans on the web.




CONETNET EXPIRATIONS - send data infrequently as possible..

first time visit...download all of those and browser store it in local cahce...

close browser..and come after couple of days... 
ideally look in browser cache and see if it already there...and serve it...

make sure it is not dirty...
browser each file found in browser cache -- and go back to origin web server..I have this file..has this file been modified since...


if it has , it will send new content..if not ..it will send status code as 304...

	small contenet files it is just as expensive to see if modified as to receive content...

100 additional requests being made.......to the server to do the checking...


So leverage my user's browsers cache... 

setup expiration times for conent folders...


avoid requests for files that seldomd change -- .js, .css and image files...indicate to the client that these files are look for certain period of time...

images are good for 30 days,,this image put in 20 days ago...

broser will check expiration date...if expires --- browser will request server..and get new page...

if not...browser ill ask and get 304 response...

	Cache control :  max-age setting ...... 365 days...



2nd way...CDN network...


///providing fallback..
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<script>if (!window.jQuery) { document.write('<script src="/path/to/your/jquery"><\/script>'); }
</script>


having CDN is 73% faster than my own servers...

ETags= mechanism to support caching for browsers....normal mechanism --- ask if has been modified or not --- is too fragile...


Etags -- used for cache  validation... 
IIS sends the ETag header in response for static files......
hash:changeNumber...



remoeve unnecessary HTTP header...there will be etag header...remove that...

X powered by  : ASP.net...remove that shit...


HTTP compression is built into IIS and can greatly reduce the amout of data sent to the client...

expirations leverage the user's browsers cache , return visitors get bulk of files locatllly with no load on the  web servers..

CDNs offload work from the web server and are much closer to our users...

------------------FRONT END performance....

External CSS and Javascript....
CSS and JavaScript mification and Consolidation...
Image Optimization...make them smaller...

CSS sprites --- 
Favicon.ico caching... set this up to take advantage of cacheing...

almost always put CSS and JS in external files... 


Able to use expirations.....leveraging user's browser;s  cache..

Minification and Consolidation..

JSMin, packer...YUI compressor....CSSMin...

take care of this minification at build time...not at the run time..


mechanism to reference new combined files..

do image optimzation.. jpegtran -- removes unnecessary metadata, lossless....  visual quality will exactly be the same...

Smush.it png optimization..



Favicon.ico caching....by defaut, most browsers automatically look for this file in root folder of site..... use for favorites, address bar..

setup to use an image with expirations..

others performance improvements..

Data and output acching... ajax, web forms , performance analysis tools, 




We could also listen to other events, like key presses:

$('html').on('keydown', function (e) {
  // The number representing the key that was pressed
  console.log(e.keyCode);
});

https://learn-the-web.algonquindesign.ca/topics/dom/#event-propagation
Event propagation

Events follow a propagation in Javascript that includes the capture phase: starting at the <html> element and working down the children until it hits the element; then the bubbling phase that goes backwards up the parents of the element. On each element in the capturing and bubbling phase an event is fired.

$('a').on('click', function (e) {
  // Will stop the element from doing what it normally does
  e.preventDefault();
  // Will stop the event bubbling back up through its parents
  e.stopImmediatePropagation();
});
Using e.preventDefault() on <a> tags will stop the browser from navigating to another page.


Event delegation

Sometimes we need to capture events on elements that don’t exist yet, or when there’s lots and lots of elements where binding listeners to all of them would be a performance issue.

For this we can use event delegation.

With this HTML we can bind our event to the <ul> itself, but then only listen for events that fire on the <li> elements.

$('.dinos').on('click', 'li', function () {
  // Notice the `li` above indicating the delegated element
});

var btn = document.querySelector('.btn');

// Add a class with `add()`
btn.classList.add('js-highlight');
// Remove a class with `remove()`
btn.classList.remove('js-highlight');
// Toggle a class on/off with `toggle()`
btn.classList.toggle('js-highlight');
// Check to see if the element has a class
btn.classList.contains('js-highlight');

var $dinos = $('.dinos');
var $first = $('.first');

// Add after all the current list items
$dinos.append('<li>Tyrannosaurus</li>');
// Add before all the current list items
$dinos.prepend('<li>Iguanodon</li>');


Form submission event

The first thing to do when dealing with forms is to capture the form’s submission event and prevent it from doing what it normally does.

<form class="form" method="post" action="capture-data.html">

</form>
var $form = $('.form');

$form.on('submit', function (e) {
  // Stop the form from doing what it normally does
  e.preventDefault();
});


Simple values

For simple inputs like: text, number, color, date, time, url, email, etc. we can just use jQuery’s val() function.

var $email = $('.email');

// Will get the information the user typed into the input field
$email.val();
§Checkboxes

For checkboxes we need to confirm whether or not the item is checked, like this:

var $terms = $('.terms');

$terms.is(':checked'); // true or false
§Radio buttons

For radio buttons we need to grab them by their group name then find the one that has been checked, getting it’s value.

<input type="radio" id="meat" name="diet" value="Meat" checked>
<input type="radio" id="plant" name="diet" value="Plant">
$('[name="diet"]:checked').val(); // Meat
It’s important that radio buttons include the value attribute when working with them.

§Select elements

Select elements work like basic text inputs, but must be set up differently, specifically all the option elements need value attributes.

<select class="dinos">
  <option value="stego">Stegosaurus</option>
  <option value="trex" selected>Tyrannosaurus</option>
  <option value="pterano">Pteranodon</option>
<
/select>
$('.dinos').val(); // trex



Targeting multiple elements at once

If you’d like to style more than one element the same way you can use a comma to separate the tag names.

/* Target the <h1> tags, the <h2> tags, and the <h3> tags */
h1, h2, h3 {
	color: white;
}

/* Would select every <p> tag inside a <header> tag */
header p {

}

/* Target every <p> tag, inside a <div> tag, that is inside a <header> tag */
header div p {

}






/* Would select every <p> tag inside a <header> tag */
header p {

}

/* Target every <p> tag, inside a <div> tag, that is inside a <header> tag */
header div p {

}


/* Target every <p> tag, inside a <div> tag, that is inside a <header> tag */
header div p {

}

The child selector allows a little more precision, looking at the HTML above, say we wanted to get just the p tags outside the div.

Using the > symbol—the child selector—we select only direct children of another tag.

/* Target a <p> tags that is directly inside a <header> tag */
header > p {

}

This wouldn’t select the other p tag because it’s also inside a div.

If we only want to get the p tag immediately after the h1 we can use the adjacent selector, a + symbol.

/* Target every <p> tag that is immediately beside an <h1> */
h1 + p {

}

<h2 class="veloci dino">Brachisaurus</h2>
Now the h2 element has both the veloci class and the dino class. The reason we can’t have a space in our class names is because the space is used to separate multiple classes on the same element.


Styling by number

We can also style elements based on their location and number: whether they’re first, last, odd, even, etc.

<ul>
  <li>Dimetrodon</li>
  <li>Pterasaur</li>
  <li>Mammoth</li>
  <li>Sabertooth Tiger</li>
  <li>Humans</li>
</ul>
We can select different li elements based on their position in the unordered list.

/* Target every <li> tag that is the first element inside a <ul> */
/* Dimetrodon */
ul li:first-child {}

/* Target every <li> tag that is the last element inside a <ul> */
/* Humans */
ul li:last-child {}

/* Target every even numbered <li> tag inside a <ul> */
/* Pterasaur, Sabertooth Tiger */
ul li:nth-child(even) {}

/* Target every odd numbered <li> tag inside a <ul> */
/* Dimetrodon, Mammoth, Humans */
ul li:nth-child(odd) {}

/* Target the 4th <li> tag inside a <ul> */
/* Sabertooth Tiger */
ul li:nth-child(4) {}





There is a CSS selector, really a pseudo-selector, called nth-child. Here is an example of using it:

ul li:nth-child(3n+3) {  
  color: #ccc;
}

 nth-child accepts two keywords in that spot: even and odd. Those should be pretty obvious. "Even" selects even numbered elements, like the 2nd, 4th, 6th, etc. "Odd" selects odd numbered elements, like 1st, 3rd, 5th, etc.

As seen in the first example, nth-child also accepts expressions in between those parentheses. The simplest possible expression? Just a number. If you put simply a number in the parentheses, it will match only that number element. For example, here is how to select only the 5th element:

ul li:nth-child(5) {  
  color: #ccc;
}

The hexadecimal system has sixteen digits to work with: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f—0 is the smallest and f is the largest.

When there are 3 pairs of numbers, like #ffffff, or #ccff00 we can simplify the hex code.

#ffffff becomes #fff
#ccff00 becomes #cf0
#000000 becomes #000

The RGB colour system is similar to hex, just specified a different way. Also, it has the ability to have semi-transparent colours, which the hex system does not.

You can specify the red, green, and blue component of the colour:

h1 {
	color: rgb(0, 0, 0); /* Black */
	color: rgb(255, 255, 255); /* White */


	RGB semi-transparency

The best thing about the RGB system is that some colours can be specified with semi-transparency by adding another number.

h1 {
	background-color: rgba(0, 0, 0, 0.5); /* 50% transparent black */
	background-color: rgba(255, 0, 0, 0.75); /* 75% opaque red */
}


Space — Descendant
Select an element that’s a descendant of another element.
ul li {}
nav a {}
ul li {}


> — Child
Select an element directly inside another element.
ul > li {}
h1 > span {}
footer > .copyright {}


+ — Adjacent sibling
Select an element immediately beside another element.
h1 + p {}
hr + p {}
li + li {}

[] — Attribute
Select an element by it’s attribute.
Good for styling links differently if they’re external.
[data-state="active"] {}
[href^="http" {}
[download] {}

:first-child
Select the element when it’s the first inside its parent.
p:first-child {}
ul li:first-child {}
.person:first-child {}


:nth-child()
Select an element by it’s number.
Good for zebra-striping table rows.
li:nth-child(2) {}
tr:nth-child(odd) {}
div:nth-child(5n) {}


:nth-last-child()
Select an element by it’s number, counting backwards from the end.
/* Third from the bottom */
li:nth-last-child(3) {}

:disabled
Select an element when its disabled attribute is set.
button:disabled {}



:checked
Select an <input> when its checked attribute is set.
input:checked {}







:link
For styling a link that hasn’t been visited.
a:link {
  color: #4484c2;
}

:visited
For styling a link that has been visited.
a:visited {
  color: #ccc;
}

:hover
For styling an element when the mouse hovers over it.
a:hover {
  color: #00f;
}

For styling an element for when the keyboard focuses it.
Only works on <a>, <button>, and form inputs by default.
button:focus {
  outline: 3px solid #000;
  outline-offset: 2px;
}

:active
For styling an element when the mouse button is clicked down on it.
a:active {
  color: #f33;
}


Transparency
The transparent keyword can be used to remove a colour.
background-color: transparent;


Change the typeface of the text.
Put quotes around typefaces with spaces in their names.
Always provide a fallback typeface.
Web safe fonts: Georgia, Arial, Verdana, Times, Comic Sans, Courier.
font-family: "Open Sans", sans-serif;


font-size
Change the size of the text.
Prefer rem or em units.
font-size: 1.5rem;





font-weight
Change the thickness of the text.
bold, normal, number: 400, 700, etc.
font-weight: bold;



font-style
Change the slanting of the text.
italic, normal
font-style: italic;

line-height
Adjust the space a line takes up, similar to leading.
Set in a number, a multiplier of the font size.
line-height: 1.4;

text-align
Adjust the position of the text within its parent.
left, right, center, justify
text-align: center;

text-decoration
Add or remove lines on the text.
none, underline, line-through, overline
text-decoration: none;


A box with no content isn’t visible, so content is the first layer
Outside content is the padding, pushing the edge of the box away from the content
Outside the padding is the border, the background colour stops here
Outside the box is the margin, a transparent layer pushing other boxes away

The margin and padding properties are used to put space around your box, either outside the box or inside the box.

margin — adds spacing outside of the box, pushing other boxes away
padding — adds spacing inside the box, pushing the content away from the border; the background colour is visible within the padding

div {
	/* Will push other boxes 10 pixels away on all 4 sides */
	margin: 10px;
	/* Will push the content away from the box edge on all 4 sides */
	padding: 12px;
}

Since boxes have four sides, there are four different margins and paddings that can be changed.

For margin, we have margin-top, margin-right, margin-bottom, margin-left.
For padding, we have padding-top, padding-right, padding-bottom, padding-left.

div {
	/* margin: top right bottom left; */
	margin: 10px 12px 8px 6px;
}

For the order, we start at the top of the box and make our way clockwise around the box.


Margin collapsing

Margins have some weird behavior when it comes to their top and bottom values. The bottom value of one box can collapse into the top value of the next—the browser choosing only the highest of the two.

.box-1 {
	margin-bottom: 15px;
}

.box-2 {
	margin-top: 25px;
}
The distance between these boxes will not be 40px—but instead the browser will pick the bigger of the two and choose it. So the margin between these boxes is 25px



Border

Border puts a line around the box, outside the background colour. The line can be solid, dashed, dotted, or an image.

The most basic border has 3 values: width, style, color:

header {
	/* Apply the same border to all 4 sides of the box */
	border: 3px solid #000;
}


Border radius

The border-radius property allows you to add rounded corners to your boxes.

a {
	/* Add 8px rounding to all 4 corners */
	border-radius: 8px;
}


Box shadow

Box shadow allows you to add a drop shadow to the box itself, where text-shadow adds to the text inside the box.

div {
	box-shadow: 2px 4px 5px rgba(0,0,0,0.5);
}
When specifying box-shadow there’s four values to write out:

horizontal offset — how far to shift the shadow left and right: positive numbers move right, negative move left
vertical offset — how far to shift the shadow up and down: positive numbers move down, negative move up


Browser rendering

When a browser renders your website it reads the HTML from the top to the bottom. The browser tries to place each box beside the previous box, unless something prevents it. Very similar to how words wrap in text editors like MS Word.

The display property

The display property in CSS is one way to change the flow and rendering process of the browser.

There are four major values for display that are used regularly: inline, block, inline-block, none.

p {
  /* This is the default setting for paragraphs specified by the browser */
  display: block;
}

a {
  display: inline-block;
}

Inline level elements have the following properties:

They allow other elements to fit beside them on the same line
They take up only as much width as needed
width, margin, padding don’t really work
§Some common inline level elements

span
a
strong, em, b, i
cite
time, data, ins, del



Block elements

In the browser’s default CSS there’s a bunch of elements that are specified as block—use your developer tools to see.

Block level elements have the following properties:

They take up their own line, anything that comes after goes onto the next line
They take up the whole width of its parent element, by default
width, margin, padding work as expected


Hybrid inline-block elements

The inline-block elements are a hybrid of both block and inline, inheriting certain properties from each of them.

Inline-block elements have the following properties:

They fit beside other elements on the same line (from inline)
They take up only as much space as needed (from inline)
width, margin, padding work as expected (from block)
§Some common inline-block level elements

img
button


Hiding elements with display none

The fourth display value commonly used is none, this will completely hide the element from the screen and any other accessibility tools.

h1 {
  /* This element will not be shown on the screen, nor take up any space */
  display: none;
}





Making a horizontal navigation bar

Using the display properties to our advantage, we can very easily make a horizontal navigation bar.

Here’s the HTML I would use for navigation:

<nav>
  <ul>
    <li><a href="#">Dinosaurs</a></li>
    <li><a href="#">Meat-eaters</a></li>
    <li><a href="#">Plant-eaters</a></li>
  </ul>
</nav>
Because of the browser’s default CSS, the li tags stack, one on top of each other, making a vertical list.

We want to make a horizontal list, so we need to change the display property of the li elements.

nav li {
  display: inline;
}
Adding display: inline will allow the browser to render the li elements on the same line, beside each other.


Using text-align: center on inline/inline-block elements can affect them in two ways:

If applied to the element itself, the text inside it will be centered
If applied to the parent element, the inline elements and the text inside them will be centered.

In our navigation above, if we did this:

nav ul {
  text-align: center;
}
Then all the li elements inside would centre themselves within the ul. And all the text inside those li elements would centre itself inside the li tags.


Text wrapping with float

The primary purpose of the float property is to allow text to wrap around another element, that element could be an image, a div, or any HTML element.

float: left — move the element to the left, allowing text to wrap on the right side
float: right — move the element to the right, allowing text to wrap on the left side
float: none — would turn floating off

.box-1 {
  float: left;
}

.box-2 {
  float: right;
}

.box-3 {
  float: right;
}
Since the width of .box-1 and .box-2 is less than with width of their parent element the can fit on they same line together.

But since there is no space left on that line for .box-3 it will move down to the next line, underneath the other floated right box.






------------------------------
https://www.youtube.com/watch?v=8aGhZQkoFbQ





JS is a single threaded non-blocking asynchronous concurrent language...




I have a call stack, event loop , a callback queueu , some other apis 


hey v8  -  I have a call stack and a heap

v8 is run time inside chrome....its heap -- (memory allocatio happens) and then call stack...


v8 does not have setTimeout, xml http requests etc...

That stuff in Web APIS  --- DOM (document,), ajax (xmlHttpRequest) then setTimeout


you have event loop and then callback queuee 


V8 only has heap and a stack....all other things are separate..

the call stack - one thread - one call stack - one thing at a time...


the call stack ---is a ds -- records where in the program we are.. 
we step in a function -- we put somethin on stack -- we get out - pop off stack..

whiel executing the function is put on the stack...

when we return off a function ...we pop things off the stack..


in the stack trace --- google extension tools --- we see --- foo -- then bar -- then baz  -- then anonymous function...which is the main function =- which is the file itself..



what happens when things are slow ?

things that are slow  and are on the stack  -- is what blocking means...
it is prblem because we running stuff in browser...




while doing synchronous requests, the brpwser is stuckk-- you cannot click on any other links or do anything...it cannot render...do any other stuff...


means we cannot block the stack...So the solution is async callbacks..

---stack---
|
|
|
|setTimeout (cb, 5000) has the console.log-- 
|main()



the setTimeout in the stack comes and instantly disappears.....and then 5 secs later you see console.log("there") in the stack...



Concurrency and Event loop --- 
Js run time can only do one thing at a time..the reason we can do concurrently is because... the browser gives us the webAPI's  --- 

these are threads ---  basically -- you can make calls to..




browser = run time JS v8 + webapis + event loop +task queue

so when it sees the setTimeOut in the stack -- it disappears (setTimeout call itself is complete) , so pop of the stack...


the webAPIs will have the timer() running now...


the webapi will complete after 5 sec...web api can't modify your code..make shit just appear ....

so that's why we have the task queuee...from web apis when they are done..they push callback to the task queue...


what is event loop ? they only have one simple job...job is to look at the stack and look at the task queueu..if the stack is empty...it takes first thing off the queue  and pushes onto the stack whihc effectively runs it...



stack runs the callback eventually......  and we are done...


setTimeout of zero --- means we are trying to defer something until the stack is clear...



button click === it will be on the Web API all the time... 
only when we click -- it will move it from web api to callback queue and then move it to the stack...


setTimeout is not teh guarenteed time to execution ,, but the minimum time to executuin....very imp...


callback s -----1
 ) any fun that other fn calls..2  an async call  that get pushed to the callback queue sometime in the future...


foreach method on an array--- it takes a fn --that is callback --which runs it synchronouslly...





//synchronous

[1, 2, 3, 4].forEach (function(i){   //running it within the current stack..
	console.log(i);
})
//asynchronous 
function asyncForEach(array, cb){
	array.forEach(function(){
		setTimeout (cb,0);
	})
}


asyncForEach([1,2,3,4],function(i){
	console.log(i)
})

dont block the event loop === means putting shit lot of stuff on the stack..



Well, arguably its not true that Javascript is single threaded if you see from the under hood working of browser JS to your JS code, there are thread pools. By single threaded what they mean(browser end) is your JS runs into a single threaded event loop. There is one single thread that handles your event loop. Under your JS, the browser code is running multiple threads to capture events and trigger handlers, when they capture any new event, they push it on an event queue and then that event loop, in which your code is running gets triggered and it handles the request e.g. It performs an action which can be to show a DIV, which again triggers the Browser to print it, which in turn runs a thread to do it(from the thread pool).

Lets take an example of your JS algo.
window.onload 
     Show Header
     Send an Ajax Req. for config - > When done, alert a box
     Do some more page animations
So when you told the browser to send an ajax request with a provided callback, it saves it in memory and this Network IO call is transferred to a thread in Network Pool Threads, your code next to that line will continue to work. After the Network Call thread has done its job, it will push on the event queue the response. Remember that event loop? Here is when it comes to action, it picks the top entity and then trigger your callback(Context Switching on CPU Level), which in turn could be anything. Now try doing something like this.
window.onload
     Show Header
     Send an Ajax req. for config -> 
     When done -> Trigger another Ajax 
         -> for loop 0.100000000
     Do more animation

Now here, if even your second Ajax completes in due time, its callback will not be triggered until your for loop exits. Its a sort of blocking within the thread, none of the event will be fired and everything will be frozen!

Hope that clears your doubt.

Cheers!




















































































































































































































































































































































































