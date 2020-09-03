$(document).ready(function(){

  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.header-menu__nav').toggleClass('header-menu__nav_active');
    $('body').toggleClass('body-ofh');
  });

  $('.feedback-list>li').each(function(i, elem){
    console.log(i);
    $('.feedback-slider__rail[data-number='+i+']').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.feedback-slider__nav[data-number='+i+']',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            asNavFor: '',
            fade: false
          }
        },
      ]
    });

    $('.feedback-slider__nav[data-number='+i+']').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.feedback-slider__rail[data-number='+i+']',
      prevArrow: '<svg class="slick-prev" role="img" width="14" height="25"><use xlink:href="assets/images/sprite.svg#arrow"></use></svg>',
      nextArrow: '<svg class="slick-next" role="img" width="14" height="25"><use xlink:href="assets/images/sprite.svg#arrow"></use></svg>',
      vertical: true,
      swipe: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: "unslick"
        },
      ]
    });
  });
  
});