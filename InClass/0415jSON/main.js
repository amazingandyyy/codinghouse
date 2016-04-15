'use strict';

// var ob = {};

$(function() {
    $('form').submit(formSubmitted);
});

function formSubmitted(e) {
    var i;
    var obJSON = $('.json').text() || '{}';
    try {
        var ob = JSON.parse(obJSON); //parse string into json
    } catch (err) {
        console.log('err:', err);
    }

    e.preventDefault();
    var key = $('.key').val();
    var value = $('.value').val();

    if (!ob[key]) {
        ob[key] = value;
    } else {
        i++;
        ob[key + 'new'] = value;
    }

    // updateJSONDisplay();

    console.log(ob);
    $('input').val('');
    $('input[placeholder="key"]').focus();

    var str = JSON.stringify(ob, null, 2); // make json into string
    $('.json').text(str);
}
//
// function updateJSONDisplay() {
//     var str = JSON.stringify(ob, null, 2);
//     $('.json').text(str);
// }
