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

	setInterval(function(){
		selc.removeClass();
	}, 2000);    ///removing all classes after two seconds...

	setInterval(function(){
		selc.addClass("hi");
	}, 2100); 

	//adding and removing classes periodically...

	////it will add newshit class to the class that contains class3..

});

//output will be same class for each div

// selc.addClass('classOne classTwo');


// based on hasClass is true or flase, you can add more functionality...



// .removeClass  can remove one or more classes: 
// $('p').removeClass('classOne classTwo')


// remove all class attributes for the matching selector..

// $('p').removeClass(); 