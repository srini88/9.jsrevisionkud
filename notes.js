doing advanced techniques in JS and jQuery...

HTML5 canvas draw function...
create a square logo...
silver square with a black logo


jquery dan Wahlin... great course.....Jquery fundamentals..

why use jquery?

single javascript file.... very powerful,. cross browser....amazing...I6, firefox, chrome, opera...

jquery makes it you can focus on your app... jquery can take care for you...

featuers -- selectors.....imp...
events --- imps..
very rich AJAX --- use jquery to callback to server and get JSON...
and finally plugins...very rich free jQuery plugins..

how do you locate elements with a specific class? modern browser use query 

how do you apply styles to multiple elements?

how do you handle events in a cross browser mannner?

IE 6-8   go with jQuery 1.x 

also jQuery 2.x 


why CDN?  go to a site -- and they use this URL from google...that script is cached for that domain..

you go to another domain ..it is already cached... 

microsoft and google have data centers all over the world.. get some speed benefits.. 
caching, regionality..
parallelism..

what happens if you can't get jQuery script... will cause a big problem..

provide a fall back ...

<script src ="cnd link"></script>  successful window object will have  anew property called jQuery 
<script>
window.jQuery || document.write('<script src = "jquery"></\script>');
</script>

$ = is the alias.. called once DOM hierarcy is loaded...but before all  the images have loaded.....

when it is ready ,,call the callback --- inline anonymous function..

use $(document).ready(function(){

});