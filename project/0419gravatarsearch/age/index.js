'use strict';

module.exports = function(params, res) {

  // console.log(urlArr);

  var operation = params.shift();
  // console.log(operation);
  switch (operation) {
    case 'sum':
        var sum = require('./sum')(params);
        res.write(`${sum}`);
      break;
  }
  res.end('\n');


  // var randNum = randNum();
    // console.log('mathURL: ', req.url);
    // res.write(`${randNum}`);
    // res.end('Math!!!!!!\n');
}

function randNum() {
  return ~~(Math.random()*100);
}
