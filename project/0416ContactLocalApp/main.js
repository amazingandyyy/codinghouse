'use strict'

$(document).ready(init);
var namesList;
var $collectionUl;
var filteredList;
var $personalProfileForm;
var index;
var $templateModal;

function init() {
    setTimeout(removeLoaderThenRender, 300);
    // renderList()
    var $addContactForm = $('.addContactForm');
    $personalProfileForm = $('#personalProfileForm');
    $('#addBtn').click(addBtnClick);
    $('.collection').on('click', '.collection-item', contactSingleClick);
    $('.delete').on('click', '.collection-item', contactSingleClick);
    $('body').on('click', '.trash', trashClicked);

    $addContactForm.on('submit', addContactFormSubmitted);
    // $personalProfileForm.on('click', 'body', personalProfileFormSubmitted);
}

function addBtnClick() {
    $('#addContactForm').openModal();
}

function contactSingleClick() {
    index = $(this).attr('data-index');
    // console.log(index);
    var contacts = Storage.get();
    // var $singleModal = $(`#${index}`);
    $templateModal.find(".personalProfileForm").attr('data-index', `${index}`);

    $personalProfileForm.openModal();
    $personalProfileForm.find("#name").val(contacts[index].name)
    $personalProfileForm.find("#phone").val(contacts[index].phone);
    $personalProfileForm.find("#address").val(contacts[index].address);
    $personalProfileForm.find("#email").val(contacts[index].email);
    $personalProfileForm.find("#imgUrl").val(contacts[index].image);

}

function addContactFormSubmitted(e) {
    // e.preventDefault();
    // console.log(e);
    // debugger;
    $('#addContactForm').closeModal();
    var contacts = Storage.get();
    var $name = $('#name').val(),
        $phone = $('#phone').val(),
        $image = $('#image').val(),
        $address = $('#address').val(),
        $email = $('#email').val();
    // console.log('submit: ', $name, $phone, $image, $address, $email);

    contacts.push({
        "name": `${$name}`,
        "phone": `${$phone}`,
        "image": `${$image || "https://goo.gl/BdsbmU"}`,
        "address": `${$address}`,
        "email": `${$email}`
    });

    Storage.write(contacts);
    $('input').val('');
    $('.collection .collection-item').not('.template').remove();
    renderContacts();
}



function personalProfileFormSubmitted() {
    console.log(index);
    // console.log(index);
    $('#personalProfileForm').openModal();
    var contacts = Storage.get();
    var $targetForm = $(`.templateModal [data-index=${index}]`);
    console.log($targetForm);
    var $name = $targetForm.find('#name').val(),
        $phone = $targetForm.find('#phone').val(),
        $image = $targetForm.find('#image').val(),
        $address = $targetForm.find('#address').val(),
        $email = $targetForm.find('#email').val();
    contacts[index] = {
        "name": `${$name}`,
        "phone": `${$phone}`,
        "image": `${$image || "https://goo.gl/BdsbmU"}`,
        "address": `${$address}`,
        "email": `${$email}`
    };
    Storage.write(contacts);
    console.log(contacts);
}

function trashClicked() {
  console.log(index);
    var contacts = Storage.get();
    contacts.splice(index, 1);
    Storage.write(contacts);
    renderContacts();
}

var i = 0;

function renderContacts() {
    var contacts = Storage.get();
    var $individual;
    for (i = 0; i < contacts.length; i++) {
        // console.log(contacts[2]);
        $individual = $('.template').clone().attr('data-index', `${i}`);
        $individual.removeClass('template');
        $individual.find(".name").text(contacts[i].name)
        $individual.find(".phone").text(contacts[i].phone);
        $individual.find(".address").text(contacts[i].address);
        $individual.find(".email").text(contacts[i].email);
        $individual.find(".imgUrl").attr('src', contacts[i].image);
        $('.collection').prepend($individual);
        $('.animationF').addClass('flipInX');



    };

    $templateModal = $('.templateModal');
    // $individual.removeClass('templateModal');
    $templateModal.find(".trash").attr('data-index', `${i}`);

    $('.collection').prepend($templateModal);
    console.log(contacts.length);

}

function renderContactModals() {}



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
