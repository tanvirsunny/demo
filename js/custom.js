jQuery(function ($) {

    /*-- Strict mode enabled --*/
    "use strict";
    //sliders
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade:true,
      dots: false,
      autoplaySpeed: 3000,
      arrows:true
    }).slickAnimation();

}(jQuery));