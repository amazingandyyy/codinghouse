'use strict';

var fs = require('fs');

asynchronous, the method will not run until the data is been read
console.log('before');
fs.readFile('./test.txt', (err, data) => {
    if (err) {
      console.log('err: ', err);
    }
    console.log(data.toString());
});
console.log('after');




// synchronous, it will wait reading to finish, or it do nothing
// console.log('before');
// var data = fs.readFileSync('./test.txt');
//
// var str = data.doIt();
//
// function doIt(err, data){
//     if (err) {
//       console.log('err: ', err);
//     }
//     console.log(data.toString());
// }
// console.log('after');







//asynchronous sample: .forEach, .map...




// //case1 synchronous: setTimeout
// console.log('before');
// setTimeout(function(){
//   console.log('done');
// }, 0);
// console.log('after');
// // => return before,after, done;
//
//
// //case 2
// console.log('before');
//
// setTimeout(add());
// function add(){
//   console.log('done');
// };
// console.log('after');
// // => return before, done, after;
