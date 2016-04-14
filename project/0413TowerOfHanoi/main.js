'use strict'

$(document).ready(init);

function init() {
    var $tower = $('.tower');
    var $topDisk = $('#tower1').find($('.disk')).first();
    var $topDisk2 = $('#tower2').find($('.disk')).first();
    var $topDisk3 = $('#tower3').find($('.disk')).first();
    $($topDisk).addClass('available');
    $($topDisk2).addClass('available');
    $($topDisk3).addClass('available');
    console.log($topDisk)
    var $availableDisk = $('.disk.available');
    var $availableTower= $('.tower.available');
    $availableDisk.removeClass('selected').click(availableDiskClick);
    $availableTower.removeClass('selected').click(availableTowerClick);

    var disk1Size = $('#disk1').data('size');
    var disk2Size = $('#disk2').data('size');
    var disk3Size = $('#disk3').data('size');


}
function availableDiskClick() {
  $('.disk').removeClass('selected');
  $(this).toggleClass('selected');
aboutAvailable();
};
function availableTowerClick() {
  $(this).toggleClass('selected');
};

function aboutAvailable() {

  var $tower = $('.tower');
  var $selectedDisk = $('.disk.available.selected');
  $($tower).addClass('available');
  $($selectedDisk).parent().removeClass('available');
  var $availableTower= $('.tower.available');
  $availableTower.mouseover(availableTowerHover);
}

function availableTowerHover() {
  var $selectedDisk = $('.disk.available.selected');
  var selectedDiskSize = $($selectedDisk).data('size');
  var $topDisk = $(this).find($('.disk'))[0];
  var topDiskSize = $($topDisk).data('size');
  if(selectedDiskSize < topDiskSize){
    var $availableTower= $('.tower.available');
    $($availableTower).click(behaviorOfMoving);
  }else if(selectedDiskSize > topDiskSize){
    $(this).removeClass('available');
  }
}

function behaviorOfMoving() {
  var startingDisk = 0;
}






// http://jsfiddle.net/tovic/mkUJf/
