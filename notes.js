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















































































































































































































































































