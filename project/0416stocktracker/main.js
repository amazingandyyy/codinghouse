'use strict'

$(document).ready(init);

var addBtns;

function init() {

    $('.searchForm').submit(serchSubmitted);
    // $('.searchForm input').keypress(serchSubmitted);
    $('.searchTableBody').on('click', '.add', addIt);
    addBtns = $('.add');
}


function serchSubmitted(e) {
    $('.searchTableBody').empty();
    e.preventDefault();
    var searchContent = $('.searchForm input').val();
    console.log(searchContent);
    $.getJSON(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${searchContent}&callback=?`, {

        })
        .done(function(data) {
            var result = data.map(renderResult);
            $('.searchTableBody').append(result);

            console.log(addBtns.length);
            check(addBtns);
        })
        .fail(function(err) {
            console.error(err);
        });


}

function check(addBtns) {
    console.log(addBtns);
    // $('.add').removeClass('added');
    var stocks = Storage.get();
    var addBtns = $('.add');
    for (var i = 0; i < addBtns.length; i++) {
        var sumbol = $(addBtns[i]).attr('data-symbol');
        if (stocks.indexOf(sumbol) > -1) {
            $(addBtns[i]).addClass('added');
            // console.log(sumbol, " is exist.");
        } else {
            $(addBtns[i]).removeClass('added');
            // console.log(sumbol, " is not exist.");
        }
    }
}

function renderResult(resultObj) {
    var $tr = $('<tr>').attr('data-symbol', `${resultObj.Symbol}`);
    var $th1 = $('<th>').text(`${resultObj.Symbol}`)
    var $th2 = $('<th>').text(`${resultObj.Name}`)
    var $th3 = $('<th>').text(`${resultObj.Exchange}`);
    var $th4 = $('<th>').append($('<i>').addClass('material-icons add').attr('data-symbol', `${resultObj.Symbol}-${resultObj.Exchange}`).attr('id', `${resultObj.Name}`).text('playlist_add'));
    var stocks = Storage.get();

    $tr.append($th1, $th2, $th3, $th4);
    return $tr;

}

function addIt(e) {
  $('.log').empty();
    var $this = e.target;
    var sumbol = $(this).attr('data-symbol');
    var companyName = $(this).attr('id');
    var stocks = Storage.get();
    console.log('Before: ', stocks);
    var index = stocks.indexOf(sumbol);
    if (index == -1) {
        var newAddLog = $('.logAdd.template').clone();
        $('.log').append(newAddLog);
        console.log(newAddLog);
        newAddLog.find('.message').text(`You successfully add ${companyName}.`);

        $(newAddLog).fadeIn(0).addClass('fadeInUp');

        console.log('Add: ', sumbol);
        $('.add').addClass('added');
        stocks.push(sumbol);

        setTimeout(function() {
          $(newAddLog).addClass('fadeOutRight');
        }, 1000);

    } else {
        var newRemoveLog = $('.logRemove.template').clone();
        $('.log').append(newRemoveLog);
        console.log(newRemoveLog);
        newRemoveLog.find('.message').text(`You remove ${companyName}.`);

        $(newRemoveLog).fadeIn(0).addClass('bounceIn');


        console.log('Remove: ', sumbol);
        $('.add').removeClass('added');
        stocks.splice(index, 1);

        setTimeout(function() {
          $(newRemoveLog).addClass('fadeOutUp');
        }, 1000);

    };
    console.log('After: ', stocks);
    Storage.write(stocks);
    check();
}

var Storage = {
    get: function() {
        try {
            var stocks = JSON.parse(localStorage.stocks);
        } catch (err) {
            var stocks = [];
        }
        return stocks;
    },
    write: function(stocks) {
        try {
            localStorage.stocks = JSON.stringify(stocks);
        } catch (error) {
            console.log("JSON Error: ", err);
        };
    }
};
