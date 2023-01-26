$(".slick").slick({
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  fade: true,
  speed: 1000,
});

//////// fadeinout////////
$(function () {
  $(window).scroll(function () {
    $(".fade-out").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 3) {
        $(this).addClass("fade-in");
      } else {
        $(this).removeClass("fade-in");
      }
    });
  });
});