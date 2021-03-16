'use strict';
var $ = require( "jquery" );
require('../../node_modules/bootstrap/dist/js/bootstrap.bundle');
require('slick-carousel');

$(function () {
  $(".success-partners .partners-slider").slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    infinite: true,
    rtl: true,
    prevArrow:'.arrow-prev',
    nextArrow:'.arrow-next',
  });
});

