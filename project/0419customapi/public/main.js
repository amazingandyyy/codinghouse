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
            console.log('$newImage: ', $newImage);
            $('.imageContainerR').append($newImage);

        })
        .fail(function(err) {
            console.log('gravatarFormSubmitted err: ', err);
        });
}

function analyzerFormSubmitted(e) {
    $('.analyzerContainer').addClass('hidden')
    e.preventDefault();
    var sentence = $('.analyzerForm .sentence').val();
    console.log('Input sentence: ', sentence);

    $.get(`${sentence}`)
        .done(function(data) {
            // console.log('data: ', data);
            console.log('data2: ', data.split('/'));
            var dataArr = data.split('/');
            $('.wCount').text(`${dataArr[0]}`);
            $('.cCount').text(`${dataArr[1]}`);
            $('.aCount').text(`${dataArr[2]}`);
            $('.analyzerContainer.hidden').removeClass('hidden')
        })
        .fail(function(err) {
            console.log('analyzerFormSubmitted err: ', err);
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
            $('.calculatorForm0.sample').removeClass('bounceInUp').addClass('animated bounceOutDown');

            setTimeout(function() {
                $('.calculatorForm0.sample').removeClass('bounceOutDown').addClass('bounceInUp');
            }, 1800);
            setTimeout(function() {
                $('.calculatorAnswer').text('');
            }, 2000);

        })
        .fail(function(err) {
            console.log('calculatorFormSubmitted err: ', err);
        });
}

function ageCalculatorFormSubmitted(e) {
    e.preventDefault();
    var year = $('.ageCalculatorForm .input').val();
    console.log('Input ageCalculatorForm: ', year);

    $.get(`${year}`)
        .done(function(data) {
            console.log('data: ', data);
            $('.ageCalculatorAnswer').text(`${data}`).addClass('animated bounceIn');
            setTimeout(function() {
                $('.calculatorForm0.sample').removeClass('animated bounceIn');
            }, 1000);
        })
        .fail(function(err) {
            console.log('err: ', err);
        });
}
