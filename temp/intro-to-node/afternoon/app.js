'use strict';

var fs = require('fs');

console.log('before');





// fs.readFile('./times.json', (err, data) => {
//
//     if (err) {
//         console.log(err);
//         return;
//     }
//     //  RPMSW, CRUD
//     var timeStamp = `${Date.now()}`;
//     var arr = JSON.parse(data);
//     arr.push(timeStamp);
//     var finalArr = JSON.stringify(arr);
//
//     fs.writeFile('./times.json', finalArr, (err) => {
//         if (err) {
//             console.log(err);
//             return; //stop it
//         }
//         console.log('arr: ', arr);
//         console.log('finalArr: ', finalArr);
//     });
// });

fs.readFile('./times.json', (err, data) => {
    if (err) return console.log(err);
    var arr = JSON.parse(data);
    arr.push( Date.now() );
    fs.writeFile('./times.json', JSON.stringify(arr), (err) => {if (err) return console.log(err)});
});


// //1
// if (err) {
//     return console.log(err);
// }
// console.log('arr: ', arr);
//
// if (err) {
//     console.log(err);
//     return; //stop it
// }
// // 2
// console.log('arr: ', arr);
// if (err) {
//     console.log(err);
// }else{
//   console.log('arr: ', arr);
// }
//
// //3***
// if (err) return console.log(err);
// console.log('arr: ', arr);
//
// // 1 = 2 = 3;

//

console.log('after');
