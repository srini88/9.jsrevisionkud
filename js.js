$(document).ready(function(){  



 var inputs = $(':input');  


 inputs.each(function(){
 	var element = $(this);   //putting jQuery wrapper..
 	//element.val("Hu");  ///changes all values to "HU"
 	console.log(element.val());
 });


//would print the selected one in the options..
//if selected is not chosen...it will just default to the first one..

});

//also $('form :input') , $('#form1 :input')


