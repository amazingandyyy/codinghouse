'use strict'

$(document).ready(init);

function init() {
    var $disk = $('.disk');
    var $towerHandler = $('.handler');
    // $($disk).hover(elementLog);
    $($disk).click(diskSelected);
    // $($towerHandler).hover(elementLog);
    $($towerHandler).click(handlerClick);

}

function elementLog() {
    var thisElement = $(this);
    var thisElementParent = $(thisElement).parent();
    console.log('element is:', thisElement);
    console.log('parent is:', thisElementParent);
}

function diskSelected() {
    $('.disk').removeClass('selected');
    var $this = $(this);
    var $parent = $(this).parent();
    var $smallesSize = $($parent).find('.sizeScope').first();
    var $smalledSizeV = $($smallesSize).data('size');
    var diskSelectedSize = $($this).data('size');
    console.log(diskSelectedSize);
    if(diskSelectedSize>$smalledSizeV){
      $('.disk').removeClass('selected');
    }else if(diskSelectedSize ==$smalledSizeV){
      $(this).addClass('selected');
    }
    console.log('smallest: ',$smalledSizeV);

}

function handlerClick() {
    var thisHandler = $(this);
    var thisHandlerParent = $(thisHandler).parent();
    var $theLargestDisk = $(thisHandlerParent).find('.sizeScope').first();
    var theLargestSize = $($theLargestDisk).data('size');
    var $selectedDisk = $('.disk.selected');
    var selectedDiskSize = $($selectedDisk).data('size');
    var selectedDiskParent = $selectedDisk.parent();


    console.log(selectedDiskSize, theLargestSize);
    if (selectedDiskSize < theLargestSize) {
        function moving(start, destination) {

            var startTower = start[0].id;
            var destinationTower = destination[0].id;
            var $selectedDiskForMove = $('.disk.selected').removeClass('selected');
            var disk1  = $(`#${startTower}`).find('div').first().remove();
                $(`#${destinationTower}`).prepend(disk1);

            // if (selectedDiskSize === 1) {
            //   var disk1 = $('<div class="disk sizeScope" id="disk1" data-size="1"></div>').click(diskSelected);
            //     $(`#${destinationTower}`).prepend(disk1);
            // } else if (selectedDiskSize === 2) {
            //   var disk2 = $('<div class="disk sizeScope" id="disk2" data-size="2"></div>').click(diskSelected);;
            //
            //     $(`#${destinationTower}`).prepend(disk2);
            // } else if (selectedDiskSize === 3) {
            //   var disk3 = $('<div class="disk sizeScope" id="disk3" data-size="3"></div>').click(diskSelected);;
            //
            //     $(`#${destinationTower}`).prepend(disk3);
            // }
            console.log(selectedDiskSize);
        }
        moving(selectedDiskParent, thisHandlerParent)
    } else {
        console.log('can not move');
    }

}
