'use strict'

$(document).ready(init);

function init() {
    var $tower = $('.tower');
    var $topDisk = $('#tower1').find($('.disk')).first();
    var $topDisk2 = $('#tower2').find($('.disk')).first();
    var $topDisk3 = $('#tower3').find($('.disk')).first();
    var $towerContainer = $('.towerContainer');
    $($topDisk).addClass('available');
    $($topDisk2).addClass('available');
    $($topDisk3).addClass('available');

    var $availableDisk = $('.disk.available');
    var $availableTower = $('.tower.available');
    $availableDisk.removeClass('selected').click(availableDiskClick);
    $availableTower.removeClass('selected').click(availableTowerClick);
    $availableDisk.hover(availableDiskHover);
    $tower.hover(towerHover);

    var disk1 = '<div class="disk" id="disk1" data-size="1"></div>';
    var disk2 = '<div class="disk" id="disk2" data-size="2"></div>';
    var disk3 = '<div class="disk" id="disk3" data-size="3"></div>';

    var disk1Size = $('#disk1').data('size');
    var disk2Size = $('#disk2').data('size');
    var disk3Size = $('#disk3').data('size');


}

function availableDiskHover() {
    var $availableDisk = $('.disk.available');
    var $availableDiskParent = $($availableDisk.parent());
    $availableDiskParent.removeClass('available');
    console.log();
}

function towerHover() {
    $(this).toggleClass('available');
}

function availableDiskClick() {
    $($towerContainer).addClass('haveSelectedDisk')
    $('.disk').removeClass('selected');
    $(this).toggleClass('selected');
    aboutAvailable();
    console.log(this);
};

function availableTowerClick() {
    $(this).toggleClass('selected');
    behaviorOfMoving();
};

function aboutAvailable() {
    var $tower = $('.tower');
    var $selectedDisk = $('.disk.available.selected');
    $($tower).addClass('available');
    $($selectedDisk).parent().removeClass('available');
    var $availableTower = $('.tower.available');
    $availableTower.mouseover(availableTowerHover);
}

function availableTowerHover() {
    var $selectedDisk = $('.disk.available.selected');
    var selectedDiskSize = $($selectedDisk).data('size');
    var $topDisk = $(this).find($('.disk'))[0];
    var topDiskSize = $($topDisk).data('size');
    if (selectedDiskSize < topDiskSize) {
        var $availableTower = $('.tower.available');
        $($availableTower).click(behaviorOfMoving);
    } else if (selectedDiskSize > topDiskSize) {
        $(this).removeClass('available');
    }
}

function behaviorOfMoving() {
    var $selectedDisk = $('.disk.available.selected');
    var selectedDiskClass = $($selectedDisk).attr('class');
    var selectedDiskId = $($selectedDisk).attr('id');
    var selectedDiskSize = $($selectedDisk).attr('data-size');
    var buildMovingDisk = `<div class="disk available" id="${selectedDiskId}" data-size="${selectedDiskSize}"></div>`;
    var startingTower = 0;
    var destinedTower = this;
    console.log(buildMovingDisk);
    $(this).prepend(buildMovingDisk);
    $('.disk').removeClass('selected');
}






// http://jsfiddle.net/tovic/mkUJf/
