// инициализация первого слайдера
var mySlider = new Swiper ('.js-slider-top',{
    speed:800,
    loop: true,
    pagination: {
      el: '.slider--pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      }
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    }
});
// инициализация второго слайдера
var mySlider = new Swiper ('.js-slider-bot',{
  speed:800,
  loop: true,
  pagination: {
    el: '.slider--pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    }
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  }
});

//меню
$('.js-bar').click(function(){
  $('.js-menu').slideToggle(300);
});

$(window).resize(function(){
  if($(window).width() >= 870) {
    $('.js-menu').css('display','');
  }
});