$(document).ready(function(){  


	$("#myDiv").click(function(event) {  ///2nd parameter wont be the element passed in, no second paramenter
		console.log(event);
		console.log($(this));
		console.log(this);  //raw div
		console.log($("#myDiv"))  //this will have extra attribute selector..

		console.log(typeof event);  //object
		console.log(typeof $(this));// object
		console.log(event === $(this))  //false
		console.log(event === this)  //false
		console.log(this === $("#myDiv"))
		$(this).toggleClass('Highlight');
	});
});
