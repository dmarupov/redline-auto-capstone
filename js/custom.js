/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-SETTING
-Preloader
-Scale images
-Sticky Header
-Dropdown Menu Fade
-Animated Entrances
-Accordion
-Filter accordion
-Chars Start
-Сustomization select
-Isotope filter
-Loader blocks
-Zoom Images
-Home slider
-Carousel products
-Slider numbers
-Sliders
-Active favorite label
-Animated WOW
*/



$(document).ready(function() {

  "use strict";


/////////////////////////////////////////////////////////////////
// SETTING
/////////////////////////////////////////////////////////////////

  var windowHeightfalse
  var windowWidth = $(window).width();


  var tabletWidth = 767;
  var mobileWidth = 640;


/////////////////////////////////////////////////////////////////
// Preloader
/////////////////////////////////////////////////////////////////


  var $preloader = $('#page-preloader'),
  $spinner   = $preloader.find('.spinner-loader');
  $spinner.fadeOut();
  $preloader.delay(50).fadeOut('slow');

/////////////////////////////////////////////////////////////////
// Scale images
/////////////////////////////////////////////////////////////////

  if ($('.img-scale').length) {
    $(function () { objectFitImages('.img-scale') });
  }


/////////////////////////////////////
//  Sticky Header
/////////////////////////////////////


if (windowWidth > tabletWidth) {

    var headerSticky = $(".l-theme").data("header");
    var headerTop = $(".l-theme").data("header-top");

    if (headerSticky.length) {
        $(window).on('scroll', function() {
            var winH = $(window).scrollTop();
            var $pageHeader = $('.header');
            if (winH > headerTop) {

                $('.header').addClass("animated");
                $('header').addClass("animation-done");
                $('.header').addClass("bounce");
                $pageHeader.addClass('sticky');

            } else {

                $('.header').removeClass("bounce");
                $('.header').removeClass("animated");
                $('.header').removeClass("animation-done");
                $pageHeader.removeClass('sticky');
            }
        });
    }
}



/////////////////////////////////////
//  Sticky Sidebar
/////////////////////////////////////


// $(".sticky-bar").stick_in_parent();

/////////////////////////////////////
//  Scroll Animation
/////////////////////////////////////


if ($('.scrollreveal').length) {
  window.sr = ScrollReveal({
    reset:true,
    duration: 1000,
    delay: 200
  });

  sr.reveal('.scrollreveal');
  }


//////////////////////////////
// Go to the top of the page
//////////////////////////////

  $('.js-up').on( 'click', function() {
    $('body,html').animate({scrollTop:0},1200);
  });




/////////////////////////////////////
//  Disable Mobile Animated
/////////////////////////////////////

  if (windowWidth < mobileWidth) {

    $("body").removeClass("animated-css");

  }


    $('.animated-css .animated:not(.animation-done)').waypoint(function() {

        var animation = $(this).data('animation');

        $(this).addClass('animation-done').addClass(animation);

    }, {
            triggerOnce: true,
            offset: '90%'
    });




/////////////////////////////////////////////////////////////////
// Accordion
/////////////////////////////////////////////////////////////////

  $(".btn-collapse").on('click', function () {
      $(this).parents('.panel-group').children('.panel').removeClass('panel-default');
      $(this).parents('.panel').addClass('panel-default');
      if ($(this).is(".collapsed")) {
        $('.panel-title').removeClass('panel-passive');
      }
      else {$(this).next().toggleClass('panel-passive');
    };
  });




/////////////////////////////////////
//  Chars Start
/////////////////////////////////////


  if ($('body').length) {
      $(window).on('scroll', function() {
          var winH = $(window).scrollTop();

          $('.b-list-progress').waypoint(function() {
              $('.js-chart').each(function() {
                  CharsStart();
              });
          }, {
              offset: '80%'
          });
      });
  }


  function CharsStart() {

      $('.js-chart').easyPieChart({
          barColor: false,
          trackColor: false,
          scaleColor: false,
          scaleLength: false,
          lineCap: false,
          lineWidth: false,
          size: false,
          animate: 5000,

          onStep: function(from, to, percent) {
              $(this.el).find('.js-percent').text(Math.round(percent));
          }
      });
  }




/////////////////////////////////////////////////////////////////
// Сustomization select
/////////////////////////////////////////////////////////////////

  if ($('.selectpicker').length) {
    $('.selectpicker').selectpicker({
      styleBase: '',
      style: 'ui-select'
    })
  };


////////////////////////////////////////////
// Isotope filter
///////////////////////////////////////////


  if ($('.b-gallery').length) {

    var $container = $('.b-gallery-grid');

    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    });

    // filter items when filter link is clicked
    $('.b-gallery-filter a').on( 'click', function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });

    $('.b-gallery-filter a').on( 'click', function() {
      $('.b-gallery-filter').find('.current').removeClass('current');
      $( this ).parent().addClass('current');
    });
  }



