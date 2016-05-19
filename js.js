

//html taking a function and returning content...



$(document).ready(function(){  
	$('div').html(function(){
		

		return "<b>Wow</b> such excitement..";
	}); 
	//console.log($('div b')); //returns a collection..

	$('div b').append(document.createTextNode("!!!")).css("color", "red");
	
});

//2 divs .. you get 2 as length.. 
