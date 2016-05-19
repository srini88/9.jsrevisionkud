$(function(){  //shorthand syntam  $(document).ready(function())

	var div1= $('#div1');
	var div2 = $('#div2');

	function1 = function(){   //global
		div1.append('function1 executed <br/>');
	}
	var	function2 = function(){  // only within this doc.ready
		div1.append('function2 executed <br/>');
	}
	var obj = {
		function3 : function(){
			div1.append('function3 executed <br/>');
		}
	}
	gobj = {
		function4 : function(){
			div1.append ('function4 executed <br/>');
		}
	}
	function1();
	function2();
	obj.function3();
	gobj.function4();
	div1.append("<br/>");

	div2.load('BasicFn.html');


})