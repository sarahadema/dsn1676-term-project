var $btnNotebook = $('.btn-notebook');
var $notebook = $('.notebook');

var $btnStickers = $('.btn-stickers');
var $stickers = $('.stickers');

var $btnTshirt = $('.btn-tshirt');
var $tshirt = $('.tshirt');


$btnNotebook.on('click', function(){
	$notebook.toggleClass('js-btn-notebook');
})

$btnStickers.on('click', function(){
	$stickers.toggleClass('js-btn-stickers');
})

$btnTshirt.on('click',function(){
	$tshirt.toggleClass('js-btn-tshirt');
})