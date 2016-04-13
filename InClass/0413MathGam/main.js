'use strict';

document.addEventListener('DOMContentLoaded', init);

function init() {
    var numButtons = document.getElementsByClassName('num');
    for (var i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener('click', numClicked);
    }
}



function numClicked() {

}
