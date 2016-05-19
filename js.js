$(document).ready(function(){  

	//$('tr').css("backgroundColor", "green");  //all rows greeen
 	//$('tr:even').css("backgroundColor", "green");  //all even ones..
	$('tr:last-child').css("backgroundColor", "green");   //last one

	console.log($('div:contains("basha")').html("updated Shit"));    //prints updated Shit..

	///get the html or update the html

});

///have to master selectors is the key to being productive with jQuery..

//check this outhttp://www.codylindley.com/jqueryselectors/

//li:first

//li:nth-child(2)

// first div 

// div:eq(0)

$('code') all code tags...


$('div code')  - code inside a div..


The child combinator (E > F) can be thought of as a more specific form of the descendant combinator (E F) in that it selects only first-level descendants
documentation$('li > ul')toggle