var $btnTshirt = $('.btn-tshirt');
var $infoTshirt = $('.info-tshirt');

var $btnStickers = $('.btn-stickers');
var $infoStickers = $('.info-stickers');

$btnTshirt.on('click', function(){
	$infoTshirt.toggleClass('js-btn-tshirt');
})

$btnStickers.on('click',function(){
	$infoStickers.toggleClass('js-btn-stickers');
})