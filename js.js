$(document).ready(function(){  



var selc = $("div div");
	selc.toggleClass('Highlight')   //will add to the third div..
	//also can use first last 
	



});

function myFocus(e){
	console.log(e);
	$(e).toggleClass('Highlight');
}



///.toggleClass() alternates adding or removing a class based on the current presence or absence of the class...



// As you know, the onBlur event fires for an element if that element had the focus, but loses it.