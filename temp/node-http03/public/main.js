'use strict';

console.log('successful');

document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName('h1')[0].textContent = "IT WORKS!!";
    $('button#getPower').click(getPower);
})



function getPower() {
    var base = $('#base').val();
    var exponent = $('#exponent').val();

    $.get(`/math/pow/${base}/${exponent}`)
        .done(function(data) {
          console.log('data: ', data);
        })
    .fail(function(err) {
        console.log(err);
    });


}
