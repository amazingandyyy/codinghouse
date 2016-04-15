'use strict'

$(document).ready(init);
var contactList;
var namesList;
var $collectionUl;

$('#addBtn').click(addBtnClick)
$('.lever').click(leverClick)
$('.orderLeverAZ').click(checkOrderLeverAZlick)

function init() {
    setTimeout(renderList('defaultMethod'), 1200);
}

function addBtnClick() {
    $('#addContactForm').openModal();
}

function checkOrderLeverAZlick() {
    var $li = $('li.collection-item');
    console.log($li.slice(1, $li.length).remove());
    if ($('.lever.active').length == 0) {
        console.log('defaultMethod');
        renderList('defaultMethod')
    } else {
        console.log('orderByAZ');
        renderList('orderByAZ');
    }
}



function renderList(filterMethod) {
    contactList = [];
    var $preloader = $('.preloader-wrapper');
    $collectionUl = $('.collection');
    $preloader.remove();
    namesList = ['Andy', 'Matt', 'Brad', 'Dannis', 'Bruno', 'Alicia', 'Dave', 'David', 'Sumit', 'Sam', 'Robert', 'Micheal'];
    var filteredList;
    if (filterMethod == 'defaultMethod') {
        filteredList = namesList;
        console.log(filteredList);
    } else if (filterMethod == 'orderByAZ') {
        filteredList = namesList.sort();
        console.log(filteredList);
    }
    addOne(filteredList);

}

function leverClick() {
    $('.lever').toggleClass('active');
}


function addOne(filteredList) {
    var $individual = $('.template').clone();
    $individual.removeClass('template').find(".name").text(filteredList[0]);

    // $individual = `<li class="collection-item avatar hoverable">
    //     <img src="https://lh3.googleusercontent.com/-AG5ctFbtAD0/AAAAAAAAAAI/AAAAAAAAAAA/GRcS1uVakTg/photo.jpg" alt="" class="circle">
    //     <span class="title">Title</span>
    //     <p>${names[0]}
    //         <br> Second Line
    //     </p>
    //     <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    //     </li>`;
    $collectionUl.append($individual);
    // $('.animationF').addClass('flipInX');
    // $('.animationF').addClass('zoomIn');
    $('.animationF').addClass('fadeIn');
    filteredList.shift();
    if (filteredList.length) {
        setTimeout(addOne(filteredList), 300);
    }
}