/////////////////////////////////////
// Loader blocks
/////////////////////////////////////

  $( ".js-scroll-next" ).on( "click", function() {

    var hiddenContent =  $( ".js-scroll-next + .js-scroll-content") ;

    $(".js-scroll-next").hide() ;
    hiddenContent.show() ;
    hiddenContent.addClass("animated");
    hiddenContent.addClass("animation-done");
    hiddenContent.addClass("bounceInUp");

  });

/////////////////////////////////////
//  Zoom Images
/////////////////////////////////////


  if ($("a[data-rel^='prettyPhoto']").length) {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000});
  };



/////////////////////////////////////////////////////////////////
// Accordion
/////////////////////////////////////////////////////////////////

  $(".btn-collapse").on('click', function () {
      $(this).parents('.panel-group').children('.panel').removeClass('panel-default');
      $(this).parents('.panel').addClass('panel-default');
      if ($(this).is(".collapsed")) {
        $('.panel-title').removeClass('panel-passive');
      }
      else {$(this).next().toggleClass('panel-passive');
    };
  });



////////////////////////////////////////////
// HOME SLIDER
///////////////////////////////////////////


  if ($('#main-slider').length > 0) {

      var sliderWidth = $("#main-slider").data("slider-width");
      var sliderHeigth = $("#main-slider").data("slider-height");
      var sliderArrows = $("#main-slider").data("slider-arrows");
      var sliderButtons = $("#main-slider").data("slider-buttons");

      $( '#main-slider' ).sliderPro({
          width:  sliderWidth,
          height: sliderHeigth,
          arrows: sliderArrows,
          buttons: sliderButtons,
          fade: true,
          fullScreen: true,
          touchSwipe: false,
          autoplay: false
      });
  }


////////////////////////////////////////////
// CAROUSEL PRODUCTS
///////////////////////////////////////////



  if ($('#slider-product').length) {

    // The slider being synced must be initialized first
    $('#carousel-product').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 130,
      itemMargin: 15,
      asNavFor: '#slider-product'
    });

    $('#slider-product').flexslider({
      animation: "slide",
      animationLoop: false,
      slideshow: false,
      sync: "#carousel-product"
    });
  }



/////////////////////////////////////////////////////////////////
// Slider numbers
/////////////////////////////////////////////////////////////////


  function data ( element, key ) {
    return element.getAttribute('data-' + key);
  }

  function createSlider ( slider ) {
    noUiSlider.create(slider, {
        start: [Number(data(slider, 'start')), Number(data(slider, 'end'))],
        step: Number(data(slider, 'step')) || 1,
        range: {
            'min': Number(data(slider, 'min')),
            'max': Number(data(slider, 'max')),
        },
        tooltips: true,
        connect: true,
        format: wNumb({
          decimals: 0,
          prefix: String(data(slider, 'prefix'))
        })
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll('.js-slider-numbers'), createSlider);


    /*******************************************************
     *****  SCROLL HREF  *****
     *********************************************************/




    $(".navbar .navbar-nav > li > a[href*='#']").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });






/////////////////////////////////////////////////////////////////
//   Dropdown Menu Fade
/////////////////////////////////////////////////////////////////


    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );


    $(".yamm .navbar-nav>li").hover(
        function() {
            $('.dropdown-menu', this).fadeIn("fast");
        },
        function() {
            $('.dropdown-menu', this).fadeOut("fast");
        });


    window.prettyPrint && prettyPrint();
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation();
    });



