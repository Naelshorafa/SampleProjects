AOS.init({
  disable: "mobile",
});

$(document).ready(function () {
  $("#preloader-logo").fadeOut();

  setTimeout(AOS.refresh, 2000);
});
