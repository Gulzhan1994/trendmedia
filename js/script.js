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

let headerBurger = document.querySelector(".header_burger")
let headerMenu = document.querySelector(".menu-list")

headerBurger.addEventListener("click", function (event) {
headerBurger.classList.toggle("header_burger__active");
headerMenu.classList.toggle("menu-list__active");
});
