$(document).ready(function(){  

	$('div').each(function(index){
		this.title = "My index="+index;    /////adding title to the raw DOM object..... title exists on the raw DOM object..that's why not wrapping $(this) within jQuery..
	})

});


// this.propertyName available directly...


// var val = $('#CustomerDiv') - -- gives the Jquery object..
// var val = $('#customerDiv').attr('title') graw the tile...


// $('img').attr('title','My Image Title'); //// adding value..
// ///will actually do it on each image of the page....no need to loop through the shit..
// ///jquery automatically update the title attribute of each of the images..


// $('img').attr({
// title :'My Image Title',
// style : 'border:2px solid black;'
// });


// To modify multiple attributes, pass a JSON object containing name/value pairs..

// JSON object passed and used to change title and border..


// //1.
// // This is a JSON String.
// 2.
// var foo = '{ "prop": "val" }';
// 3.
 
// 4.
// // This is an Object literal.
// 5.
// var bar = { "prop": "val" };
// First you should know what JSON is:

// It is language agnostic data-interchange format.
//JSON is transfered over http ... not depending on programming languare..