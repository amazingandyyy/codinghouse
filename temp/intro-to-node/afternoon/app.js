'use strict';

var fs = require('fs');

console.log('before');





fs.readFile('./times.json', (err, data) => {

    if (err) {
        console.log(err);
        return;
    }
    //  RPMSW, CRUD
    var timeStamp = `\n${Date.now()}`;
    var arr = JSON.parse(data);
    arr.push(timeStamp);
    var finalArr = JSON.stringify(arr);

    fs.writeFile('./times.json', finalArr, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('arr: ', arr);
        // console.log('arr.length: ', arr.length;
        console.log('finalArr: ', finalArr);
        // console.log('finalArr.length: ', arr.length);

    });
});





//

console.log('after');
