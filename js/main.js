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

        let animBoxAssets = [[["<a href='#' title='Wait a bit...' target='_blank'><i class='","'></i><span class='label'>Wait a bit...</span></a>"],["<a href='#' title='Wait a bit...' target='_blank'><i class='", "'></i>&nbsp;Wait a bit...</a>"]],["fas fa-hourglass-start fa-lg","fas fa-hourglass-half fa-lg","fas fa-hourglass-end fa-lg"],[["fas fa-dice-one fa-lg","fas fa-dice-two fa-lg","fas fa-dice-three fa-lg","fas fa-dice-four fa-lg","fas fa-dice-five fa-lg","fas fa-dice-six fa-lg"],["fas fa-globe-africa fa-lg","fas fa-globe-americas fa-lg","fas fa-globe-asia fa-lg"]],[["li","class","navigation__item"],["li","class","navigation__item"]],["nav.navigation--social > ul > li.primary--min","nav.standalone-navigation-header > ul > li:last-child"],[[[[[[[[[[["W","Y"]]]],["s"]],[[[[["W","R","+","I","C"]]]],[[["b"],[["l","J"]]]]],[[["h"],[["W"],["a"]]],["1"]],["w"]],[[[[["Y"],["s"]]]],[[[["S"],[["z"],["P"]]],["J"]],[[[["N","X"]]]]]],[[[["P"],["j"]],[["P"],[[["9","C"],["p"]]]],[[[["I"],["+"]],["y"]]]],[[[[["F"],["u"]],[["G","c"]]],[["N"],[["I"],["G"]]]],[[["z"],["x"]]]]]],["8"]],[[[[["m"],["B"]],[[[["S"],["Y"]]]]],["y"]],[[[[[[["G"],["9"]]]],[["l"],["b"]]],[["S"],[["w"],["Z"]]]],[[[[[["l"],["b"]]]]],[["Z"],["n"]]],["1"]],[["S"],[[[[["m"],["B"]]]],["Y"]]],[[[["s"],["1"]],["Z"]]]],[[[[["h"],[[["k"],["G"]],[[["g"],["x","2","Y"]]]]],[[[["9"],[["c"],["M","3"]]]]]],[["y"],[["P"],[[[["I"],["+"]]]]]]],[[["h"],["c"]],[["I"],[[[["Z"],["m"]]]]]]],[[[[["R"],["3"]],["l"]],[["y"],["b"]]],[["l"],[[[[[["3"],["R"]]]],["Y"]]]],[[[[[["d"],["p"]]],["R"]],[[[[["l","x","G"]]]]]],[[[[[["6"],["e"]]],[[["E","m"],["u"]]]],[[[["E","Z"],["B"]]]]],[[["i"],[["H"],["I"]]],[["a"],[[["H"],["U"]]]]]]],[[[[["i"],["B"]],[[[["I","1"]],[["L","h","p"],["h","m"]]]]],[[["9"],[["l"],["I"]]],[[["X"],[["0"],["Y"]]],[[["X","Z"]],[["J"],["n"]]],["Q"]]]],[[[[[["B"],["w"]]]],[[["b"],["p"]],["C"]]],[[[[["Z"],["W"]],[["9"],["0"]]],[[["Z","0","N"],["W"]]],[[["n","e"]],[["R"],["A"]]]],[[[["c"],["m"]]]]]],[[["S"],["P"]],[["F"],[[["W"],[["F"],["b"]]]],["J"]]]],[[["9"],[[["G"],[[["a","u"]],["F"]]],[[[["b","i"]]]]]]]],[[[[["E"],["G"]],["g"]],["P"]],[[[[[[["v"],["O"]],[["p"],["R","H","b"]]],["n"]],[[[["b"],["W"]],[["Z","l","J"],["i","0","j"]]],["F"]]],["B"]],[[["H"],["a"]]]]]],[["="],["="],[["L"],[[[[[[["P","+"]]],[[["h","9"],["P"]],["C"]],["g"]],[["W"],["4"]]]],[[["Y"],[[[["N","3"]]],["w"]]]]]]]],[[[[[[[[[["a","g"]]],["H"]],["E"]]]],[[[["0"],["j"]],[[["a"],["H"]],["i"]]],[[[[["Z"],[["l","J"]]]]]]],[[[[[[["R"],["0"]]]]],[["H"],["c"]]]],[[[["e"],["6"]],["m"]],[[[["y"],["9"]],[[["L"],["6"]]]]],["M"]]],[[["G"],["P"]]]],[[[["Y"],["f"]],["m"]],[[[[[[[["o","d"]],[["M"],["H"]]],["b"]],["y"]],["2"]],[["y"],["U"]],[[[["E"],[[["a","u"]]]]],[[[["v"],["U"]],[[["V","3"],["b","k"]],["c"]]],["H"]]]],[[[[[["y"],[["g","I","S","a"],["F","G","d"]]],[["2"],["Z"]]],["t"]]],["F"]],[[[["S"],[[[["P","0"]]]]],["J"]],["V"]]]],[[[[[["h"],["x"]]]],[[["b"],["m"]]]]],[[[[[[["B"],[["F"],[["j"],["G","b"]]]],[[["S"],["a"]]]],["z"]],[[["4"],[["u"],[[["j","I"]]]]],["8"]]],[["z"],["c"]],[[["Z"],["m"]],[[["i"],["0"]]]]],[[[["Y"],[["0"],[[[["V","n"]]]]]],[[[[["w"],[["u"],["W","Z"]]],["t"]]]]],[[[[[[["9","G"]]]]]],["d"]]],[[[[[["I"],["H"]],[[["i"],["s"]]]],[[[[["r","5","W","a","M","J","S"],["H","I"]],[["P","l","x"]]]],[[[["d","p"]],["R"]],["G"]]],[[["G"],["1"]],[[[["I","v","R"]]]]]]],[["F"],[[[["c"],[["0"],["z"]]],[["F"],["z"]]],[["G"],[[["c"],["i"]]]]],[[[["W"],[[["j","B"],["b"]],[["I"],["i"]]]],[[[["N","E"]],[["I","5"]]]]],["G"]]]]],[[[[[["N"],["X"]],[["m"],[[["c"],["j"]]]]],[[[[[["h","Z"]]]]],["L"]]]],[[["G"],[[["z"],["F"]],["I"]]]]],[[[[[[[["b"],["s"]]]]]],[[[[["C"],["B"]]],["m"]]]],["9"]],[[[[[["I"],["y"]],[[["9"],["p"]],[["+"],[[["P"],["C"]]]]]]],[[[[["9"],[[["g","P","h"]]]],[[[["N"],["W"]],[["N"],["0","O","w"]],["n"]],[["C"],["P"]]]],[]],[[["u"],[["P"],[[["i"],["Z"]]]]],["Y"]]]],[[["S"],["Y"]],[["Z"],[[["s"],["1"]]]]]]]]];

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
