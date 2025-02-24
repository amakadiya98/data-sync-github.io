$(document).ready(function () {
function toggleView() {
    const isMobile = $(window).width() <= 768;
    const $carousel = $(".primary-slider");
    const $softwareContent = $(".software-content");
    const $consultingContent = $(".consulting-content");

    if (isMobile) {
      $carousel.show();

      if (!$carousel.hasClass("owl-loaded")) {
        $carousel.owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplaySpeed: 1000,
          autoplayHoverPause: true,
          navText: [
            '<button class="owl-prev"></button>',
            '<button class="owl-next"></button>',
          ],
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
          },
        });
      }

      $softwareContent.hide();
      $consultingContent.hide();
    } else {
      $carousel.hide();
      $softwareContent.css("display", "flex");
      $consultingContent.css("display", "flex");
    }
  }

  toggleView();
  $(window).on("resize", toggleView);

});