/////////////////////////////////////////////////////////////////
// Sliders
/////////////////////////////////////////////////////////////////

  var Core = {

    initialized: false,

    initialize: function() {

        if (this.initialized) return;
        this.initialized = true;

        this.build();

    },

    build: function() {

    // Owl Carousel

      this.initOwlCarousel();
    },
    initOwlCarousel: function(options) {

            $(".enable-owl-carousel").each(function(i) {
              var $owl = $(this);

              var itemsData = $owl.data('items');
              var navigationData = $owl.data('navigation');
              var paginationData = $owl.data('pagination');
              var singleItemData = $owl.data('single-item');
              var autoPlayData = $owl.data('auto-play');
              var transitionStyleData = $owl.data('transition-style');
              var mainSliderData = $owl.data('main-text-animation');
              var afterInitDelay = $owl.data('after-init-delay');
              var stopOnHoverData = $owl.data('stop-on-hover');
              var min480 = $owl.data('min480');
              var min768 = $owl.data('min768');
              var min992 = $owl.data('min992');
              var min1200 = $owl.data('min1200');

              $owl.owlCarousel({
                navigation : navigationData,
                pagination: paginationData,
                singleItem : singleItemData,
                autoPlay : autoPlayData,
                transitionStyle : transitionStyleData,
                stopOnHover: stopOnHoverData,
                navigationText : ["<i></i>","<i></i>"],
                items: itemsData,
                itemsCustom:[
                        [0, 1],
                        [465, min480],
                        [750, min768],
                        [975, min992],
                        [1185, min1200]
                ],
                afterInit: function(elem){
                      if(mainSliderData){
                          setTimeout(function(){
                              $('.main-slider_zoomIn').css('visibility','visible').removeClass('zoomIn').addClass('zoomIn');
                              $('.main-slider_fadeInLeft').css('visibility','visible').removeClass('fadeInLeft').addClass('fadeInLeft');
                              $('.main-slider_fadeInLeftBig').css('visibility','visible').removeClass('fadeInLeftBig').addClass('fadeInLeftBig');
                              $('.main-slider_fadeInRightBig').css('visibility','visible').removeClass('fadeInRightBig').addClass('fadeInRightBig');
                          }, afterInitDelay);
                        }
                },
                beforeMove: function(elem){
                  if(mainSliderData){
                      $('.main-slider_zoomIn').css('visibility','hidden').removeClass('zoomIn');
                      $('.main-slider_slideInUp').css('visibility','hidden').removeClass('slideInUp');
                      $('.main-slider_fadeInLeft').css('visibility','hidden').removeClass('fadeInLeft');
                      $('.main-slider_fadeInRight').css('visibility','hidden').removeClass('fadeInRight');
                      $('.main-slider_fadeInLeftBig').css('visibility','hidden').removeClass('fadeInLeftBig');
                      $('.main-slider_fadeInRightBig').css('visibility','hidden').removeClass('fadeInRightBig');
                  }
                },
                afterMove: sliderContentAnimate,
                afterUpdate: sliderContentAnimate,
              });
            });
      function sliderContentAnimate(elem){
        var $elem = elem;
        var afterMoveDelay = $elem.data('after-move-delay');
        var mainSliderData = $elem.data('main-text-animation');
        if(mainSliderData){
                setTimeout(function(){
                        $('.main-slider_zoomIn').css('visibility','visible').addClass('zoomIn');
                        $('.main-slider_slideInUp').css('visibility','visible').addClass('slideInUp');
                        $('.main-slider_fadeInLeft').css('visibility','visible').addClass('fadeInLeft');
                        $('.main-slider_fadeInRight').css('visibility','visible').addClass('fadeInRight');
                        $('.main-slider_fadeInLeftBig').css('visibility','visible').addClass('fadeInLeftBig');
                        $('.main-slider_fadeInRightBig').css('visibility','visible').addClass('fadeInRightBig');
                }, afterMoveDelay);
        }
      }
    },

  };

  Core.initialize();



/////////////////////////////////////////////////////////////////
// Active favorite label
/////////////////////////////////////////////////////////////////

  $('.js-favorite').on('click', function () {
    $(this).toggleClass('fa-star-o fa-star');
  })



////////////////////////////////////////////
// View catalog
///////////////////////////////////////////


  $('.btns-switch__item').on( 'click', function() {
    $('.btns-switch').find('.active').removeClass('active');
    $( this ).addClass('active');
  });

  $('.js-view-th').on( 'click', function() {
    $('.b-goods-group').removeClass('b-goods-group_list');
  });

  $('.js-view-list').on( 'click', function() {
    $('.b-goods-group').addClass('b-goods-group_list');
  });

});


/////////////////////////////////////////////////////////////////
// Animated WOW
/////////////////////////////////////////////////////////////////
// new WOW().init();
