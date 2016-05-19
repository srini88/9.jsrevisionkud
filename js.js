$(document).ready(function(){  

	$('div').each(function(index){

		console.log(index +" = "+ $(this).text())  //includes the parent div as well
	})

});


//.each(function(index, Element)) is used to iterate through jQuery objects:


///the 2nd parameter element is just this..