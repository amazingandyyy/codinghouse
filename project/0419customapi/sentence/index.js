'use strict';


module.exports = function(params, res){
  var word = params[0];
  // console.log('word: ',word);
  var wordArr = word.split('%20');
  // console.log('wordArr: ',wordArr);
  var wCount = wordArr.length;
  // console.log('wCount: ',wCount);
  var cCount = wordArr.join('').length;
  // console.log('cCount: ',cCount);
  var aCount = (cCount/wCount).toString().split('').slice(0,4).join('');
  // console.log('aCount: ',aCount);




  // console.log('wCount: ', wCount);
  // console.log(wCount);
  // console.log(typof word);


  res.write(`${wCount.toString()}/`);
  res.write(`${cCount.toString()}/`);
  res.write(`${aCount.toString()}`);
  res.end('\n');
}
