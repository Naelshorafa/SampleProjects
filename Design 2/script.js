$(document).ready(function(){
  $('.hero-slider').bxSlider({
    mode: 'fade',
    tickerHover: true,
    controls: false,
    auto: true,
    pager: false,
  });
  $('.pic-slider').bxSlider({
    mode: 'fade',
    tickerHover: true,
    controls: false,
    auto: true,
    pager: false,
  });
});
$(document).ready(function(){
  var url = $("#myVideo").attr('src');
  $("#myVideo").attr('src', '');
  $("#exampleModal").on('shown.bs.modal', function(){
      $("#myVideo").attr('src', url);
  });
  $("#exampleModal").on('hide.bs.modal', function(){
      $("#myVideo").attr('src', '');
  });
});

$(function () {
  $("#preloader-logo").fadeOut(2000);
});