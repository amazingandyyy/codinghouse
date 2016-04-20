ama'use strict';

// document.addEventListener('DOMContentLoaded', init);
$(document).ready(init);
$(document).ready(init2);
$(document).ready(init3);
$(document).ready(init4);

var random;

function init() {
    // // ErrorUncaught ReferenceError: a is not definedrandom
    //  random = () => Math.floor(Math.random()*a);
    // console.log(random());
}

function init4() {
    random = () => ~~(Math.random() * 100);
    console.log(random());
}

function init2() {
    random = (a) => Math.floor(Math.random() * a);
    console.log(random(100));
}

function init3() {
    random = function(a) {
        var res = (!a) ? ~~(Math.random() * 99) : a;
        return res;
    }
    console.log(random());
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
