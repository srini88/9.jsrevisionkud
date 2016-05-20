$(document).ready(function(){  
	$('.boo').wrap('<div class="parent" />');
	$('div.parent').remove();


});

//remove node...
///not only removes the div but also the content inside it...the child stuff because they have no where to go..

// other way with vanilla JS -- find the node first...and then remove it from it'sparent...find the parent also