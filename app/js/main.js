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
      delay: 5000,
      disableOnInteraction: false,
    }
});

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
    delay: 5000,
    disableOnInteraction: false,
  }
});
