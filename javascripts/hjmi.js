var init;

init = function () {
  var setHomeBannerHeight;

  // Collapse navbar on scroll
  function collapseNavbar() {
    if ($(".navbar-hjmi").offset().top > 450) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  }
  $(window).scroll(collapseNavbar);

  $(function () {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
      $('.navbar-toggle:visible').click();
    }
  });

  // Set header height
  // setHomeBannerHeight = function(){
  //   var homeHeight= $(window).height();
  //   $('#header').height(homeHeight);
  // }
  // setHomeBannerHeight();
};


$(document).ready(function () {
  init();
});
