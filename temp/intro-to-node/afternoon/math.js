'use strict';

console.log('mathdsjflkadladksfjsd');

function sum(a,b){
  return a + b;
}
function five(){
  return 5;
}
function sum3(a,b,c){
  return a + b + c;
}


// var a = 1;
// module.exports = sum3;

//55
module.exports = {
  sum: sum,
  five: five,
  sum3: sum3
};
// // equal
// module.exports = {
//   sum: sum(a,b){
//     return a + b;
//   },
//   five: five(){
//     return 5;
//   },
//   sum3: sum3(a,b,c){
//     return a + b;
//   }
// };

// //equal
// exports.sum = function(a,b){
//    return a + b;
// }
// exports.five = function(){
//    return 5;
// }
// exports.sum3 = function(a,b,c){
//    return a + b + c;
// }
