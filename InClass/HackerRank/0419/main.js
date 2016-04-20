function snakeCaser(str) {

  var res = str.split(' ').join('_')
  return res;

//   var res2 = str.replace(/ /g, '_');
// console.log(res2);

}


snakeCaser("I am Andy.")
