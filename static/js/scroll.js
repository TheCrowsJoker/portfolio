$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
    // Hide the menu if in mobile view
    if ($(window).width() < 750) {
      $(".main-nav").removeClass("open");
      $(".menu-button").removeClass("open");
    }
  });
});
