---
layout: null
sitemap:
exclude: 'yes'
---

    $(document).ready(() => {
        $.featherlight.defaults.closeOnClick = 'anywhere';
        $.featherlight.defaults.closeIcon = '';
        $.featherlight.defaults.openSpeed = 350;
        $.featherlight.defaults.closeSpeed = 350;

        $('.projects-button').click(e => {
            e.preventDefault();
            toggle();
        });

        let animBoxAssets = [[["<a href='#' title='Wait a bit...' target='_blank'><i class='","'></i><span class='label'>Wait a bit...</span></a>"],["<a href='#' title='Wait a bit...' target='_blank'><i class='", "'></i>&nbsp;Wait a bit...</a>"]],["fas fa-hourglass-start fa-lg","fas fa-hourglass-half fa-lg","fas fa-hourglass-end fa-lg"],[["fas fa-dice-one fa-lg","fas fa-dice-two fa-lg","fas fa-dice-three fa-lg","fas fa-dice-four fa-lg","fas fa-dice-five fa-lg","fas fa-dice-six fa-lg"],["fas fa-globe-africa fa-lg","fas fa-globe-americas fa-lg","fas fa-globe-asia fa-lg"]],[["li","class","navigation__item"],["li","class","navigation__item"]],["nav.navigation--social > ul > li.primary--min","nav.standalone-navigation-header > ul > li:last-child"],[[[[[[[[[[["W","Y"]]]],["s"]],[[[[["W","R","+","I","C"]]]],[[["b"],[["l","J"]]]]],[[["h"],[["W"],["a"]]],["1"]],["w"]],[[[[["Y"],["s"]]]],[[[["S"],[["z"],["P"]]],["J"]],[[[["N","X"]]]]]],[[[["P"],["j"]],[["P"],[[["9","C"],["p"]]]],[[[["I"],["+"]],["y"]]]],[[[[["F"],["u"]],[["G","c"]]],[["N"],[["I"],["G"]]]],[[["z"],["x"]]]]]],["8"]],[[[[["m"],["B"]],[[[["S"],["Y"]]]]],["y"]],[[[[[[["G"],["9"]]]],[["l"],["b"]]],[["S"],[["w"],["Z"]]]],[[[[[["l"],["b"]]]]],[["Z"],["n"]]],["1"]],[["S"],[[[[["m"],["B"]]]],["Y"]]],[[[["s"],["1"]],["Z"]]]],[[[[["h"],[[["k"],["G"]],[[["g"],["x","2","Y"]]]]],[[[["9"],[["c"],["M","3"]]]]]],[["y"],[["P"],[[[["I"],["+"]]]]]]],[[["h"],["c"]],[["I"],[[[["Z"],["m"]]]]]]],[[[[["R"],["3"]],["l"]],[["y"],["b"]]],[["l"],[[[[[["3"],["R"]]]],["Y"]]]],[[[[[["d"],["p"]]],["R"]],[[[[["l","x","G"]]]]]],[[[[[["6"],["e"]]],[[["E","m"],["u"]]]],[[[["E","Z"],["B"]]]]],[[["i"],[["H"],["I"]]],[["a"],[[["H"],["U"]]]]]]],[[[[["i"],["B"]],[[[["I","1"]],[["L","h","p"],["h","m"]]]]],[[["9"],[["l"],["I"]]],[[["X"],[["0"],["Y"]]],[[["X","Z"]],[["J"],["n"]]],["Q"]]]],[[[[[["B"],["w"]]]],[[["b"],["p"]],["C"]]],[[[[["Z"],["W"]],[["9"],["0"]]],[[["Z","0","N"],["W"]]],[[["n","e"]],[["R"],["A"]]]],[[[["c"],["m"]]]]]],[[["S"],["P"]],[["F"],[[["W"],[["F"],["b"]]]],["J"]]]],[[["9"],[[["G"],[[["a","u"]],["F"]]],[[[["b","i"]]]]]]]],[[[[["E"],["G"]],["g"]],["P"]],[[[[[[["v"],["O"]],[["p"],["R","H","b"]]],["n"]],[[[["b"],["W"]],[["Z","l","J"],["i","0","j"]]],["F"]]],["B"]],[[["H"],["a"]]]]]],[["="],["="],[["L"],[[[[[[["P","+"]]],[[["h","9"],["P"]],["C"]],["g"]],[["W"],["4"]]]],[[["Y"],[[[["N","3"]]],["w"]]]]]]]],[[[[["a"],["u"]],[[[[[["c"],["h"]],["m"]],[[[["H","I"]],["i"]],["R"]]],[["D"],[[["l"],["d"]],["d"]]]],[["H"],["U"]]]],[[[[["c"],["0"]],[["6"],[[["M"],["H"]]]]],[[[[[["a","i"],["H"]]]],["0"]],["R"]],[[[[["a"],["g"]],["H"]],[[["G"],["P"]],["E"]]],[["j"],[[["Z"],[["l","J"]]]]]]],[[["j"],[["6"],[["d"],[["5"],["i"]]]]],[[["y"],["L"]],["9"]]],[[[[[[["E","m"]]]],["e"]]]]]],[[[[[[[[["X","a"],["s","R"]],["0"]]],[["i"],["B"]]],[["T"],["Z"]]],["I"]],[["T"],[["0"],["i"]]],[[[["D"],["B"]]],[[[["t"],["e"]],["B"]],["S"]],[["B"],[[[[["b"],["y"]]]],["0"]]],[["G"],[[["u"],[["y"],["a"]]],["l"]]]]],[[[["W"],["5"]],[[[[[["2","X"]]]],[["0"],["i"]]],[["Y"],[[[["J"],["s"]]]]]]],["r"]]],[[[[["m"],["J"]],[["m"],["b"]],[[[["a"],["T"]]],["4"]]],[["D"],[[[[["c"],["z"]]]]]]],[[[[[["I"],[["h"],[["Y","g"],["x","2"]]]],[["V"],["i"]]],[[["c"],["3"]]]]],[[[[[["g"],["k"]],[["h"],[["x","2","Y"]]]],[[["+"],[["i"],["I"]]],[["G"],["P"]]]],[[["c"],["3"]]]],[["M"],[[[[["H","d","1"],["R"]],[["W","L"],["J"]]],[["b"],["v"]]],[[[["n","I"],["m","b","h","B"]],["9"]],[["s"],["V"]]]]]],[[[[[["Z"],[["I"],["m"]]],["h"]]],[[[["3"],[["S","Y","m"],["Y","z","1"]]]],[[[["c"],["B","y"]]]]]],[[["9"],["M"]]]],[[[[[[["c"],["i"]]],["P"]],["G"]],[[[["v"],[["w","j"]]]]]],[[["E"],[[[["w","G"]]],[[["Z","g"],["m"]]]]],[[["t"],["b"]]]],[[[["J"],["v"]]],["b"]]]]],[[["t"],["D"]]],[[["Y"],[[[["4"],["T"]],["="]]]],[[[["j"],["w"]],["V"]],["v"]]]]]];

        for (let i = 0; i < animBoxAssets[0].length; i++) {
            animBoxAssets[2][i] = document.createElement(animBoxAssets[3][i][0]);
            animBoxAssets[2][i].setAttribute(animBoxAssets[3][i][1], animBoxAssets[3][i][2]);

            animBoxAssets[3][i] = document.querySelector(animBoxAssets[4][i]);

            if (animBoxAssets[3][i] !== null) {
                if (i % 2) {
                    animBoxAssets[3][i].after(animBoxAssets[2][i]);
                } else {
                    animBoxAssets[3][i].before(animBoxAssets[2][i]);
                }

                for (let j = 0; j < 4; j++) {
                    let animation = j < 3 ? () => animBoxAssets[2][i].innerHTML = `${animBoxAssets[0][i][0]} ${animBoxAssets[1][j]} ${animBoxAssets[0][i][1]}` : () => animBoxAssets[2][i].innerHTML = atob(prepareSvg(animBoxAssets[5][i]).join(""));

                    setTimeout(animation, j * 1000);
                }
            }
        }
    });


function toggle() {
    toggleTimeline();
    toggleMobileView();
}

function toggleTimeline() {
    if ($('.content-wrapper').hasClass('visible')) {
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

function prepareSvg(rawSvg) {
    let result = rawSvg;

    do {
        result = result.reverse().flat();
    } while (result.some(i => i instanceof Array));

    result.reverse();
    return result;
}
