$(document).ready(function () {
  $(".menu-button").on("click", function () {
    $(".nav").slideToggle("fast");
  });
  $(window).resize(function () {
    if ($(window).width() > 750) {
      $(".nav").show();
    } else {
      $(".nav").hide();
    }
  });
});
