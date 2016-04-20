'use strict';

var md5 = require('md5');

module.exports = function(params, res){
  var email = params[0];
  console.log('request gravatar of this: ',email);
  var md5Result = md5(email);
  res.write(md5Result);
  // res.write(`${md5(email)}`);
  res.end('\n');
}
