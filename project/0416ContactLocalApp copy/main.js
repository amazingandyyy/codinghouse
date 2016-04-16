'use strict'

$(document).ready(init);
var namesList;
var $collectionUl;
var filteredList;

$('#addBtn').click(addBtnClick)

function init() {
    setTimeout(removeLoaderThenRender, 800);
    // renderList()
    var $addContactForm = $('.addContactForm')

    $addContactForm.submit(addContactFormSubmitted);
}

function addBtnClick() {
    $('#addContactForm').openModal();
}

function addContactFormSubmitted(e) {
    e.preventDefault();
    $('#addContactForm').closeModal();
    var contacts = Storage.get();
    var $name = $('#name').val(),
        $phone = $('#phone').val(),
        $image = $('#image').val(),
        $address = $('#address').val(),
        $email = $('#email').val();
    console.log('submit: ', $name, $phone, $image, $address, $email);

    contacts.push({
        "name": `${$name}`,
        "phone": `${$phone}`,
        "image": `${$image || "https://lh3.googleusercontent.com/-AG5ctFbtAD0/AAAAAAAAAAI/AAAAAAAAAAA/GRcS1uVakTg/photo.jpg"}`,
        "address": `${$address}`,
        "email": `${$email}`
    });

    Storage.write(contacts);
    $('input').val();
    $('.collection .collection-item').not('.template').remove();
    renderContacts();
}

var i = 0;

function renderContacts() {
    var contacts = Storage.get();
    var $individual;
    for(i=0;i<contacts.length;i++){
            $individual = $('.template').clone();
            $individual.removeClass('template')
                .find(".name").text(contacts[i].name)
                .find(".phone").text(contacts[i].phone)
                .find(".address").text(contacts[i].address)
                .find(".email").text(contacts[i].email)
                .find(".imgUrl").attr('src', contacts[i].image);
            $('.collection').prepend($individual);
            $('.animationF').addClass('fadeIn');
          }
    console.log(contacts.length);

}



function removeLoaderThenRender(filterMethod) {
    var contacts = Storage.get();
    var $preloader = $('.preloader-wrapper');
    $collectionUl = $('.collection');
    $preloader.remove();

    renderContacts(contacts);
}



// build the mathods
var Storage = {
    get: function() {
        try {
            var contacts = JSON.parse(localStorage.contacts);
            console.log(contacts);
        } catch (err) {
            var contacts = [];
        }
        return contacts;
    },
    write: function(contacts) {
        try {
            localStorage.contacts = JSON.stringify(contacts);
        } catch (error) {
            console.log("JSON Error: ", err);
        };
    }
};
