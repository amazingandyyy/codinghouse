'use strict';

//0
// let arr = [1,2,3];
// arr.forEach(num => console.log(num));
//
//
// function sum() {
//   console.log(arguments);
//   var sum = Array.prototype.forEach.call(arguments.join(''), function(item){
//     console.log('item:' ,item);
//   }, 0);
//   console.log(sum);
// }
//
//
//
// sum(2,3,4)

//1
// function sum(...nummm){
//   console.log('nums: ', nummm);
// }
//
//
// var result  = sum(3,4,5,6,6,7);
//
// console.log('result: ', result);

//2
// var nums = [1,2,3];
//
// console.log('a', 'b', ...nums, 'c');




// var math = require('./math.js');
// var os = require('os');
// var path = require('path');
const fs = require('fs');

// var sum3 = require('./math.js');
// var a = 'd';

// fs.unlink('/tmp/hello', (err) => {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });

console.log(fs);
// console.log(os.cpus());
// console.log( __dirname + '/newDir');
//
// console.log(path.join('..', 'new/Dir'));

// console.log(sum3(1,2));
// console.log(math.sum(1,2));
