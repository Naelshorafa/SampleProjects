"use strict";

AOS.init();

var $ = require("jquery");
var bootstrap = require("../../node_modules/bootstrap/dist/js/bootstrap");
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
  $(".from-control-datepicker").datepicker({
    startDate: "+2d",
    format: 'd M yyyy',
    language: $('html').attr('lang'),
    autoclose: true,
  });

  $(".from-control-birthdatepicker").datepicker({
    minViewMode: 1,
    format: 'M yyyy',
    language: $('html').attr('lang'),
    autoclose: true,
  });
  

  $(".success-partners .partners-slider").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    rtl: true,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
});


