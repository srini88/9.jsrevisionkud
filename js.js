live--- bubble up all the way upto the document..

using delegate() --- it wont bubble up upto the document.... 




A context object ($Divs in the sample below) handles events by default rather than the document object...


works even when new objects are sadded into the DOM..

$('#Divs').delegate('div', 'click', someFunction);

div is any child that is a div..inside one and only #Divs...
so we are bubbling up until #Divs...



Stop delegate event handling using undelegate();

//next one is on function..

which should I use which scenario..

//on is a replacement for bind, delegate...

on is on jquery 1.7...


//rule them all with .on ...

//on a click on tr..bubbe up until tbody...
$("MyTable tbody").on("click", "tr", function(event)){
	alert("row was clicked and bubbled up")
}

//2nd example with on...using a map...

$("#MyTable tr").on({

	mouseenter:fn, 
	mouseleave:fn


})