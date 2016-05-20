$(document).ready(function(){  



var selc = $("div div");

	selc.each(function(index,element){
		$(this).addClass("class" + index);


	})

});

//output will be class0, class1, class2...etc for each div..