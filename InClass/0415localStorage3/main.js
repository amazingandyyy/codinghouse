'use strict';



$(function() {
    initializeNameList();
    $('button.addName').click(addName);
    $('.nameList').on('dblclick', 'li.name', removeName) //storage(not apply) to the parent element

    // $('li.name').dblclick(removeName);
})

function initializeNameList() {
    var names = NamesStorage.get();
    var $lis = names.map(name => $('<li>').addClass('name').text(name));

    // var $lis = NamesStorage.get().map(function(name) {
    //     return $('<li>').addClass('name').text(name);
    // });


    // read the names list from storage

    // and generate <li>s
    // then append thsoe <li>s to the list

    $('.nameList').empty().prepend($lis);

}

function removeName(event) {
  //Create, read, update and delete 
    var deleteTarget = $(this).text();
    var theArr = NamesStorage.get();

    var index = theArr.indexOf(deleteTarget);
    theArr.splice(index, 1);

    NamesStorage.write(theArr);
    initializeNameList();
}

var NamesStorage = {
    // R+P
    get: function() {
        try {
            var names = JSON.parse(localStorage.names);
        } catch (err) {

            var names = [];
        }
        return names;
    },
    // stringify + Write
    write: function(names) {
        try {
            localStorage.names = JSON.stringify(names);
        } catch (err) {
            console.log(err);
        };
    }
};

function addName() {
    var newName = $('.newName').val();
    $('.newName').val('');

    var names = NamesStorage.get(); // We read and parse it at the same time by NamesStorage.get();

    //modify
    names.push(newName);

    NamesStorage.write(names); // We stringify and write at the smae time by NamesStorage.write();

    initializeNameList();

}
