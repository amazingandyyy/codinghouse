$(document).ready(init);

var answer;
var number;
var $log = $('.log');

function init() {
    $log.html('');
    $('.cups').empty();

    var $start = $('.start');
    // var $cup = $('.cup');

    $start.click(startGame);
    $('.cups').on('click', '.cup', cupSelected);


}


function startGame() {
    $('.cups').empty();
    $log.html('Choose one!').css('color', 'black');

    answer = ~~(Math.random() * 3 + 1);

    for (var i = 1; i < 4; i++) {
        var cup = $('<div>').addClass('cup').attr('data-number', `${i}`);
        $('.container.cups').append(cup);
    }


}


function cupSelected(e) {
    var cupSelectedByuser = e.target;
    console.log(cupSelectedByuser);
    number = $(cupSelectedByuser).attr('data-number');
    result();
}

function result() {
    if (number) {
        if (number == answer) {
            $log.html('You Won! :)').css('color', 'green');
        } else {
            $log.html(`You Lost, it's ${answer}. `).css('color', 'red');
        }
        setTimeout(function() {
            $('.cups').empty();
            $log.html('');
            // Never call init again!!!
        }, 500);
    }

}
