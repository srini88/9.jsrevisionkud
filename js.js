$(document).ready(function(){  
	

	$('div').each(function(index){
		console.log(index+" " + $(this).html());  //getting same results with $(this).text
	})
//[div, context: div]
	// Iterate over a jQuery object, executing a function for each matched element.

 // Function( Integer index, Element element )

});
// 0 Hello
// 1 Hello
// 2 Hello

// jQuery.html() treats the string as HTML, jQuery.text() treats the content as text.