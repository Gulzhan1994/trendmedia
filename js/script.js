$(document).ready(function(){
    $('.main-slider').slick({
      dots: false,
      autoplay: false,
      arrows: true,
      appendArrows: $('.slider_blog .slider_arrow'),
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      spaceBetween: 30,
      prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
      nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
    
    });
});

$(document).ready(function(){
  $('.section-slider').slick({
    dots: false,
    autoplay: false,
    arrows: true,
    appendArrows: $('.slider-blog .slider-arrow'),
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    spaceBetween: 30,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
  
  });
});