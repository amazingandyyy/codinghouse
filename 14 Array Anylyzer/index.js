function arrayAnalyzer() {
  var result = {};
  var oddsCounts = 0,
      negativesCounts = 0,
      avg,
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
  
  
  alert(medianArrSorted, "odds: "+oddsCounts+", negatives: "+negativesCounts)
}

arrayAnalyzer(-4,-2,0, 2, 4);