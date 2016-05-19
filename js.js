$(document).ready(function(){  
	$('.boo').wrap('<div class="parent" />');
});


////above will wrap for each elemnt in .boo....not a whole parent div..one parent div for each element..


///.remove() will remove matched elements from the DOM

// As you can see,there are plenty of validation done,regex matches,cross browser tricks etc.

// Its important to realise that jquery is a library built on javascript.Javascript executes directly on the browser.Where as jquery processes quite a lot of javascript code before being executed by the browser.

// I personally prefer jquery.I am really not bothered about saving those nano seconds.The level of simplicity that jquery provides is phenomenal and an artpiece in itself.