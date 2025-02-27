$(document).ready(function () {

    $(".writers-slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        navText: [
          '<button class="owl-prev"></button>',
          '<button class="owl-next"></button>',
        ],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1000: { items: 3 },
        },
      });

      $(".video-container").each(function () {
        const video = $(this).find("video")[0];
        const playButton = $(this).find(".play-button");
    
        playButton.on("click", function () {
          if (video.paused) {
            video.play();
            playButton.hide();
          }
        });
    
        $(video).on("ended", function () {
          playButton.css("display", "flex");
        });
      });
    

});