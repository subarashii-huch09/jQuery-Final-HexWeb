"use strict";

$(document).ready(function (e) {
  // drop-down menu 下拉式選單功能
  $(".trigger").click(function (e) {
    e.preventDefault();
    $(".trigger").toggleClass("active");
    $(".dropDown").slideToggle(500);
  }); // scroll to top 效果

  $(".top").click(function (e) {
    e.preventDefault();
    $("html,body").animate({
      scrollTop: 0
    }, 1000);
  }); // swiper

  var swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 2500,
    spaceBetween: 150,
    autoplay: {
      delay: 5000
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  lightbox.option({
    resizeDuration: 700,
    wrapAround: true,
    fadeDuration: 700,
    positionFromTop: 300
  });
});
//# sourceMappingURL=all.js.map
