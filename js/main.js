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
	
	$panel.filter(':not([hidden])').attr('hidden', true);
	$(id).removeAttr('hidden');

	$tabs.find('.js-current').removeClass('js-current');
	$(this).addClass('js-current');
});