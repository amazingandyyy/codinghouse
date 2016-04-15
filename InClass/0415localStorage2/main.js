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
        var ob = {};
    }
    console.log(ob);
    console.log(localStorage);
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

    $('input[placeholder="key"]').focus();

    var str = JSON.stringify(ob, null, 2); // make json into string
    $('.json').text(str);
    read(key, value);
    $('input').val('');
}

function read(key, value) {
    console.log(localStorage);

    localStorage.key = key;
    localStorage.value = value;
}
//
// function updateJSONDisplay() {
//     var str = JSON.stringify(ob, null, 2);
//     $('.json').text(str);
// }
