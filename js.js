// When this method is used to return content, it returns the content of the FIRST matched element.

// When this method is used to set content, it overwrites the content of ALL matched elements.

//This method uses the browser's innerHTML property... 


$(document).ready(function(){  ///it does not wait for your images and all shit...  you would see this printing out..
	//document.getElementById
	$('div.demo-container').html('<p>all new content! <em>you Bet</em></p>');  //
	

});

