$(document).ready(function(){  



var selc = $("div div");

	selc.each(function(index, element){

		$(this).addClass('class' + index);  //added class0, class1 ..etc..

	})

	if ((selc.hasClass('class1'))){

		console.log(selc.addClass('class1'));   //adding extra class 
		///op will be class0 class1, 
		////if class1 is already there it wont add again..
	}




});

//output will be same class for each div

// selc.addClass('classOne classTwo');


// based on hasClass is true or flase, you can add more functionality...