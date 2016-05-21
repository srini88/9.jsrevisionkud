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




























































