'use strict';

$(document).ready(init);

function init() {
    $('form.gravatarForm').submit(gravatarFormSubmitted);
    $('form.analyzerForm').submit(analyzerFormSubmitted);
    $('form.calculatorForm').submit(calculatorFormSubmitted);
    $('form.ageCalculatorForm').submit(ageCalculatorFormSubmitted);
}

function gravatarFormSubmitted(e) {
    e.preventDefault();
    var email = $('.gravatarForm .email').val();
    console.log('Input: ', email);

    $.get(`/gravatar/${email}`)
        .done(function(data) {
            console.log('data: ', data);
            var $newImage = $('.image.template').clone();
            $newImage.removeClass('template');
            $($newImage).attr('src', `http://gravatar.com/avatar/${data}`);
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
            console.log('data: ', data);
            // $('.wCount').text(`${data[wCount]}`);
            // $('.cCount').text(`${data[cCount]}`);
            // $('.aCount').text(`${data[aCount]}`);
        })
        .fail(function(err) {
            console.log('analyzerFormSubmitted err: ',err);
        });
}
function calculatorFormSubmitted(e) {
    e.preventDefault();
    var num1 = $('.calculatorForm .number1').val();
    var num2 = $('.calculatorForm .number2').val();
    console.log('Input calculatorForm: ', number1, number2);
    var behavior =  $(e.target).attr('data-bahavior');
    console.log('behavior: ', behavior);
    $.get(`/math/${behavior}/${num1}/${num2}`)
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
    var year = $('.ageCalculatorForm .age').val();
    console.log('Input ageCalculatorForm: ', age);

    $.get(`/age/${year}`)
        .done(function(data) {
            console.log('data: ', data);
            $('.ageCalculatorAnswer').text(`${data}`);
        })
        .fail(function(err) {
            console.log('err: ',err);
        });
}
