'use strict'

$(document).ready(init);
var addBtns;

function init() {

    $('.searchForm').submit(serchSubmitted);
    // $('.searchForm input').keypress(serchSubmitted);
    $('.searchTableBody').on('click', '.add', addIt);
    addBtns = $('.add');
    initializeTrackingList();
    $('.trackingListUl').on('dblclick', '.trackingItem', deleteTrackingItem);
}

function deleteTrackingItem(e) {
  var symbol = $($(this)[0]).find('.symbol')[0].innerText;
  var stocks = Storage.get();
    var index = stocks.indexOf(symbol);
    // console.log(stocks);
    // console.log(index);
    stocks.splice(index, 1)
    Storage.write(stocks);

    initializeTrackingList();
check();
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
            $('.searchTableBody').prepend(result);

            console.log(addBtns.length);
            check(addBtns);
        })
        .fail(function(err) {
            console.error(err);
        });
}

function initializeTrackingList() {
    $('.trackingListUl').empty();
    var stocks = Storage.get();
    stocks.sort();
    // console.log(stocks);
    var companySymbol;
    var result = [];
    for (var i = 0; i < stocks.length; i++) {
        companySymbol = stocks[i];
        // console.log('companySymbol: ', companySymbol);
        $.getJSON(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${companySymbol}&callback=?`, {
            })
            .done(function(data) {
                var trackingItem = renderTrackingList(data).addClass('animated fadeIn');
                // console.log($(trackingItem));
                result.push($(trackingItem));
                $('.trackingListUl').append(result);

            })
            .fail(function(err) {
                console.error('err:', err);
            });
    }

}

function renderTrackingList(data) {
    var buildingTrackingItem = $('.collection-item.trackingItem.template').clone();
    var $trackingItem = buildingTrackingItem.removeClass('template');
    var changepercent = data.ChangePercent.toString().split('').slice(0, 4).join('');
    var change = data.Change.toString().split('').slice(0, 4).join('');
    var changeReault;
    var changePercentResult;
    if (Number(changepercent) > 0) {
        changePercentResult = "+".concat(changepercent).concat('%');
        // $('.trackingItem .changepercent').css('background-color', '#47E167')
    } else {
        changePercentResult = changepercent.concat('%');
        // $('.trackingItem .changepercent').css('background-color', 'red')
    }
    if (Number(change) > 0) {
        changeReault = "+".concat(change).concat('%');
    } else {
        changeReault = change.concat('%');
    }
    $trackingItem.find('.symbol').text(`${data.Symbol}`);
    $trackingItem.find('.changepercent').text(changePercentResult);
    $trackingItem.find('.name').text(`${data.Name}`);
    $trackingItem.find('.high span').text(`${data.High}`);
    $trackingItem.find('.low span').text(`${data.Low}`);
    $trackingItem.find('.change span').text(changeReault);
    $trackingItem.find('.open span').text(`${data.Open}`);
    $trackingItem.find('.close span').text(`${data.LastPrice}`);

    return $trackingItem;
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
    initializeTrackingList();
}


function renderResult(resultObj) {
    var $tr = $('<tr>').attr('data-symbol', `${resultObj.Symbol}`);
    var $th1 = $('<th>').text(`${resultObj.Symbol}`)
    var $th2 = $('<th>').text(`${resultObj.Name}`)
    var $th3 = $('<th>').text(`${resultObj.Exchange}`);
    var $th4 = $('<th>').append($('<i>').addClass('material-icons add').attr('data-symbol', `${resultObj.Symbol}`).attr('id', `${resultObj.Name}`).text('playlist_add'));
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
            stocks.sort();
            // console.log(stocks);
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
