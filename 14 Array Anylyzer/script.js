function arrayAnalyzer() {
  var result = {};
  var oddsCounts = 0,
      negativesCounts = 0,
      avg,
      sum = 0,
      median = 0;
  var  medianArr = [];
  
  for (var i=0;i<arguments.length;i++) {
   if(arguments[i]%2 !== 0) {
       oddsCounts += 1
    }
  };
  for (var i=0;i<arguments.length;i++) {
   if(arguments[i] < 0) {
       negativesCounts += 1
    }
  };
  for (var i=0;i<arguments.length;i++) {
     medianArr.push(arguments[i])
  };
  var medianArrSorted = medianArr.sort(function(a, b) {
        return a - b;
  });
  var middle = Math.floor(medianArrSorted.length/2)
  if (medianArrSorted.length % 2) {
        median = medianArrSorted[middle];
    } else {
        median = (medianArrSorted[middle] + medianArrSorted[middle + 1]) / 2.0;
    };
  for (var i=0;i<arguments.length;i++) {
   sum += arguments[i];
  };
  avg = Math.round(sum/arguments.length * 100)/100;
  alert("odds: "+oddsCounts+", negatives: "+negativesCounts+", avg: "+avg+", median: "+median)
}

arrayAnalyzer(7, -3, 0, 12, 44, -5, 3);