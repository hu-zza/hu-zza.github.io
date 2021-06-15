---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
    $.featherlight.defaults.closeOnClick = 'anywhere';
    $.featherlight.defaults.closeIcon = '';
    $.featherlight.defaults.openSpeed = 350;
    $.featherlight.defaults.closeSpeed = 350;

    $('.projects-button').click(function (e) {
        e.preventDefault();
        toggle();
    });

    waitTextStart = "<a href='#' title='Wait a bit...' target='_blank'><i class='";

    waitTextEndSpan = "'></i><span class='label'>Wait a bit...</span></a>";

    waitTextEnd = "'></i>&nbsp;Wait a bit...</a>";

    result = [
    [ "=", "=", "g", "P", "h", "9", "C", "P", "+", "4", "W", "Y", "w", "N", "3", "L", "8", "w", "W", "a", "h", "1", "W", "R", "+", "c", "C", "b", "l", "J", "W", "Y", "s", "d", "S", "P", "z", "N", "X", "Y", "s", "N", "G", "I", "u", "F", "G", "c", "z", "x", "j", "P", "p", "9", "C", "P", "+", "c", "y", "Z", "s", "1", "S", "Y", "m", "B", "S", "Z", "w", "9", "G", "b", "l", "Z", "n", "b", "l", "1", "S", "Y", "m", "B", "y", "c", "h", "Z", "2", "J", "9", "M", "3", "c", "h", "x", "2", "Y", "g", "k", "G", "P", "+", "c", "y", "a", "u", "F", "G", "b", "i", "9", "1", "J", "9", "Q", "X", "Z", "n", "J", "X", "Y", "0", "B", "y", "J", "1", "h", "m", "L", "h", "p", "n", "e", "A", "R", "W", "Z", "0", "N", "W", "Z", "0", "9", "m", "c", "w", "B", "C", "b", "p", "F", "W", "b", "F", "d", "S", "P", "l", "x", "G", "d", "p", "R", "H", "I", "n", "U", "H", "a", "u", "E", "m", "e", "6", "B", "E", "Z", "l", "R", "3", "Y", "l", "R", "3", "b", "y", "B", "n", "O", "v", "R", "H", "b", "p", "F", "W", "b", "n", "0", "j", "Z", "l", "J", "H", "a", "g", "E", "G", "P" ],
    [ "=", "4", "T", "Y", "v", "w", "j", "V", "D", "t", "D", "c", "z", "J", "m", "b", "m", "4", "T", "a", "v", "w", "j", "P", "i", "c", "G", "b", "t", "E", "m", "Z", "g", "w", "G", "b", "v", "J", "3", "Y", "z", "1", "S", "Y", "m", "B", "y", "c", "h", "Z", "m", "I", "9", "M", "3", "c", "h", "x", "2", "Y", "g", "k", "G", "P", "+", "I", "i", "b", "v", "R", "H", "d", "1", "J", "W", "L", "s", "V", "m", "b", "h", "B", "n", "I", "9", "M", "3", "c", "h", "x", "2", "Y", "g", "I", "i", "V", "D", "B", "S", "e", "t", "B", "y", "b", "0", "B", "y", "a", "u", "l", "G", "T", "i", "0", "T", "Z", "s", "R", "X", "a", "0", "B", "i", "I", "r", "5", "W", "Y", "s", "J", "2", "X", "i", "0", "D", "d", "l", "d", "m", "c", "h", "R", "H", "I", "i", "U", "H", "a", "u", "E", "m", "e", "6", "5", "i", "d", "j", "9", "y", "L", "6", "M", "H", "c", "0", "R", "H", "a", "i", "0", "j", "Z", "l", "J", "H", "a", "g", "E", "G", "P" ]
    ];


    $("#id0").html(waitTextStart + "fas fa-hourglass-start fa-lg" + waitTextEndSpan);
    $("#id1").html(waitTextStart + "fas fa-hourglass-start fa-lg" + waitTextEnd);

    setTimeout(function() {
        $("#id0").html(waitTextStart + "fas fa-hourglass-half fa-lg" + waitTextEndSpan);
        $("#id1").html(waitTextStart + "fas fa-hourglass-half fa-lg" + waitTextEnd);
    }, 700);

    setTimeout(function() {
        $("#id0").html(waitTextStart + "fas fa-hourglass-end fa-lg" + waitTextEndSpan);
        $("#id1").html(waitTextStart + "fas fa-hourglass-end fa-lg" + waitTextEnd);
    }, 1400);

    setTimeout(function() {
        $("#id0").html(atob(result[0].reverse().join("")));
        $("#id1").html(atob(result[1].reverse().join("")));
    }, 2000);
})


function toggle() {
    toggleTimeline();
    toggleMobileView();
}

function toggleTimeline() {
    if ($('.content-wrapper').hasClass('visible')){
        $('.panel-cover').removeClass('panel-cover--collapsed');
        $('.content-wrapper').removeClass('visible');
    } else {
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.content-wrapper').addClass('visible');
    }
}

function toggleMobileView() {
    $('.btn-mobile-menu').toggleClass('visible');
    $('.cover-navigation').toggleClass('visible');
}
