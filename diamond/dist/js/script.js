$(document).ready(function () {
  $(".logo-slider").slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    infinite: true,
    rtl: true,
    prevArrow:'.arrow-prev',
    nextArrow:'.arrow-next',
  });
});

