var $btnTshirt = $('.btn-tshirt');
var $infoTshirt = $('.info-tshirt');

var $btnStickers = $('.btn-stickers');
var $infoStickers = $('.info-stickers');

var $btnNotebook = $('.btn-notebook');
var $infoNotebook = $('.info-notebook');

var $btnNav = $('.btn-nav');
var $nav =$('.nav');

$btnTshirt.on('click', function(){
	$infoTshirt.toggleClass('js-btn-tshirt');
})

$btnStickers.on('click',function(){
	$infoStickers.toggleClass('js-btn-stickers');
})

$btnNotebook.on('click',function(){
	$infoNotebook.toggleClass('js-btn-notebook');
})

$btnNav.on('click',function(){
	$nav.toggleClass('js-btn-nav');
})