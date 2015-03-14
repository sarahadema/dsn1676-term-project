var $btnTshirt = $('.btn-tshirt');
var $infoTshirt = $('.info-tshirt');

var $btnStickers = $('.btn-stickers');
var $infoStickers = $('.info-stickers');

var $btnNotebook = $('.btn-notebook');
var $infoNotebook = $('.info-notebook');

$btnTshirt.on('click', function(){
	$infoTshirt.toggleClass('js-btn-tshirt');
})

$btnStickers.on('click',function(){
	$infoStickers.toggleClass('js-btn-stickers');
})

$btnNotebook.on('click',function(){
	$infoNotebook.toggleClass('js-btn-notebook');
})