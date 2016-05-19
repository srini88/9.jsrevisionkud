

//html taking a function and returning content...



$(document).ready(function(){  
	$('div').html(function(){
		

		return "<b>Wow</b> such excitement..";
	}); 
	console.log($('div').html()); // returning first matched element..<b>Wow</b> such excitement..
	
});

//2 divs .. you get 2 as length.. 
