// core jquery function called on

// inverse of it is off....

// .on(eventType, handler(eventObject))


// recommended aproach is on  instead of bind..


// $('#test').click(handler);

// $('#test').off() - not only click, but any other elemtnt wil also be removed...

// $('#test').off('click') //specific events can also be targeted using off()

// before 1.7, use bind and unbind..

// on() allows multiple events to be bound to one or more elements...
// Event names to bind are separated with a space..

// $("#myDiv").on('mouseenter mouseleave',function(){
// 	$(this).toggleClass('green')
// })