$(function(){
// навигация
  var navBtn = $('.header-btn');
  var mobNav = $('.mobile-nav');
  var scrollNavBtn = $('.scroll-header-btn');
  var scrollMobNav = $('.scroll-mobile-nav');
  var scrollAnim = $('.scroll-anim');
  var scrollMobNavList = $('.scroll-mobile-nav li a');

  navBtn.on('click', function(){
    mobNav.slideToggle();
  });

  scrollNavBtn.on('click', function(){
    scrollMobNav.slideToggle();
  });

  var doc = $(window);
  doc.on('scroll', function(){
    mobNav.slideUp();
    if(doc.scrollTop() >= '150'){
      scrollAnim.slideDown(200);
    }else if(doc.scrollTop() <= '150'){
      scrollAnim.slideUp(100);
    }
  });

  scrollMobNavList.on('click', function(){
    scrollMobNav.slideUp();
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
// анимация картинок в новостях
  var newsImg = $('.first-news-photo');

  newsImg.hover(function(){
    newsImg.css('border', '4px solid orange');
  },function(){
    newsImg.css('border', '4px solid white');
  });
  
});
