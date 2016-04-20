'use strict';

// document.addEventListener('DOMContentLoaded', init);
$(document).ready(init);

function init() {
    // var numButtons = document.getElementsByClassName('num');
    // for (var i = 0; i < numButtons.length; i++) {
    //     numButtons[i].addEventListener('click', numClicked);
    // }
    console.log('ddd');
    var random = (a) => Math.floor(Math.random()*a);

    console.log(random(100));

}



function numClicked() {

}


//
// $(function() {
//     init();
// });
//
// function init() {
//   var numButtons = document.getElementsByClassName('num');
//   for (var i = 0; i < numButtons.length; i++) {
//       numButtons[i].addEventListener('click', numClicked);
//   }
// };
