// When this method is used to return content, it returns the content of the FIRST matched element.

// When this method is used to set content, it overwrites the content of ALL matched elements.

This method uses the browser's innerHTML property...


$(document).ready(function(){  ///it does not wait for your images and all shit...  you would see this printing out..
	//document.getElementById
	var boo = $('div.demo-container').html();  //
	console.log(boo); //<div class="demo-box">Demonstration Box</div>

});

