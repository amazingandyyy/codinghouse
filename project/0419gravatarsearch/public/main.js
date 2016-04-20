'use strict';

$(document).ready(init);

function init() {
  $('.clearOut').text('');
    $('form.gravatarForm').submit(gravatarFormSubmitted);
    $('form.analyzerForm').submit(analyzerFormSubmitted);
    $('form.calculatorForm').submit(calculatorFormSubmitted);
    $('form.ageCalculatorForm').submit(ageCalculatorFormSubmitted);
}

function gravatarFormSubmitted(e) {
    e.preventDefault();
    var email = $('.gravatarForm .email').val();
    console.log('Input: ', email);

    $.get(`${email}`)
        .done(function(data) {
            console.log('data: ', data);
            var $newImage = $('.image.template').clone();
            $newImage.removeClass('template');
            $($newImage).attr('src', `http://gravatar.com/avatar/${data}`).addClass('animated bounceIn');
            console.log('$newImage: ',$newImage);
            $('.imageContainer').append($newImage);

        })
        .fail(function(err) {
            console.log('gravatarFormSubmitted err: ',err);
        });
}
function analyzerFormSubmitted(e) {
    e.preventDefault();
    var sentence = $('.analyzerForm .sentence').val();
    console.log('Input sentence: ', sentence);

    $.get(`/sentence/${sentence}`)
        .done(function(data) {
            // console.log('data: ', data);
            console.log('data2: ', data.split('/'));
            var dataArr = data.split('/');
            $('.wCount').text(`${dataArr[0]}`);
            $('.cCount').text(`${dataArr[1]}`);
            $('.aCount').text(`${dataArr[2]}`);
        })
        .fail(function(err) {
            console.log('analyzerFormSubmitted err: ',err);
        });
}
function calculatorFormSubmitted(e) {
    e.preventDefault();
    var input = $('.calculatorForm .input').val();
    console.log('Input calculatorForm: ', input);
    $.get(`${input}`)
        .done(function(data) {
            console.log('data: ', data);
            $('.calculatorAnswer').text(`${data}`);
        })
        .fail(function(err) {
            console.log('calculatorFormSubmitted err: ',err);
        });
}
function ageCalculatorFormSubmitted(e) {
    e.preventDefault();
    var year = $('.ageCalculatorForm .input').val();
    console.log('Input ageCalculatorForm: ', age);

    $.get(`/${year}`)
        .done(function(data) {
            console.log('data: ', data);
            $('.ageCalculatorAnswer').text(`${data}`);
        })
        .fail(function(err) {
            console.log('err: ',err);
        });
}
