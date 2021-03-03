---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.panel-button').click(function (e) {
      e.preventDefault();
    //if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    if ($('.content-wrapper').hasClass('showing')){
      $('.content-wrapper').removeClass('animated slideInRight')
      $('.panel-cover').removeClass('panel-cover--collapsed')
      $('.panel-cover').css('max-width', '100%')
      $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
      $('.content-wrapper').removeClass('showing')
      return;
    }
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
    $('.content-wrapper').addClass('showing');
  })

  $('.btn-mobile-menu').click(function () {
    if ($('.content-wrapper').hasClass('showing')){
        $('.content-wrapper').removeClass('animated slideInRight')
        $('.panel-cover').removeClass('panel-cover--collapsed')
        $('.panel-cover').css('max-width', '100%')
        $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
        $('.content-wrapper').removeClass('showing')
    } else {
        $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    }

    $('.btn-mobile-menu__icon').toggleClass('hidden')
    $('.btn-mobile-close__icon').toggleClass('hidden')
  })

  $('.navigation-wrapper .projects-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
  })
})
