$(document).ready(function(){  



 var inputs = $(':input');  //selects all :input elements
 console.log(inputs);    //[input, input, input, input, textarea, prevObject: n.fn.init[1], context: document, selector: ":input"]


console.log(typeof inputs);  //object
console.log(inputs[0]);  //﻿﻿﻿﻿﻿<input type="text" value="nigga">
var arr = [];
console.log(typeof arr);  //object
//console.log(inputs[0].val());  //inputs[0].val is not a function
//val is jquery function..need a jqerury wrapper to work properly..

//puttng a jquery wrapper around it..
console.log($(inputs[0]).val())  //nigga




});


