$(function(){
  var navBtn = $('.header-btn');
  var mobNav = $('.mobile-nav');

  navBtn.on('click', function(){
    mobNav.slideToggle();
  });

});
