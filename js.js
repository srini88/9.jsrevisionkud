

//html taking a function and returning content...



$(document).ready(function(){  
	$('div.demo-container').html(function(){
		var emphasis = "<em>" + $( "div" ).length + " paragraphs!</em>";
  	return "<p>All new content for " + emphasis + "</p>";
	});  //
	
});

//2 divs .. you get 2 as length.. 
