"use strict";
var $ = require("jquery");
require("../../node_modules/bootstrap/dist/js/bootstrap.bundle");
require("slick-carousel");
require("bootstrap-datepicker");

$(function () {
  $.fn.datepicker.dates["ar"] = {
    days: [
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
      "الأحد",
    ],
    daysShort: [
      "أحد",
      "اثنين",
      "ثلاثاء",
      "أربعاء",
      "خميس",
      "جمعة",
      "سبت",
      "أحد",
    ],
    daysMin: ["ح", "ن", "ث", "ع", "خ", "ج", "س", "ح"],
    months: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    monthsShort: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    today: "هذا اليوم",
    rtl: true,
  };

  $(".success-partners .partners-slider").slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    infinite: true,
    rtl: true,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  });

  $(".from-control-datepicker").datepicker({
    format: "d M yyyy",
    language: "ar",
    autoclose: true,
  });
});
