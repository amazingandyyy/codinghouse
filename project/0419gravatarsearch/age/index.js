'use strict';

var moment = require('moment');

module.exports = function(params, res) {

  var time = params.shift();
console.log(time);
var year = moment(`${time}`, "YYYYMMDD").fromNow();
var result = year.split(' ').slice(0,1);
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
