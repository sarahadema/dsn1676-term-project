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
$('.back-to-top').localScroll();