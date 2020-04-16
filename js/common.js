"use strict";
$(document).ready(function() {
  // smooth scroll plugin init
  $("body").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 50
  });

  // scroll-to-top button
  var $topButton = $("#js-scroll-to-top");
  $(window).on("scroll", function(e) {
    if ($(this).scrollTop() > 0) {
      $topButton.fadeIn();
    } else {
      $topButton.fadeOut();
    }
  });

  $topButton.on("click", function(e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0
      },
      600
    );
  });

  var animatedLinks = $(".animate-scroll");

  animatedLinks.on("click", function(e) {
    e.preventDefault();
    var sectionId = e.target.hash;
    var sectionPos = sectionId ? $(sectionId).offset().top : 0;
    $("body,html").animate(
      {
        scrollTop: sectionPos
      },
      600
    );
  });

  // responsive mobile menu
  $("#js-toggle-menu").on("click", function(e) {
    e.preventDefault();
    $(".top-navigation__menu").slideToggle();
    $(".list-submenu").slideUp();
  });

  $(".list-top-menu__item_has-submenu > .list-top-menu__link").on(
    "click",
    function(e) {
      e.preventDefault();
      if ($(window).width() < 992) {
        var $submenu = $(this).next(".list-submenu");
        $(".list-submenu").slideUp();
        if ($submenu.is(":visible")) {
          $submenu.slideUp();
        } else {
          $submenu.slideDown();
        }
      }
    }
  );
  // load all main plugins after all images are loaded
  $("body")
    .imagesLoaded({ background: true })
    .always(function(e) {
      // parallax init
      $(".js-jarallax_type_1").jarallax({
        type: "scroll",
        speed: 0.4
      });

      $(".js-jarallax_type_2").jarallax({
        type: "scroll",
        speed: 0.9
      });

      // slider intro
      var sliderIntro = new Swiper(".js-slider-intro", {
        onlyExternal: true,
        loop: true,
        speed: 400,
        prevButton: ".slider-intro__prev",
        nextButton: ".slider-intro__next"
      });

      // slider experts
      var sliderExperts = new Swiper(".js-slider-experts", {
        onlyExternal: true,
        loop: true,
        speed: 400,
        prevButton: ".slider-experts__prev",
        nextButton: ".slider-experts__next"
      });

      // slider testimonials
      var sliderTestimonials = new Swiper(".js-slider-testimonials", {
        onlyExternal: true,
        loop: true,
        speed: 400,
        prevButton: ".slider-testimonials__prev",
        nextButton: ".slider-testimonials__next",
        spaceBetween: 30,
        slidesPerView: 3,
        autoHeight: true,
        breakpoints: {
          1200: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 1
          }
        }
      });

      // slider testimonials 2
      var sliderTestimonials2 = new Swiper(".js-slider-testimonials-2", {
        onlyExternal: true,
        loop: true,
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 2,
        autoHeight: true,
        pagination: ".slider-testimonials-2__pagination",
        paginationClickable: true,
        bulletClass: "slider-testimonials-2__bullet",
        bulletActiveClass: "slider-testimonials-2__bullet_active",
        paginationModifierClass: "slider-testimonials-2__pagination-",
        breakpoints: {
          992: {
            slidesPerView: 1
          }
        }
      });

      // slider team
      var sliderTeam = new Swiper(".js-slider-team", {
        onlyExternal: true,
        loop: true,
        speed: 400,
        prevButton: ".slider-team__prev",
        nextButton: ".slider-team__next",
        spaceBetween: 30,
        slidesPerView: 4,
        autoHeight: true,
        breakpoints: {
          992: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 1
          }
        }
      });

      // slider gallery
      var sliderGallery = new Swiper(".js-slider-gallery", {
        onlyExternal: true,
        loop: true,
        speed: 400,
        autoHeight: true,
        prevButton: ".slider-gallery__prev",
        nextButton: ".slider-gallery__next"
      });

      // slider services related
      var sliderServicesRelated = new Swiper(".js-slider-services-related", {
        onlyExternal: true,
        loop: true,
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 3,
        autoHeight: true,
        prevButton: ".slider-services-related__prev",
        nextButton: ".slider-services-related__next",
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 1
          }
        }
      });

      // slider about gallery
      var sliderGalleryAbout = new Swiper(".js-slider-gallery-about", {
        onlyExternal: true,
        loop: false,
        speed: 400,
        autoHeight: true,
        spaceBetween: 30,
        slidesPerView: 4,
        prevButton: ".slider-gallery__prev",
        nextButton: ".slider-gallery__next",
        breakpoints: {
          992: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 1
          }
        }
      });

      // slider services
      var sliderServices = new Swiper(".js-slider-services", {
        onlyExternal: true,
        direction: "vertical",
        speed: 400,
        height: 370,
        centeredSlides: true,
        grabCursor: true
      });

      // slider services controls
      var sliderServicesControls = new Swiper(".js-slider-services-controls", {
        onlyExternal: true,
        direction: "vertical",
        speed: 400,
        height: 370,
        slidesPerView: 6,
        centeredSlides: true,
        slideToClickedSlide: true,
        prevButton: ".slider-services-controls__prev",
        nextButton: ".slider-services-controls__next"
      });

      // tie 2 sliders
      sliderServices.params.control = sliderServicesControls;
      sliderServicesControls.params.control = sliderServices;

      // masonry grid
      var $gridWorks = $(".js-masonry-grid-works");
      $($gridWorks)
        .masonry({
          itemSelector: ".js-masonry-grid-works__item",
          columnWidth: ".js-masonry-grid-works__sizer",
          percentPosition: true
        })
        .isotope();

      // isotope filtering panel
      $(".js-masonry-grid-works-filter").on("click", "a", function(e) {
        e.preventDefault();

        var filterValue = $(this).attr("data-filter");

        $(".js-masonry-grid-works-filter")
          .find(".list-masonry-grid-works-filter__link_active")
          .removeClass("list-masonry-grid-works-filter__link_active");
        $(this).addClass("list-masonry-grid-works-filter__link_active");

        $($gridWorks).isotope({
          filter: filterValue
        });
      });

      // lightbox gallery
      $(".js-popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
      });
    });

  // better hover on mobile devices
  if (Modernizr.touch) {
    // run the forEach on each figure element
    [].slice
      .call(document.querySelectorAll("a, button"))
      .forEach(function(el, i) {
        // check if the user moves a finger
        var fingerMove = false;
        el.addEventListener("touchmove", function(e) {
          e.stopPropagation();
          fingerMove = true;
        });
        // always reset fingerMove to false on touch start
        el.addEventListener("touchstart", function(e) {
          e.stopPropagation();
          fingerMove = false;
        });
      });
  }

  // equalize height of service blocks
  $(".js-figure-serivce-equalheight").equalHeights();

  // equalize height of team members
  $(".js-team-member-equalheight").equalHeights();

  // google map locations
  if ($("#js-google-map-locations").length) {
    // overlay google map with locations
    var mapData = [
      {
        lat: 45.465829,
        lon: 9.184954,
        title: "Title A1",
        html: '<p class="p">Cleaning Center #1</p>',
        icon: "img/icons/map-marker.png"
      },
      {
        lat: 45.465109,
        lon: 9.184197,
        title: "Title A1",
        html: '<p class="p">Cleaning Center #2</p>',
        icon: "img/icons/map-marker.png"
      },
      {
        lat: 45.46529,
        lon: 9.185679,
        title: "Title A1",
        html: '<p class="p">Cleaning Center #3</p>',
        icon: "img/icons/map-marker.png"
      },
      {
        lat: 45.463912,
        lon: 9.18271,
        title: "Title A1",
        html: '<p class="p">Cleaning Center #4</p>',
        icon: "img/icons/map-marker.png"
      },
      {
        lat: 45.463015,
        lon: 9.182929,
        title: "Title A1",
        html: '<p class="p">Cleaning Center #5</p>',
        icon: "img/icons/map-marker.png"
      },
      {
        lat: 45.464991,
        lon: 9.18205,
        title: "Title A1",
        html: '<p class="p">Cleaning Center #6</p>',
        icon: "img/icons/map-marker.png"
      },
      {
        lat: 45.463991,
        lon: 9.18705,
        title: "Title A1",
        html: '<p class="p">Cleaning Center #6</p>',
        icon: "img/icons/map-marker.png"
      }
    ];

    var googleMap = new Maplace({
      map_div: "#js-google-map-locations",
      locations: mapData,
      controls_type: "list",
      controls_on_map: false
    }).Load();

    // toggle map button
    $("#js-expand-map-link").on("click", function(e) {
      e.preventDefault();
      $(this).toggleClass("expand-map-link_expanded");
      $("#js-overlay-map").toggleClass("overlay-map_expanded");
    });
  }

  // google map contacts
  if ($("#js-google-map-contacts").length) {
    var googleMap = new Maplace({
      map_div: "#js-google-map-contacts",
      locations: [
        {
          lat: 47.269438,
          lon: 7.950062,
          title: "Title A1",
          html: '<p class="p">Zmyslowski-Reinigungen</p>',
          icon: "img/icons/map-marker-2.png",
          zoom: 15
        }
      ],
      controls_type: "list",
      controls_on_map: true,
      styles: {
        Night: [
          {
            featureType: "all",
            stylers: [{ invert_lightness: "true" }]
          }
        ],
        Greyscale: [
          {
            featureType: "all",
            stylers: [{ saturation: -100 }, { gamma: 0.8 }]
          }
        ]
      },
      map_options: {
        scrollwheel: false
      }
    }).Load();
  }

  // tabs (google map locations forms selector)
  $.ionTabs("#js-overlay-map__content", {
    type: "none"
  });

  // services tabs
  $.ionTabs("#js-services-tabs", {
    type: "none"
  });
  // estimate form toggle
  $("#js-toggle-estimate").on("click", function(e) {
    $("#js-form-estimate").slideToggle();
  });

  // animated skillbars
  function animateSkillbars(skillbar, duration, easing) {
    $(skillbar).waypoint(
      function(direction) {
        var percentLabel = $(skillbar).find(".skillbar__percentage");
        var percentValue = parseInt(percentLabel.data("skillbar-percent"), 10);
        var progressBar = $(skillbar).find(".skillbar__progress-bar");

        $(progressBar)
          .find(".skillbar__progress-bar-active")
          .css({
            transform: "translateX(" + percentValue + "%)"
          });

        $({ countNum: 0 })
          .stop()
          .animate(
            { countNum: percentValue },
            {
              duration: duration,
              easing: easing,
              step: function() {
                percentLabel.text(parseInt(this.countNum, 10) + 1 + "%");
              },
              complete: function() {
                stop();
                percentValue = 0;
              }
            }
          );
        this.destroy();
      },
      {
        offset: "100%"
      }
    );
  }

  // skillbars animations on scroll
  $(".js-skillbar").each(function() {
    animateSkillbars(this, 3000, "easeInOutCubic");
  });

  // animated counters
  $(".js-counterup").counterUp({
    delay: 10,
    time: 3000,
    formatter: function(n) {
      return n.replace(/,/g, ".");
    }
  });

  // animated circles
  $(".js-skillcircle").each(function(e) {
    var $element = $(this);
    $element.waypoint(
      function(direction) {
        var getPercent = $element.data("circle-percent");
        $element
          .circleProgress({
            value: getPercent / 100,
            size: 200,
            thickness: "10",
            startAngle: Math.PI * 1.5,
            animation: {
              duration: 3000,
              easing: "easeInOutCubic"
            },
            fill: "#26c9ff",
            emptyFill: "#f5f5f5"
          })
          .on("circle-animation-progress", function(event, progress) {
            var currentPercent = parseInt(getPercent * progress, 10);
            $(this)
              .find(".skillcircle__value")
              .html(currentPercent + "%");
          });
        this.destroy();
      },
      {
        offset: "100%"
      }
    );
  });

  // accordions
  $("[data-accordion]").accordion({
    transitionSpeed: 400,
    singleOpen: true
  });

  // form validation
  $(function() {
    var $inputs = $(
      "form input[required], form textarea[required], select[required]"
    );

    var displayFieldError = function($elem) {
      var $fieldRow = $elem.closest(".form-control");
      var $fieldError = $fieldRow.find(".field-error");
      if (!$fieldError.length) {
        var errorText = $elem.attr("data-error");
        var $divError = $('<div class="field-error">' + errorText + "</div>");
        $fieldRow.append($divError);
      }
    };

    var hideFieldError = function($elem) {
      var $fieldRow = $elem.closest(".form-control");
      var $fieldError = $fieldRow.find(".field-error");
      if ($fieldError.length) {
        $fieldError.remove();
      }
    };

    $inputs.on("input keyup", function() {
      var $elem = $(this);
      if (!$elem.get(0).checkValidity()) {
        $elem.addClass("error");
      } else {
        $elem.removeClass("error");
        hideFieldError($elem);
      }
    });

    $inputs.filter(":checkbox").on("click", function() {
      var $elem = $(this);
      var $row = $(this).closest(".form-control");
      if ($elem.is(":checked")) {
        $elem.removeClass("error");
        hideFieldError($elem);
      } else {
        $elem.addClass("error");
      }
    });

    var checkFieldsErrors = function($elements) {
      //ustawiamy zmienną na true. Następnie robimy pętlę po wszystkich polach
      //jeżeli któreś z pól jest błędne, przełączamy zmienną na false.
      var fieldsAreValid = true;
      $elements.each(function(i, elem) {
        var $elem = $(elem);
        if (elem.checkValidity()) {
          hideFieldError($elem);
          $elem.removeClass("error");
        } else {
          displayFieldError($elem);
          $elem.addClass("error");
          fieldsAreValid = false;
        }
      });
      return fieldsAreValid;
    };

    $(".form").on("submit", function(e) {
      e.preventDefault();

      var $form = $(this);

      if (checkFieldsErrors($inputs)) {
        var dataToSend = $form.serializeArray();
        dataToSend = dataToSend.concat(
          $form
            .find("input:checkbox:not(:checked)")
            .map(function() {
              return { name: this.name, value: this.value };
            })
            .get()
        );

        var $submit = $form.find("button:submit");
        $submit.prop("disabled", 1);
        $submit.addClass("element-is-busy");

        grecaptcha.ready(function() {
          grecaptcha
            .execute("6Leut-cUAAAAAAV3zQ21QWH-7JNn3aLwG5iqRAfm", {
              action: "homepage"
            })
            .then(function(token) {
              if (token) {
                dataToSend.push({ name: "token", value: token });
                $.ajax({
                  url: $form.attr("action"),
                  method: $form.attr("method"),
                  dataType: "json",
                  data: dataToSend,
                  success: function(ret) {
                    if (ret.errors) {
                      ret.errors.map(function(el) {
                        return '[name="' + el + '"]';
                      });
                      checkFieldsErrors($form.find(ret.errors.join(",")));
                    } else {
                      if (ret.status == "ok") {
                        $form.replaceWith(
                          '<div class="form-send-success"><h4>Die Nachricht wurde gesendet.</h4><span>Vielen Dank, dass Sie mit uns Kontakt aufgenommen haben.Wir werden uns in Kürze bei Ihnen melden.</span></div>'
                        );
                      }
                      if (ret.status == "error") {
                        $submit.after(
                          '<div class="send-error">Das Senden der Nachricht ist fehlgeschlagen</div>'
                        );
                      }
                    }
                  },
                  error: function() {
                    console.error("Es gab einen Verbindungsfehler");
                  },
                  complete: function() {
                    $submit.prop("disabled", 0);
                    $submit.removeClass("element-is-busy");
                  }
                });
              }
            });
        });
      }
    });
  });

  //tooltips
  $(document).on("click", function(e) {
    if ($(e.target).closest(".tooltip").length === 0) {
      $(".tooltip").removeClass("tooltip--show");
    }
  });

  $(".tooltip").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("tooltip--show");
  });

  var startYear = 2020;
  var presentYear = new Date().getFullYear();
  var copyrightDate =
    startYear === presentYear ? startYear : startYear + " - " + presentYear;
  $(".copyright-data").text(copyrightDate);
});
