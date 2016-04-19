function snakeCaser(str) {

  var res = str.split(' ').join('_')
  return res;


}


snakeCaser("I am Andy.")
