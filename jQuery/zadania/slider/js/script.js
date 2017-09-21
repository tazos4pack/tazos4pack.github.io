var slideCount = $('.single-slide').length;
var slideWidth = 100/slideCount;
var slideShow = $('.slide-show');
var slideIndex = 0;

slideShow.css('width'), slideCount * 100 + "%");

slideShow.find('.single-slide').each(function(index){

 $(this).css({'width': slideWidth + '%', 'margin-left': index * slideWidth + '%'});

    });
$('.prev-slide')







function 