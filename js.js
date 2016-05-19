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