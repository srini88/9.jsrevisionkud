$(document).ready(function(){  

	//$('tr').css("backgroundColor", "green");  //all rows greeen
 	//$('tr:even').css("backgroundColor", "green");  //all even ones..
	$('tr:last-child').css("backgroundColor", "green");   //last one

	console.log($('div:contains("basha")').html());  //manik basha.s.dfsd

	//if manik basha is in another div .html would print <div>manik basha.s.dfsd</div>

});


//$('#datatable tr:odd')   ...on a particular table...very specific selector...

// $('div[title$="Title"]') //ends with Title..
// ^ starts with 
// * contains ...


