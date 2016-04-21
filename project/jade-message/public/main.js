'use strict'

$(document).ready(init);

function init() {
    var intro = $('.intro')
    setTimeout(function() {
        $('.jumbotron').css('display', 'block').addClass('animated fadeIn');
        $('.intro').css('display', 'block').addClass('animated bounceIn');
    }, 100)
    $('.messageDiv').submit($('.messageDiv').submit(messageSubmitted))
}

function messageSubmitted() {
    var name = $('.messageDiv .name').val();
    var message = $('messageDiv .message').val(),
        messageUrl = message.split(' ').join('%20');
    var moment = moment().calendar();
    $.get(`/fasd/fasd/afsd`)
}
