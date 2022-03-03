$(document).ready(function () {
  $(".menu-button").on("click", function () {
    $(".main-nav").toggleClass("open");
    $(".menu-button").toggleClass("open");
  });
});
