$(document).ready(function(){  
	

	console.log($('div[title]'));  //[div, prevObject: n.fn.init[1], context: document, selector: "div[title]"]

	console.log($('div[title]').length);	// 1

	console.log($('div[title="H"]').length);  //1

	console.log($('input[type="text"]').length)  //4

	$('input[type="text"]').css("backgroundColor", "yellow")  //changes bg color to yellow on all the input type text fields


});


// $('a[title]')  -- find all anchor tags that have a tilte attribute...


// $('a[title="ProgrammingInfo"]') = select all anchor elements that hve a programming info title attribute value....



// $('input[type="text"]') --

$(':input')  select all input tags --all input, textarea, select and button elements where as $input just selects elements with an input tag..

$('input') - selects only those elemtns that have input tag.. wont select drop down list and text area..., button, image, radio -- 


$(:input)  > $(input)

$(':input[type="text"]')  --- big collection and then filter to 2..
$(input[type="text"]) -  filter to 2 directly..