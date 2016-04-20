'use strict';

var moment = require('moment');

module.exports = function(params, res) {

  var time = params.shift();
console.log(time);
var input = moment(`${time}`, "YYYY/MM/DD").split('/');
var inputY = input[0];
var inputM = input[1];
var inputD = input[2];

var result = year.split(' ').slice(0,1);
var now = moment().format('YYYY/MM/DD').split('/');
var nowY = now[0];
var nowM = now[1];
var nowD = now[2];

// if(year>nowY){
//   if(nowM<inputM){
//     return
//   }
// }

console.log('now: ',now);
result.push('yrs');
result.push('old');
var result2 = result.join(' ');
console.log('result2: ',result2);
// console.log(result);
  res.end(`${result2}`);


  // var randNum = randNum();
    // console.log('mathURL: ', req.url);
    // res.write(`${randNum}`);
    // res.end('Math!!!!!!\n');
}

function randNum() {
  return ~~(Math.random()*100);
}
