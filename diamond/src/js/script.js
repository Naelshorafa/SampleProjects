"use strict";

AOS.init();

var $ = require("jquery");
var bootstrap = require("../../node_modules/bootstrap/dist/js/bootstrap");
require("slick-carousel");
require("bootstrap-datepicker");
require("./indexpage.js");
require("./datepicker.js");
require("./process.js");

$(function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
});