'use strict'

$(document).ready(init);

function init() {
  var intro = $('.intro')
setTimeout(function(){
  $('.jumbotron').css('display', 'block').addClass('animated fadeIn');
  $('.intro').css('display', 'block').addClass('animated bounceIn');
}, 100)

}
