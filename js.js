$(document).ready(function(){  



var selc = $("div div");

	selc.each(function(index, element){

		$(this).addClass('class' + index);  //added class0, class1 ..etc..

	})

	selc.each(function(index, element){
		if ($(this).hasClass('class3')){
			$(this).addClass('newshit')
		}
	})

	////it will add newshit class to the class that contains class3..

});

//output will be same class for each div

// selc.addClass('classOne classTwo');


// based on hasClass is true or flase, you can add more functionality...