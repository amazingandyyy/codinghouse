'use strict';
$(function() {
    initializeNameList();
    $('button.addName').click(addName);
})

function initializeNameList() {
    $('ul').empty();
    // read the names list from storage
    var nameListFromLocalStorage = JSON.parse(localStorage.names);

    // and generate <li>s
    // then append thsoe <li>s to the list
    var arr = nameListFromLocalStorage.map(function addItem(name) {
        return $('<li>').text(name);
    });
    $('.nameList').append(arr);

}

function addName() {
    var newName = $('.newName').val();
    $('.newName').val('');

    // FIVE STEP
    //read
    var namesJSON = localStorage.names;

    //parse
    var names = JSON.parse(namesJSON); //localStorage.names is string, parse it into an array;

    //modify
    names.push(newName);

    //stringify
    var newNameStr = JSON.stringify(names); //names is an array, we stringify it into an string;

    // write
    localStorage.names = newNameStr;

    var $li = $('<li>');

    console.log(localStorage.names);
    initializeNameList();

}
