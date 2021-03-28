var $ = require("jquery");

$(".success-partners .partners-slider").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    rtl: $('html').attr('dir') == 'rtl',
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