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
  });
});
//# sourceMappingURL=all.js.map
