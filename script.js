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
  var newsImg1 = $('.first-news-photo');
  var newsImg2 = $('.second-news-photo');
  var newsImg3 = $('.third-news-photo');

  newsImg1.hover(function(){
    newsImg1.css('border', '4px solid orange');
  },function(){
    newsImg1.css('border', '4px solid white');
  });
  newsImg2.hover(function(){
    newsImg2.css('border', '4px solid orange');
  },function(){
    newsImg2.css('border', '4px solid white');
  });
  newsImg3.hover(function(){
    newsImg3.css('border', '4px solid orange');
  },function(){
    newsImg3.css('border', '4px solid white');
  });
// скролл вверх
  var up = $('.btn-up');
  up.on('click', function(){
    $('html, body').animate({scrollTop: 0}, 0);
  });
  // функция анимации подложки у партнеров
    new layerAnim($('.layer1'));
    new layerAnim($('.layer2'));
    new layerAnim($('.layer3'));

    function layerAnim(layer){
      this.layer = layer;
      layer.hover(function(){
        layer.css('opacity', '0.3');
      },
      function(){
        layer.css('opacity', '0');
      });
    };
});
