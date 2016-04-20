'use strict';

module.exports = function(params, res) {
var str = decodeURIComponent(params[0]);
console.log('str: ',str);

  res.write(str);
  res.end('\n');


}
