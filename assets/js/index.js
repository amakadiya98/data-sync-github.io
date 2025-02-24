$(document).ready(function () {
  // LANGUAGE DROPDOWN
  $(".dropdown-item").click(function () {
    var selectedLang = $(this).data("lang");

    if (selectedLang === "EN") {
      $(".language-btn").html(`
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12Z" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.0996 1.0542C13.0996 1.0542 16.3996 5.39988 16.3996 11.9998C16.3996 18.5998 13.0996 22.9456 13.0996 22.9456" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.8996 22.9456C10.8996 22.9456 7.59961 18.5998 7.59961 11.9998C7.59961 5.39988 10.8996 1.0542 10.8996 1.0542" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.69336 15.85H22.3082" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.69336 8.15002H22.3082" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span> EN
      `);
      $(".dropdown-item")
        .html(
          `<span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12Z" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.0996 1.0542C13.0996 1.0542 16.3996 5.39988 16.3996 11.9998C16.3996 18.5998 13.0996 22.9456 13.0996 22.9456" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.8996 22.9456C10.8996 22.9456 7.59961 18.5998 7.59961 11.9998C7.59961 5.39988 10.8996 1.0542 10.8996 1.0542" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.69336 15.85H22.3082" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.69336 8.15002H22.3082" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>  TR`
        )
        .data("lang", "TR");
    } else {
      $(".language-btn").html(
        `<span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12Z" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.0996 1.0542C13.0996 1.0542 16.3996 5.39988 16.3996 11.9998C16.3996 18.5998 13.0996 22.9456 13.0996 22.9456" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.8996 22.9456C10.8996 22.9456 7.59961 18.5998 7.59961 11.9998C7.59961 5.39988 10.8996 1.0542 10.8996 1.0542" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.69336 15.85H22.3082" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.69336 8.15002H22.3082" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>   TR`
      );
      $(".dropdown-item")
        .html(
          `<span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12Z" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.0996 1.0542C13.0996 1.0542 16.3996 5.39988 16.3996 11.9998C16.3996 18.5998 13.0996 22.9456 13.0996 22.9456" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.8996 22.9456C10.8996 22.9456 7.59961 18.5998 7.59961 11.9998C7.59961 5.39988 10.8996 1.0542 10.8996 1.0542" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.69336 15.85H22.3082" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.69336 8.15002H22.3082" stroke="#002245" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>   EN`
        )
        .data("lang", "EN");
    }
  });

    $(".main-header .nav-link").click(function () {
      $(".main-header .nav-link").removeClass("active");
      $(this).addClass("active");
    });

    $(".dropdown").on("hidden.bs.dropdown", function () {
      $(this).find(".nav-link").removeClass("active");
    });

  // SEARCH BAR
  const $searchButton = $(".search-btn");
  const $searchFormContainer = $(".search-form-container");
  const $linkContainer = $("#linkContainer");
  const $submitSearchButton = $(".submit-search-btn");

  $searchButton.on("click", function () {
    if ($(window).width() >= 991) {
      $linkContainer.addClass("hide");
    }
    $searchButton.addClass("hide");
    $searchFormContainer.addClass("show");
  });

  $submitSearchButton.on("click", function (event) {
    event.preventDefault();
    $searchFormContainer.removeClass("show");

    if ($(window).width() >= 991) {
      $linkContainer.removeClass("hide");
    }

    $searchButton.removeClass("hide");
  });

  $(window).on("scroll", function () {
    const $header = $(".main-header");

    if ($(window).scrollTop() > 10) {
      $header.addClass("scrolled");
    } else {
      $header.removeClass("scrolled");
    }
  });

  $("#bannerContactButton").on("click", function () {
    $("#contactContent").toggleClass("show");
    $(this).toggleClass("move-left");
  });

  // Prevents Bootstrap from closing the dropdown
  $("#solutionTabs a, #servicesTabs a, .dropdown-menu").on(
    "click",
    function (event) {
      event.stopPropagation();
    }
  );

  // overflow of body hidden when navbar collapse
  $(".navbar-toggler").click(function () {
    if ($(".navbar-collapse").hasClass("show")) {
      $("body").css("overflow", "auto");
    } else {
      $("body").css("overflow", "hidden");
    }
  });

  // Close the navbar and restore scrolling when clicking outside
  $(document).click(function (event) {
    if (!$(event.target).closest(".navbar-collapse, .navbar-toggler").length) {
      $(".navbar-collapse").removeClass("show");
      $("body").css("overflow", "auto");
    }
  });

  $(".close-navbar-button").click(function () {
    $(".navbar-collapse").removeClass("show");
    $("body").css("overflow", "auto");
  });

  // dont want to show first tab by default
  function updateTabsVisibility() {
    if ($(window).width() < 991) {
      $("#tab1, #tab5").removeClass("show active");
      $("#tab1-tab, #tab5-tab").removeClass("active");
    } else {
      $("#tab1, #tab5").addClass("show active");
      $("#tab1-tab, #tab5-tab").addClass("active");
    }
  }

  // Run on load and resize
  updateTabsVisibility();
  $(window).resize(updateTabsVisibility);

  $("#closeSolutions").on("click", function () {
    $("#solutionsDropdown").dropdown("hide");
  });

  $("#closeServices").on("click", function () {
    $("#servicesDropdown").dropdown("hide");
  });

  // Handle tab clicks - Ensure only one active tab at a time
  $("#solutionTabs .nav-link, #servicesTabs .nav-link").on(
    "click",
    function (e) {
      if ($(window).width() < 991) {
        e.preventDefault();
        var tabId = $(this).attr("href");

        // **FIX: Remove active class from all tabs within the same dropdown**
        $(this).closest(".nav").find(".nav-link").removeClass("active");
        $(this)
          .closest(".tab-content")
          .find(".tab-pane")
          .removeClass("show active");

        // Show the clicked tab
        $(tabId).addClass("show active");
        $(this).addClass("active");
      }
    }
  );

  // Handle close button inside tabs
  $(".close-tab-button").on("click", function () {
    var tabId = "#" + $(this).closest(".tab-pane").attr("id");

    // Hide the tab
    $(tabId).removeClass("show active");
    $(".tab-link[href='" + tabId + "']").removeClass("active");
  });

  // Reset all tabs when resizing back to desktop view
  $(window).resize(function () {
    if ($(window).width() >= 991) {
      // $(".tab-pane").removeClass("show active");
      // $(".nav-link").removeClass("active");

      // Restore the first tab
      $("#tab1, #tab5").addClass("show active");
      $("#tab1-tab, #tab5-tab").addClass("active");
    }
  });

  // Smooth Scroll to Top Button
  $(".top-btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

});

$(document).ready(function () {
  // Handle Tab Events
  function handleTabEvent() {
    let windowWidth = $(window).width();
    
    $('.tab-container .tab-link').off('mouseenter click');
    
    if (windowWidth >= 992) {
      $('.tab-container .tab-link').on('mouseenter click', function () {
        $(this).tab('show');
      });
    } else {
      $('.tab-container .tab-link').on('click', function () {
        $(this).tab('show');
      });
    }
  }

  handleTabEvent();
  $(window).resize(handleTabEvent);

  // Handle Solution Dropdown using jQuery
  function setupDropdowns() {
    $('.solution-dropdown').each(function () {
      var $dropdown = $(this),
          $toggle   = $dropdown.find('.dropdown-toggle'),
          $menu     = $dropdown.find('.dropdown-menu'),
          openTimer,
          closeTimer;
      
      // Remove previously attached event listeners
      $toggle.off('click');
      $dropdown.off('mouseenter mouseleave');
      $menu.off('mouseenter mouseleave');

      if ($(window).width() > 991) {
        // Desktop - Hover Behavior
        $dropdown.on('mouseenter', function () {
          clearTimeout(closeTimer);
          openTimer = setTimeout(function () {
            $menu.addClass('show');
            $toggle.addClass('active');
          }, 300);
        }).on('mouseleave', function () {
          clearTimeout(openTimer);
          closeTimer = setTimeout(function () {
            $menu.removeClass('show');
            $toggle.removeClass('active');
          }, 500);
        });
        
        $menu.on('mouseenter', function () {
          clearTimeout(closeTimer);
        }).on('mouseleave', function () {
          closeTimer = setTimeout(function () {
            $menu.removeClass('show');
            $toggle.removeClass('active');
          }, 500);
        });
      } else {
        // Mobile - Click Behavior (Bootstrap default)
        $toggle.on('click', function (event) {
          event.preventDefault();
          $menu.toggleClass('show');
          $toggle.toggleClass('active');
        });
      }
    });
  }

  // Initial setup
  setupDropdowns();

  // Re-apply event listeners on window resize
  $(window).on('resize', setupDropdowns);
});




