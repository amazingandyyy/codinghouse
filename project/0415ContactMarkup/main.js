'use strict'

$(document).ready(init);
var contactList;
var namesList;
var $collectionUl;
var filteredList;

$('#addBtn').click(addBtnClick)

function init() {
    setTimeout(renderList(), 2000);
    var $addContactForm = $('.addContactForm')

    $addContactForm.submit(addContactFormSubmitted)
}

function addBtnClick() {
    $('#addContactForm').openModal();
}

function addContactFormSubmitted(e){
  console.log('d');
   e.preventDefault();
  $('#addContactForm').closeModal();


  var $name = $('#name').val(),
  $phone = $('#phone').val(),
  $image = $('#image').val(),
  $address = $('#address').val(),
  $email = $('#email').val();
  console.log($name,$phone,$image,$address,$email);
  contactList.push({
    "name": `${$name}`,
    "phone": `${$phone}`,
    "image": `${$image || "https://lh3.googleusercontent.com/-AG5ctFbtAD0/AAAAAAAAAAI/AAAAAAAAAAA/GRcS1uVakTg/photo.jpg"}`,
    "address": `${$address}`,
    "email": `${$email}`
  });
  console.log(contactList);
  console.log(contactList.length);
  $('input').val('');
  addOne(contactList);
}

var i = 0;

function addOne(filteredListE) {
    var $individual = $('.template').clone();
    $individual.removeClass('template').find(".name").text(filteredListE[0].name);

    $individual.find(".phone").text(filteredListE[0].phone);
    $individual.find(".address").text(filteredListE[0].address);
    $individual.find(".email").text(filteredListE[0].email);
    $individual.find(".imgUrl").attr('src', filteredListE[0].image);

    $collectionUl.prepend($individual);
    // $('.animationF').addClass('flipInX');
    // $('.animationF').addClass('zoomIn');
    $('.animationF').addClass('flipInX');
    filteredListE.shift();
    console.log(filteredListE.length);
    if (filteredListE.length) {
        setTimeout(addOne(filteredListE), 200);
    };
}

function renderList(filterMethod) {
    contactList = [
      {
          "name": "Andy",
          "phone": "(400) 333-1111",
          "image": "https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xla1/v/t1.0-9/12359881_1509483695732632_5435522206369282949_n.jpg?oh=67d0f8d631cf748c6402e92f90f84e3e&oe=57B28AE3",
          "address": "389 Hacker Rd. CA",
          "email": "example@email.com"
      }, {
          "name": "Matt",
          "phone": "(400) 344-2222",
          "image": "http://assets.nydailynews.com/polopoly_fs/1.1305989.1364938635!/img/httpImage/image.jpg_gen/derivatives/article_970/missing-woman-grand-canyon.jpg",
          "address": "3649 Mile Rd. CA",
          "email": "example222@email.com2"
      }

    ];
    var $preloader = $('.preloader-wrapper');
    $collectionUl = $('.collection');
    $preloader.remove();
    namesList = ['Andy', 'Matt', 'Brad', 'Dannis', 'Bruno', 'Alicia', 'Dave', 'David', 'Sumit', 'Sam', 'Robert', 'Micheal'];
    filteredList = namesList;

    addOne(contactList);
}
