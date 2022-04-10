var ws_uri = "ws://HTR-2022-HELP-WE-HAVE-NO-TIME.praneethotthi.repl.co:9600";
var websocket = new WebSocket(ws_uri);

// on websocket open:
websocket.onopen = function(event) {
	MessageAdd('<div class="message green">You have entered the chat room.</div>');
};

// on websocket close:
websocket.onclose = function(event) {
	MessageAdd('<div class="message blue">You have been disconnected.</div>');
};

// on websocket error:
websocket.onerror = function(event) {
	MessageAdd('<div class="message red">Connection to chat failed.</div>');
};

var $els = $('.menu a, .menu header');
var count = $els.length;
var grouplength = Math.ceil(count/3);
var groupNumber = 0;
var i = 1;
$('.menu').css('--count',count+'');
$els.each(function(j){
    if ( i > grouplength ) {
        groupNumber++;
        i=1;
    }
    $(this).attr('data-group',groupNumber);
    i++;
});

$('.menu footer button').on('click',function(e){
    e.preventDefault();
    $els.each(function(j){
        $(this).css('--top',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 20);
        $(this).css('--delay-in',j*.1+'s');
        $(this).css('--delay-out',(count-j)*.1+'s');
    });
    $('.menu').toggleClass('closed');
    e.stopPropagation();
});

// run animation once at beginning for demo
setTimeout(function(){
    $('.menu footer button').click();
    setTimeout(function(){
        $('.menu footer button').click();
    }, (count * 100) + 500 );
}, 1000);

