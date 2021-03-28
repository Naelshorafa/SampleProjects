var $ = require("jquery");

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
  });
  
  
  