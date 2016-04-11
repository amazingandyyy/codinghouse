function wordsReverser(target) {
 var newArr = target.split(/(\W)/);
 var result = [];
  for(var i=0; i<newArr.length; i++) {
    var reservedObj = newArr[i].split('').reverse().join('');
    result.push(reservedObj);
  }
  alert(result.join(''));
}

wordsReverser("This is fun, hopefully.");