---
layout: null
sitemap:
  exclude: 'yes'
---

function toggleMobileView() {
  $('.btn-mobile-menu').toggleClass('visible');
  $('.navigation-wrapper').toggleClass('visible');
}

function toggleTimeline() {
  if ($('.content-wrapper').hasClass('showing')){
    $('.content-wrapper').removeClass('animated slideInRight');
    $('.panel-cover').removeClass('panel-cover--collapsed');
    $('.panel-cover').css('max-width', '100%');
    $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {});
    $('.content-wrapper').removeClass('showing');
    return;
  }
  currentWidth = $('.panel-cover').width();
  if (currentWidth < 960) {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.content-wrapper').addClass('animated slideInRight');
  } else {
    $('.panel-cover').css('max-width', currentWidth);
    $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
  }
  $('.content-wrapper').addClass('showing');
}

$(document).ready(function () {
  $.featherlight.defaults.closeOnClick = 'anywhere';
  $.featherlight.defaults.closeIcon = '';
  $.featherlight.defaults.openSpeed = 350;
  $.featherlight.defaults.closeSpeed = 350;

  $("#id").html("<a href='#' title='Wait a sec...' target='_blank'><i class='fas fa-envelope fa-lg'></i><span class='label'>Wait a sec...</span></a>");

  setTimeout(function() {
      $("#id").html("<a href='mailto:protected@zza.hu' title='Email protected@zza.hu' target='_blank'><i class='fas fa-envelope fa-lg'></i><span class='label'>Email</span></a>");
  }, 1000);


  $('.panel-button').click(function (e) {
      e.preventDefault();
      toggleTimeline();
      if (currentWidth < 960) {
          toggleMobileView();
      }
  })

})
