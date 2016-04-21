'use strict'

$(document).ready(init);

function init() {
    var intro = $('.intro')
    setTimeout(function() {
        $('.jumbotron').css('display', 'block').addClass('animated fadeIn');
        $('.intro').css('display', 'block').addClass('animated bounceIn');
    }, 100)
    $('.messageDiv').submit($('.messageDiv').submit(messageSubmitted));
    $('.themeE').click(themeEClicked)
}

function themeEClicked() {
  var theme = $(this).text().toLowerCase();
  console.log('theme: ',theme);
  $.get(`theme?${theme}`)
      .done(function(data) {
          console.log('data: ', data);
          // window.open(`http://localhost:8000/post`)
          // var html = $('html');
          // html.empty().prepend(data);
          // window.location.replace(`/theme/${data}`);
          // var dataArr = data.split(',');
          // var name = dataArr[0];
          // var message = dataArr[1];
          // console.log('name: ', name);
          // console.log('message: ', message);


          // var $newImage = $('.image.template').clone();
          // $newImage.removeClass('template');
          // $($newImage).attr('src', `http://gravatar.com/avatar/${data}`).addClass('animated bounceIn');
          // console.log('$newImage: ', $newImage);
          // $('.imageContainerR').append($newImage);

      })
      .fail(function(err) {
          console.log('gravatarFormSubmitted err: ', err);
      });
}

function messageSubmitted(e) {
    e.preventDefault();
    var name = $('.messageDiv .name').val();
    console.log('name: ', name);
    var message = $('.messageDiv .message').val();
    console.log('message: ', message);
    var messageUrl = message.split(' ').join('%20');
    // console.log('messageUrl: ', messageUrl);
    // var moment = moment().calendar();
    $.get(`/send?name=${name}&&message=${message}`)
        .done(function(data) {
            console.log('data: ', data);
            var dataArr = data.split(',');
            var name = dataArr[0];
            var message = dataArr[1];
            console.log('name: ', name);
            console.log('message: ', message);


            // var $newImage = $('.image.template').clone();
            // $newImage.removeClass('template');
            // $($newImage).attr('src', `http://gravatar.com/avatar/${data}`).addClass('animated bounceIn');
            // console.log('$newImage: ', $newImage);
            // $('.imageContainerR').append($newImage);

        })
        .fail(function(err) {
            console.log('gravatarFormSubmitted err: ', err);
        });
}
