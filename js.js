$(document).ready(function(){  

	// $('div').each(function(index){
	// 	this.title = "My index="+index;   
	// })
	//above raw dom way
	$('div').attr({

		title :'title3'
	}).css('font-size', '20pt')  //we are doing the chaining..


	;  //jQuwery way... works the same way..
});

//you can do css or do style inside attr ...