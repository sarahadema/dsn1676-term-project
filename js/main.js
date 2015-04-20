var $btnNav = $('.btn-nav');
var $nav =$('.nav');

$btnNav.on('click',function(){
	$nav.toggleClass('js-btn-nav');
})

var $tabs = $('.tabs');
var $panel = $('.panel');

$tabs.on('click', 'a', function (e) {
	e.preventDefault ();
	var id = $(this).attr('href');
	
	$panel.filter('.js-panel-visible').removeClass('js-panel-visible');
	$(id).addClass('js-panel-visible');

	$tabs.find('.js-current').removeClass('js-current');
	$(this).addClass('js-current');
});

$('.nav').localScroll();
$('.return').localScroll();
$('.name').localScroll();
$('.contact').localScroll();

var $profile = $('.profile');

$profile.waypoint (function (){
	$profile.addClass('js-wave');
}, {offset:'7000%'});

/*
var setTime = function(){
  var date = new Date(),
  MINUTE = 60, HOUR   = 60*MINUTE,
  seconds = date.getSeconds(),
  minutes = (date.getMinutes()*MINUTE) + seconds,
  hours = (date.getHours()*HOUR)+minutes;
    document.getElementById('right-arm').setAttribute('transform', 'rotate('+360*(seconds/MINUTE)+',45,100)');
  }
setTime();
var interval = setInterval(setTime,1000);
*/