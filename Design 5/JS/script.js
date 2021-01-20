AOS.init();
$(function () {
  $("#preloader-logo").fadeOut();
});
  // ==============================================================
  // loading
  // ==============================================================
$(function () {
  "use strict";

  function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return myNav.indexOf("msie") != -1
      ? parseInt(myNav.split("msie")[1])
      : false;
  }

  if (isIE() && isIE() > 9) {
    $("body").addClass("ieGt9");
  }
  // ==============================================================
  //  back-to-top
  // ==============================================================

  if ($(".back-to-top").length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $("#back-to-top").addClass("show");
        } else {
          $("#back-to-top").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $(".back-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    });
  }
  // ==============================================================
  //  scrollbar
  // ==============================================================

  fixed_header();
  $(window).scroll(function () {
    fixed_header();
  });

  // ==============================================================
  // Fixed header
  // ==============================================================

  function fixed_header() {
    var ht = $(".header").height();
    var st = $(window).scrollTop();
    var sf = ht + 100;
    var sb = 800;
    if (st > ht) {
      $(".header").addClass("nav-fixed");
    } else {
      $(".header").removeClass("nav-fixed");
    }
    if (st > sf) {
      $(".header").addClass("nav-show");
      $(".back-to-top").addClass("nav-show");
    } else {
      $(".header").removeClass("nav-show");
      $(".back-to-top").removeClass("nav-show");
    }
  }
});
