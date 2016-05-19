$(document).ready(function(){  

	console.log($('#parent').css("textDecoration","underline"));  //everything within the div underlines...


	console.log($('#parent p').css("textDecoration","underline"));   //want to underline just p tag


	$('div div').each(function(index){
		if (index ===1){
			console.log($(this).css("textDecoration", "line-through"));
		}
	});


 
});


// Was given a parent div and 3 child divs inside. Asked to add CSS to each giving some height and width to the child divs and border of a certain thickness to all. Asked to add another child div inside the second child. Was asked to give absolute position to this div with some bottom and left positioning and asked to draw the layout.  


// [attribute^="value"] will select all elements with an attribute that begins with stated value..


// [attribute$="value"] ends with value..


// [attribute*="value"]  contains the word value