$(function(){
  var navBtn = $('.header-btn');
  var mobNav = $('.mobile-nav');

  navBtn.on('click', function(){
    mobNav.slideToggle();
  });


  // слайдер
  var slider = $('.slider');
  var sliderImg = $('.item');
  slider.owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsive:{
        0:{
            items:1
        }
    },
    onInitialized: function(){
      equalHeight(sliderImg);
    }

  });
// выравнивание всех картинок по меньшей высоте
  function equalHeight($items){
    var max = 0;

    $items.each(function(){
      var h = $(this).height();
      if(h >= max){
        max = h;
      }
    });
    $items.css('height', max + 'px');
  }

});
