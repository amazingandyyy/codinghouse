'user strict';

$(function() {
    $('.inputForm').submit(getPerson);
    $('.inputForm').submit(getPerson);
    renderPeople();
});

// function renderPeople() {
//     $.ajax({
//         url: 'http://swapi.co/api/people/',
//         success: function(data) {
//             // console.log(data.results);
//             var personArr = [];
//             for (var i = 0; i < data.results.length; i++) {
//                 var personData = data.results[i];
//                 var $person = makePersonCard(personData);
//                 personArr.push($person);
//                 // console.log(personData);
//             }
//             console.log(personArr);
//             $('.people').append(personArr);
//         },
//         error: function(err) {
//             console.log('err: ', err);
//         }
//     });
// }

function renderPeople() {
    $.ajax({
        url: 'http://swapi.co/api/people/?pages=1',
        success: function(data) {
            var personArr = data.results.map(makePersonCard);
            $('.people').append(personArr);
        }
    });
}

function renderPeople() {
    $.ajax({
        url: 'http://swapi.co/api/people/?pages=1',
        success: function(data) {
          console.log(data);
            var personArr = data.results.map(function(personObj) {
              var $card = $('<div>').addClass('card'),
              $name = $('<p>').text(`Name: ${personObj.name}`),
              $birth = $('<p>').text(`Birth: ${personObj.birth_year}`),
              $gender = $('<p>').text(`Gender: ${personObj.gender}`),
              $prev = $('.prev').$('<a>').attr(`src, ${personObj.previous}`),
              $next = $('.next').$('<a>').attr(`src, ${personObj.next}`)
              $card.append($name, $birth, $gender, $prev, $next);
              return $card;
            });
            $('.people').append(personArr);
        }
    });
}
//
// function renderPeople() {
//     $.ajax(url: 'http://swapi.co/api/people/?pages=1')
//         .done(function(data) {
//                 var personArr = data.results.map(makePersonCard);
//                 $('.people').append(personArr);
//             }
//         })
//         .fail(function(err) {
//           console.error(err);
//         })
//         .always(function() {
//
//         });
// }

function renderPeople() {
    // once we start sending a request, promise will be there synchronous. promise is asynchronous, it means also you haven't gotten response, other things will still run, and once it gets response from the server, it will choose to do success/fail;
    var promise = $.ajax('http://swapi.co/api/people/?pages=1');
    promise.done(function(data) {
        console.log(data);
    })
    promise.fail(function(err) {
        console.log(err);
    })
    console.log(promise);
}
function makePersonCard(personObj) {
  var $card = $('<div>').addClass('card'),
  $name = $('<p>').text(`Name: ${personObj.name}`),
  $birth = $('<p>').text(`Birth: ${personObj.birth_year}`),
  $gender = $('<p>').text(`Gender: ${personObj.gender}`)
  $card.append($name, $birth, $gender);
  return $card;
}

function getPerson(e) {
    e.preventDefault();
    var personNumber = $('.numberInput').val();
    console.log(personNumber);
    // make HTTP request
    $.ajax({
        url: `https://swapi.co/api/people/${personNumber}/`,
        success: function(personData) {
            console.log('personData: ', personData);

            var $person = makePersonCard(personData);
            // $person === jQuery object ready to append
            $('.person').append($person);

        },
        error: function(err) {
            console.log('err: ', err);
        }
    });
}
// function name is makePersonCard
// first argument is object with person info.
// return value is jQuery object
